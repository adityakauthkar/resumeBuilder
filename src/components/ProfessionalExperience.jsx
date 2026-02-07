import React, { useState } from "react";
import { Plus, Trash } from "lucide-react";

const ProfessionalExperience = ({ value = [], onChange }) => {
  const addExperience = () => {
    onChange([
      ...value,
      {
        id: crypto.randomUUID(),
        company: "",
        position: "",
        start_date: "",
        end_date: "",
        description: "",
        current: false,
      },
    ]);
  };

  const deleteExperience = (id) => {
    onChange(value.filter((exp) => exp.id !== id));
  };

  const updateExperience = (id, field, fieldValue) => {
    onChange(
      value.map((exp) =>
        exp.id === id ? { ...exp, [field]: fieldValue } : exp,
      ),
    );
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">
            Professional Experience
          </h2>
          <span className="text-sm text-slate-500">
            Add your job experience
          </span>
        </div>

        <button
          onClick={addExperience}
          className="
            flex items-center gap-2 px-4 py-2
            bg-green-100 text-sm font-medium text-green-700
            rounded-lg hover:bg-green-200
            transition-colors
          "
        >
          <Plus size={16} />
          Add Experience
        </button>
      </div>

      {/* Content */}
      {value.length === 0 ? (
        <div className="text-sm text-slate-500">
          <p>No work experience added yet.</p>
          <p>Click &quot;Add Experience&quot; to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {value.map((exp, index) => (
            <Formdata
              key={exp.id}
              index={index}
              data={exp}
              onDelete={() => deleteExperience(exp.id)}
              onUpdate={(field, val) => updateExperience(exp.id, field, val)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Formdata = ({ index, data, onDelete, onUpdate }) => {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-slate-800">
          Experience #{index + 1}
        </h1>

        <button
          onClick={onDelete}
          aria-label="Delete experience"
          className="text-slate-400 hover:text-red-500 transition"
        >
          <Trash size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Company Name"
          value={data.company}
          className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onUpdate("company", e.target.value)}
        />

        <input
          type="text"
          placeholder="Job Title"
          value={data.position}
          onChange={(e) => onUpdate("title", e.target.value)}
          className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="date"
          
          className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          value={data.start_date}
        />

        <input
          type="date"
          className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          value={data.end_date}
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="h-4 w-4 text-blue-600 rounded"
          value={data.current}
        />
        <span className="text-sm text-slate-700">Currently working here</span>
      </div>

      <div className="space-y-2">
        <span className="text-sm font-medium text-slate-700">
          Job Description
        </span>
        <textarea
          rows={4}
          value={data.description}
          className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onUpdate("description", e.target.value)}
        />
      </div>
    </div>
  );
};

export default ProfessionalExperience;
