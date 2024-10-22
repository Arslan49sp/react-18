import React, { useState } from "react";
interface Props {
  children: string;
  maxChar?: number;
}
const ExpandedText = ({ children, maxChar = 100 }: Props) => {
  const [isExpended, setIsExpended] = useState(false);
  if (children.length <= maxChar) return <p>{children}</p>;
  const text = isExpended ? children : children.substring(0, maxChar);
  return (
    <div>
      <p>
        {text}...
        <button onClick={() => setIsExpended(!isExpended)}>
          {isExpended ? "Less" : "More"}
        </button>
      </p>
    </div>
  );
};

export default ExpandedText;
