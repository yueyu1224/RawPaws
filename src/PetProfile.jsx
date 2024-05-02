import React, { useState, useEffect } from 'react';
import './styles/PetProfile.css';

function PetProfile({ sessionId }) {
  const [petProfile, setPetProfile] = useState({ name: '', type: '', breed: '' });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (sessionId) {
      fetch('/api/pet-profiles', {
        method: 'GET',
        credentials: 'include',
      })
      .then(response => {
        if (!response.ok && response.status === 401) {
          throw new Error('No profile or unauthorized');
        }
        return response.json();
      })
      .then(data => {
        setPetProfile(data);
        setIsLoaded(true);
      })
      .catch(error => {
        console.error('Error fetching pet profiles:', error);
        setPetProfile({ name: '', type: '', breed: '' });
        setIsLoaded(true);
      });
    }
  }, [sessionId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/pet-profiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petProfile),
      credentials: 'include',
    });

    if (response.ok) {
      const updatedProfile = await response.json();
      setPetProfile(updatedProfile);
      alert('Pet profile updated successfully!');
    } else {
      const errorResponse = await response.json();
      alert(`Failed to update pet profile: ${errorResponse.error}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetProfile({ ...petProfile, [name]: value });
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pet-profile">
      <h2>Create or Update Pet Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Pet's Name"
          value={petProfile.name}
          onChange={handleChange}
          required
        />
        <input
          name="type"
          type="text"
          placeholder="Pet's Type (e.g., Dog, Cat)"
          value={petProfile.type}
          onChange={handleChange}
          required
        />
        <input
          name="breed"
          type="text"
          placeholder="Pet's Breed"
          value={petProfile.breed}
          onChange={handleChange}
        />
        <button type="submit">Save Pet Profile</button>
      </form>
      {petProfile.name && (
        <div className="pet-profile-display">
          <h3>Saved Pet Profile:</h3>
          <p>Name: {petProfile.name}</p>
          <p>Type: {petProfile.type}</p>
          <p>Breed: {petProfile.breed}</p>
        </div>
      )}
    </div>
  );
}

export default PetProfile;


