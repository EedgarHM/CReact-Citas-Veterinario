import React from "react";

const Paciente = ({ p, setPaciente, eliminarPaciente }) => {

  const { nombre, email, alta, sintomas, id } = p;

  return (
    <div>
      <div className="mx-5 mb-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {""}
          <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Alta: {""}
          <span className="font-normal normal-case">{alta}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas: {""}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between">
          <button 
            type="button"
            className="py-2 px-10 text-white uppercase font-bold bg-indigo-600 hover:bg-indigo-900 rounded"
            onClick={()=>setPaciente(p)}
          >
              Editar
            </button>


          <button 
            type="button"
            className="py-2 px-10 text-white uppercase font-bold bg-red-600 hover:bg-red-900 rounded"    
            onClick={()=>eliminarPaciente(id)}
        >
            Eliminar
        </button>
        </div>
      </div>
    </div>
  );
};

export default Paciente;
