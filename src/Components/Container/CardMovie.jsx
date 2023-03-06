import React from 'react'
import { Card } from '../Card/Card'

export default function CardMovie({movie}) {
    const {original_title, id ,poster_path }= movie;
  return (
    <Card  key={`${id}`}>
    <Card.Img  src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={movie.title}/>
    <Card.Body>
       <Card.Title m="10px">{original_title}</Card.Title>
       <Card.Btn>add </Card.Btn>
    </Card.Body>
 </Card>
  )
}
