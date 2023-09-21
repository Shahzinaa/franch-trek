import React from 'react'

function SearchBar () {
    return (
    <div>
        <div className='py-10 flex items-center justify-between'>
          <div className="searchBar flex items-center gap-4">
            <div className="flex items-center px-2 py-3 w-80 bg-neutral-700 rounded-2xl">
              <img className='px-2 w-9' src="/search.svg" alt="search-icon" />
              <input
                id='searchBar-input'
                type="text"
                placeholder="Search"
                className="px-3 bg-transparent outline-none"
              />
            </div>
            <div className='flex gap-4'>
              <button className='rounded-2xl px-6 py-3 bg-neutral-700 hover:bg-purple-500 ease-in-out duration-300 focus:bg-purple-500'>Movies</button>
              <button className='rounded-2xl px-6 py-3 bg-neutral-700 hover:bg-purple-500 ease-in-out duration-300 focus:bg-purple-500'>Series</button>
            </div>
          </div>
          <div className='addBtn'>
            <button className='flex items-center gap-2 rounded-2xl px-6 py-3 bg-neutral-700 hover:bg-purple-500 ease-in-out duration-300 focus:bg-purple-500'>
              <img src="/add.svg" alt="" width={14} />Add
            </button>
          </div>
        </div>
    </div>
  )
}

export default SearchBar;