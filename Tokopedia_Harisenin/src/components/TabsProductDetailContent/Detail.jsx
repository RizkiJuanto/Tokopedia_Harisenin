import React, { useEffect, useState } from 'react';
import axiosInstance from "../../axiosInstance";
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`http://localhost:8000/api/products/${id}`);
        setProduct(response.data);
      } catch (e) {
        console.error("Error, ga ke fetch",e);
      }
    };

    if(id)fetchProduct();
  },[id]);

  return (
    <div>
      <div className="text-gray-500">
                <div className="">Kondisi : <span className="text-black">Baru</span></div>
                <div className="">Min. Pemesanan : <span className="text-black">1 Buah</span></div>
                <div className="">Etalase : <span className="text-green-600">Semua Etalase</span></div>
              </div>
              <div className="my-4">
                {product?.product_desc}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officiis tempore iste ipsum beatae in alias, illum mollitia facere, atque nesciunt veritatis deleniti et eum. Saepe corrupti inventore sed fuga voluptatibus! Aperiam deserunt provident at praesentium nemo nulla vitae est itaque placeat beatae, incidunt ipsa fuga, quis laboriosam, nesciunt assumenda sunt odio soluta commodi qui ea corporis laborum sapiente! Voluptatum velit esse non consectetur doloremque molestiae, nihil explicabo vero magni ducimus. Voluptas molestiae vel nemo, harum in excepturi. Error ipsam iure libero ullam nisi autem reprehenderit aut dignissimos in, reiciendis vel exercitationem id quasi eum adipisci voluptas voluptatibus ducimus odio!
              </div>
    </div>
  )
}

export default Detail
