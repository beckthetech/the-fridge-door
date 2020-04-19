import React from 'react';
import GearListItem from '../../components/GearListItem/GearListItem';

import './ItemListPage.css'

function ItemListPage(props) {
    return (
        <>
            <h1 className="marketplace-title">EquipT</h1>
            <h4 className="marketplace-copy">A marketplace for buying and selling Audio and Video production equipment</h4>
            <br />
            <br />
            <div className='GearListPage-grid'>
                {props.items.map(item =>
                    <GearListItem item={item} key={item._id}/>
                )}
            </div>
        </>
    );
}

export default ItemListPage;