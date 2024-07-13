import React, { useEffect,useState } from 'react'

import StoreItem from './StoreItem';

const StoreComponent = ({isCheck,onTotalChange,cartItems}) => {

    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckBox = (checked) => {
      setIsChecked(checked);
    }
    const handleChange  = (quantity,price) => {
      setQuantity(quantity);
      setPrice(price);
    };

    useEffect(()=>{
        onTotalChange(quantity,price);
    },[quantity,price,onTotalChange]);

    // Group cart items by store_id
  const groupByStore = (items) => {
    return items.reduce((groups, item) => {
      const storeId = item.store.store_id;
      if (!groups[storeId]) {
        groups[storeId] = [];
      }
      groups[storeId].push(item);
      return groups;
    }, {});
  };
  // const groupByProduct = (items) => {
  //   return items.reduce((groups, item) => {
  //     const productId = item.product.product_id;
  //     if (!groups[productId]) {
  //       groups[productId] = { ...item, totalQuantity: item.cart_quantity };
  //     } else {
  //       groups[productId].totalQuantity += item.cart_quantity;
  //     }
  //     return groups;
  //   }, {});
  // };

  

  const groupedCartItems = groupByStore(cartItems);
  
  
  // const groupByStoreAndProduct = (items) => {
  //   return items.reduce((groups, item) => {
  //     const storeId = item.store.store_id;
  //     const productId = item.product.product_id;
  //     const key = `${storeId}-${productId}`;

  //     if (!groups[key]) {
  //       groups[key] = {
  //         storeId: storeId,
  //         productId: productId,
  //         storeName: item.store.store_name,
  //         totalQuantity: item.cart_quantity,
  //         items: [item],
  //       };
  //     } else {
  //       groups[key].totalQuantity += item.cart_quantity;
  //       groups[key].items.push(item);
  //     }
  //     return groups;
  //   }, {});
  // };
  // const groupedCartItems = groupByStoreAndProduct(cartItems);


  return (
    <div>
      {Object.keys(groupedCartItems).map((storeId) =>(
        <div key={storeId} className="bg-white rounded-xl">
          <div className="flex gap-5 my-3 py-3 px-5">
            <div className="">
              <input  
              type="checkbox"
              checked={isChecked}
              onChange={(e) => handleCheckBox(e.target.checked)}
              />
            </div>
            <div className="font-bold">{groupedCartItems[storeId][0].store.store_name}</div>
          </div>
          {groupedCartItems[storeId].map((item) => (
            <StoreItem
              key={item.id} // Assuming each cart item has a unique ID
              isCheck={isCheck}
              onChange={handleCheckBox}
              onTotalChange={handleChange}
              item={item}// Pass the individual item to StoreItem
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default StoreComponent;
