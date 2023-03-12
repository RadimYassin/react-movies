import styled from 'styled-components';

export const Container = styled.div`
margin:6px;
  display: flex;


  flex-direction: column;
  min-width: 0;
  max-width:${(props)=>props.w ? props.w :"300px"};
  word-wrap: break-word;
  background-color: #fff;

  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

export const Title = styled.h1`
margin:${(props)=>props.m ? props.m :null};

  font-size: 1.25rem;
  font-weight: bold;

`;

export const Text = styled.p`
  line-height: 25px;
  color: #6c757d;
`;

export const Image = styled.img`
margin:${(props)=>props.mt ? props.mt:null};
  width: 100%;
  height:350px;
  -webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
    &:hover{
        -webkit-transform:scale(0.95);
	transform: scale(0.95);
    }
`;

export const Button = styled.button`
margin-top:${(props)=>props.mt ? props.mt: null};
  cursor: pointer;


  color: #fff;
  background-color:${(props)=>props.del ? "#18191a":"#01b4e4"};

  border-color:${(props)=>props.del ? "#d80d0d":"#218838"};
  display: block;
  font-weight: bold;
  text-align: center;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    color: #fff;
    background-color:${(props)=>props.del ? "#d80d0d":"#218838"};

    border-color:${(props)=>props.del ?"#18191a":"#01b4e4"}};
  
`;
