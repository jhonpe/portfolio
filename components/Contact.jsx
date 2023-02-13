import React from 'react'

const Contact = () => {
  return (
    <article id="contact" className="max-w-[800px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-yellow-500">
        Contact
      </h1>
      <form
        action="https://getform.io/f/fee07f86-84a9-49dd-b3cb-a25fa10c5429"
        method="POST"
        encType="multipart/form-data"
        target="_blank"
      >
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2 text-orange-500 font-extrabold">
            NOMBRE
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="name"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2 text-orange-500 font-extrabold">
            Email
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2 text-orange-500 font-extrabold">
            Mensaje
          </label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300"
            rows="10"
            name="message"
          ></textarea>
        </div>
        <button className="bg-sky-300 text-black font-bold mt-4 w-full p-4 rounded-lg">
          Enviar
        </button>
      </form>
    </article>
  )
}

export default Contact
