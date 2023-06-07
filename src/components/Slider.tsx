import { beforeStyles } from '@/constants';
import globalAPI from '@/services/globalAPI';
import { Movie } from '@/types/services';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const arrowStyle =
  'arrow absolute top-1/2 hidden md:flex h-[calc(100%_+_1rem)] w-12 -translate-y-1/2 z-20 items-center justify-center border-[1px] border-[#ddd3] bg-[#ddd7] text-[30px] opacity-0 transition-all hover:bg-[#ddd9]';

const Slider = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [autoScroll, setAutoScroll] = useState<boolean>(true);

  const $slider = useRef<HTMLDivElement>(null);

  const totalPadding = 128;
  const gap = 20;

  const getTrendingMovies = async () => {
    try {
      const res = await globalAPI.getTrendingMovies;

      console.log(res.data);

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
    if ($slider.scrollLeft + window.innerWidth >= $slider.scrollWidth) {
      $slider.scrollLeft = 0;
    } else {
      $slider.scrollLeft +=
        window.innerWidth > 768
          ? window.innerWidth - totalPadding + gap / 4
          : window.innerWidth - totalPadding / 2 + gap / 4;
    }
  };

  const sliderLeft = ($slider: HTMLDivElement) => {
    if ($slider.scrollLeft === 0) {
      $slider.scrollLeft = $slider.scrollWidth - window.innerWidth + gap;
    } else {
      $slider.scrollLeft -=
        window.innerWidth > 768
          ? window.innerWidth - totalPadding + gap / 4
          : window.innerWidth - totalPadding / 2 + gap / 4;
    }
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timer;

    if (autoScroll)
      intervalId = setInterval(() => {
        sliderRight($slider.current!);
      }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [autoScroll]);

  return (
    <section className="relative [&>.arrow]:hover:opacity-100">
      <div
        className={arrowStyle}
        onClick={() => {
          sliderLeft($slider.current!);
          setAutoScroll(false);
        }}
      >
        <HiChevronLeft />
      </div>
      <div
        className={`${arrowStyle} right-0`}
        onClick={() => {
          sliderRight($slider.current!);
          setAutoScroll(false);
        }}
      >
        <HiChevronRight />
      </div>
      <div
        className="flex w-full gap-5 overflow-x-auto scroll-smooth px-8 py-5 scrollbar-none md:px-16"
        ref={$slider}
      >
        {movieList.map((item) => (
          <div
            key={item.id}
            className={`relative h-60 min-w-full overflow-hidden rounded-md transition-transform hover:scale-[1.02] md:h-[310px] ${beforeStyles}`}
          >
            <img
              src={`${globalAPI.IMAGE_ORIGINAL_URL}/${
                item.backdrop_path || item.poster_path
              }`}
              alt={item.title}
              className="h-full w-full object-cover object-left-top"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
