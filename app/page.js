import React from 'react'
import './globals.css'
import SearchBar from './Components/SearchBar';
import MoviesList from './Components/MoviesList';


const page = () => {
  return (
    <>
      <SearchBar/>
      <MoviesList/>
    </>
  )
}

export default page;

     