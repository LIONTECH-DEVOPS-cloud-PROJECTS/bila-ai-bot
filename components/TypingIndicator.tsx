
import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 justify-start">
        <div className="flex-shrink-0 bg-gray-700 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477zM12 12a2 2 0 100-4 2 2 0 000 4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a2 2 0 012 2v2a2 2 0 01-4 0V4a2 2 0 012-2zM4.929 4.929a2 2 0 012.828 0L9.172 6.343a2 2 0 01-2.828 2.828L4.929 7.757a2 2 0 010-2.828zM19.071 4.929a2 2 0 010 2.828l-1.414 1.414a2 2 0 01-2.828-2.828l1.414-1.414a2 2 0 012.828 0zM2 12a2 2 0 012-2h2a2 2 0 010 4H4a2 2 0 01-2-2zm16 0a2 2 0 012-2h2a2 2 0 010 4h-2a2 2 0 01-2-2z" />
            </svg>
        </div>
      <div className="px-5 py-3 rounded-2xl bg-gray-700 flex items-center space-x-1.5">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default TypingIndicator;
