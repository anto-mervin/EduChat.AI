# EduChat.AI - Your Intelligent Python Learning Companion 🐍

Empower your learning journey with this education chatbot powered by ChatGPT. It's designed to provide personalized, interactive assistance for Python learners. Enhance your studying experience, ask questions, and receive tailored insights. Learnity AI, your intelligent learning companion.

## ✨ Features

### 🤖 AI-Powered Python Tutor
- **Specialized Python Assistant**: Custom AI model specifically trained on Python datasets to provide accurate, relevant answers
- **ChatGPT Integration**: Leverages OpenAI's ChatGPT-3.5 technology via RapidAPI for intelligent responses
- **Context-Aware Responses**: Understands your questions and provides concise answers (within 100 words) tailored to Python programming
- **Smart Filtering**: Automatically focuses on Python-related queries to keep conversations on track

### 💬 Interactive Chat Interface
- **Real-Time Messaging**: Instant responses to your Python questions with a smooth chat experience
- **Typing Animations**: Beautiful type-writer effect that makes responses feel more natural and engaging
- **Message History**: View your entire conversation history in an organized, scrollable chat window
- **User-Friendly Input**: Multi-line text area with keyboard shortcuts (Enter to send, Shift+Enter for new line)
- **Click-to-Send**: Convenient send button with hover animations for easy message submission

### 🎥 Embedded Learning Resources
- **YouTube Integration**: Built-in YouTube video player for supplementary learning materials
- **Seamless Learning Experience**: Watch educational videos without leaving the application
- **Video Controls**: Standard YouTube controls for pause, play, and volume adjustment

### 🎨 Modern UI/UX Design
- **Beautiful Gradients**: Eye-catching teal-to-sky gradient background that's easy on the eyes
- **Responsive Layout**: Fully responsive design that works seamlessly on desktop, tablet, and mobile devices
- **Custom Scrollbars**: Styled scrollbars for a polished, modern appearance
- **Message Bubbles**: Distinct styling for user and AI messages for easy conversation tracking
- **FontAwesome Icons**: Professional icons for enhanced visual communication

### 📝 Feedback System
- **User Feedback Collection**: Integrated Google Forms link for users to share their experience
- **Continuous Improvement**: Help shape the future of EduChat.AI by providing your feedback
- **Easy Access**: Feedback link conveniently located at the bottom of the interface

### ⚡ Performance & Technology
- **Fast & Efficient**: Built with React 18 and Vite for lightning-fast performance
- **Modern JavaScript**: Uses latest React hooks (useState) for state management
- **API Integration**: Robust API calls with Axios for reliable communication
- **Error Handling**: Graceful error handling to ensure smooth user experience
- **Type Animations**: Smooth, configurable typing effects using react-type-animation library

## 🛠️ Technology Stack

### Frontend Framework & Libraries
- **React 18.2.0** - Modern UI library for building interactive interfaces
- **React DOM 18.2.0** - React rendering for web applications
- **Vite 4.2.0** - Next-generation frontend tooling for fast development

### Styling & Design
- **TailwindCSS 3.3.1** - Utility-first CSS framework for rapid UI development
- **PostCSS 8.4.21** - CSS transformations and optimizations
- **Autoprefixer 10.4.14** - Automatic vendor prefix handling

### API & Data Management
- **Axios 1.3.4** - Promise-based HTTP client for API requests
- **React Query 3.39.3** - Powerful data synchronization for React applications

### Animations & Effects
- **React Type Animation 3.0.1** - Beautiful typing animation effects

### Development Tools
- **@vitejs/plugin-react 3.1.0** - Official Vite plugin for React
- **TypeScript Types** - Type definitions for React and React DOM

## 🚀 Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/anto-mervin/EduChat.AI.git
   cd EduChat.AI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in your terminal)
   - Start chatting with your AI Python tutor!

## 📖 Usage

1. **Start a Conversation**: Type your Python-related question in the text area at the bottom
2. **Send Your Message**: Press Enter or click the send icon
3. **Receive AI Response**: Watch as the AI types out a helpful response
4. **Continue Learning**: Ask follow-up questions and build your Python knowledge
5. **Watch Educational Content**: Scroll to see the embedded YouTube video for additional learning
6. **Share Feedback**: Click the feedback link to help improve the application

### Example Questions You Can Ask
- "What are Python decorators?"
- "How do I use list comprehensions?"
- "Explain the difference between tuples and lists"
- "How do I read files in Python?"
- "What is the purpose of the __init__ method?"

## 🏗️ Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
EduChat.AI/
├── src/
│   ├── components/
│   │   ├── ChatBody.jsx      # Main chat display component
│   │   ├── Chatinput.jsx     # Message input component
│   │   └── youtubeembed.jsx  # YouTube video component
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json               # Project dependencies
├── vite.config.js             # Vite configuration
└── tailwind.config.js         # Tailwind CSS configuration
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available for educational purposes.

## 🔗 Feedback

Have suggestions or feedback? [Click here to share your thoughts](https://forms.gle/GKZZnEvetHAAbUtM6)

---

**Note**: This is an educational project designed to help students learn Python programming through interactive AI assistance. The AI responses are focused specifically on Python-related topics.
