import React from "react";
import { useEffect } from "react/cjs/react.development";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  
  useEffect(()=>{
    if(pacientes.length>0)
    console.log("Nuevo paciente")
  },[pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
        <h2 className="font-black text-3xl text-center">
          {" "}
          Listado de Pacientes{" "}
        </h2>
        <p className="text-xl mt-5 text-center">
        Administra tu {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center"> Sin Pacientes que administrar </h2>
          <p className="text-xl mt-5 mb-10 text-center">Comienza agregando tus <span className="text-indigo-600 font-bold">Pacientes</span> </p>
        </>
        
        
      
      )}


      
      {pacientes.map((p) => (
        <Paciente key={p.id} p={p} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
      ))}
    </div>
  );
};

export default ListadoPacientes;
