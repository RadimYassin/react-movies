import React from 'react'
import { useDispatch } from 'react-redux';
import { Card } from '../Card/Card'
import { useSelector } from 'react-redux'

export default function CardMovieWatchlist({ movie_Watchlist }) {
  const dispatch = useDispatch()

  //CONDION SELECT MOVIES IF FIND IN WACHLIST OR NON
  const { original_title, id, poster_path } = movie_Watchlist;
  return (
    <>
      <Card key={`${id}`}>
        <Card.Img src={`https://image.tmdb.org/t/p/w300${poster_path}`} color="neutral" onClick={() => setOpen(true)} alt={original_title} />
        <Card.Body>
          <Card.Title m="10px">{original_title}</Card.Title>
          
              <Card.Btn del="delete" onClick={() => dispatch({ type: "Del_M", payload:  id })}>delete  </Card.Btn>
        
        </Card.Body>
      </Card>
    

    </>
  )
}
