import MenuItem from "./MenuItem";
import {useState} from 'react';
import Order from "./Order";
import { nanoid } from 'nanoid'

const MENU_ITEMS = [
    {name: "Cheese Pizza", price: "$10.00", pizza: true, id: 1},
    {name: "Pepperoni Pizza", price: "$15.00", pizza: true, id: 2},
    {name: "Margherita Pizza", price: "$18.00", pizza: true, id: 3},
    {name: "Meat Lover's Pizza", price: "$18.00", pizza: true, id: 4},
    {name: "Hawaiian Pizza", price: "$18.00", pizza: true, id: 5},
    {name: "Cheese Calzone", price: "$10.00", calzone: true, id: 6},
    {name: "Pepperoni Calzone", price: "$15.00", calzone: true, id: 7},
    {name: "Meat Lover's Calzone", price: "$18.00", calzone: true, id: 8},
    {name: "Grilled BBQ Calzone", price: "$18.00", calzone: true, id: 9},
    {name: "Philly Cheese Steak Calzone", price: "$18.00", calzone: true, id: 10},
    {name: "Bread Sticks (small)", price: "$5.00", side: true, id: 11},
    {name: "Bread Sticks (large)", price: "$8.00", side: true, id: 12},
    {name: "Garlic Bread", price: "$5.00", side: true, id: 13},
    {name: "Ceaser Salad", price: "$5.00", side: true, id: 14},
    {name: "House Salad", price: "$5.00", side: true, id: 15},
  ];

const orderItems = []; 

function MenuList() {

    const [items, setItems] = useState(MENU_ITEMS);

    const [order, setOrder] = useState(orderItems);

    const addOrderItem = (newItem) => {
        setOrder([...order, newItem]);
    }

    const handleClick = (userId) => {
        console.log(userId)
        const newOrderItem = {
            id: nanoid(),
            name: userId.name,
            price: userId.price,
        }


        addOrderItem(newOrderItem);
        
    };


  return (
    <>
      <MenuItem items={items} handleClick={handleClick}/>
      <Order order={order} items={items} />
    </>
  );
}

export default MenuList;
