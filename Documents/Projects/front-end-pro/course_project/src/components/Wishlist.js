import React from 'react'

function Wishlist({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      fill="none"
    >
      <path
        stroke="current"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.6"
        d="M17.367 2.842a4.583 4.583 0 0 0-6.483 0L10 3.725l-.883-.883a4.584 4.584 0 1 0-6.483 6.483l.883.883L10 16.692l6.484-6.484.883-.883a4.584 4.584 0 0 0 0-6.483v0Z"
      />
    </svg>
  )
}

export default Wishlist
