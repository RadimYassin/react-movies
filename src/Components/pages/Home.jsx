import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import { Container } from '../../GloblesStyles'
import RegularList from '../../RegularList'
import CardMovie from '../Container/CardMovie'
import Form from '../Form/Form'
import { MainHome ,SeachHome,MoviesHome,SelectHome } from '../styles/homeStyle'

export default function Home() {
  const [data, setData] = useState([]); // no data yet
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=8bb482f2f727dd736af358131fd13dab&language=en-US&include_adult=false")
      .then(data => {
        setData(data.data.results); // update state with response
      })
      .catch(error => {
        // handle any errors/rejected Promises
        console.log(error.message);
      })
      .finally(() => setIsLoading(false)); // complete loading success/fail
  }, []);
   // envent for select 

   const SelectType=(e)=>{
    console.log(e.target.value);
   }
  return (
    <Container bg mt="50px">
          <MainHome>
                <SeachHome>
                      <Form>
                        <Form.Input  type="text" placeholder="search a movies"  />
                      </Form>
                       <SelectHome onChange={SelectType} >
                           <option value="movie">movie</option>
                           <option value="peopale">Peaple</option>
                           <option value="Tv Shows">Tv Shows</option>
                       </SelectHome>
                </SeachHome>

                 <MoviesHome>

                      <RegularList items={data} ItemC={CardMovie} resourceName="movie"/>
                
                 </MoviesHome>
                
               
                
          </MainHome>

    </Container>
  )
}
