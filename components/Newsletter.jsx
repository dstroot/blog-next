import MailchimpSubscribe from 'react-mailchimp-subscribe';
import useSWR from 'swr';
import SubscribeForm from './SubscribeForm';

const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

export const Newsletter = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: subs, error } = useSWR('/api/subscribers', fetcher);

  return (
    <div className='flex py-12 mx-auto max-w-6xl'>
      <div className='mx-5 w-full rounded bg-gray-100 dark:bg-gray-600'>
        <div className='grid grid-cols-1 gap-4 p-5 md:grid-cols-2'>
          <div className='flex flex-col justify-center space-y-3 w-full'>
            <h2 className='text-3xl font-black'>Subscribe to the Newsletter</h2>
            <p className='text-sm'>Interesting stuff sent with discretion.</p>
          </div>
          <div className='flex flex-col justify-center space-y-3 w-full'>
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

            <span className='text-sm'>{!subs ? '' : subs + ' Subscribers.'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
