import { useContext } from 'react';
import { LocationContext } from '@context/LocationContext';
import { useWeather } from 'hooks/useWeather';

type ModalProps = {
  show: boolean;
  onclose?: () => void;
};

export const Modal = ({ show, onclose }: ModalProps) => {
  const { location } = useContext(LocationContext);
  const { loading, error, data } = useWeather();

  return (
    <>
      {show && (
        <div
          id="static-modal"
          data-modal-backdrop="static"
          tabIndex={-1}
          aria-hidden={`${show ? 'false' : 'true'}`}
          className={`flex ${show ? 'bg-gray-900/50' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full text-center">
            {error ? (
              <div
                className={`${loading ? 'bg-gray-200/50' : ''} relative bg-white rounded-lg shadow-lg max-h-full dark:bg-gray-700`}
              >
                {loading && (
                  <div className="flex justify-center items-center absolute w-full top-2/4">
                    <svg
                      aria-hidden="true"
                      className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3
                    className={`${loading ? 'text-gray-900/50' : 'text-gray-900 dark:text-white'} text-xl font-semibold`}
                  >
                    The Weather of{' '}
                    <span
                      className={`${loading ? 'text-blue-900/50' : 'text-blue-900'} text-xl`}
                    >{`"${location}"`}</span>
                  </h3>
                  <button
                    type="button"
                    className={`${loading ? 'cursor-not-allowed' : 'hover:bg-gray-200 hover:text-gray-900'} text-gray-400 bg-transparent   rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white`}
                    data-modal-hide="static-modal"
                    onClick={onclose}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                  <div className="flex flex-row justify-around items-center">
                    <img src={data?.weather_icons} className="rounded-full" />
                    <p className="text-lg">{data?.temperature}</p>
                    <div className="flex flex-col justify-start text-left">
                      <p>Wind: {data?.wind_speed}</p>
                      <p>Precip: {data?.precip}</p>
                      <p>Presure: {data?.pressure}</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="static-modal"
                    type="button"
                    className={`${loading ? 'bg-gray-200/50 text-gray-900/50 cursor-not-allowed' : 'bg-white text-gray-900 hover:bg-gray-100 hover:text-blue-700'} py-2.5 px-5 ms-3 text-sm font-medium  focus:outline-none rounded-lg border border-gray-200   focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}
                    onClick={onclose}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                  <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500"></h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                      Something's missing.
                    </p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                      Sorry, something went wrong with weather API. You'll find lots to explore on
                      the home page.{' '}
                    </p>
                    <a
                      className="inline-flex bg-purple-700 text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
                      onClick={onclose}
                    >
                      Back to Homepage
                    </a>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      )}
    </>
  );
};
