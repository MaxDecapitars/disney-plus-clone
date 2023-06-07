import globalAPI from '@/services/globalAPI';
import { Genre, Movie } from '@/types/services';
import axios from 'axios';
import { Fragment, useEffect, useRef, useState } from 'react';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';
import { arrowStyles } from '@/constants';

type Props = {
  genre: Genre;
  index_: number;
};

const MovieList = ({ genre, index_ }: Props) => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const $slider = useRef<HTMLDivElement>(null);

  const getMovieByGenreId = async () => {
    try {
      const res = await globalAPI.getMoviesByGenre(genre.id);
      // console.log(res.data.results);
      setMovieList(res.data.results);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
      } else {
        console.log('unexpected error: ', error);
      }
    }
  };

  const sliderRight = ($slider: HTMLDivElement) => {
    $slider.scrollLeft += 500;
  };

  const sliderLeft = ($slider: HTMLDivElement) => {
    $slider.scrollLeft -= 500;
  };

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  return (
    <article className="[&_.arrow]:hover:opacity-100">
      <h2 className="pl-10 text-sm md:pl-20">{genre.name}</h2>
      <div key={genre.id} className="relative">
        <div
          className={`${arrowStyles} h-full`}
          onClick={() => sliderLeft($slider.current!)}
        >
          <IoChevronBackOutline />
        </div>
        <div
          className="flex gap-8 overflow-x-auto scroll-smooth py-5 pl-10 scrollbar-none md:pl-20"
          ref={$slider}
        >
          {movieList.map((movie) => (
            <Fragment key={movie.id}>
              {index_ % 3 ? (
                <MovieCard movie={movie} />
              ) : (
                <HrMovieCard movie={movie} />
              )}
            </Fragment>
          ))}
        </div>
        <div
          className={`${arrowStyles} right-0 h-full`}
          onClick={() => sliderRight($slider.current!)}
        >
          <IoChevronForwardOutline />
        </div>
      </div>
    </article>
  );
};

export default MovieList;
