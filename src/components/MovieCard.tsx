import { beforeStyles } from '@/constants';
import globalAPI from '@/services/globalAPI';
import { Movie } from '@/types/services';

type Props = {
  movie: Movie;
};
const MovieCard = ({ movie }: Props) => {
  return (
    <div
      className={`relative aspect-[11_/_16] min-w-[7rem] cursor-pointer rounded-lg bg-black transition-all duration-150 ease-in hover:scale-110 md:min-w-[14rem] ${beforeStyles}`}
    >
      <img
        src={`${globalAPI.IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        className="h-full w-full rounded-lg object-cover"
      />
    </div>
  );
};
export default MovieCard;
