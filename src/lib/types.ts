export interface DriveFile {
  id: string; // Unique identifier for the file
  name: string; // Name of the file
  mimeType: string; // MIME type of the file (e.g., "image/jpeg")
  webViewLink?: string; // Optional link to view the file
  webContentLink?: string; // Optional link to download the file
  thumbnailLink?: string; // Optional link to the file's thumbnail
  size?: number; // Optional size of the file in bytes
}
