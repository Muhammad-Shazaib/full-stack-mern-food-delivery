import React, { useState, useContext, useEffect } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } },
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return;
  <div className="my-orders">
    <h2>My Orders</h2>
    <div className="container">
      {data.map((order, index) => {
        return (
          <div key={index} className="my-order-order">
            <img src={assets.parcel_icon} alt="" />
            <p>
              {order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + " x " + item.quantity;
                } else {
                  return item.name + " x " + item.quantity + ", ";
                }
              })}
            </p>
            <P>${order.amount}.00</P>
            <P>Items: {order.items.length}</P>
            <p><span>8#x25cf</span> <b/>{}</p>
          </div>
        );
      })}
    </div>
  </div>;
};

export default MyOrders;
