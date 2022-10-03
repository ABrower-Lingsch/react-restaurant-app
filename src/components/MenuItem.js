import { useState } from "react";

const FILTER_OPTIONS = {
    all: (items) => items,
    pizzas: (items) => items.pizza,
    calzones: (items) => items.calzone,
    sides: (items) => items.side
}

function MenuItem({items, handleClick}) {

    const [filter, setFilter] = useState('all');
    
    const listItems = items.filter(FILTER_OPTIONS[filter]).map(({name, price, id}) => (
        <li key={id}>
            <div>{name}</div>
            <div>{price}</div>
            <button type='button' onClick={() => handleClick(items[id - 1])}>Add To Order</button>
        </li>
    ));


  return (
    <>
        <button type="button" onClick={() => setFilter('all')}>All</button>
        <button type="button" onClick={() => setFilter('pizzas')}>Pizzas</button>
        <button type="button" onClick={() => setFilter('calzones')}>Calzones</button>
        <button type="button" onClick={() => setFilter('sides')}>Sides</button>
        <ul>
            {listItems}
        </ul>
    </>
  )
};

export default MenuItem;
