import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RegularList from '../../RegularList';
import CardMovie from '../Container/CardMovie';
import Search from '../Search';

const TopContainer = styled.div`
  padding: 30px;
  background-color: #f0f4f8;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #0d253f;
  margin-bottom: 15px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 25px;
  text-align: center;
`;

const MoviesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media screen and (max-width: 960px) {
    justify-content: center;
  }
`;

export default function Top() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=8bb482f2f727dd736af358131fd13dab&language=en-US`)
      .then(response => {
        setData(response.data.results);
        setFilteredData(response.data.results);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  const handleSearch = (query) => {
    if (query) {
      setFilteredData(data.filter(movie => movie.original_title.toLowerCase().includes(query.toLowerCase())));
    } else {
      setFilteredData(data);
    }
  };

  return (
    <TopContainer>
      <Title>Top Movies</Title>
      <Description>Explore the top trending movies of the week!</Description>
      <Search onSearch={handleSearch} />
      <MoviesWrapper>
        <RegularList items={filteredData} ItemC={CardMovie} resourceName="movie" />
      </MoviesWrapper>
    </TopContainer>
  );
}
