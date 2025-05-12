import React, { useState } from "react";
import "./DropdownItem.css";

interface DropdownItemProps {
  question: string;
  answer: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-container">
      <button onClick={() => setIsOpen(!isOpen)}>
        <p>{question}</p>
        <span className="material-icons">
          {isOpen ? "expand_less" : "expand_more"}
        </span>
      </button>
      {isOpen && (
        <div className="answer-container">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default DropdownItem;
