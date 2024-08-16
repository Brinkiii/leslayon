import { useState } from "react";
import "./ImageSwitcher.css";

export default function ImageSwitcher({ handleSwitch }) {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    handleSwitch(buttonNumber);
  };

  return (
    <div className="image-switcher">
      <button
        className={activeButton === 1 ? "active" : ""}
        onClick={() => handleButtonClick(1)}
      >
        1
      </button>
      <button
        className={activeButton === 2 ? "active" : ""}
        onClick={() => handleButtonClick(2)}
      >
        2
      </button>
      <button
        className={activeButton === 3 ? "active" : ""}
        onClick={() => handleButtonClick(3)}
      >
        3
      </button>
    </div>
  );
}
