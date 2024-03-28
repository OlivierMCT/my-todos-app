import { useForm } from 'react-hook-form';

const TodoAdd = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(watch());

  function addNewOne(e) {
    console.log('coucou', e);
  }
  return (
    <>
      <form onSubmit={handleSubmit(addNewOne)}>
        <div>
          <MyInput
            register={{
              ...register('description', { required: true, maxLength: 10 }),
            }}
            placeholder={'description'}
            error={errors.description}
          />
        </div>
        <MyInput
          register={{ ...register('categorie') }}
          placeholder='categorie'
        />
        <MyInput
          register={{
            ...register('échéance', {
              required: true,
              valueAsDate: true,
            }),
          }}
          placeholder='échéance'
          type='date'
        />

        <MyInput
          register={{
            ...register('latitude', {
              required: true,
              min: -90,
              max: 90,
              valueAsNumber: true,
            }),
          }}
          placeholder='latitude'
          type='number'
          error={errors.latitude}
        />

        <input
          {...register('longitude')}
          placeholder='longitude'
          type='number'
        />

        <button type='submit'>Valider</button>
      </form>
    </>
  );
};

const MyInput = ({ register, ...other }) => {
  return (
    <div>
      <input {...register} placeholder={other.placeholder} type={other.type} />

      {other.error?.type == 'required' && (
        <span className='text-danger'>obligatoire</span>
      )}
      {other.error?.type == 'maxLength' && (
        <span className='text-danger'>trop long</span>
      )}
      {other.error?.type == 'min' && (
        <span className='text-danger'>trop petit</span>
      )}
      {other.error?.type == 'max' && (
        <span className='text-danger'>trop grand</span>
      )}
    </div>
  );
};

export default TodoAdd;
