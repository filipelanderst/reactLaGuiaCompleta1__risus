import Paciente from './Paciente';

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen '>
      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center '>
            Lista de Pacientes
          </h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Administração {''}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 font-bold '>
              pacientes
            </span>
          </p>

          {pacientes.map(paciente => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>
            Nenhum paciente foi adicionado
          </h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Os pacientes adicionados {''}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 font-bold'>
              aparecerão aqui
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
