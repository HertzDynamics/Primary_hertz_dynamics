import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero">
      <div className="text-center text-white">
        <div className="drone-animation mb-6">
          <Loader2 className="w-16 h-16 mx-auto animate-spin" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Hertz Dynamics</h2>
        <p className="text-primary-light">Loading drone technology...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;