import { FormEvent, useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { FiTrash } from "react-icons/fi";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

export default function Admin() {
  const [urlInput, setUrlInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [textColorInput, setTextColorInput] = useState("#f1f1f1");
  const [bgColorInput, setBgColorInput] = useState("#121212");

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    addDoc(collection(db, "links"), {
      name: nameInput,
      url: urlInput,
      bg: bgColorInput,
      color: textColorInput,
      created: new Date()
    })
    .then(() => {
      setNameInput("")
      setUrlInput("")
    })
    .catch((error) => {
      console.log("ERRO AO CADASTRAR NO BANCO" + error)
    })
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <form
        className="flex flex-col mt-8 mb-3 w-full max-w-xl"
        onSubmit={handleRegister}
      >
        <label className="text-white font-medium mt-2 mb-2">Nome do Link</label>
        <Input
          placeholder="Digite o nome do Link..."
          value={nameInput}
          required
          onChange={(e) => setNameInput(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">Url do Link</label>
        <Input
          type="url"
          placeholder="Digite a url..."
          value={urlInput}
          required
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section className="flex my-4 gap-5">
          <div className="flex gap-4">
            <label className="text-white font-medium mt-2 mb-2">
              Fundo do Link
            </label>

            <input
              type="color"
              value={bgColorInput}
              required
              onChange={(e) => setBgColorInput(e.target.value)}
            />
          </div>

          <div className="flex gap-4">
            <label className="text-white font-medium mt-2 mb-2">
              Cor do Link
            </label>

            <input
              type="color"
              value={textColorInput}
              required
              onChange={(e) => setTextColorInput(e.target.value)}
            />
          </div>
        </section>

        {nameInput !== "" && (
          <div className="flex items-center justify-start flex-col mb-7 p-1 border-gray-100/25 border rounded-md">
            <label className="text-white font-medium mt-2 mb-2">
              Veja como está ficando
            </label>

            <article
              className="w-11/12 max-w-lg felx flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3"
              style={{
                marginBottom: 8,
                marginTop: 8,
                backgroundColor: bgColorInput,
              }}
            >
              <p className="font-medium" style={{ color: textColorInput }}>
                {nameInput}
              </p>
            </article>
          </div>
        )}

        <button
          type="submit"
          className="mb-7 bg-blue-600 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center"
        >
          Cadastrar
        </button>
      </form>

      <h2 className="text-white font-bold mb-4 text-2xl">Meus links</h2>

      <article className="flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-2 mb-2 select-none">
        <p>Canal do youtube</p>
        <div>
          <button className="border border-dashed p-1 rounded bg-neutral-800">
            <FiTrash size={18} color="#fff" />
          </button>
        </div>
      </article>
    </div>
  );
}
