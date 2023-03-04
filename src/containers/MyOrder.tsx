import React, {useContext} from 'react'
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';
import AppContext from '../context/AppContext';
import { Product } from '../hooks/useGetProducts';
import flechita from '../assets/icons/flechita.svg';
const MyOrder = () => {
  const { state } = useContext(AppContext) as any;

  const sumTotal = () => {
    const reducer = (accumulator: any, currentValue: Product) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <aside className="MyOrder">
        <div className="title-container">
            <img src={flechita} alt="arrow" />
            <p className="title">My order</p>
        </div>
        <div className="my-order-content">
            {state.cart.map((item: Product) => (
                <OrderItem key={`orderItem-${item.id}`} product={item}/>
            ))}
            <div className="order">
                <p>
                    <span>Total</span>
                </p>
                <p>${sumTotal()}</p>
            </div>
            <button className="primary-button">
                Checkout
            </button>
        </div>
    </aside>
  )
}

export default MyOrder