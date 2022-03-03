import { useState, useEffect } from 'react';
import { Dialog, Combobox } from '@headlessui/react';

export function Test() {
  let [isOpen, setIsOpen] = useState(false);

  /* Handle Keyboard Input */
  useEffect(() => {
    function handleKeyDown(event) {
      event.preventDefault();
      event.stopPropagation();

      /* e key for error - ha! */
      if (event.key === 'e' && (event.ctrlKey || event.metaKey)) {
        setIsOpen((value) => !value);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  /* minimal code to reproduce the issue */
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='fixed top-0 z-10'>
      <Combobox>
        <div>Hello</div>
        <Combobox.Input /> {/* comment this out to see it work properly */}
      </Combobox>
    </Dialog>
  );
}
