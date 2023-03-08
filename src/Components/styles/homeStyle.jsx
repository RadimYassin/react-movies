import styled from "styled-components";



  export const MainHome=styled.main`
    width:100%;
   height:auto;

  `

  

export const Box=styled.div`
    


padding:8px 0;
width:100%;
 display:flex;
 flex-direction:row;
 align-items:center;
 justify-content:space-between;
 margin-bottom:40px;
`



export const MoviesHome=styled.div`

  display:grid;
  grid-template-rows:    repeat(auto);
grid-template-columns: repeat(5, 1fr);
@media screen and (max-width:960px){
  grid-template-rows:    repeat(auto);
grid-template-columns: repeat(2, 1fr);
    }

`
