import React, { useContext } from 'react'
import '../styles/components/ProductItem.scss';
import { Product } from '../hooks/useGetProducts';
import iconCart from "@icons/bt_add_to_cart.svg";
import AppContext from '../context/AppContext';

export interface IProductItemProps {
  product: Product
}

const ProductItem = ({ product }: IProductItemProps) => {

  const { addToCart } = useContext(AppContext) as any;
  
  const handleClick = (item: Product) => {
    addToCart(item);
  }
  return (
    <div className="ProductItem">
        <img src={product.images[0]} alt={product.title} />
        <div className="product-info">
            <div>
            <p>${product.price}</p>
            <p>{product.title}</p>
            </div>
            <figure onClick={() => handleClick(product) as any}>
                 <img src={iconCart} alt="Icono carrito" />
            </figure>
        </div>
    </div>
  )
}

export default ProductItem