
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Ensure the API key is available in the environment variables.
if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Analyzes an image with a given text prompt using the Gemini API.
 * @param base64Image The base64 encoded image string.
 * @param mimeType The MIME type of the image (e.g., 'image/jpeg', 'image/png').
 * @param prompt The text prompt to guide the analysis.
 * @returns A promise that resolves to the text analysis from the API.
 */
export async function analyzeImageWithGemini(base64Image: string, mimeType: string, prompt: string): Promise<string> {
  try {
    const imagePart = {
      inlineData: {
        mimeType: mimeType,
        data: base64Image,
      },
    };

    const textPart = {
      text: prompt,
    };

    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: { parts: [imagePart, textPart] },
    });
    
    // Use the direct .text accessor for the response
    const text = response.text;
    
    if (!text) {
        throw new Error("The API returned an empty response. The content may have been blocked.");
    }
    
    return text;

  } catch (error: any) {
    console.error("Error analyzing image with Gemini:", error);
    // Provide a more user-friendly error message
    if (error.message?.includes('API key not valid')) {
        throw new Error("The provided API key is not valid. Please check your configuration.");
    }
    if (error.message?.includes('429')) {
        throw new Error("You have exceeded your API quota. Please check your billing status or try again later.");
    }
    throw new Error("Failed to get a response from the AI. Please try again.");
  }
}
