import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import WhatsAppIntegrationBanner from './components/WhatsAppIntegrationBanner';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-4xl h-[90vh] flex flex-col">
        <header className="mb-4 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Bila: Your Liontech Student Guide
          </h1>
          <p className="text-gray-400">Your AI assistant for program information and enrollment</p>
        </header>
        <WhatsAppIntegrationBanner onLearnMore={() => setIsModalOpen(true)} />
        <ChatWindow />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4 text-white">WhatsApp Business Integration</h2>
        <p className="text-gray-300 mb-4">
          Integrating Bila directly with WhatsApp is a powerful way to connect with your students, but it requires backend development.
        </p>
        <p className="text-gray-300 mb-4">
          Here's a general overview of the process for your development team:
        </p>
        <ol className="list-decimal list-inside text-gray-400 space-y-2 mb-6">
          <li>Set up a Meta Developer Account and a WhatsApp Business Account.</li>
          <li>Choose a phone number for your chatbot.</li>
          <li>Create a server (e.g., using Node.js, Python) to host your bot's logic.</li>
          <li>Use the WhatsApp Business Platform API to receive messages from users and send responses from Bila.</li>
          <li>Set up webhooks to receive real-time notifications for incoming messages.</li>
        </ol>
        <a 
          href="https://developers.facebook.com/docs/whatsapp/cloud-api/overview" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
        >
          Read WhatsApp API Docs
        </a>
      </Modal>
    </div>
  );
};

export default App;