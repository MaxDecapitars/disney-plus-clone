import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import { MenuItem } from '@/types/types';
import logo from '@/assets/Images/logo.webp';
import avatar from '@/assets/Images/avatar.webp';
import HeaderItem from './HeaderItem';
import { useState } from 'react';

const menu: MenuItem[] = [
  {
    name: 'HOME',
    icon: HiHome,
  },
  {
    name: 'SEARCH',
    icon: HiMagnifyingGlass,
  },
  {
    name: 'WATCH LIST',
    icon: HiPlus,
  },
  {
    name: 'ORIGINALS',
    icon: HiStar,
  },
  {
    name: 'MOVIES',
    icon: HiPlayCircle,
  },
  {
    name: 'SERIES',
    icon: HiTv,
  },
];

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="sticky top-0 z-30 flex items-center justify-between bg-[linear-gradient(to_right,_#292d3d,_#191d28_30%,_#292d3d,_#0f111a_90%)] p-3">
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Logo"
          className="w-[80px] object-cover md:w-[115px]"
        />
        <nav className="hidden gap-6 lg:flex">
          {menu.map((item) => (
            <HeaderItem key={item.name} item={item} />
          ))}
        </nav>
        <nav className="hidden gap-8 md:flex lg:hidden">
          {menu.map((item) => (
            <HeaderItem key={item.name} item={{ name: '', icon: item.icon }} />
          ))}
        </nav>
        <nav className="hidden gap-8 sm:flex md:hidden">
          {menu.map(
            (item, i) =>
              i < 3 && (
                <HeaderItem
                  key={item.name}
                  item={{ name: '', icon: item.icon }}
                />
              )
          )}
          <div className="md:hidden" onClick={() => setToggle((prev) => !prev)}>
            <HeaderItem item={{ name: '', icon: HiDotsVertical }} />
            {toggle && (
              <div className="absolute mt-3 -translate-x-1/2 border-[1px] border-gray-800 bg-[#121212] px-5 py-4">
                {menu.map(
                  (item, i) =>
                    i >= 3 && <HeaderItem key={item.name} item={item} />
                )}
              </div>
            )}
          </div>
        </nav>
        <nav className="flex gap-8 sm:hidden">
          <div className="sm:hidden" onClick={() => setToggle((prev) => !prev)}>
            <HeaderItem item={{ name: '', icon: HiDotsVertical }} />
            {toggle && (
              <div className="absolute mt-3 -translate-x-1/2 border-[1px] border-gray-800 bg-[#121212] px-5 py-4">
                {menu.map((item) => (
                  <HeaderItem key={item.name} item={item} />
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <span>MaxDecapitars</span>
        <img src={avatar} alt="User avatar" className="w-12 rounded-full" />
      </div>
    </div>
  );
};
export default Header;
