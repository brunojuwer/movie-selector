import { MovieCard } from '../components/MovieCard';
import { Header } from './Header';


interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SelectGenreProp {
  movieGenre: MovieProps[];
  selectedGenre: GenreResponseProps;
}

export function Content(props: SelectGenreProp) {


console.log(props.movieGenre)
  return (

  <div className="container">

    <Header selectedGenreHeader={props.selectedGenre}/>

        <main>
          <div className="movies-list">
            {props.movieGenre.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}