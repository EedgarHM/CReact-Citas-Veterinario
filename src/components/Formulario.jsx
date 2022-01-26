import { useState, useEffect } from "react";
import { Error } from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarID = () => {
    return Date.now() + Math.random().toString(26).substring(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validacion del formulario

    if ([nombre, propietario, email, sintomas].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    // Construyendo el objeto del paciente
    const objPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
    };

    if (paciente.id) {
      // Cuando se edita un registro

      objPaciente.id = paciente.id;

      // iteramos sobre el arreglo de pacientes para encontrar el objeto que vamos a actualizar
      // se compara por el id
      const objPacienteActualizado = pacientes.map((pacienteState) => {
        if (pacienteState.id === paciente.id) {
          return objPaciente;
        } else {
          return pacienteState;
        }
      });

      
      setPacientes(objPacienteActualizado);
      setPaciente({})

    } else {
      objPaciente.id = generarID();
      setPacientes([...pacientes, objPaciente]);
    }

    // reiniciando el form una vez se haya guardado el nuevo objeto
    setNombre("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>

      <p className="text-lg mt-5 text-center">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10  px-5 mb-10"
        action=""
        onSubmit={handleSubmit}
      >
        {error ? (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        ) : null}

        <div className="mb-5">
          <label className="block text-gray-700 uppercase" htmlFor="mascota">
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="w-full p-2 mt-2 border-2 placeholder-slate-800 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase"
            htmlFor="propietario"
          >
            Nombre del Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="w-full p-2 mt-2 border-2 placeholder-slate-800 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Su Email"
            className="w-full p-2 mt-2 border-2 placeholder-slate-800 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase" htmlFor="alta">
            Fecha de Alta
          </label>
          <input
            id="alta"
            type="date"
            placeholder="Nombre de la Mascota"
            className="w-full p-2 mt-2 border-2 placeholder-slate-800 rounded-md"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase" htmlFor="sintomas">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-slate-800 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />

          <input
            type="submit"
            name=""
            id=""
            className="bg-indigo-600 w-full hover:bg-indigo-900 cursor-pointer text-zinc-50 p-3 font-bold"
            value={paciente.id ? "Editar paciente" : "Agregar Paciente"}
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
