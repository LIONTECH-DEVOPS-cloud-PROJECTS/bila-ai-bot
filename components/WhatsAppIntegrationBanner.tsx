import React from 'react';

interface WhatsAppIntegrationBannerProps {
  onLearnMore: () => void;
}

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.846 6.097l-1.214 4.425 4.525-1.189z" />
    </svg>
)

const WhatsAppIntegrationBanner: React.FC<WhatsAppIntegrationBannerProps> = ({ onLearnMore }) => {
  return (
    <div className="w-full bg-gray-800 border border-gray-700 rounded-t-2xl p-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
            <WhatsAppIcon />
            <p className="text-gray-300 text-sm">Want to use Bila on WhatsApp?</p>
        </div>
        <button 
            onClick={onLearnMore}
            className="px-4 py-1.5 text-sm font-semibold bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500 transition-all duration-200"
        >
            Learn How
        </button>
    </div>
  );
};

export default WhatsAppIntegrationBanner;