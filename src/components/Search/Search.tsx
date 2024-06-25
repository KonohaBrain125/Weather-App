import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@components/Button/Button';
import { LocationContext } from '@context/LocationContext';

type formDataProps = {
  region: string;
};

export const Search = () => {
  const { setRegion } = useContext(LocationContext);
  const [disable, setDisable] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<formDataProps>();

  const onSubmit = (data: formDataProps) => {
    setRegion(data.region);
  };

  const handleChange = (e: { target: { value: string } }) => {
    if (e.target.value !== '') {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center">
        <div className="flex flex-row items-center gap-2 w-3/6">
          <input
            type="text"
            id="region"
            {...register('region')}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the region you want to know the weather for ..."
            onChange={handleChange}
          />
          <Button
            content="Weather"
            disabled={disable}
            type="submit"
            showModal={showModal}
            onclick={handleModal}
          />
        </div>
      </div>
    </form>
  );
};
