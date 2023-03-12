import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux'
import BasicModal from './Modal';
import "../styles/style.css"
import axios from 'axios';
import ModalMovie from './ModalMovie';
import { Card } from '../Card/Card';

export default function CardMovie({ movie }) {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);

//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US



  //CONDION SELECT MOVIES IF FIND IN WACHLIST OR NON



  const watchlist = useSelector((state => state.WatchList))
  const Result = watchlist.find((m) => m.id == movie.id)
  const { original_title, id, poster_path,overview,vote_average,release_date  } = movie;




  return (
    <>
      <Card key={`${id}`}>
        <Card.Img src={`https://image.tmdb.org/t/p/w300${poster_path}`} color="neutral" onClick={() => setOpen(true)} alt={movie.title} />
        <Card.Body>
          <Card.Title m="10px">{original_title}</Card.Title>
          {
            Result
              ?
              <Card.Btn del='del'onClick={() => dispatch({ type: "Del_M", payload: movie.id })}>delete </Card.Btn>
              :
              (
                <>
                 <Card.Btn add='add'  onClick={() => dispatch({ type: "ADD_M", payload: movie })}>add </Card.Btn>
                 
                </>
              
             )}
        </Card.Body>
      </Card>
      <BasicModal className="BasicModal" open={open} setOpen={setOpen}>
        <ModalMovie setOpen={setOpen} Result={Result} movie={movie}/>
      </BasicModal>

    </>
  )
}





