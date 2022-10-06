const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, sobrenome, email, fecha, sintomas, id} = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('Tem certeza que quer apagar?');

    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nome: {''}
        <span className='font-normal normal-case'>{nombre}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Sobrenome: {''}
        <span className='font-normal normal-case'>{sobrenome}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Email: {''}
        <span className='font-normal normal-case'>{email}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Data: {''}
        <span className='font-normal normal-case'>{fecha}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Motivo: {''}
        <span className='font-normal normal-case'>{sintomas}</span>
      </p>

      <div className='flex justify-between mt-10'>
        <button
          type='button'
          className='py-2 px-10 bg-sky-600 hover:bg-sky-700 text-white font-bold uppercase rounded-lg'
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          type='button'
          className='py-2 px-10 bg-rose-600 hover:bg-rose-700 text-white font-bold uppercase rounded-lg'
          onClick={handleEliminar}
        >
          Apagar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
