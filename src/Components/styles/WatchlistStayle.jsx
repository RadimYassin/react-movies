import styled from "styled-components";

  export const MainWatch=styled.main`
    width:100%;
   height:auto;
   display:flex;
   justify-content:space-between;
   align-items:center;
   padding:8px;
   background-color:red;

  `

  

export const MoviesWatcheList=styled.div`

  display:grid;
  grid-template-rows:    repeat(auto);
grid-template-columns: repeat(5, 1fr);
@media screen and (max-width:960px){
  grid-template-rows:    repeat(auto);
grid-template-columns: repeat(2, 1fr);
    }

`

export const TitleWatcheLisT=styled.h1`
font-size:30px;
color:#282727;
   
`

export const CountWatcheList=styled.span`


`



export const Message=styled.div`
width:100%;
height: 50vh;
display:flex;
align-items:center;
justify-content:center;
gap:20px;
`


