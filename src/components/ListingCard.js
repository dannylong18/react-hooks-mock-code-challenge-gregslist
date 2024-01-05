import React, { useState } from "react";

function ListingCard( {description, location, image, id, onHandleDelete, obj}) {
  const [isStarFull, setIsStarFull] = useState(false)

  function handleStarClick () {
    setIsStarFull(!isStarFull)
  }

  function handleDeleteClick () { 
    fetch (`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    })
    .then ((r) => r.json())
    .then (() => onHandleDelete(obj))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isStarFull ? (
          <button className="emoji-button favorite active" onClick={handleStarClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleStarClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
