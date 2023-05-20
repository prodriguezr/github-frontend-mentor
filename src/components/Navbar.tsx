import { DarkIcon, LightIcon } from './icons';

interface NavbarProps {
  appTitle: string;
}

const Navbar = ({ appTitle }: NavbarProps) => {
  return (
    <header className='flex items-center mb-10 space-x-2'>
      <h1 className='flex-grow text-4xl font-extrabold text-white'>
        {appTitle}
      </h1>
      <span className='text-white uppercase'>light</span>
      <button>
        <LightIcon className='fill-white' width={25} />
      </button>
    </header>
  );
};

export default Navbar;
