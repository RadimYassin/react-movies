
import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from '../../GloblesStyles'
import RegularList from '../../RegularList'
import CardMovie from '../Container/CardMovie'
import { MainWatch, CountWatcheList,TitleWatcheLisT,Message,MoviesWatcheList } from '../styles/WatchlistStayle'


const WatchList = () => {

  const WATCHLIST=useSelector((state=>state.WatchList))

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
        
        <Button variant='outlined' sx={{fontSize:"12px",width:"250px"}} >add Your favorite Film</Button>   </Message>}
       <MoviesWatcheList>


        <RegularList  ItemC={CardMovie} items={WATCHLIST} resourceName="movie" />
       </MoviesWatcheList>
    </Container>
  )
}

export default WatchList
