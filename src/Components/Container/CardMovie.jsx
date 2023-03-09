import React from 'react'
import { useDispatch } from 'react-redux';
import { Card } from '../Card/Card'
import { useSelector } from 'react-redux'

export default function CardMovie({movie}) {
  const dispatch=useDispatch()
  //CONDION SELECT MOVIES IF FIND IN WACHLIST OR NON
  const watchlist=useSelector((state=>state.WatchList))
  const Result=watchlist.find((m)=>m.id==movie.id)
  console.log(Result);
    const {original_title, id ,poster_path }= movie;
  return (
    <Card  key={`${id}`}>
    <Card.Img  src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={movie.title}/>
    <Card.Body>
       <Card.Title m="10px">{original_title}</Card.Title>
    {
    Result 
       ?
       <Card.Btn del="delete" onClick={()=>dispatch({type:"Del_M",payload:movie.id})}>delete </Card.Btn>
       :
     (  <Card.Btn   onClick={()=>dispatch({type:"ADD_M",payload:movie})}>add </Card.Btn>)}
    </Card.Body>
 </Card>
  )
}
