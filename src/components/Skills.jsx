import React, { useState } from "react";

const Skills = ({ value = [], onChange }) => {
  const [input, setInput] = useState("");

  // Add skill using Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      e.preventDefault();

      const updatedSkills = [...value, input.trim()];
      onChange(updatedSkills);
      setInput("");
    }
  };

  //Add skills
  const addSkill = (e) => {
    if (input.trim() !== "") {
      const updatedSkills = [...value, input.trim()];
      onChange(updatedSkills);
      setInput("");
    }
  };

  // Delete skill
  const handleDeleteSkill = (skillToDelete) => {
    const updatedSkills = value.filter((skill) => skill !== skillToDelete);
    onChange(updatedSkills);
  };

  return (
    <div className="space-y-4">
      {/* Skills list */}
      <div className="flex flex-wrap gap-2">
        {value.map((item) => (
          <div
            key={item}
            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm flex items-center gap-2"
          >
            {item}
            <button
              onClick={() => handleDeleteSkill(item)}
              className="text-xs text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder="Press Enter to add skill..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-xl  "
        onClick={addSkill}
      >
        Add skill
      </button>
    </div>
  );
};

export default Skills;
