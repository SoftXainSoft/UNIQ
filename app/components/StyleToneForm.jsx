import React from "react";

function StyleToneForm({ onNext, onAddMessageToThread }) {
  const handleStyleToneSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const StyleToneDetails = {
      Nr: 5,
      StyleTone: {
        Erzählstil: formData.get("erzaehlstil"),
        SprachlicheBesonderheiten: formData.get("sprachlicheBesonderheiten"),
      },
    };

    await onAddMessageToThread(StyleToneDetails);
    onNext();
  };

  return (
    <>
      <form
        onSubmit={handleStyleToneSubmit}
        className="w-full max-w-lg p-8 mt-10 bg-white rounded-xl shadow-md"
      >
        <h2 className="text-xl font-semibold mb-4">
          Stil und Ton der Geschichte
        </h2>

        {/* Erzählstil */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="erzaehlstil"
            className="mb-2 font-semibold text-gray-700"
          >
            Erzählstil der Geschichte:
          </label>
          <select
            name="erzaehlstil"
            defaultValue="abenteuerlich"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Bitte auswählen</option>
            <option value="humorvoll">Humorvoll</option>
            <option value="ernst">Ernst</option>
            <option value="abenteuerlich">Abenteuerlich</option>
            <option value="lehrreich">Lehrreich</option>
          </select>
        </div>

        {/* Sprachliche Besonderheiten */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="sprachlicheBesonderheiten"
            className="mb-2 font-semibold text-gray-700"
          >
            Sprachliche Besonderheiten:
          </label>
          <input
            type="text"
            name="sprachlicheBesonderheiten"
            defaultValue="keine"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="z.B: Reime, einfache Sprache, Wortspiele"
          />
        </div>

        <input
          type="submit"
          value="Speichern"
          className="w-full px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
        />
      </form>
    </>
  );
}

export default StyleToneForm;
