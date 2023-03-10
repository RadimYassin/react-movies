
import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Container } from '../../GloblesStyles'
import RegularList from '../../RegularList'
import CardMovie from '../Container/CardMovie'
import CardMovieWatchlist from '../Container/CardMovieWatchlist'
import { MainWatch, CountWatcheList,TitleWatcheLisT,Message,MoviesWatcheList } from '../styles/WatchlistStayle'


const WatchList = () => {

  const WATCHLIST=useSelector((state=>state.WatchList))
  const history=useNavigate()
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
       <MoviesWatcheList  bd={ WATCHLIST.length ? true :false}>


        <RegularList  ItemC={CardMovieWatchlist} items={WATCHLIST} resourceName="movie_Watchlist" />
       </MoviesWatcheList>
    </Container>
  )
}

export default WatchList
