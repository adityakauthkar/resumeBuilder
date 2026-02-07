import {
  ArrowLeftIcon,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  FileText,
  FolderIcon,
  GraduationCap,
  Sparkle,
  User,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PersonalInfo from "../components/PersonalInfo";
import ResumePreview from "../components/ResumePreview";
import { dummyResumeData } from "../assets/assets/assets";
import TemplateSelector from "../components/TemplateSelector";
import AccentSelector from "../components/AccentSelector";
import ProfessionalSummary from "../components/ProfessionalSummary";
import ProfessionalExperience from "../components/ProfessionalExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";

const ResumeBuilder = () => {
  const { id: resumeId } = useParams(); // Get resume ID from URL params

  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    personal_info: {},
    professional_summary: " ",
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: "classic",
    accent_color: "#3B82F6",
    public: false,
  });

  const [activeSectionsIndex, setActiveSectionsIndex] = useState(0);
  const [removeBackground, setRemoveBackground] = useState(false);

  const sections = [
    { id: "personal", name: "personal_info", icon: User },
    { id: "summary", name: "Summary", icon: FileText },
    { id: "experience", name: "Experience", icon: Briefcase },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "projects", name: "Projects", icon: FolderIcon },
    { id: "skills", name: "Skills", icon: Sparkle },
  ];

  const activeSection = sections[activeSectionsIndex];

  //Loading Existing Resumes
  const loadExistingResume = async (resumeId) => {
    // fetch resume by resumeId and setResumeData
    if (resumeId) {
      const existingResume = dummyResumeData.find((r) => r._id === resumeId);
      if (existingResume) {
        setResumeData(existingResume);
      }
    }
  };

  useEffect(() => {
    if (resumeId) {
      loadExistingResume(resumeId);
    }
  }, [resumeId]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Back Link */}
      <div className="p-4">
        <Link
          to="/dashboard"
          className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all"
        >
          <ArrowLeftIcon size={16} /> Back to Dashboard
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left panel - Form */}
          <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1">
              {/* Progress Bar */}
              <div className="relative h-1 mb-6">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
                <div
                  className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-600 transition-all duration-500"
                  style={{
                    width: `${(activeSectionsIndex * 100) / (sections.length - 1)}%`,
                  }}
                ></div>
              </div>

              {/* Section Navigation */}
              <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">
                {/* Template selector Button */}
                <div className="flex items-center gap-2">
                  <TemplateSelector
                    selectedTemplate={resumeData.template}
                    onChange={(template) =>
                      setResumeData((prev) => ({ ...prev, template }))
                    }
                  />
                </div>

                {/* Accent selector */}
                <div>
                  <AccentSelector
                    selectedColor={resumeData.accent_color}
                    onChange={(accent_color) =>
                      setResumeData((prev) => ({
                        ...prev,
                        accent_color,
                      }))
                    }
                  />
                </div>

                <div className="flex items-center gap-2">
                  {/* Previous Button */}
                  {activeSectionsIndex !== 0 && (
                    <button
                      onClick={() =>
                        setActiveSectionsIndex((prev) => Math.max(prev - 1, 0))
                      }
                      className="flex items-center gap-1 p-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-all"
                    >
                      <ChevronLeft size={16} /> Previous
                    </button>
                  )}

                  {/* Next Button */}
                  <button
                    onClick={() =>
                      setActiveSectionsIndex((prev) =>
                        Math.min(prev + 1, sections.length - 1),
                      )
                    }
                    className={`flex items-center gap-1 p-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-all ${
                      activeSectionsIndex === sections.length - 1
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={activeSectionsIndex === sections.length - 1}
                  >
                    Next <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Form Content  1.Personal Info */}
              <div className="space-y-6">
                {activeSection.id === "personal" && (
                  <PersonalInfo
                    data={resumeData.personal_info}
                    onChange={(data) =>
                      setResumeData((prev) => ({
                        ...prev,
                        personal_info: data,
                      }))
                    }
                    removeBackground={removeBackground}
                    setRemoveBackground={setRemoveBackground}
                  />
                )}
              </div>
              {/* 2. Professional Summary */}
              <div className="space-y-6">
                {activeSection.id === "summary" && (
                  <ProfessionalSummary
                    value={resumeData.professional_summary}
                    onChange={(summary) =>
                      setResumeData((prev) => ({
                        ...prev,
                        professional_summary: summary,
                      }))
                    }
                  />
                )}
              </div>

              {/* 3.Professional Experiance */}
              <div>
                {activeSection.id === "experience" &&(
                  <ProfessionalExperience
                   value = {resumeData.experience}
                   onChange={(updatedExperience) => setResumeData((prev) => ({
                    ...prev , 
                    experience:updatedExperience,
                   }))}
                   
                  />
                )}
              </div>

              {/* 4.Education */}
              <div>
                {activeSection.id === "education" &&(
                  <Education/>
                )}
              </div>

              {/* 5.Projects */}
              <div>
                {activeSection.id === "projects" && (
                  <Projects/>
                )}
              </div>

              {/* 6.Skills  */}
              <div>
                {activeSection.id === "skills" && (
                  <Skills/>
                )}
              </div>
            </div>
          </div>

          {/* Right panel - Resume Preview */}
          <div className="lg:col-span-7 max-lg:mt-6">
            <div>{/* ----butttons---- */}</div>

            <div>
              {/* Resume preview */}
              <ResumePreview
                data={resumeData}
                template={resumeData.template}
                accentColor={resumeData.accent_color}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
