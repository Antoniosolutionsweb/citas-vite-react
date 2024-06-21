import React, { useState, useEffect } from 'react'
import { Error } from './Error';

export const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {



    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError ] = useState(false)

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)

        }
     
    }, [paciente])
    

    const generarId =() =>{
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

        return fecha + random
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
       if([nombre,propietario,email,fecha,sintomas].includes('')){
        setError(true)
        return
       }

       setError(false)

       //Objeto de Pacientes

       const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        
        

       }

       if( paciente.id){
        // editando un registro

        objetoPaciente.id = paciente.id
        const pacienteActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente:pacienteState)
        setPacientes(pacienteActualizado)
        setPaciente({})

       } else{
        // creando nuevo registro

        objetoPaciente.id = generarId();
        setPacientes([...pacientes,objetoPaciente])

       }

    

       // reiniciar form
       setNombre('')
       setPropietario('')
       setEmail('')
       setFecha('')
       setSintomas('')

     

    }
  return (
    <div className='md:w-1/2 lg:m-2/5 mx-5'>
        <h2 className='font-black text-3xl text-center'>
            Seguimiento de Pacientes
        </h2>
            <p className='text-lg mt-5 text-center mb-10'>
                Agrega Pacientes y
                <span className='text-indigo-600 font-bold '> Administralos</span>
            </p>
            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
                {error && <Error/> }
                <div className='mb-5'>
                    <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Nombre de la Mascota</label>
                    <input 
                        type="text"
                        id='mascota'
                        placeholder='Ingrese el Nombre'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Nombre del Propietario</label>
                    <input 
                        type="text"
                        id='propietario'
                        placeholder='Ingrese el propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email del Propietario</label>
                    <input 
                        type="email"
                        id='email'
                        placeholder='Ingrese el email propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>fecha de Alta</label>
                    <input 
                        type="date"
                        id='alta'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>Sintomas del Paciente</label>
                    <textarea  
                        id="sintomas"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        placeholder='Ingrese los sintomas del paciente'
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value)}
                    />
                    
                </div>

                <input type="submit"
                    className='bg-indigo-600 w-full  p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md'
                    value={paciente.id ? 'Editar Paciente': 'Agregar paciente'}
                />

            </form>
            
        
    </div>
  )
}
