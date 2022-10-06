import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setSobrenome(paciente.sobrenome);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Validación del Formulario
    if ([nombre, sobrenome, email, fecha, sintomas].includes('')) {
      console.log('Hay Al Menos un campo vacio');

      setError(true);
      return;
    }

    setError(false);

    // Objeto de Paciente
    const objetoPaciente = {
      nombre,
      sobrenome,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      // Editando el Registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map(pacienteState =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      // Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciar el form
    setNombre('');
    setSobrenome('');
    setEmail('');
    setFecha('');
    setSintomas('');
  };

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>
        Acompanhamento de pacientes
      </h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Adicionar {''}
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 font-bold'>
          pacientes
        </span>
      </p>

      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
      >
        {error && (
          <Error>
            <p>Por favor preencha todos os campos do formulário</p>
          </Error>
        )}
        <div className='mb-5'>
          <label
            htmlFor='cliente'
            className='block text-gray-700 uppercase font-bold'
          >
            Nome
          </label>
          <input
            id='cliente'
            type='text'
            placeholder='Nome do paciente'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='sobrenome'
            className='block text-gray-700 uppercase font-bold'
          >
            Sobrenome
          </label>
          <input
            id='sobrenome'
            type='text'
            placeholder='Sobrenome do paciente'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={sobrenome}
            onChange={e => setSobrenome(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block text-gray-700 uppercase font-bold'
          >
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='Email para contato'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='alta'
            className='block text-gray-700 uppercase font-bold'
          >
            Data
          </label>
          <input
            id='alta'
            type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={fecha}
            onChange={e => setFecha(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='sintomas'
            className='block text-gray-700 uppercase font-bold'
          >
            Motivo{' '}
          </label>
          <textarea
            id='sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Motivo da consulta'
            value={sintomas}
            onChange={e => setSintomas(e.target.value)}
          />
        </div>

        <input
          type='submit'
          className='bg-sky-600 w-full p-3 text-white uppercase font-bold hover:bg-sky-700 cursor-pointer transition-colors rounded-md'
          value={paciente.id ? 'Confirmar alterações' : 'Adicionar Paciente'}
        />
      </form>
    </div>
  );
};

export default Formulario;
