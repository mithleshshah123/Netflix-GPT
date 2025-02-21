
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDtueJrvaDWiullR6l73hBjUQ-Qhs2vsDU");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export {model};