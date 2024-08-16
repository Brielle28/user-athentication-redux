import { useEffect, useState } from "react";

const OtpTimer: React.FC = () => {
  const [counter, setCounter] = useState<number>(59); // Starting value for seconds
  const [minutes, setMinutes] = useState<number>(1); // Starting value for minutes

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setCounter(59);
        }
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(countdownInterval);
  }, [counter, minutes]);

  return (
    <span className="countdown font-anek text-red-500 text-lg sm:text-xl md:text-2xl lg:text-2xl">
    <span style={{ "--value": minutes } as React.CSSProperties}></span>:
    <span style={{ "--value": counter } as React.CSSProperties}></span>
  </span>
  
  );
};

export default OtpTimer;
