import { OpenAI } from "openai";
import * as dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

//create assistants
const createAssistant = async ({ name, instructions, fileId }) => {
  const assistant = await openai.beta.assistants.create({
    name,
    instructions,
    model: "gpt-4-1106-preview",
    file_ids: fileId && [fileId],
  });

  return assistant;
};

//run assistants
const runAssistant = async ({
  assistantId = "asst_VGTZ27HPPITQPRxu2Cdea6N7",
  threadId,
  instructions,
}) => {
  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: assistantId,
    instructions: instructions,
  });
  return run;
};

//get thread
const getAssistant = async (assistantId) => {
  const assistant = await openai.beta.assistants.retrieve(assistantId);
  return assistant;
};

//delete assistant
const deleteAssistant = async (assistantId) => {
  const response = await openai.beta.assistants.del(assistantId);
  return response;
};

//check on the run thread
const runCheck = async ({ threadId, runId }) => {
  const check = await openai.beta.threads.runs.retrieve(threadId, runId);
  console.log(check);
  return check;
};

//create thread
const createThread = async () => {
  const thread = await openai.beta.threads.create();
  return thread;
};

//get thread
const getThread = async (threadId) => {
  const thread = await openai.beta.threads.retrieve(threadId);
  return thread;
};

//delete thread
const deleteThread = async (threadId) => {
  const response = await openai.beta.threads.del(threadId);
  return response;
};

//create message
const createMessage = async ({ threadId, content }) => {
  const messages = await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: content,
  });
  return messages;
};

//get messages
const getMessages = async (threadId) => {
  const messages = await openai.beta.threads.messages.list(threadId);
  return messages.data;
};

// Upload a file with an "assistants" purpose

const UploadFile = async (fileSrc) => {
  const file = await openai.files.create({
    file: fileSrc,
    purpose: "assistants",
  });
  return file;
};

async function generateImage(prompt, n = 1, size = "1024x1024") {
  const response = await openai.images.generate({
    prompt: prompt,
    n: n,
    size: size,
    model: "dall-e-3", // Use DALL·E 3 model
  });
  console.log(response);
  return response.data[0]?.url; // Return the array of generated images
}

module.exports = {
  createAssistant,
  getAssistant,
  getMessages,
  deleteAssistant,
  createMessage,
  createThread,
  getThread,
  deleteThread,
  runCheck,
  runAssistant,
  UploadFile,
  generateImage,
};
