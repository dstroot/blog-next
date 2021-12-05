import { useState } from 'react';
import { decode } from 'html-entities';

export default function SubscribeForm({ status, message, onValidated }) {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  function clearFields() {
    setError('');
    setEmail('');
  }

  function Sanitize(txt) {
    let _txt = parseMessage(message);
    _txt.toLowerCase().includes('already subscribed')
      ? (_txt = 'You are already subscribed.')
      : (_txt = 'Oops some error occured.');

    return _txt;
  }

  function handleSubmit() {
    setError(null);
    if (!email) {
      setError('Please enter a valid email address');
      return null;
    }
    const isFormValidated = onValidated({ EMAIL: email });
    clearFields();
    return email && email.indexOf('@') > -1 && isFormValidated;
  }

  function parseMessage(message) {
    if (!message) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ('0' !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  }

  return (
    <>
      <div className='flex items-center w-full px-3 space-x-2 rounded bg-white dark:bg-gray-200'>
        <input
          className='w-2/3 p-5 rounded focus:outline-none bg-white dark:bg-gray-200'
          type='email'
          value={email}
          placeholder='Enter your email'
          aria-label='input your email address.'
          onChange={(e) => setEmail(e?.target?.value ?? 'null')}
        />
        <button
          aria-label='Subscribe to our Newsletter'
          className='w-1/3 p-2 font-bold rounded bg-gray-300 dark:bg-gray-800'
          onClick={handleSubmit}
        >
          SUBSCRIBE
        </button>
      </div>
      {status === 'success' && status !== 'error' && !error && (
        <div className='mt-2 text-sm'>{decode(message)}</div>
      )}
      {status === 'error' || error ? (
        <div className='mt-2 text-sm text-red-500'>{error || Sanitize(message)}</div>
      ) : null}
    </>
  );
}
