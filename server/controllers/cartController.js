const Cart = require("../models/Cart");
const Product = require("../models/Product");
const Product_detail = require("../models/Product_detail");
const Store = require("../models/Store");


exports.getAllCart = async (req,res) =>{
    try{
        const carts = await Cart.findAll({
            include: [
                {
                    model: Product,
                    attributes: [
                        "product_id", 
                        "product_name", 
                    ],
                    include:[
                        {
                            model: Product_detail,
                            attributes: [
                                "product_detail_id", 
                                "product_image",
                            ]
                        },
                    ],
                },
                {
                    model: Store,
                    attributes: [
                        "store_id", 
                        "store_name"
                    ]
                }
            ]
        });
        res.status(200).json(carts);
    }catch(err){
        console.error(err);
        res.status(500).json({ error: "Failed to fetch carts" });
    }
};


exports.addProductToCart = async (req, res) => {
    const { product_id, store_id, cart_quantity, cart_total } = req.body;

    try {
        const store = await Store.findByPk(store_id);
        if (!store) {
            return res.status(404).json({ error: "Store not found" });
        }

        const product = await Product.findByPk(product_id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        const cart = await Cart.create({
            cart_quantity: cart_quantity || 1,
            cart_total: cart_total || 0,
            product_id,
            store_id
        });

        res.status(201).json(cart);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to add product to cart" });
    }
}

exports.addDummyData = async (req, res) => {
    try {
        const dummyData = [
            {
                product_id: 1,
                store_id: 1,
                cart_quantity: 2,
                cart_total: 50000
            },
            {
                product_id: 2,
                store_id: 2,
                cart_quantity: 1,
                cart_total: 150000
            },
            {
                product_id: 3,
                store_id: 3,
                cart_quantity: 3,
                cart_total: 30000
            }
        ];

        const createdCarts = [];

        for (const data of dummyData) {
            const store = await Store.findByPk(data.store_id);
            if (!store) {
                return res.status(404).json({ error: `Store with ID ${data.store_id} not found` });
            }

            const product = await Product.findByPk(data.product_id);
            if (!product) {
                return res.status(404).json({ error: `Product with ID ${data.product_id} not found` });
            }

            const cart = await Cart.create({
                cart_quantity: data.cart_quantity,
                cart_total: data.cart_total,
                product_id: data.product_id,
                store_id: data.store_id
            });

            createdCarts.push(cart);
        }

        res.status(201).json(createdCarts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to add dummy data to cart" });
    }
}
    
