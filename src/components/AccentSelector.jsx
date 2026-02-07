import { Check, Palette } from "lucide-react";
import React, { useState } from "react";

const AccentSelector = ({ selectedColor, onChange }) => {
  const colors = [
    { name: "blue", value: "#2563EB" },
    { name: "indigo", value: "#4F46E5" },
    { name: "purple", value: "#7C3AED" },
    { name: "green", value: "#16A34A" },
    { name: "red", value: "#DC2626" },
    { name: "orange", value: "#EA580C" },
    { name: "pink", value: "#DB2777" },
    { name: "gray", value: "#6B7280" },
    { name: "black", value: "#111827" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1 text-sm text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 ring-1 ring-blue-300 hover:ring-blue-400 transition-all px-3 py-2 rounded-lg"
      >
        <Palette size={16} />
        <span className="max-sm:hidden">Accent</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-10 grid grid-cols-4 w-60 gap-2 p-3 bg-white rounded-md border border-gray-200 shadow-sm">
          {colors.map((color) => (
            <div
              key={color.value}
              className="relative cursor-pointer flex flex-col items-center"
              onClick={() => {
                onChange(color.value);
                setIsOpen(false);
              }}
            >
              <div
                className="w-10 h-10 rounded-full border-2 transition-colors"
                style={{
                  backgroundColor: color.value,
                  borderColor:
                    selectedColor === color.value ? "#000" : "transparent",
                }}
              />

              {selectedColor === color.value && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}

              <p className="text-xs text-center mt-1 text-gray-600">
                {color.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccentSelector;
