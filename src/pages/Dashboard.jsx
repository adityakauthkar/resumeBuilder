import { PlusIcon, UploadCloudIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const colors = ['#9333ea' ]; 
  // const [resumes, setResumes] = useState();
  // const fetchAllResumes = async () => {
  //   const url = "";
  //   const response = await axios.get("");
  // };

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
          <button className="w-full h-48 bg-white sm:max-w-36 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-600 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer ">
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

        <hr className="borderslate-300 my-6 sm:w-[305x]" />
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {/* map function to display the existing resumes  */}

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
