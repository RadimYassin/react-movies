import styled from "styled-components";



  export const FormConatiner=styled.form`
  
    width:100%;
    height:40px;
    padding:3px;
    display:flex;
    flex-direction:row;
    align-items:center;
    
  `

export const InputType=styled.input`
  font-family: 'Roboto', sans-serif;
  color: #333;
  font-size: 1.2rem;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  border: none;
  padding:8px;
  width:${(props)=>props.width ? props.width: "50% "};
  &:focus{
    outline:none;
    border: 1px solid #0d253f9f;
  }
 


`