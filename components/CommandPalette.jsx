// https://headlessui.dev/
// https://www.youtube.com/watch?v=-jix4KyxLuQ
import { useRouter } from 'next/router';
import { Dialog, Transition, Combobox } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import posts from '../data/posts.json';

export const CommandPalette = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  /* Filter posts based on search query */
  const filteredPosts = query
    ? posts.filter((post) => {
        return post.title.toLowerCase().includes(query.toLowerCase());
      })
    : [];

  /* Handle Keyboard Input */
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'k' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        event.stopPropagation();
        setIsOpen((value) => !value);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}
      afterLeave={() => {
        setQuery('');
      }}
    >
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className='fixed inset-0 z-10 pt-[15vh] overflow-y-auto'
      >
        <Transition.Child
          enter='ease-out duration-200'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-gray-200/75 dark:bg-gray-800/75' />
        </Transition.Child>
        <Transition.Child
          enter=' ease-out duration-200'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave=' ease-in duration-150'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Combobox
            onChange={(post) => {
              router.push(`/posts/${post.slug}`);
              setIsOpen(false);
            }}
            as='div'
            className='relative max-w-xl mx-auto overflow-hidden bg-white divide-y-2 divide-gray-100 shadow-2xl dark:divide-gray-800 dark:bg-black rounded-xl ring-1 ring-black/5'
          >
            <div className='flex items-center px-4 py-2'>
              <svg
                className='w-4 h-5 fill-current '
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 56.966 56.966'
                xmlSpace='preserve'
              >
                <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
              </svg>
              <Combobox.Input
                className='w-full h-12 ml-2 text-gray-800 placeholder-gray-600 bg-transparent border-0 dark:placeholder-gray-300 dark:text-gray-200 focus:ring-0'
                placeholder='Search...'
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
            {filteredPosts.length > 0 && query.length > 1 && (
              <Combobox.Options static className='py-4 overflow-y-auto text-sm max-h-96'>
                {filteredPosts.map((post) => (
                  /* Use the `active` state to conditionally style the active option. */
                  /* Use the `selected` state to conditionally style the selected option. */
                  <Combobox.Option key={post.id} value={post} as={Fragment}>
                    {({ active, selected }) => (
                      <li
                        className={`px-4 py-2 ${
                          active
                            ? 'bg-gray-500 dark:bg-gray-700 text-white'
                            : 'bg-white text-black dark:bg-black dark:text-gray-200'
                        }`}
                      >
                        {/*selected && <CheckIcon />*/}
                        {post.title}
                      </li>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};
