import { useState } from "react";
import "./ReadMoreLessAbout.css";

export default function ReadMoreLessAbout({ limit, children }) {
  const text = children;

  const [showReadMore, setShowReadMore] = useState(true);

  const toggleBtn = () => {
    setShowReadMore((prevState) => !prevState);
  };

  return (
    <div>
      {showReadMore ? text : text.substring(0, limit)}
      <button onClick={toggleBtn}>
        {showReadMore ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
