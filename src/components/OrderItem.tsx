import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Product } from '../hooks/useGetProducts';
import '../styles/components/OrderItem.scss';

interface IProps {
  product: Product;
}

const OrderItem = ({ product }: IProps) => {
  const { removeFromCart } = useContext(AppContext) as any;
  const handleRemove = (product: Product) => {
    removeFromCart(product);
  }
  return (
    <div className="shopping-cart">
        <figure>
            <img src={product.images[0]} alt={product.title} />
        </figure>
        <p>{product.title}</p>
        <p>${product.price}</p>
        <img src="./icons/icon_close.png" alt="close" onClick={() => handleRemove(product) as any}/>
    </div>
  )
}

export default OrderItem;