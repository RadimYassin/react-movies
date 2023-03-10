import styled from "styled-components";



  export const MainHome=styled.main`
    width:100%;
   height:auto;

  `

  

export const Box=styled.div`
    


 padding:8px 0;
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

  outline: 0;
  border: 0;
  box-shadow: none;
  /* Personalize */

  padding:7px 16px;
  border-radius:6px;

  color: #fff;
  background-color:#0d253f;

  cursor: pointer;
  


`
export const OptionHome=styled.option`


&:checked{
  background-color:#3c5b7c;
}


 
  
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