import React from 'react';
import { connect } from "react-redux";

const SearchResult = ({ book }) => {
  
    const {imageLinks, title, authors, publisher} = book;
    let displayTitle = title;
              
    // If book title is over 9 words, display shortned title
    if (title.split(" ").length > 9) {
      displayTitle = title.split(" ").slice(0, 9).join(" ") + "...";
    }

  return (
    <div className="res-cont">
      <div className="img-cont text-center">
        <img className="res-cover" src={imageLinks.thumbnail} alt="cover"/>
      </div>
      <h5 className="res-title">{displayTitle}</h5>
      <p className="text-muted">{authors ? authors[0] : publisher}</p>
      <button class="res-btn">
        <h5 className="mb-0">Add To List</h5>
      </button>
    </div>
  )
}

export default connect(null, {})(SearchResult)