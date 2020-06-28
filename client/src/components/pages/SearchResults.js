import React from 'react';
import { connect } from "react-redux";
import SearchResult from "../books/SearchResult";

const SearchResults = ({ search: {searchResults, searchWord} }) => {
  return (
    <div>
      <div className="container sr-cont">
        <h2>Search for "{searchWord}"</h2>
        <div className="results-wrapper">
          {searchResults && searchResults.map(book => (
            <SearchResult key={book.id} book={book.volumeInfo}/>
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
