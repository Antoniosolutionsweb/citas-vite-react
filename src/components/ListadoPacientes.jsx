import { Paciente } from './Paciente'

export const ListadoPacientes = ({pacientes,setPaciente,eliminandoPaciente}) => {
  

  return (
    <div className='md:w-1/2 lg:m-3/5'>

      {pacientes && pacientes.length ?(

        <>

        <h2 className='font-black text-3xl text-center'>
                    Listado de Pacientes
                </h2>
                    <p className='text-lg mt-5 text-center mb-10'>
                        Administra tus
                        <span className='text-indigo-600 font-bold '> Pacientes y Citas</span>
                    </p>

                  

                { pacientes.map( (paciente) => (
                    <Paciente 
                      key={paciente.id}
                      paciente={paciente}
                      setPaciente={setPaciente}
                      eliminandoPaciente={eliminandoPaciente}
                    />
                ))}

        
        
        </>

      ): <h2 className='font-black text-3xl text-center'>
            No hay pacientes registrados
        </h2>
  
  }
        
           
      

    </div>
  )
}
