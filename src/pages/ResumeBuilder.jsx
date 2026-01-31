import React from "react";

const ResumeBuilder = () => {
  return (
    <div>
      <h1>Personal Information</h1>
      <p>Get started with Personal Information</p>
      <span>Upload user image</span>
      <br />
      <input type="name" placeholder="Enter your full name" /> <br />
      <input type="email" placeholder="Enter your email address" />
      <br />
      <input type="phonenumber" placeholder="Enter your phone number " />
      <br />
      <input type="" placeholder="Enter your location " />
      <br />
      <input type="text" placeholder="Enter your profession" />
      <br />
      <input type="text" placeholder="Enter your linkedin Profile" />
      <br />
      <input type="text" placeholder="Enter your personal website" />
      <br />

      <button>Save Changes </button>
    </div>
  );
};

export default ResumeBuilder;
