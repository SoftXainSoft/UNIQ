import React from "react";

function PersonalizationForm({ onNext, onAddMessageToThread }) {
  const handlePersonalizationSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const PersonalizationDetails = {
      Nr: 7,
      Personalization: {
        widmung: formData.get("widmung"),
      },
    };

    await onAddMessageToThread(PersonalizationDetails);
    onNext();
  };

  return (
    <>
      <form
        onSubmit={handlePersonalizationSubmit}
        className="w-full max-w-lg p-8 mt-10 bg-white rounded-xl shadow-md"
      >
        <h2 className="text-xl font-semibold mb-4">
          Personalisierung der Geschichte
        </h2>

        {/* Widmung */}
        <div className="flex flex-col mb-4">
          <label htmlFor="widmung" className="mb-2 font-semibold text-gray-700">
            Persönliche Widmung:
          </label>
          <textarea
            name="widmung"
            defaultValue="DAs Buch Widme ich Carsten den Besten chef auf der ganzen welt der extra für mein Projekt auf der Tastertur ausgerutscht ist."
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="3"
            placeholder="Text der Widmung"
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

export default PersonalizationForm;
