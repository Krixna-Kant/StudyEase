# StudyEase - AI-Powered Learning Assistant

**Project by Team Squirtle**

---

## 🚀 Overview

StudyEase is an AI-powered platform designed to help students and lifelong learners get the most out of their study materials. With StudyEase, you can upload lecture videos, PDFs, or YouTube links and instantly receive:
- Accurate transcriptions
- AI-generated summaries and detailed notes
- Interactive flashcards
- Mind maps for visual learning
- Quizzes to test your understanding
- A chat assistant for Q&A
- Downloadable PDFs of your notes
- A history of all your uploads and results

Whether you're preparing for exams, reviewing lectures, or just want to learn smarter, StudyEase streamlines the process and makes studying more engaging and effective.

---

## 🛠️ How It Works

1. **Upload** your study material (video, PDF, or YouTube URL).
2. **Processing:**
   - The backend extracts audio (if needed), transcribes it using Google Speech-to-Text, and processes the text with advanced AI models (Gemini/OpenAI).
   - Summaries, notes, flashcards, mind maps, and quizzes are generated automatically.
3. **Results:**
   - Access your interactive dashboard with tabs for notes, chat, flashcards, mind map, and quiz.
   - Download notes as PDF, export mind maps, and chat with the AI assistant.
4. **History:**
   - All your uploads and results are saved for easy access and review.

### 🏗️ Architecture Diagram

![StudyEase Architecture](./documents/architecture.png)

---

## ✨ Features
- **Automatic Transcription**: Converts video/audio to text using Google Speech-to-Text
- **AI Summaries & Notes**: Generates concise summaries and detailed notes
- **Flashcards**: Creates flashcards from your material for easy review
- **Mind Maps**: Visualizes key concepts and relationships
- **Quizzes**: Tests your understanding with AI-generated questions
- **Chat Assistant**: Ask questions about your material and get instant answers
- **PDF Export**: Download your notes for offline use
- **History**: Access all your previous uploads and results
- **Light/Dark Mode**: Study comfortably any time of day

---

## 🖥️ Getting Started

1. **Clone the repo:**
   ```bash
   git clone <repo-url>
   cd StudyEase
   ```
2. **Set up the backend:**
   - Python 3.8+, MongoDB, Google Cloud credentials
   - See `backend/README.md` for details
3. **Set up the frontend:**
   - Node.js 18+, npm
   - See `frontend/Study-Ease/README.md` for details

---

## 🔑 Environment Variables & API Keys

To run StudyEase, you need to set up a `.env` file in the `backend/` directory with the following variables:

```
MONGO_URI=your-mongodb-uri
GOOGLE_APPLICATION_CREDENTIALS=./your-service-account-key.json
GCS_BUCKET_NAME=your-gcs-bucket-name
GOOGLE_API_KEY=your-google-api-key
```

**How to get these:**
- **MONGO_URI:**
  - Use a local MongoDB instance (`mongodb://localhost:27017/studyease`) or [MongoDB Atlas](https://www.mongodb.com/atlas/database) for a cloud database.
- **GOOGLE_APPLICATION_CREDENTIALS:**
  - Go to [Google Cloud Console](https://console.cloud.google.com/), create a project, enable the Speech-to-Text API, and create a service account. Download the JSON key and place it in the `backend/` folder.
- **GCS_BUCKET_NAME:**
  - In Google Cloud Console, create a Storage bucket and use its name here.
- **GOOGLE_API_KEY:**
  - In Google Cloud Console, create an API key with access to Gemini and Speech-to-Text APIs.

> **Note:** Never commit your `.env` or service account JSON to GitHub. These are already gitignored for your safety.

---

## 📦 Project Structure
- `backend/` — Flask API, AI integrations, processing logic
- `frontend/Study-Ease/` — Next.js app, UI components
- `documents/` — Architecture diagrams, docs

---

## 🛡️ Security & Best Practices
- Sensitive files (`.env`, service account keys) are gitignored
- No API keys or secrets in code
- Follows GitHub commit best practices

---

## 👥 Team
**Project by Team Squirtle**

---

## 📄 License
MIT

---

<div align="center">
  Made with ❤️ for better learning
</div>
