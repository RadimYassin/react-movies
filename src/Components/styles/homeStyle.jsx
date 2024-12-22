import styled from "styled-components";

export const MainHome = styled.main`
  width: 100%;
  height: auto;
  padding: 20px;
  background-color: #f9f9f9;
`;

export const BoxHome = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 20px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MoviesHome = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media screen and (max-width: 960px) {
    justify-content: center;
  }
`;

export const SelectHome = styled.select`
  outline: 0;
  border: 0;
  margin-bottom: 20px;
  box-shadow: none;
  padding: 10px 20px;
  border-radius: 25px;
  color: #fff;
  background-color: #0d253f;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #01b4e4;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const OptionHome = styled.option`
  &:checked {
    background-color: #3c5b7c;
  }
`;

export const PaginationHome = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 960px) {
    width: auto;
  }
`;
