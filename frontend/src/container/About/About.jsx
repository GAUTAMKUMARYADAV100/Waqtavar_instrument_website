import React from 'react';
import { Headings } from '../../components';
import { aboutusdata } from '../../constants/data';
import { images } from '../../constants';
import { BsLinkedin, BsAward, BsBuilding, BsGearFill } from 'react-icons/bs';
import { FiUsers, FiMapPin } from 'react-icons/fi';
import { FaIndustry, FaRupeeSign } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="section-padding about-page">
      {/* About Company Section */}
      <section className="about-company mb-5">
        <Headings 
          title="About Waqtavar Instrument" 
          text="Precision and innovation in instrumentation" 
        />
        
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="about-content">
              <div className="company-logo mb-4">
                <img src={images.logo} alt="Waqtavar Instrument Logo" loading="lazy" />
              </div>
              <h3 className="mb-3">Our Story</h3>
              <p className="mb-3">{aboutusdata.about.companyDescription}</p>
              
              <div className="company-stats">
                <div className="stat-item">
                  <BsBuilding className="stat-icon" />
                  <div>
                    <span className="stat-number">{aboutusdata.about.yearsExperience}+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                </div>
                <div className="stat-item">
                  <FiUsers className="stat-icon" />
                  <div>
                    <span className="stat-number">{aboutusdata.about.teamMembers}+</span>
                    <span className="stat-label">Team Members</span>
                  </div>
                </div>
                <div className="stat-item">
                  <BsAward className="stat-icon" />
                  <div>
                    <span className="stat-number">{aboutusdata.about.certifications}+</span>
                    <span className="stat-label">Certifications</span>
                  </div>
                </div>
              </div>

              {/* Company Details Section */}
              <div className="company-details mt-4">
                <h4 className="mb-3">Company Details</h4>
                <div className="detail-item">
                  <FaIndustry className="detail-icon" />
                  <div>
                    <span className="detail-label">Nature of Business:</span>
                    <span className="detail-value">{aboutusdata.about.companyDetails.natureOfBusiness}</span>
                  </div>
                </div>
                <div className="detail-item">
                  <BsGearFill className="detail-icon" />
                  <div>
                    <span className="detail-label">Additional Business:</span>
                    <span className="detail-value">{aboutusdata.about.companyDetails.additionalBusiness.join(', ')}</span>
                  </div>
                </div>
                <div className="detail-item">
                  <FaRupeeSign className="detail-icon" />
                  <div>
                    <span className="detail-label">Annual Turnover:</span>
                    <span className="detail-value">{aboutusdata.about.companyDetails.annualTurnover}</span>
                  </div>
                </div>
                <div className="detail-item">
                  <FiMapPin className="detail-icon" />
                  <div>
                    <a href=""><span className="detail-label">Address:</span></a>
                    <span className="detail-value">{aboutusdata.about.companyDetails.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <img 
                src={images.Waqtavar_collage} 
                alt="Waqtavar Instrument Facility" 
                className="img-fluid rounded"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications mb-5">
        <Headings 
          title="Our Certifications" 
          text="Quality assurance and industry recognition" 
        />
        
        <div className="row">
          {aboutusdata.certifications.map((cert, index) => (
            <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>
              <div className="cert-card">
                <div className="cert-img">
                  <img src={cert.image} alt={cert.title} loading="lazy" />
                </div>
                <div className="cert-body">
                  <h5>{cert.title}</h5>
                  <p>{cert.description}</p>
                  {cert.registrationNumber && (
                    <div className="cert-meta">
                      <span className="meta-label">Registration No:</span>
                      <span className="meta-value">{cert.registrationNumber}</span>
                    </div>
                  )}
                  {cert.registrationDate && (
                    <div className="cert-meta">
                      <span className="meta-label">Date:</span>
                      <span className="meta-value">{cert.registrationDate}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <Headings 
          title="Our Team" 
          text="Meet the skilled professionals behind Waqtavar Instrument" 
        />
        
        <div className="row">
          {aboutusdata.Team.map(({ name, position, info, foto, linkedin }, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="card-team">
                <div className="card-team-header">
                  <img src={foto} alt={name} className="team-member-img" loading="lazy" />
                  <div className="team-member-info">
                    <p className="member-name">{name}</p>
                    <p className="member-position">{position}</p>
                  </div>
                  <a
                    href={linkedin}
                    aria-label={`LinkedIn profile of ${name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-icon"
                  >
                    <BsLinkedin />
                  </a>
                </div>
                <div className="team-member-bio">
                  <p>{info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex mt-4 justify-content-md-end justify-content-center">
          <button className="btn-positivus">View Full Team</button>
        </div>
      </section>
    </div>
  );
};

export default About;