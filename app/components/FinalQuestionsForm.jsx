import React from "react";

function FinalQuestionsForm({ onGenerateChapter }) {
  return (
    <div className="final-questions-form">
      <h2 className="text-xl font-semibold mb-4">
        Generiere Kapitel der Geschichte
      </h2>
      <button
        onClick={() => onGenerateChapter(1)}
        className="generate-chapter-btn"
      >
        Kapitel 1 generieren
      </button>
      <button
        onClick={() => onGenerateChapter(2)}
        className="generate-chapter-btn"
      >
        Kapitel 2 generieren
      </button>
      <button
        onClick={() => onGenerateChapter(3)}
        className="generate-chapter-btn"
      >
        Kapitel 3 generieren
      </button>
      <button
        onClick={() => onGenerateChapter(4)}
        className="generate-chapter-btn"
      >
        Kapitel 4 generieren
      </button>
      <button
        onClick={() => onGenerateChapter(5)}
        className="generate-chapter-btn"
      >
        Kapitel 5 generieren
      </button>
      <button
        onClick={() => onGenerateChapter(6)}
        className="generate-chapter-btn"
      >
        Kapitel 6 generieren
      </button>
      <button
        onClick={() => onGenerateChapter(7)}
        className="generate-chapter-btn"
      >
        Kapitel 7 generieren
      </button>
      <button
        onClick={() => onGenerateChapter(8)}
        className="generate-chapter-btn"
      >
        Kapitel 8 generieren
      </button>
      <button
        onClick={() => onGenerateChapter(9)}
        className="generate-chapter-btn"
      >
        Kapitel 9 generieren
      </button>
      <button
        onClick={() => onGenerateChapter(10)}
        className="generate-chapter-btn"
      >
        Kapitel 10 generieren
      </button>
      {/* Weitere Buttons für weitere Kapitel */}
    </div>
  );
}

export default FinalQuestionsForm;
