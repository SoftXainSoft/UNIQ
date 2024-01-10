import React from "react";

function EmotionalAspectsForm({ onNext, onAddMessageToThread }) {
  const handleEmotionalAspectsSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const EmotionalAspectsDetails = {
      Nr: 6,
      EmotionaleAspekte: {
        Gefühle: formData.get("gefuehle"),
        Botschaft: formData.get("botschaft"),
      },
    };

    await onAddMessageToThread(EmotionalAspectsDetails);
    onNext();
  };

  return (
    <>
      <form
        onSubmit={handleEmotionalAspectsSubmit}
        className="w-full max-w-lg p-8 mt-10 bg-white rounded-xl shadow-md"
      >
        <h2 className="text-xl font-semibold mb-4">
          Emotionale Aspekte der Geschichte
        </h2>

        {/* Gefühle */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="gefuehle"
            className="mb-2 font-semibold text-gray-700"
          >
            Zu vermittelnde Gefühle:
          </label>
          <input
            type="text"
            name="gefuehle"
            defaultValue="zu beginn Ansgt zum ende hin Hoffnung"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="z.B: Freude, Spannung, Hoffnung"
          />
        </div>

        {/* Botschaft */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="botschaft"
            className="mb-2 font-semibold text-gray-700"
          >
            Botschaft der Geschichte:
          </label>
          <textarea
            name="botschaft"
            defaultValue="Egal wie schwer das miteinadner auch manch mal ist. Auskommen sollte man immer mit einander"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="3"
            placeholder="z.B: Wichtigkeit von Freundschaft, Mut in schwierigen Zeiten"
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

export default EmotionalAspectsForm;
