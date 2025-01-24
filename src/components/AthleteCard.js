import React from 'react';

function AthleteCard({ athlete }) {
  return (
    <div className="athlete-card">
      <img src={athlete.image} alt={athlete.name} />
      <h3>{athlete.name}</h3>
      <p>Position: {athlete.position}</p>
      <p>Height: {athlete.height}</p>
      <p>Weight: {athlete.weight}</p>
      <p>Speed: {athlete.speed}</p>
    </div>
  );
}

export default AthleteCard;
