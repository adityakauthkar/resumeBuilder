import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Register = () => {

  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const {name , email , password} = formData ; 


  const handleRegister =async(e)=>{
   e.preventDefault();
   try{

    const response = await axios.post('http://localhost:4000/api/v1/users/register' , formData);
    console.log(response.data) ; 
      toast.success('Registered Successfully') ; 
    navigate('/login') ; 

   }catch(error){
    console.log("Error in sign up "  , error);
   }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white-300 to-white-400">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Please register to continue
        </p>

        <form className="space-y-4" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition duration-200 "
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
