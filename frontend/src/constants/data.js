import images from './images';

const Menu = [
  { text: 'Home', link: '/' },
  { text: 'Products', link: '/Products' },
  { text: 'About', link: '/About' },
  { text: 'Testimonials', link: '/testimonials' },
  { text: 'Contact', link: '/contact' },
  
];

const ServicesData = [
    {
        id: '1',
        titleone: 'Bi-Metal Temperature',
        titletwo: 'Gauge',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services01,
    },
    {
        id: '2',
        titleone: 'Gas Filled',
        titletwo: 'Temperature Gauge',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services02,
    },
    {
        id: '3',
        titleone: 'Electric Contact',
        titletwo: 'Temperature Gauge',
        link: '#',
        itemclass: 'bdark',
        imgURL: images.services03,
    },
    {
        id: '4',
        titleone: 'Every Angle',
        titletwo: 'Temperature Gauge',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services04,
    },
    {
        id: '5',
        titleone: 'Pressure',
        titletwo: 'Gauge',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services05,
    },
    {
        id: '6',
        titleone: ' Gauge',
        titletwo: 'Accessories',
        link: '#',
        itemclass: 'bdark',
        imgURL: images.services06,
    },
];



const WorkingProcess = [
  {
    title: 'Raw Material Sourcing',
    description: 'We begin by carefully selecting and sourcing high-quality raw materials such as stainless steel, brass, and bourdon tubes to ensure reliability and durability in our gauges.',
  },
  {
    title: 'Mini Component Fabrication',
    description: 'Using precision machining and forming techniques, we manufacture essential mini components including pointers, dials, stems, and sensor elements to exact specifications.',
  },
  {
    title: 'Component Assembly & Welding',
    description: 'Mini components are integrated into core assemblies. Skilled technicians perform welding, brazing, and fastening to create the main body and sensor mechanism of the gauge.',
  },
  {
    title: 'Polishing and Surface Finishing',
    description: 'Each assembled unit undergoes thorough polishing, grinding, and surface treatment to ensure corrosion resistance, aesthetic appeal, and smooth operation.',
  },
  {
    title: 'Calibration and Testing',
    description: 'Gauges are calibrated using certified master instruments and tested under controlled pressure and temperature conditions to ensure accuracy, safety, and performance.',
  },
  {
    title: 'Packaging and Delivery',
    description: 'Final products are securely packed with protective materials and labeled for traceability before being shipped to customers across industries and geographies.',
  }
];





 


export const productData = [
  {
    "id": 1,
    "title": "Bimetallic Temperature Gauge (TG-BM)",
    "subcategories": [
        {
            "id": "bottom-entry",
            "title": "Bottom Entry Bimetallic Temperature Gauge",
            "image": images.btm1,
            "description": "Utilizes a bimetallic coil with two metals of different thermal expansion coefficients for precise temperature measurement. Designed for direct bottom mounting.",
            "features": [
                "Temperature range: 0°C to 400°C (dry gauge), up to 120°C (liquid-filled)",
                "Nominal sizes: 63 mm, 100 mm, 150 mm",
                "Accuracy: Class 1 as per EN 13190",
                "Overload capacity: 110% of FSD",
                "Protection: IP67 (for 100 mm and 150 mm dial sizes)",
                "Stainless steel casing (SS304/SS316)",
                "Connection: 1/2\" NPT (M) standard",
                "Stem diameter: 6 mm, 8 mm, 10 mm",
                "Window: Toughened glass",
                "External zero adjustment"
            ],
            "application": "Ideal for chemical/petrochemical industries, power stations, pharmaceuticals, food processing, water treatment, and more."
        },
        {
            "id": "back-entry",
            "title": "Back Entry Bimetallic Temperature Gauge",
            "image": images.btm2,
            "description": "Utilizes a bimetallic coil with two metals of different thermal expansion coefficients for precise temperature measurement. Designed for center back mounting.",
            "features": [
                "Temperature range: 0°C to 400°C (dry gauge), up to 120°C (liquid-filled)",
                "Nominal sizes: 63 mm, 100 mm, 150 mm",
                "Accuracy: Class 1 as per EN 13190",
                "Overload capacity: 110% of FSD",
                "Protection: IP67 (for 100 mm and 150 mm dial sizes)",
                "Stainless steel casing (SS304/SS316)",
                "Connection: 1/2\" NPT (M) standard",
                "Stem diameter: 6 mm, 8 mm, 10 mm",
                "Window: Toughened glass",
                "External zero adjustment"
            ],
            "application": "Ideal for chemical/petrochemical industries, power stations, pharmaceuticals, food processing, water treatment, and more."
        }
    ]
    },
  {
    "id": 2,
    "title": "Gas Filled Temperature Gauge (TG-GF)",
    "subcategories": [
            {
                "id": "gas-filled-standard",
                "title": "Gas Filled Temperature Gauge",
                "image": images.gtm1,
                "description": "Measures temperature by the pressure change of an inert gas (nitrogen) within a sealed system consisting of a stem, capillary, and bourdon tube. Includes ambient temperature compensation via bimetallic element.",
                "features": [
                    "Temperature range: 0°C to 600°C (dry gauge), up to 120°C (liquid-filled)",
                    "Nominal sizes: 100 mm, 150 mm, 200 mm, 250 mm",
                    "Accuracy: Class 1 as per EN 13190",
                    "Overload capacity: 130% of FSD",
                    "Protection: IP67 (for 100 mm and 150 mm dial sizes)",
                    "Stainless steel casing (SS304/SS316)",
                    "Connection: 1/2\" NPT (M) standard",
                    "Stem diameter: 6 mm, 8 mm (standard), 10 mm",
                    "Window: Toughened glass",
                    "Capillary length: 1 to 15 meters (customizable)",
                    "Operating pressure: Max. 15 Kg/sq.cm"
                ],
                "application": "Ideal for chemical/petrochemical industries, power stations, pharmaceuticals, food processing, water treatment, and remote temperature monitoring applications."
            }
        ]
    },
  {
    "id": 3,
    "title": "All SS Pressure Gauge - Electric Contact Type (BEC)",
    "subcategories": [
        {
            "id": "electric-contact-high-case",
            "title": "High Case Electric Contact Pressure Gauge",
            "image": images.ecm1,
            "description": "Stainless steel pressure gauge with electrical contacts for controlling compressors, pumps, motors, and other industrial equipment. Features magnetic snap-action contacts and high ingress protection.",
            "features": [
                "Pressure range: 0/1.6 kg/cm² up to 0/1600 kg/cm² (compound and dual scales available)",
                "Nominal sizes: 100 mm, 150 mm",
                "Accuracy: ±1.0% of F.S. (standard), ±1.6% (oil-filled version)",
                "Protection: IP68 (standard), IP55 (dry version with polycarbonate dome)",
                "Stainless steel construction: AISI 304 case/bezel, AISI 316 bourdon/socket",
                "Electrical contacts: Configurable (1 NO, 1 NC, combinations - 230V AC, 1A)",
                "Window: Plexiglass (standard), Polycarbonate dome (oil-filled)",
                "Options: Dielectric oil filling (DOF), custom dials, NACE conformity, material certificates",
                "Temperature effect: ±0.04 x (t2 - t1)% of F.S. compensation formula",
                "Mounting: Multiple options (bottom entry, back entry, panel mount)"
            ],
            "application": "Ideal for controlling compressors, pumps, motors, presses, hydraulic/pneumatic equipment in chemical, petrochemical plants and other industrial applications."
        }
    ]
},
  {
  "id": 4,
  "title": "Every Angle Temperature Gauge",
  "subcategories": [
    {
      "id": "every-angle-temperature-gauge",
      "title": "Every Angle Temperature Gauge",
      "image": images.eam1,
      "description": "The Every Angle Temperature Gauge is engineered for maximum flexibility in installation and readability. It features an adjustable stem and dial, making it ideal for environments where the viewing angle is critical or space is restricted.",
      "features": [
        "Fully adjustable stem and dial orientation for 360° readability",
        "Temperature measurement range: -70°C to +600°C",
        "Durable all stainless steel case, stem, and bezel for corrosion resistance",
        "Dial sizes available: 100mm, 150mm, and custom options",
        "External zero adjustment for easy recalibration",
        "Hermetically sealed case to prevent moisture ingress",
        "Standard stem diameters: 6mm, 8mm, 10mm",
        "Connection types: Bottom, back, or lower back",
        "Available in bi-metallic or gas-filled system variants"
      ],
      "application": "Widely used in pipelines, tanks, heat exchangers, HVAC systems, and industrial boilers where accessibility and visibility are challenging. Ideal for chemical, petrochemical, and food processing industries."
    }
  ]
}
,
  {
    "id": 5,
    "title": "Pressure Gauge",
    "subcategories": [
        {
            "id": "bourdon-tube",
            "title": "Bourdon Tube Pressure Gauge",
            "image": images.pgm1,
            "description": "Mechanical pressure gauge using a curved Bourdon tube that straightens under pressure to drive a pointer. Designed for high accuracy and durability in industrial environments.",
            "features": [
                "Pressure range: 0.6 to 7,000 bar (8.7 to 101,500 PSI)",
                "Accuracy: ±1% to ±2% of full scale (FS)",
                "Dial sizes: 40mm, 50mm, 63mm, 80mm, 100mm, 130mm, 160mm",
                "Materials: Copper alloy, stainless steel (304/316), Monel",
                "Process connections: G ¼, G ½, ½ NPT, others",
                "Multi-scale display: bar, psi, kPa, MPa, mbar, inHg, mmH₂O",
                "Temperature resistance: Ambient -25°C to +65°C; Process fluid up to 100°C",
                "Standards: EN 837-1, ASME B40.100",
                "Thermal drift: ±0.4%/10°C from 20°C",
                "Optional: Glycerin filling (vibration damping), IP65 protection"
            ],
            "application": "Widely used in hydraulic/pneumatic systems, oil/gas pipelines, industrial process monitoring, and HVAC applications."
        },
        {
            "id": "diaphragm-sealed",
            "title": "Diaphragm Sealed Pressure Gauge" ,
            "image": images.pgm2,
            "description": "Features a diaphragm seal to isolate corrosive, viscous, or hazardous media from the gauge mechanism, ensuring long-term reliability.",
            "features": [
                "Pressure range: 10 mbar (0.145 psi) to 40 bar (580 psi)",
                "Accuracy: ±0.5% to ±1% of span",
                "Diaphragm materials: 316L SS, Hastelloy, Teflon (PTFE), gold-plated",
                "Case sizes: 100mm, 125mm, 150mm",
                "Process connections: ½ NPT, flange-mounted, sanitary",
                "Fill fluids: Glycerin, silicone oil, Halocarbon (vibration damping)",
                "Overpressure protection: 125% (up to 100 bar), 115% (100–250 bar)",
                "Temperature range: -40°C to +200°C (high-temp variants available)",
                "Housing: Stainless steel (IP65/IP67), optional bayonet ring",
                "Standards: EN 837-1, ASME B40.100"
            ],
            "application": "Ideal for chemical processing, pharmaceuticals, food/beverage, wastewater treatment, and high-purity gas systems."
        },
        {
            "id": "low-pressure",
            "title": "Low Pressure Gauge",
            "image": images.pgm4,
            "description": "Specialized gauge for measuring very low pressures (below 7 bar/100 psi) using diaphragm or capsule sensing elements.",
            "features": [
                "Pressure range: 0.1 in H₂O (0.004 psi) to 25 in H₂O (0.9 psi) or 7 bar",
                "Accuracy: 0.1% to 2.5% FS (high-precision models available)",
                "Sensing element: Stainless steel diaphragm or capsule",
                "Materials: 304/316 SS, PTFE-lined for chemical resistance",
                "Environmental protection: IP54 to IP65",
                "Overload safety: Up to 3x FS without damage",
                "Process connections: ¼” NPT, G ¼, flanged options",
                "Standards: EN 837-3, ASME B40.100",
                "Optional: Liquid-filled (glycerin/silicone), mirror scale dial"
            ],
            "application": "Used in pneumatic controls, cleanrooms, medical gas pipelines, and environmental monitoring systems."
        },
        {
            "id": "electrical-contact",
            "title": "Electrical Contact Pressure Gauge" ,
            "image": images.pgm4,
            "description": "Combines pressure measurement with electrical switching capabilities for controlling and regulating process sequences. Features magnetic snap-action contacts for reliable circuit switching in harsh industrial conditions.",
            "features": [
                "Pressure range: -1 to 0 kg/cm² up to 700 kg/cm² (compound ranges available)",
                "Nominal sizes: 100 mm, 150 mm",
                "Accuracy: ±1% of FS (standard), ±0.5% (optional); Contact accuracy: 2.5%",
                "Overload capacity: 130% of FSD (without contact), 100% (with contact)",
                "Protection: IP65",
                "Stainless steel casing (SS304 standard, SS316 optional)",
                "Connection: ½” NPT (M) standard",
                "Window: Polycarbonate glass",
                "Electrical contacts: Configurable (1 NO, 1 NC, SPDT, etc.)",
                "Optional: Di-electric silicon oil filling (up to 100°C), SS tag plate, mirror scale dial"
            ],
            "application": "Ideal for chemical, petrochemical, power stations, pharmaceuticals, food processing, water treatment, and hydraulic systems where pressure monitoring and electrical control are required."
        }
    ]
},
  {
  "id": 6,
  "title": "Accessories",
  "subcategories": [
    {
      "id": "pressure-gauge-accessories",
      "title": "Pressure Gauge Accessories",
      "image": images.am1,
      "description": "Pressure gauge accessories are auxiliary components used to enhance gauge functionality, protection, installation, and performance.",
      "features": [
        "Includes syphon tubes, snubbers, overpressure protectors, adapters, and gauge savers",
        "Available in materials like SS304, SS316, Brass, and Monel",
        "Thread types: NPT, BSP, BSPT",
        "Pressure ratings up to 6000 PSI",
        "Custom configurations and IBR certifications available"
      ],
      "application": "Used across steam, oil, gas, and chemical plants to ensure optimal performance and safety of pressure gauges."
    },
    {
      "id": "needle-valve",
      "title": "Needle Valve",
      "image": images.am2,
      "description": "Needle valves precisely regulate the flow of fluids in low-flow systems. They feature a fine-threaded stem and narrow seat to allow for accurate throttling.",
      "features": [
        "Body materials: SS316, SS304, Brass",
        "Connection sizes: 1/4”, 3/8”, 1/2” NPT/BSP",
        "Pressure range: Up to 10,000 PSI",
        "Stem types: Non-rotating, rotating",
        "Temperature resistance: Up to 400°C"
      ],
      "application": "Used in instrumentation lines, calibration setups, and fine flow control applications across various industries."
    },
    {
      "id": "thermowell",
      "title": "Thermowell",
      "image": images.am3,
      "description": "A thermowell is a protective enclosure for temperature sensors, such as thermocouples or RTDs, shielding them from high pressure, velocity, and corrosive media.",
      "features": [
        "Types: Straight, Tapered, Stepped",
        "Materials: SS304, SS316, Monel, Inconel, Hastelloy",
        "Mounting: Flanged, Threaded, Welded",
        "Process connection: 1/2” to 2” NPT/BSP/Flanged",
        "Standards: ASME PTC 19.3 TW-2016"
      ],
      "application": "Widely used in chemical processing, power generation, and oil and gas industries for safe and accurate temperature monitoring."
    },
    {
      "id": "manifold-valve",
      "title": "Manifold Valve",
      "image": images.am4,
      "description": "Manifold valves integrate multiple valves in a single block to isolate, equalize, and vent pressure instruments like gauges and transmitters.",
      "features": [
        "Types: 2-way, 3-way, 5-way",
        "Materials: SS316, SS304, Carbon Steel",
        "Pressure rating: Up to 6000 PSI",
        "Connection: 1/2” NPT(F), Flanged, DIN/ANSI options",
        "Bonnet types: Bolted or screwed"
      ],
      "application": "Used in differential pressure transmitter installations and gauge setups for safe operation and maintenance."
    },
    {
      "id": "pressure-tester",
      "title": "Pressure Tester",
      "image": images.am5,
      "description": "A pressure tester is a portable or fixed device used to verify, calibrate, or test the accuracy and performance of pressure gauges and sensors.",
      "features": [
        "Types: Hydraulic, Pneumatic, Digital pressure calibrators",
        "Range: Vacuum to 1000 bar",
        "Includes calibration pump, pressure comparator, and fittings",
        "Accuracy: Up to ±0.05% of full scale",
        "Portable kits available with carrying cases"
      ],
      "application": "Ideal for onsite and laboratory gauge calibration, testing pipelines, boilers, and pressure vessels."
    }
  ]
}


];
export const aboutusdata = {
  about: {
    companyDescription: "Established in 2019, Waqtavar Instrument is a trusted manufacturer, wholesaler, supplier, and retailer of precision measurement instruments. We specialize in different dial sizes (2,4,6 inches) of various ranges (100,120,200,400 etc), Bimetallic Temperature Gauges (BMT), and Gas Filled Capillary Type Temperature Gauges. With our commitment to quality and customer satisfaction, we have built a strong reputation in the industry for providing reliable and accurate instruments tailored to our clients' specific needs.",
    yearsExperience: 5,
    teamMembers: 7,
    certifications: 3,
    companyDetails: {
      natureOfBusiness: "Manufacturer",
      additionalBusiness: ["Supplier of Services", "Wholesale Business", "Retail Business"],
      ceo: "Vrindavan Yadav",
      establishmentYear: 2019,
      legalStatus: "Proprietorship",
      annualTurnover: "80 L - 1.5 Cr",
      gstRegistrationDate: "14-07-2019",
      banker: "AXIS Bank",
      address: "THIRD FLOOR, SHED NO- 08, GIDC MULTI LEVEL SHED,NEAR ADARSH ESTATE, Phase- 3 GIDC Chhatral,Gandhinagar, Gujarat, 382729"
    }
  },
  certifications: [
    {
      title: "GST Registration",
      description: "Registered under GST with number 24AFNPY2159J1ZV since July 2019, ensuring compliance with Indian tax regulations.",
      image: images.GSTRegistration,
      registrationNumber: "24AFNPY2159J1ZV",
      registrationDate: "14-07-2019"
    },
    {
      title: "MSME/Udyam Registration",
      description: "Recognized by the Ministry of Micro, Small & Medium Enterprises, Government of India, highlighting our contribution to the manufacturing sector.",
      image: images.MsmeRegistration,
      benefits: "Eligible for government schemes and priority sector lending"
    },
    {
      title: "Company Registration",
      description: "Legally registered as a proprietorship firm under Indian laws, with all necessary business operation licenses.",
      image: images.CompanyRegistration,
      legalStatus: "Proprietorship",
      owner: "Vrindavan Yadav"
    }
  ],
  Team: [
    {
      name: "Vrindavan Yadav",
      position: "CEO & Founder",
      info: "With extensive experience in the instrumentation industry, Vrindavan leads Waqtavar Instrument with a vision for precision and customer satisfaction.",
      foto: images.VrindavanYadav,
      facebook: "https://www.facebook.com/vrindavana.yadav"
    },
    // Add other team members as needed
    {
      name: "Quality Control Team",
      position: "Quality Assurance",
      info: "Our dedicated QC team ensures every instrument meets strict quality standards before reaching our customers.",
      foto: images.Team,
      facebook: "https://www.facebook.com/waqtavar.insrument"
    }
  ],
  products: {
    categories: [
      {
        name: "Bimetallic Temperature Gauge",
        count: 9,
        description: "Precision temperature measurement instruments available in various dial sizes and ranges."
      },
      {
        name: "Gas Pressure Gauge",
        count: 4,
        description: "Reliable pressure measurement solutions for industrial applications."
      }
    ]
  }
};


export default { Menu, WorkingProcess, ServicesData, productData, };