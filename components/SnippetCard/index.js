import Link from 'next/link';
import { icons } from '../../icons';

function SnippetCard(props) {
  return (
    <div className='flex flex-col p-5 space-y-3 w-full rounded shadow-lg bg-gray-100 dark:bg-gray-700'>
      <div className='flex justify-between items-center'>
        <Link href={`/snippets/${props.slug}`}>
          <a>
            <h1 className='text-2xl font-bold text-slate-light'>
              {props.title}
            </h1>
          </a>
        </Link>
        <span className='grid place-items-center p-1 w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-600 text-blue-800 dark:text-blue-300 snip'>
          {icons[props.icon]}
        </span>
      </div>

      <p className='text-slate'>{props.summary}</p>
      <div className='flex space-x-2 text-xs'>
        {props.tags
          ? props.tags.map((tag) => (
              <span
                className='px-2 py-1 bg-gray-200 dark:bg-gray-500 text-gray-800 dark:text-gray-100 rounded-full'
                key={tag}
              >
                #{tag}
              </span>
            ))
          : null}
      </div>
    </div>
  );
}

export default SnippetCard;
