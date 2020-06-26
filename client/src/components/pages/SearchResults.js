import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

const SearchResults = ({ search: {searchResults, searchWord} }) => {
  return (
    <div>
      <div className="container sr-cont">
        <h2>Search for "{searchWord}"</h2>
        <div className="results-wrapper">
            {searchResults && searchResults.map(book => {
              const {imageLinks, title, authors, publisher} = book.volumeInfo;
              
              let displayTitle = "";

              // If book title is over 9 words, display shortned title
              if (title.split(" ").length > 9) {
                displayTitle = title.split(" ").slice(0, 9).join(" ") + "...";
              } else {
                displayTitle = title;
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
            })}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  search: state.search
})

export default connect(mapStateToProps, {})(SearchResults)
