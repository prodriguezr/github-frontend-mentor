import { SearchIcon } from './icons';

const SearchUserForm = () => {
  return (
    <form className='flex flex-wrap items-center gap-2 p-2 mb-6 bg-blue-900 rounded-xl'>
      <span className='min-w-[20px]'>
        <SearchIcon className='fill-sky-500' />
      </span>
      <input
        type='text'
        placeholder='Search Github username...'
        className='flex-1 p-5 text-white bg-transparent rounded-lg focus:risky-500 h-14 placeholder:text-white focus:outline-none focus:ring-2'
      />
      <button className='p-4 font-bold text-white rounded-lg bg-sky-500'>
        Search
      </button>
    </form>
  );
};
export default SearchUserForm;
