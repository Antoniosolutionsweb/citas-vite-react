import React from 'react'

export const Paciente = ({paciente,setPaciente,eliminandoPaciente}) => {
    const {nombre,propietario,email,fecha,sintomas,id} = paciente

    const handleEliminar = () =>{
        const res = confirm('Desea eliminar este registro')

        if(res){
            eliminandoPaciente(id)
        }
    }
  return (
    <div className='mx-5 bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
                <p className='text-gray-700 uppercase font-bold m-3'>
                    Nombre de la Mascota: {""}
                    <span className='font-normal normal-case'>{nombre}</span>
                </p>
                <p className='text-gray-700 uppercase font-bold m-3'>
                    Nombre del Propietari: {""}
                    <span className='font-normal normal-case'>{propietario}</span>
                </p>
                <p className='text-gray-700 uppercase font-bold m-3'>
                    Email: {""}
                    <span className='font-normal normal-case'>{email}</span>
                </p>
                <p className='text-gray-700 uppercase font-bold m-3'>
                    Fecha de Alta: {""}
                    <span className='font-normal normal-case'>{fecha}</span>
                </p>
                <p className='text-gray-700 uppercase font-bold m-3'>
                    Sintomas: {""}
                    <span className='font-normal normal-case'>{sintomas}</span>
                </p>

                <div>
                    <button 
                        type='button'
                        className='py-2 px-10 m-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                        onClick={()=>setPaciente(paciente)}
                    >
                        Editar

                    </button>
                    <button 
                        type='button'
                        className='py-2 px-10  m-2 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                        onClick={handleEliminar}

                    >
                        Eliminar

                    </button>
                </div>

    </div>
  )
}
