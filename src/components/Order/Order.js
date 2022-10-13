import { useState } from "react";

function Order({ order, removeFromOrder, submitOrder }) {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");

  const orderList = order.map(({ name, price, qty }) => (
    <li key={name}>
      <div>{name}</div>
      <div>{qty}</div>
      <div>${(price * qty).toFixed(2)}</div>
      <button type="button" onClick={() => removeFromOrder(name)}>
        Remove from order
      </button>
    </li>
  ));

  const subTotal = order
    .map((item) => item.price * item.qty)
    .reduce((acc, i) => acc + i, 0);

  return (
    <>
      <ul>{orderList}</ul>
      <p>${subTotal.toFixed(2)}</p>
      <input
        type="text"
        placeholder="Enter last name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Enter telephone number"
        onChange={(e) => setTelephone(e.target.value)}
      />
      <button type="button" onClick={() => submitOrder({ name, telephone })}>
        Submit order
      </button>
    </>
  );
}

export default Order;
