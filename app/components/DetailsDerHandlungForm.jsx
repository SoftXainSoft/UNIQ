// components/StorylineForm.jsx
import React from "react";

function DetailsDerHandlungForm({ onNext, onAddMessageToThread }) {
  const handleDetailsDerHandlungSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const DetailsDerHandlung = {
      Nr: 3,
      DetailsDerHandlung: {
        Thema: formData.get("thema"),
        Konflikt: formData.get("konflikt"),
        Höhepunkte: formData.get("hoehepunkte"),
      },
    };

    await onAddMessageToThread(DetailsDerHandlung);
    onNext();
  };

  return (
    <>
      <form
        onSubmit={handleDetailsDerHandlungSubmit}
        className="w-full max-w-lg p-8 mt-10 bg-white rounded-xl shadow-md"
      >
        <h2 className="text-xl font-semibold mb-4">Details der Handlung</h2>

        {/* Thema */}
        <div className="flex flex-col mb-4">
          <label htmlFor="thema" className="mb-2 font-semibold text-gray-700">
            Zentrales Thema oder Moral:
          </label>
          <input
            type="text"
            name="thema"
            defaultValue="Streit auf der Arbeit durch leistungs druck"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="z.B: Freundschaft, Mut, Familie"
          />
        </div>

        {/* Konflikt */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="konflikt"
            className="mb-2 font-semibold text-gray-700"
          >
            Hauptkonflikt der Geschichte:
          </label>
          <input
            type="text"
            name="konflikt"
            defaultValue="Carsten möchte alle Angestellten in seiner Firma loswerden"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="z.B: Überwindung der Angst, Lösung eines Rätsels"
          />
        </div>

        {/* Höhepunkte */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="hoehepunkte"
            className="mb-2 font-semibold text-gray-700"
          >
            Wichtige Ereignisse oder Wendepunkte:
          </label>
          <textarea
            name="hoehepunkte"
            defaultValue="Carsten hat Krebs"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="3"
            placeholder="z.B: Entdeckung eines Geheimnisses, eine unerwartete Begegnung"
          ></textarea>
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

export default DetailsDerHandlungForm;
