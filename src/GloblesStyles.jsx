import styled ,{createGlobalStyle} from "styled-components";


 const GlobleStyle=createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:sans-serif;
}




`
export default GlobleStyle
export const  Container=styled.div`
//border:${(props)=>props.bg ? "1px solid red" :null};
z-index:1;
width:100%;
max-width:1300px;
margin-left:auto;
margin-right:auto;
padding-left:50px;
padding-right:50px;
margin-top:${(props)=>props.mt ? props.mt :null};

@media screen and (max-width:991px) {
    padding-left:30px;
padding-right:30px;
}



`

