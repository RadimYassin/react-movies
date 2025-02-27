import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
   width:300px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
 height:500px;
 @media screen and (max-width:760px){
width:90%; 
margin : 0 auto;
margin-bottom:40px;
    }
  
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

export const Title = styled.h1`
  font-size: 1rem;

  margin: 0;
`;

export const Text = styled.p`
  line-height: 25px;
  color: #6c757d;
`;

export const Image = styled.img`
  width: 100%;
  height:75%;
  
`;

export const Button = styled.button`
  cursor: pointer;
  margin-top: auto;
  width: 100%;
  color: #fff;
  background-color: ${(props) => (props.add === "add" ? "#007bff" : "#000")};
  border: none;
  display: block;
  font-weight: bold;
  text-align: center;
  user-select: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 25px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.add === "add" ? "#0881f9" : "#ff0000")};
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }
`;
