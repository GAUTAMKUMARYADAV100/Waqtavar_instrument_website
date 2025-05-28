// import React, { useRef, useEffect, useState } from 'react';
// import { Headings } from '../../components';
// import Carousel from 'react-bootstrap/Carousel';
// import './Testimonials.css';
// import tempGauge from '../../assets/videos/TemperatureGauge - Made with Clipchamp.mp4';
// import pressureGauge from '../../assets/videos/Pressure_gauge - Made with Clipchamp.mp4';
// import assembly from '../../assets/videos/Assembly - Made with Clipchamp.mp4';

// const showcaseItems = [
//   {
//     type: 'video',
//     src: tempGauge,
//     title: 'Gauge Calibration Process',
//   },
//   {
//     type: 'video',
//     src: pressureGauge,
//     title: 'Custom Pressure Gauge for Pharma Industry',
//   },
//   {
//     type: 'video',
//     src: assembly,
//     title: 'Welding & Assembly',
//   },
// ];

// const Testimonials = () => {
//   const videoRefs = useRef([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     videoRefs.current.forEach((video, index) => {
//       if (video && index !== activeIndex) {
//         video.pause();
//         video.currentTime = 0;
//       }
//     });
//   }, [activeIndex]);

//   return (
//     <section className="showcase-section" id="showcase">
//       <Headings 
//         title="Precision in Motion" 
//         text="Explore our manufacturing expertise through real footage and featured projects" 
//       />

//       <div className="showcase-carousel">
//         <Carousel
//           fade
//           indicators={true}
//           interval={8000}
//           activeIndex={activeIndex}
//           onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
//           touch
//         >
//           {showcaseItems.map((item, index) => (
//             <Carousel.Item key={index} className="carousel-box">
//               <div className="media-wrapper">
//                 {item.type === 'video' ? (
//                   <video
//                     ref={(el) => (videoRefs.current[index] = el)}
//                     className="media-element"
//                     src={item.src}
//                     controls
//                     muted
//                     playsInline
//                     webkit-playsinline="true"
//                     controlsList="nodownload"
//                     preload="metadata"
//                   />
//                 ) : (
//                   <img
//                     className="media-element"
//                     src={item.src}
//                     alt={item.title}
//                   />
//                 )}
//                 <div className="carousel-title">{item.title}</div>
//               </div>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import React, { useRef, useEffect, useState, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { Headings } from '../../components';
import Carousel from 'react-bootstrap/Carousel';
import './Testimonials.css';

// Video imports
import tempGauge from '../../assets/videos/TemperatureGauge - Made with Clipchamp.mp4';
import pressureGauge from '../../assets/videos/Pressure_gauge - Made with Clipchamp.mp4';
import assembly from '../../assets/videos/Assembly - Made with Clipchamp.mp4';

// Poster thumbnails for each video
import tempPoster from '../../assets/thumbnails/tempGauge.png';
import pressurePoster from '../../assets/thumbnails/pressureGauge.png';
import assemblyPoster from '../../assets/thumbnails/assembly.png';

const showcaseItems = [
  {
    type: 'video',
    src: tempGauge,
    title: 'Gauge Calibration Process',
    poster: tempPoster,
  },
  {
    type: 'video',
    src: pressureGauge,
    title: 'Custom Pressure Gauge for Pharma Industry',
    poster: pressurePoster,
  },
  {
    type: 'video',
    src: assembly,
    title: 'Welding & Assembly',
    poster: assemblyPoster,
  },
];

const Testimonials = () => {
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
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

      <div className="showcase-carousel" ref={ref}>
        {inView && (
          <Carousel
            fade
            indicators={true}
            interval={8000}
            activeIndex={activeIndex}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
            touch
          >
            {showcaseItems.map((item, index) => (
              <Carousel.Item key={index} className="carousel-box">
                <div className="media-wrapper">
                  {item.type === 'video' && index === activeIndex ? (
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      className="media-element"
                      src={item.src}
                      poster={item.poster}
                      controls
                      muted
                      playsInline
                      controlsList="nodownload"
                      preload="auto"
                    />
                  ) : (
                    <img
                      className="media-element"
                      src={item.poster}
                      alt={`Thumbnail: ${item.title}`}
                      loading="lazy"
                    />
                  )}
                  <div className="carousel-title">{item.title}</div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
