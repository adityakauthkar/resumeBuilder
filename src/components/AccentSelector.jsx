import React, { useState } from "react";

const AccentSelector = (accent_color , onChange) => {

  const accent_colors = [
    {
         name: "blue"  ,  color:"#2563EB",
         name:"indigo", color:"#4F46E5",
         name: "purple", color:"#7C3AED",
         name:"green",color: "#16A34A",
         name:"red", color:"#DC2626",
         name:"orange" , color: "#EA580C",
         name:"pink" , color: "#DB2777",
         name: "gray" , color: "#6B7280",
         name:"black" , color: "#111827",
    },
  ];

  const [isOpen , setisOpen] = useState(false); 


  return (
    <div className="relative">
        <button onClick={()=> setisOpen(!isOpen)}   className='flex items-center gap-1 text-sm text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg '>
               <Layout size={14}/> <span className='max-sm:hidden'>Accent</span>
        </button>

        {isOpen &&(

        )}


    </div>
  )
};

export default AccentSelector;
