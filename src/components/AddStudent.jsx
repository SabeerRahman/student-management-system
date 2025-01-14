import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phoneNumber: "",
  });
  const navigate = useNavigate();

  const handleFormChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleAddStudent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://668d03ed099db4c579f15e44.mockapi.io/students",
        formData
      );
      navigate("/");
      alert("Successfully Added the Student");
    } catch (error) {
      return error;
    }
  };
  return (
    <div>
      <form
        action=""
        className="flex justify-center mt-10"
        onSubmit={handleAddStudent}
      >
        <div className="w-[350px] border border-gray-600 rounded-lg p-4">
          <div>
            <h1 className="font-bold text-lg pb-4 text-center">Add Student</h1>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              className="w-[250px] h-[40px] outline-none border border-gray-600 px-2 rounded-lg"
              value={formData.firstName}
              onChange={(e) => handleFormChange("firstName", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              className="w-[250px] h-[40px] outline-none border border-gray-600 px-2 rounded-lg"
              value={formData.lastName}
              onChange={(e) => handleFormChange("lastName", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Gender</label>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="min-w-5 min-h-5"
                  checked={formData.gender === "Male"}
                  onChange={() => handleFormChange("gender", "Male")}
                />
                <label htmlFor="">Male</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="min-w-5 min-h-5"
                  checked={formData.gender === "Female"}
                  onChange={() => handleFormChange("gender", "Female")}
                />
                <label htmlFor="">Female</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="w-[250px] h-[40px] outline-none border border-gray-600 px-2 rounded-lg"
              value={formData.email}
              onChange={(e) => handleFormChange("email", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3 pb-5">
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              className="w-[250px] h-[40px] outline-none border border-gray-600 px-2 rounded-lg"
              value={formData.phoneNumber}
              onChange={(e) => handleFormChange("phoneNumber", e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-[250px] h-[40px] border border-black rounded-lg bg-black text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
