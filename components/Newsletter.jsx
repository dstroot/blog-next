import MailchimpSubscribe from 'react-mailchimp-subscribe';
import useSWR from 'swr';
import SubscribeForm from './SubscribeForm';

const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

export const Newsletter = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: subs, error } = useSWR('/api/subscribers', fetcher);

  return (
    <div className='flex max-w-6xl py-12 mx-auto'>
      <div className='w-full mx-5 bg-gray-100 rounded dark:bg-gray-600'>
        <div className='grid grid-cols-1 gap-4 p-5 md:grid-cols-2'>
          <div className='flex flex-col justify-center w-full space-y-3'>
            <h2 className='text-2xl font-black md:text-3xl'>Subscribe to the Newsletter</h2>
            <h3 className='text-xl text-gray-700 dark:text-gray-300'>
              Interesting stuff sent with discretion.
            </h3>
          </div>
          <div className='flex flex-col justify-center w-full space-y-3'>
            <MailchimpSubscribe
              url={MAILCHIMP_URL}
              render={({ subscribe, status, message }) => (
                <SubscribeForm
                  status={status}
                  message={message}
                  onValidated={(FormData) => subscribe(FormData)}
                />
              )}
            />

            <span className='text-sm text-gray-500 dark:text-gray-400'>
              {!subs ? 'Loading...' : subs + ' Subscribers.'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
