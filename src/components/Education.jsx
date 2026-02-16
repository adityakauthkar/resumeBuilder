import React from "react";
import { Plus , Trash } from "lucide-react";

const Education = ({ onChange, value = [] }) => {
  const addEducation = () => {
    onChange([
      ...value,
      {
        id: crypto.randomUUID(),
        institution: "",
        degree: "",
        field: "",
        graduation_date: "",
        gpa: "",
      },
    ]);
  };

  const deleteEducation = (id) => {
    onChange(value.filter((edu) => edu.id !== id));
  };

  const updateEducation = (id, field, fieldValue) => {
    onChange(
      value.map((edu) =>
        edu.id === id ? { ...edu, [field]: fieldValue } : edu,
      ),
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">
            Education
          </h2>
          <span className="text-sm text-slate-500">
            Add your job experience
          </span>
        </div>

        <button
          className="flex items-center gap-2 px-4 py-2 bg-green-100 text-sm font-medium text-green-700 rounded-lg hover:bg-green-200 transition-colors"
          onClick={addEducation}
        >
          <Plus size={16} />
          Add Education
        </button>
      </div>

      {value.length === 0 ? (
        <p className="text-sm text-slate-500">No education added yet.</p>
      ) : (
        <div className="space-y-4">
          {value.map((edu, index) => (
            <EducationForm
              key={edu.id}
              index={index}
              data={edu}
              onDelete={() => deleteEducation(edu.id)}
              onUpdate={(field, val) => updateEducation(edu.id, field, val)}
            />
          ))}
        </div>
      )}
       
    </div>
  );
};

const EducationForm = ({ index, data, onDelete, onUpdate }) => {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-md font-semibold text-slate-800">
          Education #{index + 1}
        </h3>

        <button
          onClick={onDelete}
          className="text-slate-400 hover:text-red-500 transition"
        >
          <Trash size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Institution Name"
          value={data.institution}
          onChange={(e) => onUpdate("institution", e.target.value)}
          className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Degree"
          value={data.degree}
          onChange={(e) => onUpdate("degree", e.target.value)}
          className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Field of Study"
          value={data.field}
          onChange={(e) => onUpdate("field", e.target.value)}
          className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="GPA"
          value={data.gpa}
          onChange={(e) => onUpdate("gpa", e.target.value)}
          className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="date"
          value={data.graduation_date}
          onChange={(e) => onUpdate("graduation_date", e.target.value)}
          className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
        />

    
      </div>

      
    </div>
  );
};

export default Education;
