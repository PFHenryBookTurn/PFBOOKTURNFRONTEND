import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBusiness } from "../../../redux/actions/business/postBusiness";
import { getUserByEmail } from "../../../redux/actions/users/getUsers";
import AOS from "aos";
import "aos/dist/aos.css";
import swal from 'sweetalert2'

function valida(input) {
  let errors = {};

  //only letters
  if (!input.name) {
    errors.name = "Nombre requerido ";
  }
  //letters and numbers
  if (!input.address) {
    errors.address = "Direccion requerida";
  }

  // numeros
  if (!input.telephone) {
    errors.telephone = "Telefono requerido";
  }

  //email
  if (!input.email) {
    errors.email = "Email requerido";
  }

  //only numbers
  if (!input.openhour) {
    errors.openhour = "Horario de apertura requerido";
  } else if (input.openhour < 0 || input.openhour > 24) {
    errors.openhour = "Debes ingresasr un numero entre 0 y 24";
  }

  //only numbers
  if (!input.closehour) {
    errors.closehour = "Horario de cierre requerido";
  } else if (input.closehour < 0 || input.closehour > 24) {
    errors.closehour = "Debes ingresasr un numero entre 0 y 24";
  }

  return errors;
}

const Step2 = ({
  step,
  setStep,
  userEmail,
  setEmailBusiness,
  finalData,
  setFinalData,
}) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.users);
  const [errors, setErrors] = useState({});
  
  const [input, setInput] = useState({
    name: "",
    email: "",
    address: "",
    telephone: "",
    openhour: "",
    closehour: "",
    user:"",
   
  });
  console.log(input, "soy lo que se va a postear");
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      user: userInfo[0]?.id
    });
     // validar para que no rompa
    // setFinalData({
    //   ...finalData,
    //   name: input.name,
    //   email: input.email,
    //   address: input.address,
    //   telephone: input.telephone,
    //   openhour: input.openhour,
    //   closehour: input.closehour,
    // });
    setErrors(
      valida({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = async(e) => {
    setEmailBusiness(input.email);
   dispatch(postBusiness(input));
    await swal.fire({
      title:'Empresa Creada!',
      text: 'Su empresa fue creada satisfactoriamente ',
      icon: 'success',
      timer: 2500,
      stopKeydownPropagation: true,
    });
    setStep(3);
  };

  useEffect(() => {
    dispatch(getUserByEmail(userEmail));
    AOS.init();
  }, [userEmail, dispatch]);

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col justify-center items-center min-h-screen"
    >
      <div>
        <h1 className="font-cool_g text-3xl mb-8">
          Ahora, contanos de tu empresa...
        </h1>
        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs font-medium text-gray-700">
            Nombre de tu Empresa
          </span>

          <input
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            placeholder="Tu negocio"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
        {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs font-medium text-gray-700"> Dirección </span>

          <input
            type="text"
            name="address"
            onChange={(e) => handleChange(e)}
            placeholder="Calle Ejemplo 323"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
        {errors.address && (
          <p className="text-xs text-red-600">{errors.address}</p>
        )}
        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs font-medium text-gray-700"> Teléfono </span>

          <input
            type="text"
            name="telephone"
            onChange={(e) => handleChange(e)}
            placeholder="111222333"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
        {errors.telephone && (
          <p className="text-xs text-red-600">{errors.telephone}</p>
        )}
        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs font-medium text-gray-700">
            {" "}
            Email de tu Empresa
          </span>

          <input
            type="email"
            name="email"
            onChange={(e) => handleChange(e)}
            placeholder="email@empresa.com"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
        {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs font-medium text-gray-700">
            {" "}
            Hora de apertura{" "}
          </span>

          <input
            type="text"
            name="openhour"
            onChange={(e) => handleChange(e)}
            placeholder="00-24"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
        {errors.openhour && (
          <p className="text-xs text-red-600">{errors.openhour}</p>
        )}
        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs font-medium text-gray-700">
            {" "}
            Hora de cierre{" "}
          </span>

          <input
            type="text"
            name="closehour"
            onChange={(e) => handleChange(e)}
            placeholder="00-24"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
        {errors.closehour && (
          <p className="text-xs text-red-600">{errors.closehour}</p>
        )}

        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
              
            }}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
