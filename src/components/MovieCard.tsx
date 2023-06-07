import { beforeStyles } from '@/constants';
import globalAPI from '@/services/globalAPI';
import { Movie } from '@/types/services';

type Props = {
  movie: Movie;
};
const MovieCard = ({ movie }: Props) => {
  return (
    <div
      className={`relative aspect-[10_/_15] min-w-[7rem] cursor-pointer rounded-lg bg-black transition-all duration-150 ease-in hover:scale-110 md:min-w-[220px] ${beforeStyles}`}
    >
      <img
        src={`${globalAPI.IMAGE_POSTER_URL}/${movie.poster_path}`}
        alt={movie.title}
        className="h-full w-full rounded-lg object-cover"
      />
    </div>
  );
};
export default MovieCard;
