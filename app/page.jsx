"use client";

import React, { useState, useEffect } from "react";
import MainCharacterForm from "./components/MainCharacterForm";
import ProtagonistForm from "./components/ProtagonistForm";
import DetailsDerHandlungForm from "./components/DetailsDerHandlungForm";
import SettingForm from "./components/SettingForm";
import StyleToneForm from "./components/StyleToneForm";
import EmotionalAspectsForm from "./components/EmotionalAspectsForm";
import PersonalizationForm from "./components/PersonalizationForm";
import FinalQuestionsForm from "./components/FinalQuestionsForm";
import Header from "./components/Header";
import Card from "./components/card";

export default function Home() {
  const [step, setStep] = useState("mainCharacter");
  const [threadId, setThreadId] = useState(null);
  const [runId, setRunId] = useState(null);
  const [bildbeschreibung, setBildbeschreibung] = useState("");
  const [hauptfigur, setHauptfigur] = useState("");
  const [answer, setAnswer] = useState("");
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    createAssistantAndThread();
  }, []);

  const generateImage = async () => {
    try {
      const response = await fetch("/api/images/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt, // Der Textprompt für DALL·E
          // Sie können hier zusätzliche Parameter wie n und size einfügen, falls erforderlich
        }),
      });
      const imageData = await response.json();
      // Verarbeiten Sie die imageData wie erforderlich für Ihr Frontend
      const imageTag = document.createElement("img");
      imageTag.src = imageData.url;
      document.getElementsByTagName("body")[0].appendChild(imageTag);
    } catch (error) {
      console.error("Fehler beim Generieren des Bildes:", error);
    }
  };

  const createAssistantAndThread = async () => {
    // Erstellen des Assistenten

    // Erstellen des Threads
    const threadRes = await fetch("/api/thread", { method: "POST" });
    const thread = await threadRes.json();
    setThreadId(thread.id);
  };

  const addMessageToThread = async (messageData) => {
    const formData = new FormData();
    formData.append("threadId", threadId);
    formData.append("content", JSON.stringify(messageData));
    await fetch(`/api/messages`, {
      method: "POST",
      body: formData,
    });
  };

  const checkRun = (currentRunId, setter) => {
    setTimeout(async () => {
      const response = await fetch("/api/thread/run", {
        method: "POST",
        body: JSON.stringify({ runId: currentRunId || runId, threadId }),
      });
      const json = await response.json();

      if (json.status !== "completed") {
        checkRun(currentRunId);
      } else {
        const messagesResponse = await fetch(
          `/api/messages?threadId=${threadId}`
        );
        const messagesJson = await messagesResponse.json();
        setter(
          messagesJson.messages.filter(({ role }) => role === "assistant")?.[0]
            ?.content?.[0]?.text?.value
        );
      }
    }, 3000);
  };

  const handleFinalSubmit = async () => {
    const formData = new FormData();
    formData.append("threadId", threadId);
    formData.append(
      "instructions",
      "Erstelle mir aus den Informationen die dir vorliegen das erste Kaptel der Geschichte. Den Kapitelüberschrift entnimmst du deiner erstellten Kapitelübersicht:. Nehme als referenz die Informationen aus Nachricht Nr: 3 DetailsDerHandlung, Nr: 4 Setting, Nr: 5 StyleTone, Nr: 6 EmotionaleAspekte + deine Bildbeschreibung zum Hauptcarktaer + deiner Bildbeschreibung des Nebencaraktars und den Titel-  Schreibe mir Das 1 Kapitel ganz aus. Gebe mir Es folgendermaßen aus Kapitelüberschrift: Text: schreibe mindestens eine seite."
    );

    //generieren des Titels

    // Anfrage an den Assistenten, um die gesammelten Daten zu verarbeiten
    const assistantRes = await fetch(`/api/assistant/run`, {
      method: "POST",
      body: formData,
    });
    const assistantResponse = await assistantRes.json();
    setRunId(assistantResponse.id);
    checkRun(assistantResponse.id);
  };

  const handleMainCharacterSubmit = async () => {
    const formData = new FormData();
    formData.append("threadId", threadId);
    formData.append(
      "instructions",
      "Erstelle aufgrundlage der ersten Message vom nutzer: Nr: 1 Hauptfigur: und die darauf folgenden Information zum Hauptcaraktaer eine Bildbeschreibung des Carakters. Entwerfe ihn und Beschreibe ihn passend für ein Kinderbuch Geschichte. Erstelle mir kein Bild sondern gebe mir nur die Bildbeschreibung aus ohne weitere vorheriege erklärung, Fragen oder Instruktionen nach der Bildbeschreibung aus zu geben."
    );

    // Anfrage an den Assistenten, um die gesammelten Daten zu verarbeiten
    const assistantRes = await fetch(`/api/assistant/run`, {
      method: "POST",
      body: formData,
    });
    const assistantResponse = await assistantRes.json();
    setRunId(assistantResponse.id);
    checkRun(assistantResponse.id, setHauptfigur);
  };

  const handleProtagonistSubmit = async () => {
    const formData = new FormData();
    formData.append("threadId", threadId);
    formData.append(
      "instructions",
      "Erstelle aufgrundlage der ersten Message vom nutzer: Nr: 2 Protagonisten: und die darauf folgenden Information zum Protagonisten eine Bildbeschreibung des neben Carakters. Entwerfe ihn und Beschreibe ihn passend für ein Kinderbuch Geschichte. Erstelle mir kein Bild sondern gebe mir nur die Bildbeschrweibung aus ohne weiteres vorheriege erklärung und keine weiteren nach der Bildbeschreibung."
    );

    //generieren des Titels

    // Anfrage an den Assistenten, um die gesammelten Daten zu verarbeiten
    const assistantRes = await fetch(`/api/assistant/run`, {
      method: "POST",
      body: formData,
    });
    const assistantResponse = await assistantRes.json();
    setRunId(assistantResponse.id);
    checkRun(assistantResponse.id);
  };

  const handleTitelSubmit = async () => {
    const formData = new FormData();
    formData.append("threadId", threadId);
    formData.append(
      "instructions",
      "Erstelle mir aus den Informationen die dir vorliegen Einen Titel Für die Geschichte nehme als referenz die Informationen aus Nachricht Nr: 3 DetailsDerHandlung, Nr: 4 Setting, Nr: 5 StyleTone, Nr: 6 EmotionaleAspekte + deine Bildbeschreibung zum Hauptcarktaer + deiner Bildbeschreibung des Nebencaraktars um einen passenden Titel zu erstellen der alle Informationen der geschichte berücksichtigt. Gebe mir Nur Einen Titel für die Geschichte aus. Schreibe keinen satz vor dem Titel wie Basierend auf den... Ich möchte nur den Titel mehr nicht, damit ich die Ausgabe auffangen und weiterverarbeiten kann ohne unnötiege worte und sätze die nix mit dem Titel zu tun haben, darin nicht vor zu finden."
    );

    //generieren des Titels

    // Anfrage an den Assistenten, um die gesammelten Daten zu verarbeiten
    const assistantRes = await fetch(`/api/assistant/run`, {
      method: "POST",
      body: formData,
    });
    const assistantResponse = await assistantRes.json();
    setRunId(assistantResponse.id);
    checkRun(assistantResponse.id);
  };

  const handleStorySubmit = async () => {
    const formData = new FormData();
    formData.append("threadId", threadId);
    formData.append(
      "instructions",
      "Erstelle mir aus den Informationen die dir vorliegen aus Nachricht Nr: 3 DetailsDerHandlung, Nr: 4 Setting, Nr: 5 StyleTone, Nr: 6 EmotionaleAspekte + deine Bildbeschreibung zum Hauptcaraer + deiner Bildbeschreibung zum nebencarater eine KinderBuch Strucktur. Gebe mir folgendes aus. Erstelle 4 Kapitel und liste sie auf gebe jedem Kapitel eine Überschrift. Formuliere stichpunktartig was in den kapteln passiert so das alle 4 sinn ergeben und sie später weiter ausformuliert werden können. Stelle keine weiteren Fragen vorher oder nacher."
    );

    //generieren des Titel
    // Anfrage an den Assistenten, um die gesammelten Daten zu verarbeiten
    const assistantRes = await fetch(`/api/assistant/run`, {
      method: "POST",
      body: formData,
    });
    const assistantResponse = await assistantRes.json();
    setRunId(assistantResponse.id);
    checkRun(assistantResponse.id);
  };

  const handleGenerateChapter = async (chapterNumber) => {
    const formData = new FormData();
    formData.append("threadId", threadId);
    formData.append(
      "instructions",
      `Generiere Kapitel ${chapterNumber} basierend auf der von dir erstellten Kapitelübersicht und berücksichtige die schon von dir geschriebenen Kaptitel, Damit die GEschichte kapitelübergreifen sinn ergibt am ende.`
    );

    // Anfrage an den Assistenten, um das Kapitel zu generieren
    const assistantRes = await fetch(`/api/assistant/run`, {
      method: "POST",
      body: formData,
    });
    const assistantResponse = await assistantRes.json();
    setRunId(assistantResponse.id);
    checkRun(assistantResponse.id, setAnswer);
  };

  return (
    <main className="flex flex-col items-center justify-center p-4">
      <div>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Geben Sie einen Prompt für DALL·E ein"
        />
        <button onClick={generateImage}>Bild generieren</button>
        {/* Weitere UI-Elemente ... */}
      </div>
      <div>
        {step === "mainCharacter" && (
          <MainCharacterForm
            onNext={() => {
              setStep("protagonist");
            }}
            onAddMessageToThread={(newData) => {
              addMessageToThread({ Nr: 1, Hauptfigur: newData });
              handleMainCharacterSubmit();
            }} // Hier wird die Funktion übergeben
          />
        )}
        {step === "protagonist" && (
          <ProtagonistForm
            onNext={() => {
              setStep("detailsDerHandlung");
            }}
            onAddMessageToThread={(newData) => {
              addMessageToThread({ Nr: 2, Protagonisten: newData });
              handleProtagonistSubmit();
            }} // Hier wird die Funktion übergeben
          />
        )}
        {step === "detailsDerHandlung" && (
          <DetailsDerHandlungForm
            onNext={() => {
              setStep("setting");
            }}
            onAddMessageToThread={(newData) => {
              addMessageToThread({ Nr: 3, DetailsDerHandlung: newData });
            }} // Hier wird die Funktion übergeben
          />
        )}
        {step === "setting" && (
          <SettingForm
            onNext={() => {
              setStep("styleTone");
            }}
            onAddMessageToThread={(newData) => {
              addMessageToThread({ Nr: 4, Setting: newData });
            }} // Hier wird die Funktion übergeben
          />
        )}
        {step === "styleTone" && (
          <StyleToneForm
            onNext={() => {
              setStep("emotionalAspects");
            }}
            onAddMessageToThread={(newData) => {
              addMessageToThread({ Nr: 5, StyleTone: newData });
            }} // Hier wird die Funktion übergeben
          />
        )}
        {step === "emotionalAspects" && (
          <EmotionalAspectsForm
            onNext={() => {
              setStep("personalization");
            }}
            onAddMessageToThread={(newData) => {
              addMessageToThread({ Nr: 6, EmotionaleAspekte: newData });
              handleStorySubmit();
            }} // Hier wird die Funktion übergeben
          />
        )}
        {step === "personalization" && (
          <PersonalizationForm
            onNext={() => {
              setStep("finalQuestions");
            }}
            onAddMessageToThread={(newData) => {
              addMessageToThread({ Nr: 7, personalization: newData });
              handleTitelSubmit();
            }} // Hier wird die Funktion übergeben
          />
        )}
        {step === "finalQuestions" && (
          <FinalQuestionsForm onGenerateChapter={handleGenerateChapter} />
        )}

        {/* Hier könnte die Anzeige der generierten Geschichte erfolgen, sobald sie verfügbar ist */}

        {answer && (
          <div className="book-output">
            <div className="book-page">
              <h3 className="book-title">Deine persönliche Geschichte</h3>
              <div className="book-content">{answer}</div>
            </div>
          </div>
        )}
        <Card />
      </div>
    </main>
  );
}
