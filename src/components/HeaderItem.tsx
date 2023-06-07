import { MenuItem } from '@/types/types';

type Props = {
  item: MenuItem;
};

const HeaderItem = ({ item }: Props) => {
  const decorationStyle =
    item.name === ''
      ? 'before:absolute before:w-4 before:top-5 before:border-b-0 hover:before:border-b-2 before:border-white'
      : 'underline-offset-8 hover:underline';

  return (
    <a
      className={`relative mb-2 flex cursor-pointer items-center gap-3 text-[15px] font-semibold text-white ${decorationStyle}`}
    >
      <item.icon />
      <h2>{item.name}</h2>
    </a>
  );
};

export default HeaderItem;
