import { beforeStyles } from '@/constants';
import { House } from '@/types/types';
import { useRef } from 'react';

const afterStyles =
  'after:absolute after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg after:bg-gradient-to-b after:from-[#383a48] after:to-[#252733] after:transition-opacity after:delay-150 after:duration-700 after:ease-in-out hover:after:opacity-0';

type Props = {
  house: House;
};

const PHouseVideo = ({ house }: Props) => {
  const $video = useRef<HTMLVideoElement>(null);

  return (
    <div
      key={house.id}
      className={`relative cursor-pointer rounded-lg shadow-lg shadow-gray-950 ${afterStyles} ${beforeStyles}`}
      onMouseEnter={() => $video.current?.play()}
    >
      <video
        ref={$video}
        loop
        src={house.video}
        className="absolute top-0 -z-10 w-full rounded-lg"
      />
      <img src={house.image} alt={house.name} className="w-full" />
    </div>
  );
};
export default PHouseVideo;
