import disney from '@/assets/Images/disney.webp';
import marvel from '@/assets/Images/marvel.webp';
import nationalG from '@/assets/Images/nationalG.webp';
import pixar from '@/assets/Images/pixar.webp';
import starWars from '@/assets/Images/starwar.webp';

import disneyV from '@/assets/Videos/disney.mp4';
import marvelV from '@/assets/Videos/marvel.mp4';
import nationalGV from '@/assets/Videos/national-geographic.mp4';
import pixarV from '@/assets/Videos/pixar.mp4';
import starWarsV from '@/assets/Videos/star-wars.mp4';

import { House } from '@/types/types';
import PHouseVideo from './PHouseVideo';

const prodHouseList: House[] = [
  {
    id: 1,
    name: 'Disney',
    image: disney,
    video: disneyV,
  },
  {
    id: 2,
    name: 'Pixar',
    image: pixar,
    video: pixarV,
  },
  {
    id: 3,
    name: 'Marvel',
    image: marvel,
    video: marvelV,
  },
  {
    id: 4,
    name: 'Star Wars',
    image: starWars,
    video: starWarsV,
  },
  {
    id: 5,
    name: 'National Geographic',
    image: nationalG,
    video: nationalGV,
  },
];

const ProductionHouse = () => {
  return (
    <section className="mb-5 flex gap-2 px-8 md:gap-5 md:px-16">
      {prodHouseList.map((house) => (
        <PHouseVideo key={house.id} house={house} />
      ))}
    </section>
  );
};
export default ProductionHouse;
