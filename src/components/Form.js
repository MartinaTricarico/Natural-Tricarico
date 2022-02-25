import React, { useState } from "react";

const Formulario = () => {
  const [inputNombre, cambiarInputNombre] = useState("");
  const [inputApellido, cambiarInputApellido] = useState("");
  const [inputCorreo, cambiarInputCorreo] = useState("");
  const [inputTelefono, cambiarInputTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Formulario Enviado!");
  };

  const handleInputNombre = (e) => {
    cambiarInputNombre(e.target.value);
  };

  const handleInputApellido = (e) => {
    cambiarInputApellido(e.target.value);
  };

  const handleInputCorreo = (e) => {
    cambiarInputCorreo(e.target.value);
  };

  const handleInputTelefono = (e) => {
    cambiarInputTelefono(e.target.value);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit} className="formulario">
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            id="nombre"
            value={inputNombre}
            onChange={handleInputNombre}
          />
        </div>

        <div>
          <label htmlFor="nombre">Apellido</label>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            id="nombre"
            value={inputApellido}
            onChange={handleInputApellido}
          />
        </div>

        <div>
          <label htmlFor="correo">Correo</label>
          <input
            type="text"
            name="correo"
            placeholder="Correo"
            id="correo"
            value={inputCorreo}
            onChange={handleInputCorreo}
          />
        </div>

        <div>
          <label htmlFor="correo">Correo</label>
          <input
            type="text"
            name="correo"
            placeholder="Correo"
            id="correo"
            value={inputTelefono}
            onChange={handleInputTelefono}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Formulario;
