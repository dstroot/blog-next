import { useState } from 'react';
import { FaFacebookF, FaShareAlt, FaTwitter, FaCheck } from 'react-icons/fa';

export function Sharable({ title, slug }) {
  const [showAlert, setShowAlert] = useState(false);

  function fbShare() {
    window.open(
      encodeURI(
        `https://www.facebook.com/sharer/sharer.php?u=https://www.danstroot.com/posts/${slug}`
      ),
      'sharer',
      'toolbar=0,status=0,width=548,height=325'
    );
  }

  function twShare() {
    window.open(
      encodeURI(
        `https://twitter.com/share?lang=en&text=${title}&url=https://www.danstroot.com/posts/${slug}`
      ),
      'sharer',
      'toolbar=0,status=0,width=548,height=325'
    );
  }

  function CopiedLinkMsg() {
    setShowAlert(true);
    navigator.clipboard.writeText(`https://www.danstroot.com/posts/${slug}`);
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 1000);

    return () => clearTimeout(timer);
  }

  return (
    <div className='flex flex-col'>
      <h4 className='mb-4 text-lg font-bold'>Sharing is Caring</h4>
      <div className='flex space-x-5 text-xl'>
        <span
          onClick={fbShare}
          className='hover:text-gray-500'
          // aria-label='Share this blog on Facebook.'
        >
          <FaFacebookF />
        </span>
        <span
          onClick={twShare}
          className='hover:text-gray-500'
          // aria-label='Share this blog on Twitter.'
        >
          <FaTwitter />
        </span>
        <span
          onClick={CopiedLinkMsg}
          className='hover:text-gray-500'
          // aria-label='Share this blog on Twitter.'
        >
          <FaShareAlt />
        </span>
      </div>

      {showAlert ? (
        <div className='fixed flex items-center px-5 py-3 space-x-2 bg-gray-200 rounded shadow top-5 right-5 dark:bg-gray-700'>
          <p className='text-slate'>Link copied succesfully</p>
          <span className='p-1 bg-gray-800 rounded-full dark:bg-gray-200'>
            <FaCheck className='text-gray-200 dark:text-gray-800' />
          </span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
