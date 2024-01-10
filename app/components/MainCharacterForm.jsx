import React, { useState } from "react";

function MainCharacterForm({ onNext, onAddMessageToThread }) {
  const [mainCharacter, setMainCharacter] = useState({
    name: "",
    haarfarbe: "#000000",
    augenfarbe: "",
    alter: 10,
    geschlecht: "",
    persoenlichkeit: "",
    hobbies: "",
    besondereMerkmale: "",
  });

  const handleChange = (e) => {
    setMainCharacter({ ...mainCharacter, [e.target.name]: e.target.value });
  };

  const handleMainCharacterSubmit = async (event) => {
    event.preventDefault();
    await onAddMessageToThread({ Nr: 1, Hauptfigur: mainCharacter });
    onNext();
  };

  return (
    <form
      onSubmit={handleMainCharacterSubmit}
      className="w-full max-w-lg p-8 mt-10 bg-white rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      <h2 className="text-xl font-semibold mb-4">Details der Hauptfigur</h2>
      {/* Name der Hauptfigur */}
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="mb-2 font-semibold text-gray-700">
          Name der Hauptfigur:
        </label>
        <input
          type="text"
          name="name"
          defaultValue="Pascal"
          className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
          placeholder="z.B: Lisa Müller"
        />
      </div>
      {/* Haarfarbe als Farbauswähler */}
      <div className="flex flex-col mb-4">
        <label htmlFor="haarfarbe" className="mb-2 font-semibold text-gray-700">
          Haarfarbe:
        </label>
        <input
          type="color"
          name="haarfarbe"
          value={mainCharacter.haarfarbe}
          onChange={handleChange}
          className="border border-purple-300 rounded-lg cursor-pointer"
        />
      </div>
      {/* Augenfarbe */}
      <div className="flex flex-col mb-4">
        <label
          htmlFor="augenfarbe"
          className="mb-2 font-semibold text-gray-700"
        >
          Augenfarbe:
        </label>
        <input
          type="text"
          name="augenfarbe"
          defaultValue="blau"
          className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
          placeholder="z.B: Blau, Grün, Braun"
        />
      </div>
      {/* Alter als Schieberegler */}
      <div className="flex flex-col mb-4">
        <label htmlFor="alter" className="mb-2 font-semibold text-gray-700">
          Alter der Hauptfigur ({mainCharacter.alter} Jahre):
        </label>
        <input
          type="range"
          name="alter"
          min="5"
          max="100"
          value={mainCharacter.alter}
          onChange={handleChange}
          className="slider cursor-pointer"
        />
      </div>
      {/* Geschlecht der Hauptfigur */}
      <div className="flex flex-col mb-4">
        <label
          htmlFor="geschlecht"
          className="mb-2 font-semibold text-gray-700"
        >
          Geschlecht der Hauptfigur:
        </label>
        <select
          name="geschlecht"
          defaultValue="maennlich"
          className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Bitte auswählen</option>
          <option value="weiblich">Weiblich</option>
          <option value="maennlich">Männlich</option>
          <option value="anders">Anders</option>
        </select>
      </div>
      {/* Persönlichkeit */}
      <div className="flex flex-col mb-4">
        <label
          htmlFor="persoenlichkeit"
          className="mb-2 font-semibold text-gray-700"
        >
          Persönlichkeit der Hauptfigur:
        </label>
        <input
          type="text"
          name="persoenlichkeit"
          defaultValue="Mutig wie ein Ritter"
          className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="z.B: mutig, neugierig, freundlich"
        />
      </div>
      {/* Hobbies */}
      <div className="flex flex-col mb-4">
        <label htmlFor="hobbies" className="mb-2 font-semibold text-gray-700">
          Hobbies der Hauptfigur:
        </label>
        <input
          type="text"
          name="hobbies"
          defaultValue="Flugzeug fliegen"
          className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="z.B: Lesen, Sport, Malen"
        />
      </div>
      {/* Besondere Merkmale */}
      <div className="flex flex-col mb-4">
        <label
          htmlFor="besondereMerkmale"
          className="mb-2 font-semibold text-gray-700"
        >
          Besondere Merkmale:
        </label>
        <textarea
          name="besondereMerkmale"
          defaultValue="Große Muttermale"
          className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="3"
          placeholder="z.B: Narbe am Arm, Sommersprossen"
        ></textarea>
      </div>
      <input
        type="submit"
        value="Speichern"
        className="w-full px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
      />
    </form>
  );
}

export default MainCharacterForm;
