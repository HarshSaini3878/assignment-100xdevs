import React, { useState, useEffect } from 'react';
import './Home.css'; // Importing CSS for form styling
import { useNavigate } from 'react-router-dom';

const ErrorMessage = ({ message }) => (
  <span className="error">{message}</span>
);

function Home({ setdata, data }) {
  // Log data whenever it changes
  const navigate = useNavigate(); // Use navigate to go to the Table component
  useEffect(() => {
    console.log("Updated Data in Home:", data);
  }, [data]);

  const [formData, setFormData] = useState({
    petName: '',
    petType: '',
    breed: '',
    yourName: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.petName) newErrors.petName = "Pet name is required";
    if (!formData.petType) newErrors.petType = "Pet type is required";
    if (!formData.breed) newErrors.breed = "Breed is required";
    if (!formData.yourName) newErrors.yourName = "Your name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Update data state
      setdata((prev) => [...prev, formData]);
      console.log("Data after submit:", [...data, formData]); // To debug if data is updating
      
      // Reset form data after successful submission
      navigate('/table'); 
      setFormData({
        petName: '',
        petType: '',
        breed: '',
        yourName: '',
        email: '',
        phone: '',
      });

      setErrors({}); // Reset errors
      
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <h2>Pet Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className="form-group" key={key}>
            <label>{`${key.charAt(0).toUpperCase() + key.slice(1)}:`}</label>
            <input
              type={key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'text'}
              name={key}
              value={formData[key]}
              onChange={handleChange}
            />
            {errors[key] && <ErrorMessage message={errors[key]} />}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;
