import React from 'react';
import ItemCard from '../../components/ItemCard/ItemCard';
import { Link } from 'react-router-dom';

function ItemDetailPage(props) {
  const item = props.location.state.item;
  return (
    <>
      <h1>Item Details</h1>
      <ItemCard
        key={item._id}
        item={item}
        user={props.user}
        handleDeleteItem={props.handleDeleteItem}
      />
      <div><Link to='/'>RETURN TO ALL GEAR</Link></div>
    </>
  );
}

export default ItemDetailPage;