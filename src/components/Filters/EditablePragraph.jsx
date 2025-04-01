import { useState } from "react";

const EditableParagraph = ({ value, onChange }) => {
  const [content, setContent] = useState(value);

  const handleChange = (e) => {
    const newValue = e.target.innerText.replace("₹", "");
    onChange(newValue); // Simulate onChange
    // console.log(newValue);
  };

  return (
    <p
      className="input"
      contentEditable="true"
      suppressContentEditableWarning={true}
      onInput={(e) => handleChange(e)}
    >
      {content}
    </p>
  );
};

export default EditableParagraph;
