import React from "react";

function SettingForm({ onNext, onAddMessageToThread }) {
  const handleSettingSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const SettingDetails = {
      Nr: 4,
      Setting: {
        Umgebung: formData.get("umgebung"),
        Zeitperiode: formData.get("zeitperiode"),
        SpezifischeOrte: formData.get("spezifischeOrte"),
        Wetterbedingungen: formData.get("wetterbedingungen"),
        Atmosphäre: formData.get("atmosphaere"),
      },
    };

    await onAddMessageToThread(SettingDetails);
    onNext();
  };

  return (
    <>
      <form
        onSubmit={handleSettingSubmit}
        className="w-full max-w-lg p-8 mt-10 bg-white rounded-xl shadow-md"
      >
        <h2 className="text-xl font-semibold mb-4">Details des Schauplatzes</h2>

        {/* Umgebung */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="umgebung"
            className="mb-2 font-semibold text-gray-700"
          >
            Umgebung:
          </label>
          <input
            type="text"
            name="umgebung"
            defaultValue="Spielt in einem Hochhaus das Abgeriegelt ist, es ist wie eine eigene Stadt"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="z.B: Stadt, Land, Fantasiewelt"
          />
        </div>

        {/* Zeitperiode */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="zeitperiode"
            className="mb-2 font-semibold text-gray-700"
          >
            Zeitperiode:
          </label>
          <input
            type="text"
            name="zeitperiode"
            defaultValue="Es spilet im Jahre 2049"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="z.B: Mittelalter, Zukunft, Sommer"
          />
        </div>

        {/* Spezifische Orte */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="spezifischeOrte"
            className="mb-2 font-semibold text-gray-700"
          >
            Spezifische Orte:
          </label>
          <input
            type="text"
            name="spezifischeOrte"
            defaultValue="Das Hochhaus in dem wir sind ist der Weinberg Solution Tower"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="z.B: Geheimnisvoller Wald, Altes Schloss"
          />
        </div>

        {/* Wetterbedingungen */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="wetterbedingungen"
            className="mb-2 font-semibold text-gray-700"
          >
            Wetterbedingungen:
          </label>
          <input
            type="text"
            name="wetterbedingungen"
            defaultValue="FuterClouds wolken die von anderen ländern künstlich ertzeugt werden"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="z.B: Sonnig, Verregnet, Schneebedeckt"
          />
        </div>

        {/* Atmosphäre */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="atmosphaere"
            className="mb-2 font-semibold text-gray-700"
          >
            Atmosphäre:
          </label>
          <input
            type="text"
            name="atmosphaere"
            defaultValue="Angespannt drphende gefahren ziehen auf"
            className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="z.B: Geheimnisvoll, Fröhlich, Düster"
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

export default SettingForm;
