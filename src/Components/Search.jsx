import React, { useState } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin-bottom: 20px;
  border: 2px solid #0d253f;
  border-radius: 25px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #01b4e4;
    box-shadow: 0 0 10px rgba(1, 180, 228, 0.5);
  }
`;

export default function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <SearchInput
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={handleInputChange}
    />
  );
} 