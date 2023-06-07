import { IconType } from 'react-icons';

export interface MenuItem {
  name: string;
  icon: IconType;
}

export interface House {
  id: number;
  name: string
  image: string;
  video: string;
}
