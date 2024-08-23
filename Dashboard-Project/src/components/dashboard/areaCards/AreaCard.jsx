import React from "react";
import "./AreaCards.scss";

const AreaCard = ({ icon, name }) => {
  return (
    <div className="area-card">
      <div className="card-icon">{icon}</div>
      <div className="card-name">{name}</div>
    </div>
  );
};

export default AreaCard;
