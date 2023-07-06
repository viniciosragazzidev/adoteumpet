import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { handleNotification, setMessage } from "../../redux/notificationSlice";
type Inputs = {
  name: string;
  email: string;
  telefone: string;
  text: string;
};

const FormularioComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (text && email && telefone && name) {
      setEmail("");
      setTelefone("");
      setName("");
      setText("");

      dispatch(handleNotification());
    } else {
    }
  };

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [telefone, setTelefone] = useState("");

  const [text, setText] = useState("");

  return (
    <form
      className="formulario flex flex-col gap-10 text-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="formArea flex flex-col gap-1">
        <label htmlFor="nome" className="font-bold text-prussian_blue text-sm">
          Nome
        </label>
        <div className="inputArea w-full h-10 border-b border-blue-200 ">
          <input
            id="name"
            {...register("name", { required: true })}
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
            placeholder="Seu nome"
            className="w-full h-full bg-transparent focus:outline-none focus:border-b focus:border-b-carolina_blue"
          />
          {errors.name && (
            <span className="text-red-500 py-3 font-normal text-xs">
              Nome é obrigatorio na mensagem
            </span>
          )}
        </div>
      </div>
      <div className="formArea flex flex-col gap-1">
        <label htmlFor="email" className="font-bold text-prussian_blue text-sm">
          Email
        </label>
        <div className="inputArea w-full h-10 border-b border-blue-200 ">
          <input
            id="email"
            {...register("email", { required: true })}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="Seu email"
            className="w-full h-full bg-transparent focus:outline-none focus:border-b focus:border-b-carolina_blue"
          />
          {errors.email && (
            <span className="text-red-500 py-3 font-normal text-xs">
              Email é obrigatório
            </span>
          )}
        </div>
      </div>
      <div className="formArea flex flex-col gap-1">
        <label htmlFor="text" className="font-bold text-prussian_blue text-sm">
          Telefone
        </label>
        <div className="inputArea formNumber w-full h-10 border-b border-blue-200 ">
          <input
            id="telefone"
            {...register("telefone", {
              required: true,

              valueAsNumber: true,
            })}
            onChange={(e) => {
              setTelefone(e.target.value);
            }}
            value={telefone}
            type="tel"
            placeholder="Seu telefone"
            className="w-full h-full bg-transparent focus:outline-none focus:border-b focus:border-b-carolina_blue"
          />
        </div>
      </div>

      <div className="formArea flex flex-col gap-3">
        <label htmlFor="text" className="font-bold text-prussian_blue text-sm">
          O que precisa de nós?
        </label>
        <div className="inputArea formNumber w-full h-36 border-b border-blue-200 ">
          <textarea
            id="text"
            {...register("text", { required: true })}
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            placeholder="Digite aqui..."
            className="w-full h-full bg-transparent focus:outline-none focus:border-b focus:border-b-carolina_blue"
          ></textarea>
          {errors.text && (
            <span className="text-red-500 py-3 font-normal text-xs">
              Assunto é obrigatorio na mensagem
            </span>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-full px-5 py-2 bg-carolina_blue text-white font-medium text-sm rounded-md cursor-pointer transition-all hover:opacity-95`"
      >
        Enviar
      </button>
    </form>
  );
};

export default FormularioComponent;
