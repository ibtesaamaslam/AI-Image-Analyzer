
/**
 * Converts a File object to a base64 encoded string.
 * The returned string does not include the 'data:mime/type;base64,' prefix.
 * @param file The image file to convert.
 * @returns A promise that resolves with the base64 string.
 */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // The result is a data URL: "data:image/png;base64,iVBORw0KGgo..."
      // We only want the part after the comma.
      const result = reader.result as string;
      const base64String = result.split(',')[1];
      if (base64String) {
        resolve(base64String);
      } else {
        reject(new Error("Could not extract base64 string from file."));
      }
    };
    reader.onerror = (error) => reject(error);
  });
}
