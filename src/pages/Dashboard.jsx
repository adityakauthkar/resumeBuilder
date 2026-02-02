import { PlusIcon, UploadCloud, UploadCloudIcon, XIcon } from "lucide-react";
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
  const uploadResume = async (event) => {
    event.preventDefault(); //prevent webpage from reloading
    setshowuploadResume(false);
    navigate("/resumebuilder");
  };

//   const editTotle =async()=>{
//     event.preventDefault();
//   }

//   const deleteResume =async()=>{
// const confirm = window.confirm('Are you sure you want to delete resume ?') ; 
// if(confirm){
//   setAllResumes(resume);

// }
//   }


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

          <button
            onClick={() => setshowuploadResume(true)}
            className="w-full h-48 bg-white sm:max-w-36 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-600 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer "
          >
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

        {/* Create Resume Modal  */}

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
                  onChange={(e) => setTitle(e.target.value)}
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

        {/*Uploda  Resume Modal */}
        <div>
          {showuploadResume && (
            <form
              onSubmit={uploadResume}
              onClick={() => setshowuploadResume(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center "
            >
              <div
                className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <h1> Upload resume </h1>
                <input
                  type="text"
                  placeholder="Enter a resume title "
                  className="w-full px-4 py-2 mb-4 focus:border-green-600"
                  // value={title}
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />

                <div>
                  <label
                    htmlFor="resumeinput"
                    className="block text-sm text-slate-700"
                  >
                    Select Resume File
                    <div className="flex flex-col items-center justify-center gap-2 border group text-slate-400 border-dashed rounded-md p-4 py=10 my-4 hover:border-green-400 hover:text-green-700 cursor-pointer transition-colors ">
                      {resume ? (
                        <p className="text-green-400">{resume.name}</p>
                      ) : (
                        <>
                          <UploadCloud className="size-14 stroke-1" />
                        </>
                      )}
                    </div>
                  </label>
                  <input
                    type="file"
                    id="resumeinput"
                    accept=".pdf"
                    hidden
                    onChange={(e) => setResume(e.target.files[0])}
                  />
                </div>
                <button className="w-full py-2 bg-green-600 text-white hover:bg-green-700 rounded hover:bg-green-700 transition-colors ">
                  Uolaod Resume
                </button>

                <XIcon
                  className=" absolute top-4 right-4 text-slate-500 hover:text-slate-50 cursor-pointer transition-colors  "
                  onClick={() => {
                    setshowuploadResume(false);
                    setTitle("");
                  }}
                />
              </div>
            </form>
          )}

          {/* Edit resume modal */}
          {/* {editResumeId&&(

)} */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
