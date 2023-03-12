import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import styled from 'styled-components';
import {FaFilm} from "react-icons/fa"
import {AiFillStar} from "react-icons/ai"
import { useSelector ,useDispatch} from 'react-redux'
import axios from 'axios';
import YouTube from 'react-youtube';
import TrailerMovie from './TrailerMovie';

export default function ModalMovie({movie,setOpen,Result}) {
    const { original_title, id, poster_path,overview,vote_average  } = movie;

    const dispatch = useDispatch()
    const [data,setData]=useState([]);
    //https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
    useEffect(()=>{
          axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=8bb482f2f727dd736af358131fd13dab&language=en-US`).then(res=>setData(res.data.results))
    },[id])

   
   console.log(movie)
  return (
    <>

    <Details>
         

          <InfoMovies>
         <div className='info'>
              <div  className='head'>
                  <h1>{`${original_title}` }</h1>
                  <span>{<FaFilm/>}</span>
               </div>
               <div className='vote'>
                   <span>{vote_average}</span><AiFillStar color='rgb(241, 183, 8)' fontSize={20}/>
               </div>
         </div>
          <div className='overview'>
             <p>{overview}</p>
 

          </div>
      
          </InfoMovies>
          <h1>trailer :</h1>
           <BoxTrailer>
       

           <TrailerMovie  data={data[0]}/>
         
           </BoxTrailer>
          
    </Details>
    </>
  )
}


const Details=styled.div`
  

 flex:1; 
 display:flex;
 flex-direction:column;
  padding:8px;
 font-size:16px;
 margin-top:30px;
 gap:10px;
 @media screen and (max-width:960px){
       gap:2px;
       margin-top:0;
       padding:10px;
       text-align:justify;
       overflow-x:scroll;

    }
`
const BoxTrailer=styled.div`
  display:flex;
  justify-content:center;


`
const InfoMovies=styled.div`
  
width:100%;

`