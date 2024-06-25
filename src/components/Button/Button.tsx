import { Modal } from '@components/Modal/Modal';

type ButtonProps = {
  type: 'submit' | 'button' | 'reset' | undefined;
  content: string;
  disabled: boolean;
  onclick?: () => void;
  showModal?: boolean;
};

export const Button = ({ type, content, disabled, onclick, showModal }: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        className={`text-white focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center ${!disabled ? 'dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 focus:ring-purple-300 bg-purple-700 hover:bg-purple-800' : 'dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900 focus:ring-gray-300 bg-gray-700 hover:bg-gray-800 cursor-not-allowed'}`}
        onClick={onclick}
        disabled={disabled}
      >
        {content}
      </button>

      <Modal show={showModal as boolean} onclose={onclick} />
    </>
  );
};
