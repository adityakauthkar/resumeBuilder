import React from "react";

const ProfessionalSummary = ({ value, onChange }) => {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Professional Summary
          </h2>
          <p className="text-sm text-gray-500">
            Add a short summary to highlight your experience and strengths
          </p>
        </div>

        <button
          type="button"
          className="px-3 py-1.5 rounded-lg text-sm font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 transition-all"
        >
          ✨ AI Enhance
        </button>
      </div>

      {/* Textarea */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write a 2–4 line professional summary..."
        rows={5}
        className="w-full rounded-lg border border-gray-300 p-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
      />

      {/* Helper text */}
      <p className="text-xs text-gray-400">
        Tip: Keep it concise. Focus on role, experience, and key skills.
      </p>
    </div>
  );
};

export default ProfessionalSummary;
