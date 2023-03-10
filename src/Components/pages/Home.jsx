import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import { Container } from '../../GloblesStyles'
import RegularList from '../../RegularList'
import CardMovie from '../Container/CardMovie'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { MainHome ,Box,MoviesHome,SelectHome,TextHome,PaginationHome } from '../styles/homeStyle'

export default function Home() {
  const [data, setData] = useState([]); // no data yet
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
        setData(data.data.results); // update state with response
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
  return (
    <Container  mt="50px">
          <MainHome>
                <Box>
                       <TextHome><p>{value && value}:</p></TextHome>
                       <SelectHome onChange={SelectV} >
                           <option value="now_playing">now_playing</option>
                           <option value="popular">popular</option>
                           <option value="top_rated">top_rated</option>
                           <option value="upcoming">upcoming</option>
                       </SelectHome>
                </Box>
            
                 <MoviesHome>
                      
                      <RegularList items={data} ItemC={CardMovie} resourceName="movie"/>
                
                 </MoviesHome>
                   {
               data.length ?
                     <PaginationHome>
                          <Stack spacing={2}>
                          <Pagination count={10} page={page} color="primary" onChange={handleChange} />
                        </Stack>
                   </PaginationHome>:null
                   }
                
          </MainHome>

    </Container>
  )
}