// import React from 'react';
// import { Headings } from '../../components';
// import { data } from '../../constants';
// import Carousel from 'react-bootstrap/Carousel';
// import './Testimonials.css';

// const Testimonials = () => {
//   return (
//     <section className="section-padding" id="testimonials">
//       <Headings 
//         title="Testimonials" 
//         text="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" 
//       />

//       <div className="carousel-bg">
//         <Carousel fade indicators={true} interval={6000}>
//           {data.Testimonials.map((item, index) => (
//             <Carousel.Item key={index} className="carousel-box">
//               <Carousel.Caption className="testimonial-caption">
//                 <p className="speech-bubble">{item.testimonial}</p>
//                 <div className="carousel-name">{item.name}</div>
//                 <div className="carousel-position">{item.position}</div>
//               </Carousel.Caption>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import React, { useRef, useEffect, useState } from 'react';
import { Headings } from '../../components';
import Carousel from 'react-bootstrap/Carousel';
import './Testimonials.css';
import tempGauge from '../../assets/videos/TemperatureGauge - Made with Clipchamp.mp4';
import pressureGauge from '../../assets/videos/Pressure_gauge - Made with Clipchamp.mp4';
import assembly from '../../assets/videos/Assembly - Made with Clipchamp.mp4';

const showcaseItems = [
  {
    type: 'video',
    src: tempGauge,
    title: 'Gauge Calibration Process',
  },
  {
    type: 'video',
    src: pressureGauge,
    title: 'Custom Pressure Gauge for Pharma Industry',
  },
  {
    type: 'video',
    src: assembly,
    title: 'Welding & Assembly',
  },
];

const Testimonials = () => {
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Pause all videos except the currently active one
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  return (
    <section className="showcase-section" id="showcase">
      <Headings 
        title="Precision in Motion" 
        text="Explore our manufacturing expertise through real footage and featured projects" 
      />

      <div className="showcase-carousel">
        <Carousel
          fade
          indicators={true}
          interval={6000}
          activeIndex={activeIndex}
          onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
        >
          {showcaseItems.map((item, index) => (
            <Carousel.Item key={index} className="carousel-box">
              <Carousel.Caption className="showcase-caption">
                {item.type === 'video' ? (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="media-element"
                    src={item.src}
                    controls
                    muted
                    playsInline
                    onEnded={() => {
                      videoRefs.current[index].pause();
                    }}
                  />
                ) : (
                  <img
                    className="media-element"
                    src={item.src}
                    alt={item.title}
                  />
                )}
                <div className="carousel-title">{item.title}</div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;


