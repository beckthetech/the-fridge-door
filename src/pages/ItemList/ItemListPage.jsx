import React from 'react';
import GearListItem from '../../components/GearListItem/GearListItem';

function ItemListPage(props) {
    return (
        <>
            <h1>Gear List</h1>
            <div>
                {props.items.map(item =>
                    <GearListItem item={item} key={item._id}/>
                )}
            </div>
        </>
    );
}

export default ItemListPage;