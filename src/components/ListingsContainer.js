import React from "react";
// import ListingCard from "./ListingCard";
import ListingCard from './ListingCard';

function ListingsContainer( {listings, onDeleteItem}) {

  const displayedListings = listings.map((obj) => {
    return (
        <ListingCard 
        key={obj.id} 
        id={obj.id}
        obj={obj} 
        description={obj.description} 
        location={obj.location} 
        image={obj.image}
        onHandleDelete={onDeleteItem}
        />
    )
  })

  return (
    <main>
      <ul className="cards">
        {displayedListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
