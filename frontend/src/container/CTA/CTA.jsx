
import React, { useState, useEffect } from 'react';
import './CTA.css';
import { images } from '../../constants';

const industries = [
  { name: "Oil & Gas Sector", img: images.industries1 },
  { name: "Chemical Manufacturer", img: images.industries2 },
  { name: "Plastic", img: images.industries3 },
  { name: "Paper Pneumatic Control System", img: images.industries4 },
  { name: "HVAC", img: images.industries5 },
  { name: "Petrochemical", img: images.industries6 },
  { name: "Boilers Industries & Manufacturer", img: images.industries7 },
  { name: "Water Treatment", img: images.industries8 },
  { name: "Pharmaceutical", img: images.industries9 },
  { name: "Food Beverages & Dairy", img: images.industries10 },
  { name: "Pipelines Systems", img: images.industries11 },
  { name: "Power Sector", img: images.industries12 }
];

const ITEMS_PER_PAGE = 6;
const SLIDE_INTERVAL = 5000; // 5 seconds

const IndustriesSection = () => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % Math.ceil(industries.length / ITEMS_PER_PAGE));
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const startIndex = page * ITEMS_PER_PAGE;
  const pageItems = industries.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="section-padding">
      <div className="cta row text-center">
        <h3 className="mb-4">Industries We Serve</h3>
        <div className="row justify-content-center">
          {pageItems.map((industry, index) => (
            <div key={index} className="col-lg-2 col-md-4 col-6 mb-4">
              <img src={industry.img} alt={industry.name} className="industry-img" />
              <p className="fw-bold">{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;



