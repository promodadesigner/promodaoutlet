import { useState, useEffect } from "react";

interface IntroVideoProps {
  onComplete: () => void;
}

export default function IntroVideo({ onComplete }: IntroVideoProps) {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 8500);

    const hideTimer = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 10000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0B1D3A] flex items-center justify-center transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        onEnded={() => {
          setFading(true);
          setTimeout(() => {
            setVisible(false);
            onComplete();
          }, 500);
        }}
      >
        <source src="/intro_promoda_outlet.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
