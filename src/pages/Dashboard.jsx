import { PlusIcon, UploadCloud, XIcon, Edit2, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../services/operations/authAPI";
import { getAllresume } from "../../services/operations/resumeApi";

const Dashboard = () => {
  const colors = ["#9333ea"];
  const [allresumes, setAllResumes] = useState([]);
  const [showCreateResume, setshowCreateResume] = useState(false);
  const [showuploadResume, setshowuploadResume] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [editResumeId, seteditResumeId] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();


  //fetchuser
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser();
        console.log("user data " , response);
        setUser(response.data);
        
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);


  //fetch resumes 
  useEffect(() => {
    
  const fetchAllResumes = async () => {
    try {
      const response = await getAllresume();
      console.log("dashboard", response);
      setAllResumes(response.data);
    } catch (error) {
      console.error(
        "Error fetching resumes:",
        error.response?.data || error.message,
      );
    }
  };
    fetchAllResumes();
  }, []);

  //create resume 
  const createResume = async (event) => {
    event.preventDefault();
    setshowCreateResume(false);
    navigate("/resumebuilder");
  };

  //uploda resume 
  const uploadResume = async (event) => {
    event.preventDefault();
    setshowuploadResume(false);
    navigate("/resumebuilder");
  };

  //edit resume title 
  const handleEdit = (resume) => {
    navigate(`/resumeBuilder/${resume._id}`);
  };

  //delete resume title
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume?",
    );
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:4000/api/v1/resumes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllResumes((prev) => prev.filter((r) => r._id !== id));
    } catch (error) {
      console.error("Error deleting resume:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          {user && (
            <h1 className="text-3xl font-bold text-slate-800 mb-2"> {user.name}</h1>
          )}
          <p className="text-slate-600">
            Manage your resumes and create new ones
          </p>
        </div>

        {/* Action Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
          {/* Create Resume Card */}
          <button
            onClick={() => setshowCreateResume(true)}
            className="h-64 bg-white flex flex-col items-center justify-center rounded-xl gap-3 text-slate-600 border-2 border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-500 transition-colors duration-300">
              <PlusIcon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="font-semibold text-sm group-hover:text-indigo-600 transition-colors duration-300">
              Create Resume
            </span>
          </button>

          {/* Upload Resume Card */}
          <button
            onClick={() => setshowuploadResume(true)}
            className="h-64 bg-white flex flex-col items-center justify-center rounded-xl gap-3 text-slate-600 border-2 border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-300">
              <UploadCloud className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="font-semibold text-sm group-hover:text-purple-600 transition-colors duration-300">
              Upload Existing
            </span>
          </button>
        </div>

        {/* Existing Resumes Section */}
        {allresumes.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Your Resumes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {allresumes.map((resume) => (
                <div
                  key={resume._id}
                  className="h-64 bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 overflow-hidden group hover:scale-105 flex flex-col"
                >
                  {/* Resume Preview Section */}
                  <div className="h-40 bg-gradient-to-br from-indigo-500 to-purple-600 p-6 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

                    {/* Document icon */}
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-20 mx-auto bg-white rounded-lg shadow-lg flex items-center justify-center">
                        <div className="space-y-1">
                          <div className="h-1 w-8 bg-slate-300 rounded"></div>
                          <div className="h-1 w-6 bg-slate-300 rounded"></div>
                          <div className="h-1 w-8 bg-slate-300 rounded"></div>
                          <div className="h-1 w-5 bg-slate-300 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Resume Info & Actions */}
                  <div className="p-4 flex flex-col gap-3 flex-grow">
                    {/* Title */}
                    <h3
                      className="font-semibold text-slate-800 text-sm leading-tight line-clamp-2"
                      title={resume.title}
                    >
                      {resume.title || "Untitled Resume"}
                    </h3>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <button
                        onClick={() => handleEdit(resume)}
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-600 transition-colors duration-200 text-sm font-medium"
                        title="Edit Resume"
                      >
                        <Edit2 className="w-4 h-4" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDelete(resume._id)}
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-colors duration-200 text-sm font-medium"
                        title="Delete Resume"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State - Only show if no resumes */}
        {allresumes.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-slate-200 flex items-center justify-center">
              <UploadCloud className="w-12 h-12 text-slate-400" />
            </div>
            <p className="text-slate-500 text-lg">No resumes found.</p>
            <p className="text-slate-400 text-sm mt-2">
              Create or upload your first resume to get started
            </p>
          </div>
        )}
      </div>

      {/* Create Resume Modal */}
      {showCreateResume && (
        <div
          onClick={() => setshowCreateResume(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">
                Create a Resume
              </h2>
              <button
                onClick={() => setshowCreateResume(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <XIcon className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            <form onSubmit={createResume} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Resume Title
                </label>
                <input
                  type="text"
                  placeholder="e.g., Software Engineer Resume"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Create Resume
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setshowCreateResume(false);
                    setTitle("");
                  }}
                  className="flex-1 bg-slate-200 text-slate-700 py-3 rounded-lg font-semibold hover:bg-slate-300 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Upload Resume Modal */}
      {showuploadResume && (
        <div
          onClick={() => setshowuploadResume(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">
                Upload Resume
              </h2>
              <button
                onClick={() => setshowuploadResume(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <XIcon className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            <form onSubmit={uploadResume} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Resume Title
                </label>
                <input
                  type="text"
                  placeholder="e.g., Marketing Manager Resume"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Select Resume File
                </label>
                <div className="relative">
                  {resume ? (
                    <div className="flex items-center gap-3 p-4 bg-purple-50 border-2 border-purple-200 rounded-lg">
                      <div className="flex-1 truncate text-sm text-purple-900 font-medium">
                        {resume.name}
                      </div>
                      <button
                        type="button"
                        onClick={() => setResume(null)}
                        className="text-purple-600 hover:text-purple-800"
                      >
                        <XIcon className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-purple-500 hover:bg-purple-50 transition-all group">
                      <UploadCloud className="w-10 h-10 text-slate-400 group-hover:text-purple-500 transition-colors mb-2" />
                      <span className="text-sm text-slate-600 group-hover:text-purple-600 transition-colors">
                        Click to upload or drag and drop
                      </span>
                      <span className="text-xs text-slate-400 mt-1">
                        PDF, DOC, DOCX
                      </span>
                    </label>
                  )}
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setResume(e.target.files[0])}
                    required
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Upload Resume
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setshowuploadResume(false);
                    setTitle("");
                    setResume(null);
                  }}
                  className="flex-1 bg-slate-200 text-slate-700 py-3 rounded-lg font-semibold hover:bg-slate-300 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
