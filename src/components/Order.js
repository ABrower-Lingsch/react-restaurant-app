

function Order({order, id}) {

    const orderList = order.map(({id, name, price}) => (
        <li key={id}>
            <div>{name}</div>
            <div>{price}</div>
        </li>
    ));

  return (
        <ul>
            {orderList}
        </ul>
  )
}

export default Order;
