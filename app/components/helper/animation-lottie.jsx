"use client";

import { useEffect, useState } from "react";

const AnimationLottie = ({ animationPath, width }) => {
  const [Lottie, setLottie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only import Lottie on the client side
    const loadLottie = async () => {
      try {
        const LottieComponent = (await import("lottie-react")).default;
        setLottie(() => LottieComponent);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to load Lottie:", error);
        setIsLoading(false);
      }
    };

    loadLottie();
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  if (isLoading || !Lottie) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-32 h-32 animate-pulse bg-gray-300 rounded-lg"></div>
      </div>
    );
  }

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;