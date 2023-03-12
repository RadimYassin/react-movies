import styled from "styled-components";



  export const MainHome=styled.main`
    width:100%;
   height:auto;

  `

  

export const BoxHome=styled.div`
    

 padding:8px 8px;
 display:flex;
 flex-direction:row;
 align-items:center;
 margin-bottom:40px;

 justify-content:space-between;
 @media screen and (max-width:960px){
width:100%; 
margin : 0 auto;
margin-bottom:40px;
    }


 
`

export const MoviesHome=styled.div`
 display:flex;
 flex-direction:row;
 flex-wrap:wrap;
 align-items:center;
 justify-content:space-between;
  gap:8px;
@media screen and (max-width:960px){
  justify-content:center;
 
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
  @media screen and (max-width:960px){
    margin-right:5%;
    }


`
export const OptionHome=styled.option`
&:checked{
  background-color:#3c5b7c;
}



 
  
`





export const TextHome=styled.div`
font-size:30px;
@media screen and (max-width:960px){
  font-size:20px;
  margin-left:20px;
    }
  
`
export const PaginationHome=styled.div`
  

 width:100%;
  display:flex;
  justify-content:center;
  margin-top:20px;
  margin-bottom:20px;
`
