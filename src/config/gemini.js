
import {GoogleGenerativeAI}  from "@google/generative-ai";

const apiKey ='AIzaSyDrkIZHmGc3e7bgwInMZJ4F_WuS7VCoeM4';
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
});

const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
};

async function runChat(propmt) {
        const chatSession = model.startChat({
                generationConfig,
                history: [
                ],
        });

        const result = await chatSession.sendMessage(propmt);
       console.log( result.response.text());
       return result.response.text();
}

export default runChat;