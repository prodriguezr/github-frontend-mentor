import { GithubIcon } from './icons';

const UserCardInfo = () => {
  return (
    <article className='p-2 text-white bg-blue-900 grid-areas rounded-xl'>
      <div className='grid w-24 h-24 p-1 bg-gray-200 rounded-full section-logo place-content-center'>
        <GithubIcon className='w-full h-full' />
      </div>
      <div className='section-title'>
        <h2>The Octocat</h2>
        <p>@theoctocat</p>
      </div>
      <p className='section-date'>25 Jan 2013</p>
      <p className='section-description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod adipisci
        nulla dolor in dolorem consequuntur culpa non, tempore sed ut. Harum est
        repellat libero? Voluptates, voluptatem distinctio. Similique, autem
        voluptas!
      </p>
      <div className='flex justify-around p-4 my-3 rounded-lg section-numbers bg-blue-950'>
        <article>
          <p>Repos</p>
          <p>12</p>
        </article>
        <article>
          <p>Followers</p>
          <p>123</p>
        </article>
        <article>
          <p>Following</p>
          <p>4</p>
        </article>
      </div>
      <div className='section-social md:grid md:grid-cols-2'>
        <article>
          <i>Icon</i>
          <p>San Francisco</p>
        </article>
        <article>
          <i>Icon</i>
          <p>Twitter Not Available</p>
        </article>
        <article>
          <i>Icon</i>
          <p>https://github.blog</p>
        </article>
        <article>
          <i>Icon</i>
          <p>@github</p>
        </article>
      </div>
    </article>
  );
};

export default UserCardInfo;
