

function Order({order, id, totalPrice}) {

    const orderList = order.map(({id, name, price}) => (
        <li key={id}>
            <div>{name}</div>
            <div>{price}</div>
        </li>
    ));

  return (
    <>
        <ul>
            {orderList}
        </ul>
        <div>${totalPrice}.00</div>
    </>
  )
}

export default Order;
