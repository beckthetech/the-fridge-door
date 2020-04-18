import React from 'react';
import GearListItem from '../../components/GearListItem/GearListItem';

import './ItemListPage.css'

function ItemListPage(props) {
    return (
        <>
            <h1 className="marketplace-title">Get EquipT</h1>
            <div className='GearListPage-grid'>
                {props.items.map(item =>
                    <GearListItem item={item} key={item._id}/>
                )}
            </div>
        </>
    );
}

export default ItemListPage;