import { PlusIcon, UploadCloudIcon, XIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const colors = ["#9333ea"];
  // const [allresumes, setAllResumes] = useState();
  const [showCreateResume, setshowCreateResume] = useState(false);
  const [showuploadResume, setshowuploadResume] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [editResumeId, seteditResumeId] = useState("");
  const navigate = useNavigate();

  // const fetchAllResumes = async () => {
  //   const url = "";
  //   const response = await axios.get("");
  // };

  const createResume = async (event) => {
    event.preventDefault(); //prevent webpage from reloading
    setshowCreateResume(false);
    navigate("/resumebuilder");
  };

  // useEffect(() => {
  //   fetchAllResumes();
  // }, []);

  return (
    <div>
      <div className="px-4 py-8 mx-auto max-w-7xl">
        <p className="mb-6 font-mono text-transparent text 2xl bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text sm:hidden">
          Welcome Aditya Kauthkar{" "}
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => setshowCreateResume(true)}
            className="w-full h-48 bg-white sm:max-w-36 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-600 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer "
          >
            <PlusIcon className="transition-all duration-300 size-11 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full" />

            <p className="text-sm transition-all duration-300 group-hover:text-indigo-600">
              Create resume
            </p>
          </button>

          <button className="w-full h-48 bg-white sm:max-w-36 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-600 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer ">
            <UploadCloudIcon className="transition-all duration-300 size-11 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full" />

            <p className="text-sm transition-all duration-300 group-hover:text-purple-600">
              Uplpoad existing
            </p>
          </button>
        </div>

        <hr className="borderslate-300 my-6 sm:w-[305px]" />
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {/* map function to display the existing resumes  */}
        </div>

        {/* Modal after opening create resume */}

        <div>
          {showCreateResume && (
            <form
              onSubmit={createResume}
              onClick={() => setshowCreateResume(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center "
            >
              <div
                className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <h1> Create a resume </h1>
                <input
                  type="text"
                  placeholder="Enter a resume title "
                  className="w-full px-4 py-2 mb-4 focus:border-green-600"
                  // value={title}
                  required
                />
                <button className="w-full py-2 bg-green-600 text-white hover:bg-green-700 rounded hover:bg-green-700 transition-colors ">
                  Create Resume
                </button>

                <XIcon
                  className=" absolute top-4 right-4 text-slate-500 hover:text-slate-50 cursor-pointer transition-colors  "
                  onClick={() => {
                    setshowCreateResume(false);
                    setTitle("");
                  }}
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
