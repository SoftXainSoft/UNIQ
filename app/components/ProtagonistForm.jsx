import React from "react";

function ProtagonistForm({ onNext, onAddMessageToThread }) {
  const handleProtagonistSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const protagonistDetails = {
      Nr: 2,
      Protagonist: {
        Name: formData.get("name"),
        Haarfarbe: formData.get("protagonistHaarfarbe"),
        Augenfarbe: formData.get("protagonistAugenfarbe"),
        Alter: formData.get("protagonistAlter"),
        Geschlecht: formData.get("protagonistGeschlecht"),
        Persönlichkeit: formData.get("protagonistPersoenlichkeit"),
        Hobbies: formData.get("protagonistHobbies"),
        protagonistBesondereMerkmale: formData.get(
          "protagonistBesondereMerkmale"
        ),
        Charakteristika: formData.get("charakteristika"),
        protagonistBeziehung: formData.get("protagonistBeziehung"),
      },
    };

    await onAddMessageToThread(protagonistDetails);
    onNext();
  };

  return (
    <>
      <form
        onSubmit={handleProtagonistSubmit}
        className="w-full max-w-lg p-8 mt-10 bg-white rounded-xl shadow-md"
      >
        <h2 className="text-xl font-semibold mb-4">
          Details des Protagonisten
        </h2>

        {/* Name des Protagonisten */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="protagonistName"
            className="mb-2 font-semibold text-gray-700"
          >
            Name des Protagonisten:
          </label>
          <input
            type="text"
            name="protagonistName"
            defaultValue="Carsten"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="z.B: Max Mustermann"
          />
        </div>

        {/* Haarfarbe */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="protagonistHaarfarbe"
            className="mb-2 font-semibold text-gray-700"
          >
            Haarfarbe:
          </label>
          <input
            type="text"
            name="protagonistHaarfarbe"
            defaultValue="dunkel Braun"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="z.B: Blond, Braun, Schwarz"
          />
        </div>

        {/* Augenfarbe */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="protagonistAugenfarbe"
            className="mb-2 font-semibold text-gray-700"
          >
            Augenfarbe:
          </label>
          <input
            type="text"
            name="protagonistAugenfarbe"
            defaultValue="Grün-Blau"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="z.B: Blau, Grün, Braun"
          />
        </div>

        {/* Alter */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="protagonistAlter"
            className="mb-2 font-semibold text-gray-700"
          >
            Alter:
          </label>
          <input
            type="number"
            name="protagonistAlter"
            defaultValue={32}
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="z.B: 30"
          />
        </div>

        {/* Geschlecht */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="protagonistGeschlecht"
            className="mb-2 font-semibold text-gray-700"
          >
            Geschlecht:
          </label>
          <select
            name="protagonistGeschlecht"
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
            htmlFor="protagonistPersoenlichkeit"
            className="mb-2 font-semibold text-gray-700"
          >
            Persönlichkeit:
          </label>
          <input
            type="text"
            name="protagonistPersoenlichkeit"
            defaultValue="Aufgeschlossen immer hilfsbereit"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="z.B: abenteuerlustig, fürsorglich, witzig"
          />
        </div>

        {/* Hobbies */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="protagonistHobbies"
            className="mb-2 font-semibold text-gray-700"
          >
            Hobbies:
          </label>
          <input
            type="text"
            name="protagonistHobbies"
            defaultValue="programmiert sehr gerne"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="z.B: Fußball spielen, Malen, Lesen"
          />
        </div>

        {/* Besondere Merkmale */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="protagonistBesondereMerkmale"
            className="mb-2 font-semibold text-gray-700"
          >
            Besondere Merkmale:
          </label>
          <textarea
            name="protagonistBesondereMerkmale"
            defaultValue="Hat eine Trichterbrust eine deformation seiner Brustwirbels"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="3"
            placeholder="z.B: Sommersprossen, eine auffällige Narbe"
          ></textarea>
        </div>

        {/* Charakteristika */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="charakteristika"
            className="mb-2 font-semibold text-gray-700"
          >
            Charakteristika der Nebencharaktere:
          </label>
          <textarea
            name="charakteristika"
            defaultValue="Zurückhaltend aber ist gerne mal am trinken"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="3"
            placeholder="z.B: lustig, schüchtern, abenteuerlustig"
          ></textarea>
        </div>

        {/* Beziehung zum Hauptcharakter */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="protagonistBeziehung"
            className="mb-2 font-semibold text-gray-700"
          >
            Beziehung zum Hauptcharakter:
          </label>
          <input
            type="text"
            name="protagonistBeziehung"
            defaultValue="Arbeits kollegen"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="z.B: bester Freund, Schwester"
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
export default ProtagonistForm;
