import { useEffect, useState } from 'react';

export default function Loader({ delay = 1000 }) {
  const [visible, setVisible] = useState(true);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, delay);

    const removeTimer = setTimeout(() => {
      setRemoved(true);
    }, delay + 400); // Allow fade animation to finish

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [delay]);

  if (removed) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-forestDark flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Pulsing ring loader */}
        <div className="w-16 h-16 border-4 border-sage/20 border-t-sage rounded-full animate-spin"></div>
        
        {/* Center Logo Icon */}
        <div className="absolute top-4 w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shadow-lg">
          <img
            src="/Sagar%20Sync.png"
            alt="S"
            className="w-full h-full object-cover scale-110"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Brand name fading in */}
        <h2 className="mt-6 text-white text-base font-extrabold tracking-widest uppercase animate-pulse">
          Sagar Sync
        </h2>
        <span className="text-[10px] text-mintGrey tracking-widest mt-1 uppercase">
          Ecosystem Initializing
        </span>
      </div>
    </div>
  );
}
