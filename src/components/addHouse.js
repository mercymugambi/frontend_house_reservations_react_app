import React, { useState } from 'react'; // Don't forget to import React and useState
import { useDispatch } from 'react-redux';
import { clearForm } from '../redux/houses/addHouseSlice';

const HouseForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    houseName: '',
    description: '',
    bedrooms: '',
    bathrooms: '',
    rent: '',
    securityDeposit: '',
    city: '',
    contactPhoneNumber: '',
    icon: null,
  });

  const handleInputChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      icon: imageFile,
    }));
  };

  const handleSubmit = () => {
    const apiEndpoint = 'http://3000/api/v1/houses'; // Replace with your API endpoint

    const formDataToSend = new FormData();
    for (const field in formData) {
      formDataToSend.append(field, formData[field]);
    }

    fetch(apiEndpoint, {
      method: 'POST',
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data sent successfully', data);
        dispatch(clearForm());
      })
      .catch((error) => {
        console.error('Error sending data', error);
      });
  };

  return (
    <>
      <section className="AddHouse-container">
        {isLoading && <p>Loading...</p>}
        {error && (
        <p>
          Error:
          {error}
        </p>
        )}
        <h1>Create a House</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            value={formData.houseName}
            onChange={(e) => handleInputChange('houseName', e.target.value)}
            placeholder="House Name"
          />
          <input
            type="text"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Description"
          />
          <input
            type="number"
            value={formData.bedrooms}
            onChange={(e) => handleInputChange('bedrooms', e.target.value)}
            placeholder="Number of Bedrooms"
          />
          <input
            type="number"
            value={formData.bathrooms}
            onChange={(e) => handleInputChange('bathrooms', e.target.value)}
            placeholder="Number of Bathrooms"
          />
          <input
            type="number"
            value={formData.rent}
            onChange={(e) => handleInputChange('rent', e.target.value)}
            placeholder="Monthly Rent"
          />
          <input
            type="text"
            value={formData.securityDeposit}
            onChange={(e) => handleInputChange('security_deposit', e.target.value)}
            placeholder="Security Deposit"
          />
          <input
            type="text"
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            placeholder="City"
          />
          <input
            type="number"
            value={formData.contactPhoneNumber}
            onChange={(e) => handleInputChange('contact_phone_number', e.target.value)}
            placeholder="Contact Phone Number"
          />
          <input
            type="file"
            name="icon"
            accept="image/*"
            placeholder="Image URL"
            onChange={handleImageChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </section>
    </>
  );
};

export default AddHouse;
