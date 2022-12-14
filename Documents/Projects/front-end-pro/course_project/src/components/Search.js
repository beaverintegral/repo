import React from 'react'

function Search() {
  return (
    <>
      <div className="search-form-wrapper">
        <svg
          className="search-form_icon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
        >
          <path
            stroke="#32313A"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M7.5 14a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM18 18l-6-5"
          />
        </svg>
        <input
          type="text"
          name="search"
          placeholder="Search for..."
          className="search-form"
        />
      </div>
    </>
  )
}

export default Search
