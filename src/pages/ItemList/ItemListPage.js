import React from 'react';
import GroceryItem from '../../components/GroceryItem/GroceryItem'

function ItemListPage(props) {
    return (
        <>
            <h1>Grocery List</h1>
            <div>
                {props.items.map(item =>
                    <GroceryItem item={item} key={item._id}/>
                )}
            </div>
        </>
    );
}

export default ItemListPage;