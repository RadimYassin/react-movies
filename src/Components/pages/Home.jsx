import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import { Container } from '../../GloblesStyles'
import RegularList from '../../RegularList'
import CardMovie from '../Container/CardMovie'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { MainHome ,BoxHome,MoviesHome,SelectHome,PaginationHome, OptionHome } from '../styles/homeStyle'
import Search from '../Search'

export default function Home() {
  const [data, setData] = useState([]); // no data yet
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [value,setValue]=useState("now_playing")
  const [page, setPage] = React.useState(1);




//"https://api.themoviedb.org/3/movie/now_playing?api_key=8bb482f2f727dd736af358131fd13dab&language=en-US&page=1
//https://api.themoviedb.org/3/movie/popular?api_key=8bb482f2f727dd736af358131fd13dab&language=en-US&page=1
//https://api.themoviedb.org/3/movie/top_rated?api_key=8bb482f2f727dd736af358131fd13dab&language=en-US&page=1
//https://api.themoviedb.org/3/movie/upcoming?api_key=8bb482f2f727dd736af358131fd13dab&language=en-US&page=1
  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://api.themoviedb.org/3/movie/${value}?api_key=8bb482f2f727dd736af358131fd13dab&language=en-US&page=${page}`)
      .then(data => {
        setData(data.data.results);
        setFilteredData(data.data.results);
      })
      .catch(error => {
        // handle any errors/rejected Promises
        console.log(error.message);
      })
      .finally(() => setIsLoading(false)); // complete loading success/fail
  }, [value,page]);
   // envent for select 


   const SelectV=(e)=>{
    setValue(e.target.value);
   }
   const handleChange = (event, value) => {
    setPage(value);
  };

  const handleSearch = (query) => {
    if (query) {
      setFilteredData(data.filter(movie => movie.original_title.toLowerCase().includes(query.toLowerCase())));
    } else {
      setFilteredData(data);
    }
  };

  return (
    <Container  mt="50px">
          <MainHome>
                <BoxHome>
                       <Search onSearch={handleSearch} />

                     <SelectHome onChange={SelectV} >
                           <OptionHome value="now_playing">Now Playing</OptionHome>
                           <OptionHome value="popular">Popular</OptionHome>
                           <OptionHome value="top_rated">Top Rated</OptionHome>
                           <OptionHome value="upcoming">Upcoming</OptionHome>
                    </SelectHome>
                </BoxHome>
                <MoviesHome>
                      
                      <RegularList items={filteredData} ItemC={CardMovie} resourceName="movie"/>
                
                 </MoviesHome>
                   {
               data.length ?
                     <PaginationHome>
                          <Stack sx={{width:'100%'}}  spacing={1}>
                          <Pagination   count={9} page={page} color="primary" onChange={handleChange} />
                        </Stack>
                   </PaginationHome>:null
                   }
                
          </MainHome>
    </Container>
  )
}