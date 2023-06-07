import globalAPI from '@/services/globalAPI';
import { Genre } from '@/types/services';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieList from './MovieList';

const GenreMovieList = () => {
  const [genreList, setGenreList] = useState<Genre[]>([]);

  const getGenreList = async () => {
    try {
      const res = await globalAPI.getGenresMovies;

      console.log(res.data);

      setGenreList(res.data.genres);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
      } else {
        console.log('unexpected error: ', error);
      }
    }
  };

  useEffect(() => {
    getGenreList();
  }, []);

  return (
    <section>
      {genreList.length > 0 &&
        genreList.map((genre, i) => (
          <MovieList key={genre.id} genre={genre} index_={i} />
        ))}
    </section>
  );
};
export default GenreMovieList;
