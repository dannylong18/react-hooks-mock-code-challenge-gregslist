import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetch ('http://localhost:6001/listings')
    .then (r => r.json())
    .then (data => {
      setListings(data)
    })
  }, [])

  function handleDeleteItem (deletedItem) {
    const updatedListings = listings.filter((item) => item.id !== deletedItem.id);
  setListings(updatedListings);
  }

  function handleSearch (query) {
    setSearchQuery(query)
  }

  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <ListingsContainer listings={listings.filter(item => item.description.toLowerCase().includes(searchQuery.toLowerCase()))} 
      onDeleteItem={handleDeleteItem}/>
    </div>
  );
}

export default App;
