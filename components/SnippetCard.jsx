import Link from 'next/link';
import { icons } from './Icons';

export const SnippetCard = (props) => {
  return (
    <div className='flex flex-col w-full p-5 space-y-3 bg-gray-100 rounded shadow-md dark:bg-gray-700'>
      <div className='flex items-center justify-between'>
        <Link href={`/snippets/${props.slug}`}>
          <div className='w-3/4'>
            <h1 className='overflow-hidden text-xl font-bold truncate md:text-2xl'>
              {props.title}
            </h1>
          </div>
        </Link>
        <div className='flex-none w-12 h-12 my-3 bg-gray-300 rounded-full border-1 md:order-2 md:my-0 dark:bg-gray-800'>
          <span className='grid w-full h-full text-3xl text-gray-700 place-items-center dark:text-gray-300'>
            {icons[props.icon]}
          </span>
        </div>

        {/* <div className='grid w-12 h-12 p-1 text-xl text-gray-700 bg-gray-300 rounded-full place-items-center dark:bg-gray-800 dark:text-gray-300 snip'>
          {icons[props.icon]}
        </div> */}
      </div>

      <p className='text-slate'>{props.summary}</p>
      <div className='flex space-x-2 text-xs'>
        {props.tags
          ? props.tags.map((tag) => (
              <span
                className='px-2 py-1 text-gray-900 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800'
                key={tag}
              >
                #{tag}
              </span>
            ))
          : null}
      </div>
    </div>
  );
};
