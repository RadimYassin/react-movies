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
 margin-bottom:60px;

 
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

export const SelectHome=styled.select`
appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;
  /* Personalize */
  flex: 1;

  padding: 0.5rem 1em;
  border-radius:6px;

  padding: 0.2rem 1em;
  border-radius:6px;
  color: #fff;
  background-color:#0d253f;
  background-image: none;
  cursor: pointer;



`



export const TextHome=styled.div`
width:85%;
font-size:30px;
@media screen and (max-width:960px){
  font-size:20px;
    }
  
`
export const PaginationHome=styled.div`
  


  display:flex;
  justify-content:center;
  margin-top:20px;
  margin-bottom:20px;
`