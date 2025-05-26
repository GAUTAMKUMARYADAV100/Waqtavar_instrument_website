
import React from 'react';
import { Headings } from '../../components';
import { data } from '../../constants';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();
  return (
    <div id="products" className="d-block pt-md-4">
      <Headings 
        title="Products" 
        text="We specialize in precision-engineered industrial instruments such as Bimetallic and Gas Pressure Gauges. Explore our range of reliable, made-in-India temperature measurement solutions." 
      />

      <div className="row">
      {data.ServicesData.map(({ id, titleone, titletwo, itemclass, imgURL }, index) => (
        <div className="col-lg-6 col-12" key={index}>
          <div className={`row ${itemclass}`}>
            <div className="col-md-6 box">
              <div>
                <span>{titleone}</span>
                <span>{titletwo}</span>
              </div>
              <button
                onClick={() => navigate(`/products/${id}`)}
                className="readmore"
              >
                <BsFillArrowUpRightCircleFill /> Learn more
              </button>
            </div>
            <div className="col-md-6 text-end">
              <img src={imgURL} alt={titleone} className="img-fluid img-services" />
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Services;
