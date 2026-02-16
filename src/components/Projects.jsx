import React from "react";
import { Trash } from "lucide-react";

const Projects = ({ value = [], onChange }) => {
  const addProject = () => {
    onChange([
      ...value,
      {
        id: crypto.randomUUID(),
        name: "",
        type: "",
        description: "",
      },
    ]);
  };

  const deleteProject = (id) => {
    onChange(value.filter((prj) => prj.id !== id));
  };

  const updateProject = (id, field, fieldValue) => {
    onChange(
      value.map((prj) =>
        prj.id === id ? { ...prj, [field]: fieldValue } : prj
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">Projects</h2>
          <p className="text-sm text-slate-500">
            Showcase your technical or academic projects
          </p>
        </div>

        <button
          onClick={addProject}
          className="px-4 py-2 rounded-lg bg-green-100 text-green-700 text-sm font-medium hover:bg-green-200 transition"
        >
          + Add Project
        </button>
      </div>

      {/* Empty state */}
      {value.length === 0 ? (
        <div className="border border-dashed rounded-lg p-6 text-center text-slate-500">
          No projects added yet
        </div>
      ) : (
        <div className="space-y-4">
          {value.map((prj, index) => (
            <ProjectForm
              key={prj.id}
              data={prj}
              index={index}
              onDelete={() => deleteProject(prj.id)}
              onUpdate={(field, val) =>
                updateProject(prj.id, field, val)
              }
            />
          ))}
        </div>
      )}

      {/* Save */}
  
    </div>
  );
};

const ProjectForm = ({ data, index, onDelete, onUpdate }) => {
  return (
    <div className="border rounded-xl p-6 bg-white shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-slate-800">
          Project #{index + 1}
        </h3>

        <button
          onClick={onDelete}
          className="text-slate-400 hover:text-red-500 transition"
        >
          <Trash size={18} />
        </button>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Project Name"
          value={data.name}
          onChange={(e) => onUpdate("name", e.target.value)}
          className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
        />

        <input
          type="text"
          placeholder="Project Type (Web App, ML, etc.)"
          value={data.type}
          onChange={(e) => onUpdate("type", e.target.value)}
          className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
        />
      </div>

      <textarea
        placeholder="Briefly describe what you built, tech used, and impact"
        value={data.description}
        onChange={(e) => onUpdate("description", e.target.value)}
        rows={4}
        className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none resize-none"
      />
    </div>
  );
};

export default Projects;
