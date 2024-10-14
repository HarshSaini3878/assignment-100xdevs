import React, { useState } from 'react';
import './Home.css'; // Importing CSS for form styling
import { useContext } from 'react';
import { AppContext } from '../AppContext.jsx';
function Home() {
    const {updateData } = useContext(AppContext);
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
      // Submit form
      console.log(formData);
      // Reset form
      updateData(formData);
      
      setFormData({
        petName: '',
        petType: '',
        breed: '',
        yourName: '',
        email: '',
        phone: '',
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <h2>Pet Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Pet Name:</label>
          <input
            type="text"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
          />
          {errors.petName && <span className="error">{errors.petName}</span>}
        </div>
        <div className="form-group">
          <label>Pet Type:</label>
          <input
            type="text"
            name="petType"
            value={formData.petType}
            onChange={handleChange}
          />
          {errors.petType && <span className="error">{errors.petType}</span>}
        </div>
        <div className="form-group">
          <label>Breed:</label>
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
          />
          {errors.breed && <span className="error">{errors.breed}</span>}
        </div>
        <div className="form-group">
          <label>Your Name:</label>
          <input
            type="text"
            name="yourName"
            value={formData.yourName}
            onChange={handleChange}
          />
          {errors.yourName && <span className="error">{errors.yourName}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <button type="submit">Submit</button>
        
   
      </form>
    </div>
  );
}

export default Home;
