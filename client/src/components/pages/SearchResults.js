import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

const SearchResults = ({ search: {searchResults, searchWord} }) => {
  return (
    <div>
      <div className="container sr-cont">
        <h2>Search for "{searchWord}"</h2>
        <div className="results-wrapper">
            {searchResults && searchResults.map(book => (
            <div className="res-cont">
              <div className="img-cont text-center">
                <img className="res-cover" src={book.volumeInfo.imageLinks.thumbnail} alt="cover"/>
              </div>
              <h5>{book.volumeInfo.title}</h5>
              <p className="text-muted">{book.volumeInfo.authors ? book.volumeInfo.authors[0] : book.volumeInfo.publisher}</p>
              <button class="res-btn">Add to Wish List</button>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  search: state.search
})

export default connect(mapStateToProps, {})(SearchResults)
