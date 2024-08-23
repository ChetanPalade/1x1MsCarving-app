import React from "react";
import { ListGroupItem } from "reactstrap";
import { useNavigate } from "react-router-dom";

import "../../../styles/cart-item.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const CartItem = ({ item, onClose }) => {
  const { id, title, price, image01,quantity} = item;
  let navigate = useNavigate(); 

  const dispatch = useDispatch();

  const incrementItem = (event) => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
        quantity
      })
    );
    event.stopPropagation();
  };

  const decreaseItem = (event) => {
    dispatch(cartActions.removeItem(id));
    event.stopPropagation();
  };

  const deleteItem = (event) => {
    dispatch(cartActions.deleteItem(id));
    event.stopPropagation();
  };

  const handleBookingFormSelection = () =>  {
    navigate(`/bookingForm/${id}`);
    onClose(); 
  }

  return (
    <ListGroupItem className="border-0 cart_item" onClick={handleBookingFormSelection}>
      <div className="cart_item-info d-flex gap-4">
        <img src={image01} alt="product-img" />

        <div className="cart_product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart_product-title">{title}</h6>
            <p className=" d-flex align-items-center gap-5 cart_product-price">
              {quantity}x <span>${price}</span>
            </p>
            <div className="d-flex flex-column">
              </div>
            <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase_btn" onClick={event => incrementItem(event)}>
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease_btn" onClick={event => decreaseItem(event)}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span className="delete_btn" onClick={event => deleteItem(event)}>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;