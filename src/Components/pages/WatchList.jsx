import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Container } from '../../GloblesStyles'
import RegularList from '../../RegularList'
import CardMovieWatchlist from '../Container/CardMovieWatchlist'
import { MainWatch, CountWatcheList,TitleWatcheLisT,Message,MoviesWatcheList } from '../styles/WatchlistStayle'
import Search from '../Search'

const WatchList = () => {

  const WATCHLIST=useSelector((state=>state.WatchList))
  const [filteredWatchlist, setFilteredWatchlist] = useState(WATCHLIST)
  const history=useNavigate()

  const handleSearch = (query) => {
    if (query) {
      setFilteredWatchlist(WATCHLIST.filter(movie => movie.original_title.toLowerCase().includes(query.toLowerCase())))
    } else {
      setFilteredWatchlist(WATCHLIST)
    }
  }

  const BackToHomePage=()=>{
    history("/")
  }

  return (
    <Container  mt="50px" >
      
       { 
         WATCHLIST.length
        
        
        ?
       <MainWatch>


       
    
         <TitleWatcheLisT>Your Watchlist : </TitleWatcheLisT>
        <CountWatcheList>{WATCHLIST.length}</CountWatcheList >
      
     

       </MainWatch>:<Message>
        <TitleWatcheLisT>Watchlist is empty...!</TitleWatcheLisT>
        
        <Button variant='outlined' sx={{fontSize:"12px",width:"250px"}} onClick={BackToHomePage} >add Your favorite Film</Button>   </Message>}
       <Search onSearch={handleSearch} />
       <MoviesWatcheList >


        <RegularList  ItemC={CardMovieWatchlist} items={filteredWatchlist} resourceName="movie_Watchlist" />
       </MoviesWatcheList>
    </Container>
  )
}

export default WatchList
