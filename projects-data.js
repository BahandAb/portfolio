/* ========================================================================
   YOUR NEW PROJECT DATABASE (WITH 1:1 FULL-LENGTH DESCRIPTIONS)
   ======================================================================== */
const projects = [
  {
    id: 'whiteboard-polargraph',
    title: 'Whiteboard Robot (Polargraph)',
    date: 'September - October 24, 2025',
    shortDesc: 'A successful polargraph-style whiteboard drawing robot built from scratch for an advanced programming course. It receives drawings from a custom web UI hosted on an ESP32 and draws them on a 1m x 1m surface.',
    longDesc: `
      <p>This was our Quarter 1 project for a new, open-ended Advanced Computer Programming course. Working with my friend Edwin Tenney, our goal was to create a robot that could draw on a classroom whiteboard. This project was defined by rapid iteration and overcoming significant design failures.</p>
      <p>Our initial ideas included:
        <ul>
          <li>1. Magnetic Robot: Quickly scrapped due to complexity.</li>
          <li>2. Vertical Rail Robot: A detailed concept (documented separately) that was scrapped due to a lack of necessary parts.</li>
          <li>3. Sprocket/Bead Chain Robot: Scrapped under time pressure after we failed to CAD a functional sprocket for a non-standard bead chain.</li>
        </ul>
      </p>
      <p>Facing a deadline, we pivoted to a Polargraph (string-based) design. A user could connect a tablet to the ESP32's Wi-Fi, navigate to its IP address, create a drawing, and hit "Export." The drawing data was sent to the Control Hub, which waited for a human (us) to confirm the print by clicking a button on a game controller. We earned a 100% A+ on the project and continued to improve it for a week while it was at school.</p>
      <p>Key improvements included:
        <ul>
          <li>Bug Fix: We discovered we had mistakenly input diameter into a radius variable, which was halving our drawing area. Fixing this unlocked the robot's full 1m x 1m drawing field.</li>
          <li>Optimization: We meticulously tuned the movement delays and added weighting to the marker head, which stabilized the motion and produced continuous, non-choppy lines.</li>
        </ul>
      </p>
    `,
    skills: 'Java, C++ (for ESP32), Web Development (HTML/JS), ESP32, FTC Control Hub, Robotics, gobilda motors, encoders, Mechanical Design, Problem-Solving, Iterative Design, Rapid Prototyping, Debugging, Systems Integration',
    role: 'Co-Developer / Programmer',
    difficulty: 'Advanced',
    collaborators: 'Edwin Tenney',
    images: [
      'BoardBot/20251018_122804.jpg',
      'BoardBot/20251019_195406.jpg',
      'BoardBot/20251018_122801.jpg',
      'BoardBot/20251020_065903.jpg',
      'BoardBot/20251026_173809.jpg',
      'BoardBot/20251026_173802.jpg',
      'BoardBot/20251026_173708.jpg',
      'BoardBot/20251026_173745.jpg'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'whiteboard-rail',
    title: 'Whiteboard Robot (Vertical Rail Concept)',
    date: 'September 2025 (Initial Concept Phase)',
    shortDesc: 'The initial design concept for an advanced programming course project, detailing a whiteboard-drawing robot based on a vertical rail and wheel-driven system.',
    longDesc: `
      <p>This document outlines the initial brainstorming, design, and planning phase for our Quarter 1 advanced computer programming project. The goal was to create a robot that could automatically draw on a classroom whiteboard based on a user's digital input. Working with Edwin Tenney, our first major concept was a "Vertical Rail Robot." The design envisioned a tall, pole-like robot that spanned the height of the board and would drive horizontally along the whiteboard's top and bottom rails using wheels. A marker-holding "head" would then travel up and down this vertical pole. We developed a comprehensive set of documentation for this concept (linked below), which included system requirements, user requirements, and test planning, before it was ultimately scrapped due to a lack of necessary parts, leading us to the Polargraph. This document serves as a record of our initial engineering process, problem analysis, and system design.</p>
    `,
    skills: 'System Design, Requirements Gathering, Test Planning, Mechanical Design (Conceptual), Problem-Solving, Iterative Design, Robotics (Conceptual)',
    role: 'Co-Developer / Designer',
    difficulty: 'Advanced (Conceptual)',
    collaborators: 'Edwin Tenney',
    emojis: ['🤖', '⚙️', '✏️'],
    images: [],
    videos: [],
    links: {
      googleDoc: 'https://docs.google.com/document/d/1P7SFSlMLZeY1qmnHkW8rsUjouKWmcIM69sK55mbuzNc/edit?usp=sharing'
    }
  },
  {
    id: 'eaglevision',
    title: 'EagleVision: Collaborative Microscope Platform',
    date: 'September 2025 - Present',
    shortDesc: 'A collaborative web platform for the WHHS Programming Club (an INTERalliance chapter), allowing a teacher to stream a microscope\'s video feed from a phone to an entire class of students in real-time.',
    longDesc: `
      <p>This project is a massive continuation and scaling-up of my "DigiScope" prototype, now serving as the year-long competition project for the Walnut Hills High School Programming Club (an INTERalliance chapter) for the 2026 TechOlympics. To align with our school mascot (the Eagle) and the TechOlympics theme ("Envision"), the project was renamed EagleVision. Our goal is to create a platform that makes microscope use in a K-12 environment cheaper, safer, and more accessible. It allows a single microscope to be used by an entire class, with each student getting a virtual "front-row seat."</p>
      <p>The architecture is centered around a phone as the video source (Teacher) and a web client (Student).</p>
      <ul>
        <li><strong>Teacher Access:</strong>
          <ul>
            <li>Draw/annotate on the live feed, with the ability to show/hide annotations for the class.</li>
            <li>Take high-quality screenshots and recordings.</li>
            <li>End the session.</li>
          </ul>
        </li>
        <li><strong>Student Access:</strong>
          <ul>
            <li>Join a session via the teacher's link.</li>
            <li>View the live, annotated feed.</li>
            <li>Make their own private annotations on their screen (if permitted by the teacher).</li>
            <li>Take their own screenshots (if permitted by the teacher).</li>
          </ul>
        </li>
        <li><strong>Future Goals:</strong> We hope to integrate AI features, such as object identification for common specimens.</li>
      </ul>
      <p>This project is a major undertaking for our club's competition and design teams, blending mobile development, web development, and real-time video streaming.</p>
    `,
    skills: 'Project Management, Team Leadership, System Architecture, Web Development (HTML, CSS, JS), Backend Development (e.g., Node.js, Python), Android Development (Java), Video Streaming (WebRTC/WebSockets), UI/UX Design, CAD, Team Collaboration',
    role: 'Project Lead / Club President',
    difficulty: 'Advanced',
    collaborators: 'WHHS Programming Club (Competition & Design Teams)',
    emojis: ['🔬', '🦅', '📡'],
    images: [],
    videos: [],
    links: {}
  },
  {
    id: 'limelight-guide-video',
    title: 'FTC Limelight 3A Guide Video Tutorial',
    date: 'August 13, 2025',
    shortDesc: 'A comprehensive, 7-minute video tutorial created for the FTC community, guiding beginners through the setup, documentation, and basic integration of the Limelight 3A vision camera.',
    longDesc: `
      <p>This project involved the creation, editing, and finalization of a detailed video tutorial aimed at teaching new robotics teams and programmers how to effectively use the Limelight 3A vision camera. The tutorial was produced by Team 6133, "The NUTS!", and hosted on YouTube, serving as an educational resource for the wider FIRST Tech Challenge (FTC) community.</p>
      <p>The video is structured to cover key topics:
        <ul>
          <li>Limelight Overview: Explaining the camera's features, including its neural network capabilities, AprilTag localization, and Python integration.</li>
          <li>Documentation Focus: Emphasizing the critical role of the official Limelight documentation, noting that "almost 90% [of questions] are in the documentation."</li>
          <li>Step-by-Step Programming Guide: Walking users through the entire Java integration process for an FTC robot, from hardware map setup to basic code for AprilTag detection and autonomous alignment. The tutorial also served as a sponsorship tool, showcasing our team's expertise and community contributions.</li>
        </ul>
      </p>
    `,
    skills: 'Video Editing, Technical Writing, Public Speaking/Voiceover, Limelight 3A, Computer Vision, Java, Content Creation, Sponsorship Outreach, Teamwork',
    role: 'Editor, Scriptwriter, Voiceover/Speaker',
    difficulty: 'Intermediate',
    collaborators: 'Aditya Singh, Edwin Tenney',
    emojis: ['📺', '💡', '🤖'],
    youtubeEmbeds: ['https://www.youtube.com/watch?v=h9EJRkVej-0'],
    images: [
      'Limelight Guide Video/Screenshot 2026-01-11 195630.png'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'lora-messaging-system',
    title: 'LoRa Off-the-Grid Messaging System',
    date: 'August 12, 2025',
    shortDesc: 'An off-grid, long-range messaging system using LoRa. A laptop running a Python app messages a portable ESP32 "hotspot" that hosts a modern web UI for multiple devices to connect and reply.',
    longDesc: `
      <p>This project was a direct and significant evolution of my previous LoRa thermometer. I created a two-way, off-the-grid messaging system capable of operating with no Wi-Fi or cellular data, leveraging the long-range capabilities of LoRa.</p>
      <p>The system had two main components:<br>
      1. Base Station: This end utilized the Arduino Leonardo and LoRa receiver from my previous project, which was plugged into a laptop. Instead of just using the serial monitor, I developed a Python application that ran on the computer to interpret the serial data from the Arduino, providing a user-friendly interface for sending and receiving messages.<br>
      2. Portable Node: This end used the ESP32/LoRa transmitter, which was programmed to act as a Wi-Fi Access Point (a "hotspot"). It hosted a modern, web-based chat UI, allowing multiple devices (like phones or tablets) to connect to its Wi-Fi, open a browser, and join the chat room to send and receive messages from the Base Station.</p>
    `,
    skills: 'LoRa, ESP32, Arduino Leonardo, Python, Web UI Design, Wireless Communication, Networking (Access Point Mode), Serial Communication, Systems Integration, Embedded Systems, Problem-Solving',
    role: 'Sole Developer',
    difficulty: 'Advanced',
    collaborators: 'N/A',
    images: [
      'Arduino Leo and ESP32 LoRa modules/20250804_094437.jpg',
      'Arduino Leo and ESP32 LoRa modules/IMG_20250805_102257.jpg',
      'Arduino Leo and ESP32 LoRa modules/20250805_164634.jpg',
      'Arduino Leo and ESP32 LoRa modules/IMG_20250805_172658.jpg',
      'Arduino Leo and ESP32 LoRa modules/884e3199-21e7-4ff3-a0e4-05b017d57b9f.jpg',
      'Arduino Leo and ESP32 LoRa modules/IMG_20250805_102131.jpg',
      'Arduino Leo and ESP32 LoRa modules/IMG_20250805_102257 (1).jpg',
      'Arduino Leo and ESP32 LoRa modules/IMG_20250805_101231.jpg',
      'Arduino Leo and ESP32 LoRa modules/20250805_101110.jpg',
      'Arduino Leo and ESP32 LoRa modules/20250812_120604.jpg',
      'Arduino Leo and ESP32 LoRa modules/20250812_120603.jpg',
      'Arduino Leo and ESP32 LoRa modules/20250812_120602.jpg'
    ],
    videos: [],
    youtubeEmbeds: [],
    links: {}
  },
  {
    id: 'lora-thermometer',
    title: 'LoRa Digital Thermometer & Receiver',
    date: 'August 2025',
    shortDesc: 'Developed a digital thermometer system using ESP32 and LoRa to transmit environmental data wirelessly to an Arduino-based receiver with an OLED display and custom 3D-printed case.',
    longDesc: `
      <p>This project marked my first venture into the world of LoRa (Long Range) Modules, a low-power wide-area network technology. My goal was to create a digital thermometer that transmitted its data wirelessly over LoRa.</p>
      <p>On the sending end, I used an ESP32 microcontroller integrated with a LoRa Module and a DHT11 temperature and humidity sensor. This setup collected environmental data and prepared it for transmission.</p>
      <p>For the receiving end, I built a display unit using an Arduino Leonardo, another LoRa Module (connected via a level shifter to ensure compatibility), and a small 128x64 pixel OLED screen to display the received temperature data. I also designed and 3D-printed a custom case for the receiver. The project was successfully tested with my little brother, who took the transmitter outside while I monitored the receiver, confirming the long-range data transmission.</p>
    `,
    skills: 'ESP32, Arduino Leonardo, LoRa, DHT11 Sensor, OLED Display, 3D Design, 3D Printing, Electronics, Wireless Communication, C++ (Arduino)',
    role: 'Sole Developer',
    difficulty: 'Intermediate',
    collaborators: 'My little brother',
    images: [
      'Arduino Leo and ESP32 LoRa modules/20250804_094437.jpg',
      'Arduino Leo and ESP32 LoRa modules/IMG_20250805_102257.jpg',
      'Arduino Leo and ESP32 LoRa modules/20250805_164634.jpg',
      'Arduino Leo and ESP32 LoRa modules/IMG_20250805_172658.jpg',
      'Arduino Leo and ESP32 LoRa modules/884e3199-21e7-4ff3-a0e4-05b017d57b9f.jpg',
      'Arduino Leo and ESP32 LoRa modules/IMG_20250805_102131.jpg',
      'Arduino Leo and ESP32 LoRa modules/IMG_20250805_102257 (1).jpg',
      'Arduino Leo and ESP32 LoRa modules/IMG_20250805_101231.jpg',
      'Arduino Leo and ESP32 LoRa modules/20250805_101110.jpg',
      'Arduino Leo and ESP32 LoRa modules/20250812_120604.jpg',
      'Arduino Leo and ESP32 LoRa modules/20250812_120603.jpg',
      'Arduino Leo and ESP32 LoRa modules/20250812_120602.jpg'
    ],
    videos: [],
    youtubeEmbeds: [],
    links: {}
  },
  {
    id: 'lenovo-e14-deployment',
    title: 'Lenovo E14 Laptop Acquisition & Deployment',
    date: 'July 2025',
    shortDesc: 'Secured, upgraded, and deployed 10 Lenovo E14 business-class laptops from Xavier University for educational initiatives and personal use, leveraging salvaged components.',
    longDesc: `
      <p>This project involved a significant effort in resource acquisition and deployment of computing resources. Through my summer internship at Xavier University's IT Department, I was able to secure 10 Lenovo E14 business-class laptops from 2021 as a one off agreement. These machines were earmarked for various impactful uses: the majority will support the beginner teaching program of the Walnut Hills High School Programming Club (of which I am president), while others were provided to my siblings who lacked personal computers. A particularly meaningful deployment is for my cousin in Kurdistan, who shares my passion for STEM and Arduino but has limited access to technology. This initiative required hardware diagnostics, salvaging components like RAM and SSDs from other units to upgrade these laptops, and systematic deployment, showcasing skills in IT asset management and community outreach.</p>
    `,
    skills: 'IT Asset Management, Hardware Diagnostics, Component Salvage, Laptop Upgrades, System Deployment, Community Outreach, Resourcefulness, Problem-Solving, Teamwork',
    role: 'Project Lead / IT Asset Manager',
    difficulty: 'Intermediate',
    collaborators: 'Xavier IT Employees: Doug Hanson, Mike Marshall',
    images: [
      'Lenovo donation/20250731_165745.jpg',
      'Lenovo donation/20250731_170622.jpg',
      'Lenovo donation/3a2bafc9-b321-4389-bd92-035dfe07ff6e.jpg'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'dell-7520-restore',
    title: 'Dell Precision 7520 Restoration & Upgrade',
    date: 'July 2025',
    shortDesc: 'Acquired, diagnosed, and upgraded a discarded Dell Precision 7520 laptop, transforming it into a powerful modern system by maximizing RAM and uncovering a hidden NVMe SSD.',
    longDesc: `
      <p>This project began with a surprising discovery during cleanup at our Xavier IT workbench. We came across a bulky Dell laptop, seemingly from 2010, and initially relegated it to the e-waste pile. However, a closer look in the warehouse revealed a USB-C Thunderbolt port and an Intel i7 7th Gen processor—unusual for its apparent age. Further investigation of its serial number confirmed it was a Dell Precision 7520 from 2016, once touted as the "Most Powerful Laptop in the World." This machine boasted four SODIMM RAM slots, an NVMe M.2 SSD slot, Thunderbolt 3, and an NVIDIA Quadro M1200 GPU, indicating immense upgrade potential.</p>
      <p>After receiving permission to upgrade it with available parts and keep it, I immediately imaged it to Windows 11 at work. Upon setting it up at home, I was astonished by its inherent speed and modern feel. A peculiar mystery arose: the system reported two NVMe M.2 SSDs despite only one visible port and no apparent HDD, even though I'd seen a SATA drive shell.</p>
      <p>Upon returning to work, I proceeded with a RAM upgrade to 32GB. This wasn't entirely smooth; one SODIMM stick was faulty, requiring debugging assistance from Doug Hanson to identify and replace it. The ultimate solution to the SSD mystery was revealed during further disassembly to access the additional RAM slots under the keyboard. The "SATA drive" I'd seen was surprisingly light; flipping it over, I discovered it was actually an NVMe SSD adapter, with the HDD shell merely an empty case concealing a second NVMe SSD! This was a stock feature from Dell, a "hot-swappable" slot designed to accommodate both SATA drives and NVMe SSDs via an adapter during a transitional period in 2016.</p>
      <p>This Dell Precision 7520, with its robust build and powerful features, has since replaced my 2019 Windows 10 HP Pavilion laptop. The Thunderbolt 3 port, absent on my HP, was a particularly welcome addition. It was hardly a fair fight, comparing a top-of-the-line workstation from 2016 to a budget office laptop from 2019, but the Dell's remarkable performance after its restoration truly showcased the value of smart upgrades and thorough diagnostics.</p>
    `,
    skills: 'Hardware Diagnostics, Laptop Disassembly & Assembly, RAM Upgrade, SSD Installation, Operating System Imaging, Windows 11 Setup, BIOS Configuration, Advanced Troubleshooting, Problem-Solving, Research, Resourcefulness, Teamwork (for debugging)',
    role: 'Hardware Technician / System Administrator / Diagnostician',
    difficulty: 'Advanced',
    collaborators: 'Doug Hanson',
    images: [
      'Dell precision/20250710_085217.jpg',
      'Dell precision/20250710_124030.jpg',
      'Dell precision/20250710_090657.jpg',
      'Dell precision/20250710_124835.jpg',
      'Dell precision/20250710_123709.jpg',
      'Dell precision/20250712_230149.jpg'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'xavier-it-internship',
    title: 'Laptop Mass Imaging & Deployment',
    date: '(Summer 2025)',
    shortDesc: 'Participated in a summer internship at Xavier University\'s IT Department, responsible for unboxing, imaging, and deploying 25% of all university computers.',
    longDesc: `
      <p>This project was a core component of my summer internship through the INTERalliance of Greater Cincinnati, specifically within the IT Department at Xavier University. My primary responsibility, as part of a dedicated team, was the mass imaging and deployment of a significant portion of the university's computer fleet. This involved a comprehensive process: unpackaging brand new computers, performing system imaging to load the university's standardized operating system and software configurations, and finally, deploying these machines across various departments and offices. Our team was tasked with handling approximately 25% of all university computers, providing me with extensive hands-on experience in large-scale IT operations and enterprise deployment procedures.</p>
    `,
    skills: 'System Imaging, Mass Deployment, Hardware Setup, IT Support, Teamwork',
    role: 'IT Intern / Deployment Specialist',
    difficulty: 'Intermediate',
    collaborators: 'Mike Marshall, Doug Hanson, Jonas Moore, Dylan Kuez',
    images: [
      'Xavier Deplyoment/20250611_150212.jpg',
      'Xavier Deplyoment/20250611_150217.jpg',
      'Xavier Deplyoment/20250611_143712.jpg',
      'Xavier Deplyoment/20250610_112619.jpg'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'digiscope-v2',
    title: 'DigiScope V2: Phone Camera & Android APK Prototype',
    date: 'May 2025',
    shortDesc: 'Developed the second prototype of "DigiScope," shifting to use a phone\'s high-quality camera via an Android APK, with plans for a custom nosepiece mount to improve stability.',
    longDesc: `
      <p>This project marks the second significant iteration of "DigiScope," an ambitious long-term endeavor aimed at digitizing the microscope experience, with the ultimate vision of creating "ClassScope." The ClassScope concept envisions a system where a single teacher-operated microscope transmits its live video feed to a website, accessible by all students. Each student could then individually pan, zoom, and take screenshots from their own device. This innovative approach promises to make microscope usage in K-12 environments easier, cheaper, and safer, allowing schools with limited resources to maximize their equipment and enabling the introduction of microscopy at earlier ages by mitigating the risk of students breaking expensive eyepieces.</p>
      <p>After the limitations of the Raspberry Pi camera in V1, this prototype shifts to using the high-quality camera of a modern smartphone. The core of this prototype is a custom Android app (APK) developed in Java, which I successfully tested using wireless debugging. The next step, which I am currently designing, is to create a custom 3D-printed nosepiece mount. This mount will ensure the phone is held firmly in place and will be specifically designed for my phone's dimensions, providing the stability needed for further development and the ultimate goal of ClassScope.</p>
    `,
    skills: 'Android Development, Java, Android Studio, Mobile App Development, Wireless Debugging, CAD (for adapter design), 3D Printing, Microscopy, System Integration, Prototyping, Educational Technology, UI/UX Design',
    role: 'Sole Developer / Designer',
    difficulty: 'Advanced',
    collaborators: 'N/A',
    images: [
      'Digiscope v2/Screenshot_20250529_223353_One UI Home.jpg',
      'Digiscope v2/20250529_231530.jpg',
      'Digiscope v2/Screenshot_20250529_213627_DigiScope.jpg',
      'Digiscope v2/cecd683e-b7e1-4734-8090-4ffb920ac863.jpg',
      'Digiscope v2/20251025_193838.jpg'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'digiscope-v1',
    title: 'DigiScopeV1: MicroscopeDigitization Prototype',
    date: 'May 2025',
    shortDesc: 'Developed the first prototype of "DigiScope," a system to digitize a microscope\'s view using a Raspberry Pi and Pi Camera, with a custom 3D-printed adapter and a Qt Creator app.',
    longDesc: `
      <p>This project marks the initial phase of "DigiScope," an ambitious long-term endeavor aimed at digitizing the microscope experience, with the ultimate vision of creating "ClassScope." The ClassScope concept envisions a system where a single teacher-operated microscope transmits its live video feed to a website, accessible by all students. Each student could then individually pan, zoom, and take screenshots from their own device. This innovative approach promises to make microscope usage in K-12 environments easier, cheaper, and safer, allowing schools with limited resources to maximize their equipment and enabling the introduction of microscopy at earlier ages by mitigating the risk of students breaking expensive eyepieces. This V1 prototype utilized a Raspberry Pi 4 and a Pi Camera, a custom 3D-printed adapter, and a Qt Creator app for the interface.</p>
    `,
    skills: 'Raspberry Pi, Raspberry Pi Camera, Qt Creator, C++ (for Qt), Python, CAD (for adapter design), 3D Printing, Microscopy, System Integration, Prototyping, Educational Technology',
    role: 'Sole Developer / Designer',
    difficulty: 'Advanced',
    collaborators: 'N/A',
    images: [
      'Digiscope V1/20250526_202522(1).gif',
      'Digiscope V1/20250526_202303.jpg',
      'Digiscope V1/20250526_202410.jpg',
      'Digiscope V1/bea5891b-fe2f-4dd1-942c-9ef6673a7f82.jpg',
      'Digiscope V1/72ebb0a3-19c9-45fd-9687-c48e062eed35.jpg'
    ],
    videos: [],
    youtubeEmbeds: [],
    links: {}
  },
  {
    id: 'limelight-proxy-v5',
    title: 'Limelight 3A: Wireless Proxy & Live Debugging (v5)',
    date: '(May 2025)',
    shortDesc: 'Successfully implemented a wireless Limelight proxy on Leviathan, enabling live neural detector testing and diagnosing a critical wire fault, significantly streamlining vision system debugging.',
    longDesc: `
      <p>This mini-project was a crucial step in refining Leviathan's vision system, especially as the robot had been handed off to the rookies for preparation for the Michiana Premier Event, the last competition of the season. After a challenging week of debugging, we successfully got a wireless Limelight proxy working on the robot. This wireless proxy was the first step in addressing persistent issues with the Limelight randomly disconnecting. Its implementation immediately clarified the problem: a faulty wire that would disconnect every time the robot moved, something incredibly difficult to diagnose while tethered. This allowed us to fix the hardware issue and provided a robust method for live, untethered debugging of our neural detector.</p>
    `,
    skills: 'Limelight 3A, Wireless Networking, Debugging, Robotics, Java, Teamwork',
    role: 'Programmer / Debugging Specialist',
    difficulty: 'Advanced',
    collaborators: 'Aditya Singh, Edwin Tenney',
    emojis: ['📋', '🔗', '🤖'],
    youtubeEmbeds: [],
    images: [],
    videos: [],
    youtubeEmbeds: [],
    links: {}
  },
  {
    id: 'microscope-insects',
    title: 'Microscope Exploration: Insect Samples',
    date: 'May 2025',
    shortDesc: 'Conducted microscopic examination of insect samples, discovering intricate details like the scales on butterfly wings and even observing their cellular structure using an oil immersion lens.',
    longDesc: `
      <p>This project was a captivating dive into the microscopic world of insects. Using my microscope, I examined various insect samples, uncovering a wealth of cool details that aren't visible to the naked eye. One of the most fascinating discoveries was observing that butterfly wings are made up of tiny scales. What was even more incredible was that I was able to use the oil immersion lens to achieve such high magnification that the individual cells of these scales became visible! This mini-project was a wonderful exercise in scientific observation, precision microscopy, and satisfying my natural curiosity about the intricate structures of the natural world.</p>
    `,
    skills: 'Microscopy, Oil Immersion, Scientific Observation, Biology',
    role: 'Sole Observer / Researcher',
    difficulty: 'Intermediate',
    collaborators: 'N/A',
    images: [
      'Insect exploration/Screenshot_20250806_191449_Gallery.jpg',
      'Insect exploration/Screenshot_20250806_191505_Gallery.jpg'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'arduino-score-tracker',
    title: 'Arduino Score Tracker for FTC',
    date: 'May 2025',
    shortDesc: 'Developed a prototype score tracker for the FTC "Into The Deep" season using an Arduino Leonardo and a 128x64 pixel OLED display, featuring a navigable UI with a rotary encoder and buttons.',
    longDesc: `
      <p>This project was my first attempt at using an Arduino Leonardo to create a practical tool for our FTC team during the "Into The Deep" season. My goal was to develop a prototype score tracker that could be used at competitions. The core of the project involved displaying game data and scores on a small 128x64 pixel OLED display. The user interface was designed to be interactive and navigable using a rotary encoder and a couple of physical buttons. This allowed users to scroll through menus, view saved data pages, and access basic data management options. While I successfully built and programmed this functional prototype, I never proceeded to create a full, enclosed version as the season was ending, but it served as a great proof-of-concept.</p>
    `,
    skills: 'Arduino Leonardo, C++, OLED Display, UI/UX Design, Rotary Encoder, Electronics, Prototyping',
    role: 'Sole Developer / Prototyper',
    difficulty: 'Intermediate',
    collaborators: 'N/A',
    emojis: ['⭐', '📊', '🧮'],
    youtubeEmbeds: [],
    images: [],
    videos: [],
    youtubeEmbeds: [],
    links: {}
  },
  {
    id: 'protein-pedestal',
    title: 'Protein Pedestal',
    date: '(May 2025)',
    shortDesc: 'Designed and 3D-printed an intricate nameplate for an AP Biology teacher, featuring a unique protein model behind each letter of her name, reflecting her passion for biology.',
    longDesc: `
      <p>This project was an intricate and highly personalized gift designed for my AP Biology teacher, Dr. Harsh, upon her retirement. My goal was to create a custom nameplate where each letter of her name was accompanied by a 3D-printed protein model whose name began with the same letter, placed on a pedestal behind it. This required extensive research to find suitable protein models that were both scientifically accurate and visually appealing. I used Onshape to CAD the baseplate and pedestals, ensuring a sturdy and aesthetically pleasing foundation. The protein models themselves presented a unique challenge. Initially, I attempted to use molecular viewers to export models, but this proved difficult. I ultimately found success by sourcing the models from the NIH 3D Print Exchange, which provided high-quality, pre-formatted files suitable for 3D printing.</p>
    `,
    skills: '3D Design (Onshape), 3D Printing, CAD, Research, Prototyping',
    role: 'Sole Designer / Maker',
    difficulty: 'Intermediate',
    collaborators: 'N/A',
    images: [
      'Protein Pedestal/20250425_213107.jpg',
      'Protein Pedestal/20250425_204730.jpg',
      'Protein Pedestal/image-3.png',
      'Protein Pedestal/20250426_140548.jpg',
      'Protein Pedestal/20250426_122900.jpg',
      'Protein Pedestal/20250426_174141.jpg',
      'Protein Pedestal/20250427_205845.jpg',
      'Protein Pedestal/20250427_205857.jpg',
      'Protein Pedestal/20250428_214009.jpg',
      'Protein Pedestal/20250428_234106.jpg',
      'Protein Pedestal/20250430_220954.jpg',
      'Protein Pedestal/20250430_221040.jpg',
      'Protein Pedestal/20250430_221100.jpg'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'cooky-v2',
    title: 'Cooky V2',
    date: 'April 2025',
    shortDesc: 'A ground-up redesign of the FTC robot, Cooky V2, featuring an entirely new drivetrain, custom extendo slides, and a pivoting intake, all controlled by a completely reworked, modular Java codebase.',
    longDesc: `
      <p>This project marked a complete departure and total redesign from the original "Rooky" bot. Cooky V2 was built from the ground up, with no similar design choices to its predecessor. It featured an entirely different drivetrain design and a new type of mecanum wheel. The primary purpose of this rendition was for Edwin and me to gain comprehensive experience in constructing, designing, and coding complex linear slides. We successfully integrated a set of extendo slides as well as a pivoting intake mechanism onto Cooky V2. We did the initial designs with help from our mentor Itzha Lopez who was a mechanical engineer at P&G and a former FIRST Robotics Competition Member in Texas.</p>
      <p>In parallel, Aditya and I spearheaded a complete rewrite of our Java codebase, transitioning to a modular, object-oriented style. This made our code significantly cleaner, more reusable, and easier to debug. For example, instead of <code>intakeClaw = hardwareMap.get(Servo.class, "intakeClaw"); intakeClaw.setPostion(closedPosition);</code>, we could simply write: <code>Claw.close();</code></p>
      <p>This project was a monumental step in our team's engineering maturity, showcasing advanced mechanical design, robust coding practices, and effective teamwork.</p>
    `,
    skills: 'Robotics, Onshape, 3D Design, Mechanical Design, Java, Android Studio, Modular Programming, Object-Oriented Programming, Linear Slide Systems, Intake Mechanism Design, Teamwork, Problem-Solving, Iterative Design',
    role: 'Co-Developer',
    difficulty: 'Advanced',
    collaborators: 'Edwin Tenney, Aditya, Itzha Lopez (Mentor)',
    images: [
      'Cooky V2 initial build/image-6.png',
      'Cooky V2 initial build/image-7.png',
      'Cooky V2 initial build/image-9.png',
      'Cooky V2 initial build/image-8.png',
      'Cooky V2 initial build/20250412_134115.jpg'
    ],
    videos: [],
    youtubeEmbeds: [],
    links: {}
  },
  {
    id: 'fume-extractor',
    title: 'Custom Soldering Fume Extractor',
    date: 'March 2025',
    shortDesc: 'Designed and fabricated a custom fume extractor for soldering by repurposing a salvaged fan, designing a 3D-printable mount, and building a power circuit with a rechargeable battery.',
    longDesc: `
      <p>As my interest in soldering grew, I quickly realized the importance of proper ventilation to safely deal with the resulting fumes. Instead of purchasing a pre-made unit, I opted to design a custom solution. The project centered around a powerful fan that I had salvaged from a tabletop air hockey game. Using CAD software, I designed a specialized mount for the fan. This mount not only housed the fan securely but was also engineered to be held by my existing "helping hands" tool, allowing for versatile positioning and hands-free operation. The design was then brought to life using a 3D printer. The project also involved electronics and soldering. I designed and assembled a power circuit that included a rechargeable battery pack, a charging port, and a switch, making the fume extractor completely portable and self-contained.</p>
    `,
    skills: '3D Design (CAD), 3D Printing, Electronics, Soldering, Circuit Design, Upcycling, Problem-Solving',
    role: 'Sole Maker',
    difficulty: 'Intermediate',
    collaborators: 'N/A',
    images: [
      'Fume Extractor/IMG_20250330_113813.jpg',
      'Fume Extractor/IMG_20250330_113941.jpg'
    ],
    videos: [],
    youtubeEmbeds: [],
    links: {}
  },
  {
    id: 'hp-pavilion-ssd-upgrade',
    title: 'HP Pavilion SSD Upgrade and System Optimization',
    date: 'March 2025',
    shortDesc: 'Replaced a proprietary HDD/Intel Optane setup with a single NVMe SSD, successfully migrating the operating system and dramatically improving the laptop\'s performance and battery efficiency.',
    longDesc: `
      <p>My HP Pavilion laptop, despite having a relatively new battery, was plagued with inconsistent performance and poor battery life. Boot times were often frustratingly slow, occasionally taking up to 40 minutes, which was especially problematic during robotics team meetings. The root of the issue appeared to be the original proprietary hard disk drive (HDD), which was consistently running at over 80% disk usage, causing overheating and power inefficiency. The system used an NVMe M.2 Intel Optane memory module to "accelerate" the HDD. Recognizing an opportunity for a significant upgrade, I decided to disable the Intel Optane module and replace it with a true 1TB NVMe SSD. This involved cloning the operating system from the old HDD to the new SSD, which was a complex process that required several attempts to get right. The result was a night-and-day difference: boot times dropped to mere seconds, and the laptop's overall responsiveness and battery life improved dramatically.</p>
    `,
    skills: 'Hardware Upgrade, SSD Installation, OS Migration, BIOS Configuration, System Optimization, Troubleshooting',
    role: 'Sole Technician',
    difficulty: 'Intermediate',
    collaborators: 'N/A',
    images: [
      'HP SSD Upgrade/20250329_073448.jpg',
      'HP SSD Upgrade/20250329_072725.jpg'
    ],
    videos: [],
    links: {}
  },
  {
    id: '3d-printer-tuning',
    title: '3D Printer First-Layer Tuning',
    date: 'March 2025',
    shortDesc: 'Successfully tuned and leveled a 3D printer\'s print bed to achieve strong, consistent, and reliable first-layer adhesion.',
    longDesc: `
      <p>As a newcomer to the world of 3D printing, I spent the first month of owning my printer unaware that the "stringy, weak" first layers I was getting were not a normal part of the process. This was a critical point in my learning journey, as I learned to identify and solve a fundamental issue with the help of a friend, Owen Wasson.</p>
      <p>Through a process of trial and error, I learned how to properly level the print bed and adjust the nozzle height (often called "Z-offset"). This process involved making minute adjustments and testing them with small prints, repeating the cycle until the results were consistent. The final outcome was a dramatic improvement. The first layers went from being a fragile, inconsistent mess that could be easily ripped apart to a strong, well-adhered foundation that was difficult to break, ensuring the success of all future prints.</p>
    `,
    skills: '3D Printing, Calibration, Bed Leveling, Z-Offset Tuning, Troubleshooting, Problem-Solving',
    role: 'Learner / Sole Maker',
    difficulty: 'Beginner-Intermediate',
    collaborators: 'Owen Wasson',
    images: [
      'Tuning 3d printer/20250303_132906.jpg',
      'Tuning 3d printer/20250310_220028.jpg',
      'Tuning 3d printer/20250321_210124.jpg',
      'Tuning 3d printer/20250325_001108.jpg'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'leviathan-nn-v2',
    title: 'Leviathan: Neural Network Training (v2)',
    date: 'February 2025',
    shortDesc: 'Successfully retrained a neural network model for the Limelight camera, creating a driver-assist feature that autonomously aligns the drivetrain for specific "Sample" game pieces.',
    longDesc: `
      <p>This project was a pivotal return to our neural network approach after encountering a roadblock with our previous computer vision methods. While Aditya, Edwin, and I had been struggling to find a way to reliably separate two touching "Samples," our team member Alex Montello took the initiative to revisit our initial neural network training attempt. We had previously abandoned this path when the Google Colab notebook provided by Limelight stopped working and subsequent training attempts failed.</p>
      <p>A major breakthrough came when we identified the root cause of the failures: the limited GPU credits provided by the free version of Google Colab. To overcome this, Alex made the executive decision to purchase $10 of GPU credits, which allowed us to successfully retrain the neural network. This resulted in a functional driver-assist feature that could autonomously align the drivetrain to specific "Sample" game pieces, solving our detection problem.</p>
    `,
    skills: 'Neural Network Training, Machine Learning, Google Colab, Limelight 3A, Computer Vision, Model Deployment, Debugging, Iterative Development, Robotics, Teamwork, Budgeting, Problem-Solving',
    role: 'Team Member / Co-Developer',
    difficulty: 'Intermediate',
    collaborators: 'Alex Montello, Aditya, Edwin',
    emojis: ['🧠', '🤖', '📈'],
    youtubeEmbeds: [],
    images: [],
    videos: [],
    links: {}
  },
  {
    id: 'limelight-snapscript-v3',
    title: 'Limelight 3A: Python SnapScript (v3) with minAreaRect',
    date: 'February 2025',
    shortDesc: 'Developed a third version of the Python SnapScript using minAreaRect to generate precise polygon bounding boxes from color thresholding and edge detection, with guidance from an Oracle mentor.',
    longDesc: `
      <p>This project represented a significant evolution of our Python SnapScript, moving from a simple aspect ratio analysis to a more sophisticated, geometric approach. With invaluable guidance from Will Reed, a Principal Machine Learning Engineer at Oracle, our team was able to leverage a key computer vision function: minAreaRect().</p>
      <p>This new approach allowed us to use color thresholding and edge detection to generate an actual polygon around the detected "Sample" game piece. This method gave us a much more precise bounding box, which was a huge step up from simply analyzing aspect ratios. The polygons provided a more accurate representation of the sample's position and orientation, improving our robot's targeting capabilities.</p>
    `,
    skills: 'Python, OpenCV, Limelight 3A, Python SnapScripts, Computer Vision, Mentorship, Teamwork',
    role: 'Team Developer',
    difficulty: 'Advanced',
    collaborators: 'Will Reed (Mentor), Team',
    images: [
      'Python snapscripts v.3/20250219_161320.jpg',
      'Python snapscripts v.3/20250221_183113.jpg',
      'Python snapscripts v.3/20250219_161247.jpg'
    ],
    videos: [],
    youtubeEmbeds: [],
    links: {}
  },
  {
    id: 'budget-pc-build',
    title: 'Budget PC Build',
    date: '(Feb 2025)',
    shortDesc: 'Successfully built a custom PC for under $600 by strategically sourcing parts, which resulted in a machine that outperformed pre-built computers costing over $1000.',
    longDesc: `
      <p>This project was my first venture into building a custom PC from the ground up. My goal was to create a powerful yet affordable machine by meticulously researching and finding the best deals on components. With valuable assistance from my friend Owen Wasson, I was able to navigate the process of selecting hardware and assembling the computer. We found a lot of the parts from a local Micro Center, which was key to staying under budget. The final build was a huge success, as the PC's performance exceeded that of many commercially available systems priced at over $1000. This project was a fantastic hands-on lesson in hardware selection, budget management, and system assembly.</p>
    `,
    skills: 'PC Building, Hardware Selection, Budget Management, Assembly, Troubleshooting',
    role: 'Sole Builder (with assistance)',
    difficulty: 'Intermediate',
    collaborators: 'Owen Wasson',
    images: [
      'PC Build/20250217_171541.jpg',
      'PC Build/20250217_171557.jpg',
      'PC Build/20250216_175709.jpg',
      'PC Build/20250218_210814.jpg',
      'PC Build/20250221_231839.jpg'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'ftc-sponsorship-video',
    title: 'FTC Sponsorship Video Short',
    date: 'Feb 2025',
    shortDesc: 'A 30-second promotional video created to showcase the team\'s technical projects, including computer vision development, for potential sponsors at the 2025 INTERalliance TechOlympics.',
    longDesc: `
      <p>This short project focused on creating a high-impact, 30-second promotional video to serve as a key tool for our sponsorship outreach efforts. The goal was to quickly and effectively communicate the technical capabilities and dedication of our FTC team to potential sponsors. The video included a clip detailing our SnapScript computer vision development, which was a core project for the team. This visual proof of concept was a powerful way to demonstrate our advanced programming and problem-solving skills. The video was specifically intended for use at the 2025 INTERalliance of Greater Cincinnati TechOlympics, where we planned to present it as we talked to companies such as GE.</p>
    `,
    skills: 'Video Editing, Marketing, Public Relations, Sponsorship Outreach, Teamwork',
    role: 'Team Member',
    difficulty: 'Beginner-Intermediate',
    collaborators: 'Team',
    emojis: ['🎥', '💼', '🏆'],
    youtubeEmbeds: [],
    images: [],
    videos: [],
    links: {}
  },
  {
    id: 'limelight-snapscript-v2',
    title: 'Limelight 3A: Python SnapScript Vision (v2)',
    date: 'Feb 2025',
    shortDesc: 'Advanced the Python SnapScript vision system to utilize aspect ratio for sample orientation, enabling autonomous detection and auto-rotation for all three sample colors (red, yellow, blue) for the competition robot.',
    longDesc: `
      <p>Building on our initial Python SnapScript work, this iteration represented a significant leap forward in our vision system for Leviathan. After extensive work and tinkering, we successfully utilized the aspect ratio of the detected bounding box to gain a general understanding of the "Sample" game piece's orientation – whether it was vertical, horizontal, or anywhere in between. This breakthrough was crucial, as our claw was capable of picking up a sample even if it was up to 45 degrees off in terms of rotation.</p>
      <p>A memorable part of this development occurred during a late-night programming and debugging session in our hotel lobby. We not only perfected the orientation logic but also implemented auto-rotation for all three sample colors (red, yellow, and blue), and even created a "cinematic short movie" to document our success. The Rooky Bot served as our reliable test platform throughout this process.</p>
    `,
    skills: 'Python, OpenCV, Limelight 3A, Python SnapScripts, Computer Vision, Aspect Ratio Analysis, Autonomous Robotics, Advanced Debugging, Hardware Integration, Video Editing, Teamwork, Problem-Solving',
    role: 'Team Developer',
    difficulty: 'Advanced',
    collaborators: 'Team',
    emojis: ['👁️', '🐍', '🤖'],
    youtubeEmbeds: [],
    images: [],
    videos: [],
    youtubeEmbeds: [],
    links: {}
  },
  {
    id: 'limelight-snapscript-v1',
    title: 'Limelight 3A: Python SnapScript Vision (v1)',
    date: 'Feb 2025',
    shortDesc: 'Developed the first iteration of a Python SnapScript vision system for Leviathan, utilizing OpenCV for color and edge detection to identify single "Sample" game pieces.',
    longDesc: `
      <p>Following our initial attempt with neural networks, we pivoted our vision strategy for Leviathan to Python SnapScripts on the Limelight 3A, recognizing the importance of starting with simpler, foundational methods as recommended by Limelight documentation. This project marked the beginning of our long journey to perfect this vision system.</p>
      <p>For this first version, we focused on using basic OpenCV functionalities. We implemented edge detection and color detection to accurately capture the target "Sample" game pieces. In this iteration, we were still using a bounding box for detection, which was accurately placed on the bottom-left and top-right corners of the sample. However, this method struggled to distinguish between two samples that were touching, prompting further development.</p>
    `,
    skills: 'Python, OpenCV, Limelight 3A, Python SnapScripts, Computer Vision, Teamwork',
    role: 'Team Developer',
    difficulty: 'Intermediate',
    collaborators: 'Team',
    images: [
      'Python snapscripts/20250205_181344_1.gif',
      'Python snapscripts/20250207_225825.jpg',
      'Python snapscripts/20250207_225913.jpg'
    ],
    videos: [],
    youtubeEmbeds: [],
    links: {}
  },
  {
    id: 'nn-dataset-v1',
    title: 'Making a Dataset',
    date: 'January 2025',
    shortDesc: 'The first attempt at training a neural network for Leviathan using a Limelight-provided Google Colab notebook and a tflite model, aimed at improving autonomous "Sample" detection.',
    longDesc: `
      <p>Following the extensive work on creating our custom dataset, this project marked the crucial next step: training the Neural Network for our competition robot, Leviathan. We utilized a Google Colab notebook specifically provided by Limelight, which streamlined the training process. This notebook leveraged a pre-existing model in the tflite format, a unique and optimized format for Limelight's vision processing capabilities.</p>
      <p>Our process involved feeding our meticulously annotated dataset into this setup to begin training the model. Once trained, we were able to successfully deploy and test the model on the Limelight 3A camera. However, the initial results revealed that the model's accuracy and consistency were pretty bad, making it clear that a significant rework was needed.</p>
      <p>Crucially, after this attempt, we collectively decided to pivot away from neural networks for the time being. We realized that we had skipped too far ahead in our vision development. According to Limelight's documentation and the success of other teams, the recommended approach is to start small and simple, then gradually work your way up to more complex methods like neural networks. Therefore, our next step became focusing on trying to implement a custom Python SnapScript for object detection. This project, while not achieving its initial goal, was invaluable in highlighting the iterative nature of machine learning development and the importance of following best practices in robotics vision. The Rooky Bot continued to serve as our crucial test vessel for all these Limelight experiments.</p>
    `,
    skills: 'Neural Network Training, Machine Learning, Google Colab, Limelight 3A, Model Deployment, Data Analysis, Debugging, Iterative Development, Robotics, Java (for integration), Teamwork',
    role: 'Team Member',
    difficulty: 'Intermediate',
    collaborators: 'Team',
    images: [
      'Creating a Dataset/Screenshot_20250106_001357_Chrome.jpg',
      'Creating a Dataset/20250115_183320.jpg',
      'Creating a Dataset/20250115_183329.jpg'
    ],
    videos: [],
    youtubeEmbeds: [],
    links: {}
  },
  {
    id: 'esp32-rc-car',
    title: 'ESP32 RC Car',
    date: 'Jan 2025',
    shortDesc: 'An ambitious attempt to control an RC car drivetrain via Bluetooth using an ESP32 and a Dualshock 4 controller, integrated with a Raspberry Pi 4 for live FPV camera feedback.',
    longDesc: `
      <p>This project was my first foray into using an ESP32 board, with the goal of achieving Bluetooth control over an RC car's drivetrain using a Dualshock 4 controller. The vision was to pair this with a Raspberry Pi 4-based camera/FPV system to provide live video feedback during driving. The project presented significant challenges, primarily due to the RC car's cheap, off-brand nature. Its steering mechanism wasn't a standard servo but a 5-wire motor hooked up to a potentiometer, making it extremely unstable and difficult to program. Despite extensive programming tweaks, debugging, and the implementation of PID control and smoothening algorithms, the car remained very jittery.</p>
      <p>A major roadblock was discovered when my H-bridge motor driver proved unable to handle the current required by the motor, causing the project to ultimately fail due to insufficient power delivery. I even attempted a second time using a VEX Robotics drivetrain, but those motors also drew too much current for the H-bridge. Given the demanding schoolwork and new robotics tasks that arose, I decided to conclude the project. While not fully successful in its operational goals, I gained valuable insight and skills in complex electronics, wireless control, and advanced debugging, making it a worthwhile learning experience.</p>
    `,
    skills: 'ESP32, Bluetooth, Dualshock 4 Controller Integration, RC Car Mechanics, Motor Control, PID Control, Debugging, Raspberry Pi 4, FPV Systems, Electronics, Problem-Solving, C++ (for ESP32 programming)',
    role: 'Sole Developer',
    difficulty: 'Intermediate',
    collaborators: 'N/A',
    images: [
      'Esp32 RC Car/20250103_165514.jpg',
      'Esp32 RC Car/4230bd69-02de-48af-a4a1-7af90d47d357.jpg',
      'Esp32 RC Car/20250104_234138.jpg',
      'Esp32 RC Car/20250108_130932.jpg',
      'Esp32 RC Car/20250108_002503.jpg',
      'Esp32 RC Car/20250108_002457.jpg',
      'Esp32 RC Car/20250108_131012.jpg',
      'Esp32 RC Car/20250119_190848.jpg',
      'Esp32 RC Car/20250119_190849.jpg',
      'Esp32 RC Car/20250119_190852.jpg',
      'Esp32 RC Car/20250119_190856.jpg',
      'Esp32 RC Car/20250119_190858.jpg',
      'Esp32 RC Car/20250119_190901.jpg',
      'Esp32 RC Car/20250119_190905.jpg',
      'Esp32 RC Car/20250119_190908.jpg'
    ],
    videos: [
      'Esp32 RC Car/20250104_011220.mp4',
      'Esp32 RC Car/20250104_200108.mp4',
      'Esp32 RC Car/20250104_232118.mp4',
      'Esp32 RC Car/20250107_204916.mp4',
      'Esp32 RC Car/20250107_204924.mp4',
      'Esp32 RC Car/20250108_142722.mp4',
      'Esp32 RC Car/20250108_142738.mp4'
    ],
    links: {}
  },
  {
    id: 'rpi4-fan-adapter',
    title: 'Raspberry Pi 4 Custom Fan Adapter',
    date: 'Dec 24',
    shortDesc: 'Designed and 3D-printed a custom adapter to mount a large, upcycled fan from an air hockey game onto a Raspberry Pi 4 case for powerful cooling, involving creative 3D pen repairs.',
    longDesc: `
      <p>This project involved creating an unconventional yet highly effective cooling solution for my Raspberry Pi 4. I began by harvesting a large, oversized fan from an old desktop air hockey game. Having already 3D-printed a case for my Raspberry Pi 4 (which I was just learning to use), the challenge was to integrate this powerful fan. Using Onshape, along with precise measurements and reference photos, I designed a custom adapter that would allow the large fan to slot directly into an opening on the RPi case.</p>
      <p>While the design perfectly attached to the fan, the adapter unfortunately warped during printing, preventing it from fitting correctly into the RPi case's slot. This led to some 3D pen magic: I used my 3D pen to directly attach the mouth of the fan adapter to the opening on the top of the RPi case. It was an extremely inefficient method, but the result was a very powerful cooling system. The fan required an external battery/power source to operate, which luckily I had salvaged from the air hockey game, complete with its original power switch. This project is a testament to creative problem-solving and functionality over aesthetics!</p>
    `,
    skills: '3D Design (Onshape), 3D Printing, Upcycling, Raspberry Pi, Electronics, Hardware Integration, Problem-Solving, Post-Processing (3D pen mending), Measurement',
    role: 'Sole Maker',
    difficulty: 'Beginner-Intermediate',
    collaborators: 'N/A',
    images: [
      'RPI4 Fan/20241231_184426.jpg'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'webcam-mount-repair',
    title: 'Custom 3D-Printed Webcam Mount & Repair',
    date: '(Dec 2024)',
    shortDesc: 'Designed and 3D-printed a custom, cage-like clamping mechanism with an adjustable ball joint for a USB webcam to mount on a large desk monitor, including an unexpected and creative repair process.',
    longDesc: `
      <p>This project involved creating a new mount for our USB webcam after its original mechanism broke beyond repair. This was a completely separate task from the dashcam project and was specifically for my dad's desk. I started with an existing online design for an M6 screw-on camera, but our webcam no longer had the M6 threading since it had broken off with the original clamp. This required me to redesign the M6 mount into a custom, cage-like contraption that securely clasped the webcam. The design also included an adjustable angle using a ball joint for flexible positioning, crucial for a larger-than-usual monitor clamp.</p>
      <p>However, during the redesign, I accidentally made it incompatible with the original ball joint, forcing me to use glue. In a classic "measure twice, cut once" moment, I then realized I had glued the camera holder base upside down! To fix this, I had to cut off the entire camera holder base and ball joint using heated X-Acto knives, and then reattach it the right way up using my 3D pen. It was surprisingly fun to mend a 3D print with a 3D pen, even if it left some hidden soot marks and gold filament. Luckily, my dad only needed it to work, not look perfect, and it's still in use on his desk monitor to this day, proving its functionality despite the mishaps! This project was a great lesson in iterative design, real-world problem-solving, and creative repair techniques.</p>
    `,
    skills: '3D Design (Onshape), 3D Printing, Mechanical Design, Problem-Solving, Custom Fabrication, Precision Measurement, Hardware Repair, Iterative Design, Post-Processing (cutting, 3D pen mending)',
    role: 'Sole Maker',
    difficulty: 'Beginner-Intermediate',
    collaborators: 'N/A',
    images: [
      'Webcam Mount/20241215_161541.jpg',
      'Webcam Mount/20241215_161605.jpg',
      'Webcam Mount/20241215_161622.jpg'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'dashcam-mount',
    title: 'Custom 3D-Printed Dash Cam Mount',
    date: 'Dec 2024',
    shortDesc: 'Designed and 3D-printed a replacement ball joint and clipping mechanism for a car\'s dash camera mount, solving a real-world hardware issue.',
    longDesc: `
      <p>This project was a significant milestone as it represented my first real-world application of 3D design and printing to solve a practical problem. The task was to replace the broken ball joint and clipping mechanism for our car's dash camera mount. This was the first time I designed and printed something entirely from scratch, and it marked my introduction to Onshape, a professional CAD software. The process involved meticulously taking measurements using calipers to ensure precision. I then used Onshape to redesign both the clipping mechanism for secure attachment and an accurately sized ball joint for flexible positioning. After designing, I 3D-printed the part. The successful outcome is evident as the custom mount worked perfectly and is still in use in our car today, demonstrating the durability and functionality of the redesigned component. This project greatly enhanced my skills in precision measurement, CAD software, and practical engineering.</p>
    `,
    skills: '3D Design (Onshape), 3D Printing, Calipers, Mechanical Design, Problem-Solving, Custom Fabrication, Precision Measurement',
    role: 'Sole Maker',
    difficulty: 'Beginner',
    collaborators: 'N/A',
    images: [
      'DashCam Ball joint/20241208_175116.jpg',
      'DashCam Ball joint/IMG_20241208_180545.jpg'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'limelight-color-threshold',
    title: 'Limelight 3A: Color Thresholding',
    date: 'December 2024',
    shortDesc: 'Integrated a Limelight 3A camera for autonomous detection and slow approach of yellow "Sample" game pieces using color thresholding.',
    longDesc: `
      <p>This phase marked the beginning of our Limelight 3A journey, and it was a pivotal moment as we shifted our focus from the "Rooky" robot to developing for our actual competition robot, Leviathan. The "Rooky" bot became a crucial test vessel for this advanced vision system. The Limelight 3A is a specialized, easy-to-use vision processing camera commonly used in competitive robotics, particularly in FIRST Tech Challenge (FTC) and FIRST Robotics Competition (FRC). It's designed to quickly and accurately identify and track targets, such as April Tags, game pieces, or other objects, using built-in image processing features. This allows robots to "see" and react to their environment autonomously. Beyond basic color thresholding, the Limelight 3A also supports more advanced applications like Python SnapScripts and neural networks for more sophisticated object recognition and analysis.</p>
      <p>Our primary goal was to enable the robot to autonomously detect and pick up target blocks, specifically the yellow "Sample" game pieces from the 2024-2025 FTC season, "Into The Deep." We developed programming that utilized color thresholding with the Limelight as our starting point for object detection. While we achieved a somewhat reliable system where the robot would very slowly approach a detected yellow Sample, we had plans to continue exploring and implementing other methods to find the most robust and accurate detection solution. This entire effort was aimed at making the camera system good enough to be used on our actual competition robot, Leviathan, with the Rooky Bot serving as a crucial test vessel for development and refinement. This project was a crucial step in advancing the robot's ability to interact autonomously with game elements, laying the groundwork for more sophisticated object manipulation and scoring routines. Throughout this, our existing drivetrain served as the foundational mobile platform, or "carrier," for this advanced vision system.</p>
    `,
    skills: 'Robotics, Java, Android Studio, Computer Vision, Limelight 3A, Color Thresholding, Autonomous Robotics, Sensor Integration, Object Detection, Iterative Development, Debugging, Teamwork, Problem-Solving',
    role: 'Team Developer',
    difficulty: 'Intermediate',
    collaborators: 'Team',
    images: [
      'Limelight mount/20241204_165755.jpg',
      'Limelight mount/20241204_165758.jpg',
      'Limelight mount/IMG_20241126_152850.jpg'
    ],
    videos: [],
    youtubeEmbeds: [],
    links: {}
  },
  {
    id: 'car-dealership-plaque',
    title: 'Custom 3D-Printed Car Dealership Name Plaque',
    date: 'November 2024',
    shortDesc: 'Designed and 3D-printed a custom name plaque for a car dealership owner, incorporating pen holders and a Dodge Challenger design, finished with metallic accents.',
    longDesc: `
      <p>This project involved the design and fabrication of a personalized name plaque for my mom's cousin, Hardy Nalasw, who owns a car dealership. The design was carefully crafted to reflect his business, featuring integrated pen holders and a prominent Dodge Challenger model to match the automotive theme. To give it a high-quality, metallic look, I used a metallic marker to highlight his name and the car details. The design process was conducted using Tinkercad for initial modeling and OrcaSlicer for preparing the print, as I had not yet learned Onshape. This project was particularly significant as it was one of my very first endeavors with my new 3D printer, which I had acquired only a week prior. Despite being new to both 3D design and printing, I successfully brought the concept to life, showcasing early skills in digital fabrication and creative problem-solving.</p>
    `,
    skills: '3D Design (Tinkercad, OrcaSlicer), 3D Printing, Custom Fabrication, Creative Design, Prototyping, Attention to Detail',
    role: 'Sole Designer',
    difficulty: 'Beginner',
    collaborators: 'N/A',
    images: [
      'Hardy Nameplate/IMG_20241127_131706.jpg',
      'Hardy Nameplate/20241127_195929.jpg'
    ],
    videos: [],
    youtubeEmbeds: [],
    links: {}
  },
  {
    id: 'rooky-bot-claw-v4',
    title: 'FTC "Rooky" Bot: Claw Redesign (v4)',
    date: 'Nov 2024',
    shortDesc: 'A redesigned and improved robot claw, 3D-printed in Navy PLA, featuring enhanced ground clearance, a stable U-channel mount, and improved block acquisition for two-driver operation.',
    longDesc: `
      <p>This project focused on a critical redesign of the "Rooky" robot's claw mechanism, addressing significant issues encountered with the initial version. The first claw often broke and scraped against the ground, hindering the robot's performance. The new iteration, 3D-printed in durable Navy PLA, was engineered to resolve these problems.</p>
      <p>Key improvements in this Claw Redesign (v2) include:
        <ul>
          <li>Enhanced Ground Clearance: The new design ensured the claw no longer came into contact with the ground, preventing damage and improving maneuverability.</li>
          <li>Stable U-Channel Mount: A special U-channel was integrated into the design, providing a firm and consistent mounting point that held the claw at the optimal height.</li>
          <li>Improved Block Acquisition: When the claw was open, its redesigned geometry allowed it to pass over blocks without collision, making it significantly easier and more reliable to pick up targets.</li>
        </ul>
      </p>
      <p>This iteration was also optimized for two-driver operation, with one driver controlling the robot's movement and the other dedicated to operating the claw's open/close functions. This project was a practical lesson in iterative design, mechanical problem-solving, and improving robot functionality based on field testing and feedback.</p>
    `,
    skills: 'Robotics, 3D Design (CAD), 3D Printing (PLA), Mechanism Design, Iterative Design, Mechanical Engineering, Teamwork, Problem-Solving, Java (for control integration)',
    role: 'Team Developer',
    difficulty: 'Intermediate',
    collaborators: 'Team',
    images: [],
    videos: [],
    youtubeEmbeds: [],
    emojis: ['🤖', '🪛', '🔧'],
    links: {}
  },
  {
    id: 'rooky-bot-collision-v3',
    title: 'FTC "Rooky" Bot: Autonomous April Tag Cycler with Collision Avoidance (v3)',
    date: 'Nov 2024',
    shortDesc: 'Enhanced the "Rooky" robot\'s autonomous April Tag cycling by integrating a physical distance sensor for collision avoidance, enabling robust navigation and recovery from interference.',
    longDesc: `
      <p>This phase marked a significant advancement in the "Rooky" robot's autonomous capabilities by introducing a physical distance sensor. This sensor was integrated with the existing April Tag cycling program to enable collision avoidance, making the robot more robust in dynamic environments. The videos demonstrate the robot's improved resilience; it was able to continue its cycling routine even while being "bullied" or interfered with, proving to be quite stubborn and capable of staying on track. A key improvement was its ability to recover autonomously: if the robot temporarily lost sight of the next April Tag in its sequence, it would simply spin in place (a maneuver facilitated by the mecanum drivetrain) until it re-acquired the correct tag ID, then resume its approach. This project deepened our understanding of sensor fusion, reactive autonomous behaviors, and creating highly reliable navigation systems for competitive robotics.</p>
    `,
    skills: 'Robotics, Java, Android Studio, Computer Vision, April Tag Detection, Autonomous Robotics, Sensor Integration, Distance Sensing, Collision Avoidance, Robust Autonomous Navigation, Iterative Development, Debugging, Teamwork, Problem-Solving',
    role: 'Team Developer',
    difficulty: 'Advanced',
    collaborators: 'Team',
    emojis: ['🏷️', '📍', '🤖'],
    youtubeEmbeds: [],
    images: [],
    videos: [],
    links: {}
  },
  {
    id: 'rooky-bot-apriltag-v2',
    title: 'FTC "Rooky" Bot: Autonomous April Tag Cycler (v2)',
    date: 'Nov 2024',
    shortDesc: 'Integrated a USB webcam for April Tag detection and developed an autonomous program for the "Rooky" robot to detect, approach, and cycle through a sequence of April Tags (12, 13, 14, 15).',
    longDesc: `
      <p>Building significantly on the "Rooky" robot's capabilities, this phase introduced computer vision for autonomous operation. We integrated a USB Logitech webcam onto the robot and began programming its ability to detect and approach specific April Tags. The development involved multiple iterations, starting with a simpler program to approach any visible April Tag (which, as documented by a cool compilation video, initially had some amusing failures!). By the end of this weekend-long effort, we achieved a functional autonomous cycler.</p>
      <p>The final program allowed the robot to:
        <ol>
          <li>Detect April Tag 12 and approach it, stopping approximately 20cm in front and aligning itself straight.</li>
          <li>Turn right until it detected the next April Tag in the sequence.</li>
          <li>Approach the newly detected tag, utilizing the advantages of the mecanum drivetrain to correct its heading on the way.</li>
          <li>Repeat the turning and approaching process. This sequence created an infinite loop, cycling through April Tags 12, 13, 14, and 15, then restarting at 12.</li>
        </ol>
      </p>
      <p>This project was a major step in implementing advanced autonomous navigation and sensor integration in a competitive robotics context.</p>
    `,
    skills: 'Robotics, Java, Android Studio, Computer Vision, April Tag Detection, Autonomous Robotics, Sensor Integration, Iterative Development, Debugging, Teamwork, Problem-Solving',
    role: 'Team Developer',
    difficulty: 'Intermediate',
    collaborators: 'Team',
    images: [
      'Cooky April Tags v.1/20241030_174619.jpg'
    ],
    videos: [],
    youtubeEmbeds: [],
    links: {}
  },
  {
    id: 'rooky-bot-claw-v1',
    title: 'FTC "Rooky" Bot: Claw & Turtle Mode (v1)',
    date: '(Oct 2024)',
    shortDesc: 'Designed and tested a 3D-printed claw to score colored targets and implemented a "Turtle mode" for the drivetrain, allowing speed toggling with haptic feedback.',
    longDesc: `
      <p>Building upon the foundational drivetrain, this phase of the 'Rooky' robot project focused on enhancing its scoring capabilities and driver control. We designed and fabricated a small claw mechanism from gold silk PLA (a type of 3D printer filament). However, this initial claw often broke easily and scraped on the floor, which was a real pain. It also made it tough to maneuver the robot to pick up blocks because the claw would collide with them.</p>
      <p>Concurrently, we developed and programmed a 'Turtle mode' for the robot's drivetrain. This feature allows the driver to toggle between fast and slow driving speeds, providing greater precision for intricate maneuvers. To enhance the driver's experience, the system was programmed to provide vibration feedback on the controller, clearly indicating the active speed setting. This project demonstrated our ability to integrate new hardware (the claw) with existing systems and implement advanced control features for improved robot performance.</p>
    `,
    skills: 'Robotics, Java, Android Studio, 3D Design (CAD), 3D Printing (PLA), Mechanism Design, Haptic Feedback Programming, Teamwork, Problem-Solving',
    role: 'Team Developer',
    difficulty: 'Intermediate',
    collaborators: 'Team',
    images: [
      'Cooky Bot Claw/20241025_182036.jpg',
      'Cooky Bot Claw/20241025_182040.jpg',
      'Cooky Bot Claw/20241025_182047.jpg',
      'Cooky Bot Claw/20241025_182320.jpg',
      'Cooky Bot Claw/20250119_190858.jpg',
      'Cooky Bot Claw/20250119_190901.jpg',
      'Cooky Bot Claw/20250119_190905.jpg',
      'Cooky Bot Claw/20250119_190908.jpg'
    ],
    videos: [
      'Cooky Bot Claw/20241025_182349.mp4',
      'Cooky Bot Claw/20241026_133727.mp4',
      'Cooky Bot Claw/20241026_145926.mp4',
      'Cooky Bot Claw/20241026_154625.mp4',
      'Cooky Bot Claw/20241026_164054.mp4',
      'Cooky Bot Claw/20241026_164124.mp4'
    ],
    videos: [],
    youtubeEmbeds: [],
    links: {}
  },
  {
    id: 'rooky-bot-drivetrain',
    title: 'FTC "Rooky" Robot Drivetrain (Team 6133)',
    date: 'October 10-19, 2024',
    shortDesc: 'Developed the foundational drivable mecanum drivetrain for the first "Rooky" robot as part of FTC Team 6133 "The NUTS!", programmed in Java using Android Studio.',
    longDesc: `
      <p>As a rookie member of FTC Team 6133 "The NUTS!", my first major task was contributing to the development of the "Rooky" robot's drivetrain. This initial iteration focused on creating a fully functional and drivable mecanum drivetrain. The programming was done in Java using Android Studio, which was a significant learning experience for applying software concepts to control physical hardware. My role, alongside Aditya Singh and Edwin Tenney, was in the programming aspect, bringing the robot to life. Owen Wasson and Mario Ynga Orellana handled the build and CAD (Computer-Aided Design) for the physical structure. This project was crucial for understanding fundamental robotics principles, collaborative team dynamics, and the practical application of programming in a competitive robotics environment.</p>
    `,
    skills: 'Java, Android Studio, Robotics, Mecanum Drivetrain, Teamwork, Collaborative Programming, Basic Robotics Concepts',
    role: 'Team Developer / Programmer',
    difficulty: 'Intermediate',
    collaborators: 'Aditya Singh, Edwin Tenney, Owen Wasson, Mario Ynga Orellana',
    images: [
      'Rooky (Cooky) Robot DT/img_2938_1.gif'
    ],
    videos: [],
    youtubeEmbeds: [],
    links: {}
  },
  {
    id: 'buzzer-music-player',
    title: 'Simple Buzzer Music Player',
    date: 'October 3, 2024',
    shortDesc: 'A basic electronics project where I assembled a buzzer circuit and used pre-made code to play musical tunes.',
    longDesc: `
      <p>This project was an introduction to simple electronics and microcontroller interaction. I assembled a basic circuit involving a buzzer, which is an output device that produces sound. The core of the project involved using pre-made code files sourced from a GitHub repository (https://github.com/hibit-dev/buzzer) to program a microcontroller (likely an Arduino or similar board) to play various musical sequences through the buzzer. This project focused on following circuit diagrams, connecting components correctly, and understanding how external code can control hardware, providing a tangible output in the form of sound.</p>
    `,
    skills: 'Electronics Assembly, Circuit Building, Following Instructions, Basic Microcontroller Concepts, Hardware Implementation',
    role: 'Learner',
    difficulty: 'Beginner',
    collaborators: 'N/A',
    images: [],
    videos: [],
    youtubeEmbeds: [],
    emojis: ['🔊', '🎵', '🔌'],
    links: { github: 'https://github.com/hibit-dev/buzzer' }
  },
  {
    id: 'kurdistan-astrophotography',
    title: 'Astrophotography in Kurdistan',
    date: 'Summer 2024',
    shortDesc: 'Captured stunning astrophotographs of stars and cityscapes in the mountains of Slemani, Kurdistan, using a mobile phone.',
    longDesc: `
      <p>During my time in Kurdistan in the summer of 2024, I embarked on a fascinating project: learning how to take astrophotographs using just my phone. In the clear, dark skies of the Slemani mountains, I focused on capturing the beauty of the night sky, especially the stars, while also incorporating the distant city lights. This project involved understanding basic principles of mobile photography, adjusting settings for low-light conditions, and finding optimal vantage points. It was a blend of technical learning and appreciating the natural beauty of the environment.</p>
    `,
    skills: 'Mobile Photography, Astrophotography, Low-Light Photography, Composition, Observation, Problem-Solving',
    role: 'Sole Photographer',
    difficulty: 'Beginner',
    collaborators: 'N/A',
    images: [
      'Astrophotos/20240712_202707.jpg',
      'Astrophotos/20240712_203932.jpg',
      'Astrophotos/20240712_204642.jpg'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'ap-seminar-game',
    title: 'Logical Fallacies: The Game (AP Seminar Project)',
    date: 'May 2024',
    shortDesc: 'An interactive educational game developed for AP Seminar, designed to teach logical fallacies through multiple levels and an end boss, featuring a custom soundtrack.',
    longDesc: `
      <p>For our AP Seminar end-of-year project, my team and I developed "Logical Fallacies: The Game," an educational game aimed at making complex logical concepts engaging and understandable. The game was built on Code.org's App Lab platform, utilizing its written code interface (not block-based) to create a multi-level experience. Players navigated through various scenarios designed to highlight different logical fallacies, culminating in an end boss challenge that tested their understanding. A unique aspect of the project was its custom soundtrack, composed by Wyatt Childress, which enhanced the immersive experience. My role, alongside Karna Gajjar, involved both the programming and design of the game. Unfortunately, due to an update on Code.org, the game's animations broke, and the platform no longer permits access to the project. Despite this, the project was a significant learning experience in game design, collaborative development, and applying academic concepts in a creative digital format.</p>
    `,
    skills: 'Game Design, JavaScript (Code.org App Lab), UI/UX Design, Logical Reasoning, Critical Thinking, Collaboration, Project Management, Creative Problem-Solving',
    role: 'Co-Developer',
    difficulty: 'Intermediate',
    collaborators: 'Karna Gajjar, Wyatt Childress (Soundtrack)',
    emojis: ['🎮', '🧠', '🏆'],
    images: [],
    videos: [],
    links: {}
  },
  {
    id: 'arduino-button-deck',
    title: 'Arduino Leonardo Button Deck',
    date: 'January 31, 2024',
    shortDesc: 'A custom Arduino Leonardo-based button deck featuring a rotary encoder for cycling through four distinct keyboard command profiles, indicated by LEDs, and four programmable snap buttons for versatile input.',
    longDesc: `
      <p>This project involved the design and construction of a highly versatile Arduino Leonardo-based button deck, intended to serve as a custom input device for various applications, similar to a streaming or gaming macro pad. The core functionality revolves around its ability to emulate keyboard strokes directly, thanks to the Arduino Leonardo's native USB HID capabilities.</p>
      <p>The device features a rotary encoder that allows the user to cycle through four distinct profiles of keyboard keybinds. Each profile is visually indicated by one of four dedicated LEDs, providing clear feedback on the active mode. In addition to the rotary encoder's push-button, there are four tactile snap buttons that act as programmable "keys." The specific keyboard command sent by each of these buttons changes depending on the currently selected profile. For instance, one profile might map the buttons to WASD movement and Spacebar, while another could map them to arrow keys or numerical inputs (1, 2, 3, 4, Enter), or even special functions like Backspace and Delete. This project was an excellent exercise in microcontroller programming (C++), custom hardware design, electronics assembly, and creating a highly customizable human-computer interface.</p>
    `,
    skills: 'Arduino, C++ (for Arduino programming), Electronics, USB HID Emulation, Custom Hardware Design, Circuit Design, Microcontroller Programming, Problem-Solving, Input Device Design',
    role: 'Sole Developer',
    difficulty: 'Intermediate',
    collaborators: 'N/A',
    images: [
      'Button Deck/20240131_212946.jpg'
    ],
    videos: [
      'Button Deck/20240131_212818.mp4'
    ],
    links: {}
  },
  {
    id: 'home-barista',
    title: 'Home Barista',
    date: 'Dec 2023',
    shortDesc: 'Learned the art of making lattes from scratch, using simple household items like a mason jar for frothing milk and instant coffee for the base.',
    longDesc: `
      <p>This project was a delicious dive into the world of coffee! I taught myself how to make lattes using surprisingly simple methods. The key was mastering the milk frothing technique, which I achieved by using a mason jar as a shaker - no fancy espresso machine needed! For the coffee base, I experimented with instant coffee and cold water to create a dark, rich foundation. This project was all about trial and error, learning the right ratios, and getting that perfect frothy texture. It's a fun skill that combines a bit of chemistry, a dash of creativity, and a whole lot of deliciousness!</p>
    `,
    skills: 'Culinary Skills, Beverage Preparation, Experimentation, Problem-Solving, Creativity, Resourcefulness',
    role: 'Learner',
    difficulty: 'Beginner',
    collaborators: 'N/A',
    images: [
      'Latte/20231201_195230.jpg',
      'Latte/20231201_195412.jpg',
      'Latte/20231201_195412(0).jpg',
      'Latte/20231201_204825.jpg',
      'Latte/20231218_210447.jpg'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'hp-laptop-reimage',
    title: 'HP Laptop Upgrade & OS Reimage',
    date: 'Dec 2023',
    shortDesc: 'Upgraded a personal HP laptop by replacing the battery and upgrading the RAM, and resolved performance issues by reimaging the operating system back to Windows 10 after a problematic Windows 11 upgrade.',
    longDesc: `
      <p>This project involved a significant overhaul of my personal HP laptop to address severe performance degradation that occurred after upgrading from Windows 10 to Windows 11. This slowdown was identified as a widespread glitch associated with the in-place upgrade process. To improve hardware performance, I replaced the laptop's battery and upgraded the RAM, which are common hardware enhancements for speed and longevity. However, the core issue persisted due to the Windows 11 upgrade glitch. Since the deadline to officially downgrade back to Windows 10 had passed, the solution required a full reimage of the operating system back to Windows 10. This process involved backing up data, performing a clean installation, and reinstalling necessary drivers and software. After these combined hardware and software interventions, the laptop's speed and performance were fully restored. This project honed my skills in hardware maintenance, operating system troubleshooting, and data management. (I updated this description Aug 2025, after figuring out at my Xavier IT Internship that the problem was widespread and even the university had issues and chose to reimage to 11 instead of inplace upgrade.)</p>
    `,
    skills: 'Hardware Installation, RAM Upgrade, Battery Replacement, Operating System Reimaging, Windows Troubleshooting, Data Backup & Recovery, Problem-Solving',
    role: 'Sole Technician',
    difficulty: 'Intermediate',
    collaborators: 'N/A',
    images: [
      'HP Upgrade/20231201_204825.jpg',
      'HP Upgrade/20231218_210447.jpg'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'msa-website',
    title: 'MSA Club Website Development',
    date: 'January 2023 - May 2024',
    shortDesc: 'Developed and maintained the official MSA (Muslim Student Association) club website, initially in collaboration and later as a solo developer.',
    longDesc: `
      <p>This project involved the comprehensive development and ongoing maintenance of the official MSA (Muslim Student Association) club website for my school. The initiative began as a school project from January to May 2023, during which I collaborated with Arshya Maricar to establish the initial structure and content. Following this collaborative phase, I took over as the solo developer from May 2023 until May 2024, continuously expanding its features, managing content, and ensuring its functionality. The website was designed with multiple menus and sections to serve as a central hub for club information, events, and resources. This long-term project demonstrated my ability to manage a web development project independently, adapt to evolving needs, and maintain a live application over an extended period. Please note that the original live link for this Repl.it project is no longer operational as Repl.it discontinued its free deployment plan.</p>
    `,
    skills: 'HTML, CSS, JavaScript, UI/UX Design, Web Development, Collaboration, Independent Development, Project Management, Content Management',
    role: 'Solo Developer (after initial collaboration)',
    difficulty: 'Intermediate',
    collaborators: 'Arshya Maricar (initial collaboration)',
    images: [
      'Websites 9th/Screenshot 2025-08-05 131141.png',
      'Websites 9th/Screenshot 2025-08-05 131304.png'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'corolla-screen-upgrade',
    title: 'Car Infotainment System Upgrade',
    date: '(Fall 2023)',
    shortDesc: 'Upgraded our 2006 Corolla\'s radio to a modern infotainment screen, involving removal of the old unit, installation of the new screen, and wire crimping.',
    longDesc: `
      <p>This project was a hands-on automotive upgrade where my dad and I replaced the outdated radio in our 2006 Corolla with a modern infotainment screen. The process involved carefully removing the old radio unit, which required understanding the car's dashboard assembly. We then proceeded with the installation of the new infotainment screen, ensuring a secure fit. A critical part of the project was wire crimping to correctly connect the new system to the car's electrical wiring, ensuring all functions (power, speakers, etc.) operated correctly. The successful completion of this project resulted in a significant upgrade to the car's interior, providing modern navigation and entertainment capabilities.</p>
    `,
    skills: 'Automotive Repair, Electrical Wiring, Wire Crimping, Tool Usage, Problem-Solving, Teamwork',
    role: 'Team Member',
    difficulty: 'Beginner-Intermediate',
    collaborators: 'Dad',
    emojis: ['🚗', '📺', '⚡'],
    images: [],
    videos: [],
    links: {}
  },
  {
    id: 'arduino-steering-wheel',
    title: 'Arduino Leonardo Steering Wheel Dashboard',
    date: '(Fall 2023)',
    shortDesc: 'A custom dashboard attachment for a steering wheel, built with an Arduino Leonardo, that emulates keyboard strokes and features a parking brake status LED.',
    longDesc: `
      <p>This project involved creating a practical dashboard attachment for a steering wheel, designed to replace the need for a physical keyboard during certain activities by emulating keyboard strokes. The core of the system was an Arduino Leonardo, chosen for its native USB HID (Human Interface Device) capabilities, allowing it to act directly as a keyboard. The dashboard included various buttons or inputs mapped to specific keyboard commands, making common actions more accessible from the steering wheel. A key feature was a red LED indicator for the parking brake status, providing immediate visual feedback.</p>
      <p>A memorable (and slightly terrifying) debugging experience occurred during the initial testing phase. My first attempt at a simple one-wire keyboard setup kept failing. After many tries, when it finally did work, it launched into an unstoppable loop, relentlessly typing "I AM ALIVE" at lightning speed every time it was plugged into a computer (after a 2-second delay!). This made uploading code fixes incredibly difficult as the board would type over the IDE. After several frustrated attempts, I managed to use the board's physical reboot button to buy just enough time to initiate the upload and open a new notepad file to capture the "I AM ALIVE" manifesto. That file, AMALIVE.txt, still exists as a testament to the debugging struggle!</p>
    `,
    skills: 'Arduino, C++ (for Arduino programming), Electronics, USB HID Emulation, Problem-Solving, Debugging, Circuit Design',
    role: 'Sole Developer',
    difficulty: 'Intermediate',
    collaborators: 'N/A',
    images: [
      'Dashboard/6258184b-fca5-4c2b-88dd-ab1bf29df177.jpg',
      'Dashboard/c21ca525-7e18-4bcc-bc93-6c7624b14e74.jpg'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'tree-fence-project',
    title: 'Tree Removal & Fence Reconstruction',
    date: '(Fall 2023)',
    shortDesc: 'A wild adventure in the backyard involving tree-chopping, teamwork, and an unexpected fence demolition (and subsequent resurrection!).',
    longDesc: `
      <p>This project was less about coding and more about embracing the great outdoors... and a bit of accidental destruction. My dad and I teamed up to tackle two stubborn trees in the backyard. We were all about that teamwork and those trusty ratchet straps to guide the trees down. Things were going great until, oops, one of the trees decided to take out a section of our metal fence on its way down. So, what started as a tree-cutting mission quickly turned into an impromptu fence reconstruction project! It was a real crash course in problem-solving, using tools (and maybe a bit of duct tape, metaphorically speaking), and learning that sometimes, projects come with unexpected, hilarious detours. Definitely a memorable bonding experience!</p>
    `,
    skills: 'Teamwork, Problem-Solving, Tool Usage (e.g., chainsaws, ratchet straps, construction tools), Fence Construction, Accident Response, Physical Labor',
    role: 'Team Member',
    difficulty: 'Beginner',
    collaborators: 'Dad',
    images: [
      'Tree/20230304_142210.jpg'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'js-web-apps',
    title: 'Interactive Web Apps with JavaScript',
    date: 'January - May 2023',
    shortDesc: 'A set of web apps I built using HTML, CSS, and JavaScript, including a Magic 8 Ball, a Rock Paper Scissors game, and a website for a school club.',
    longDesc: `
      <p>This collection of projects showcases my initial work in building interactive websites using JavaScript, alongside HTML and CSS. The projects include a Magic 8 Ball web application that takes user input for a name and question, then provides a random response. I also developed a Rock, Paper, Scissors game where users can play against the computer, demonstrating basic game logic and user interaction. Furthermore, I collaborated with Arshya Maricar to create the official MSA club website for my school, which features multiple menus and sections, highlighting teamwork and more complex site structure. These projects were crucial for understanding how to handle user input, implement dynamic behaviors, and build more engaging web experiences.</p>
    `,
    skills: 'HTML, CSS, JavaScript, UI/UX Design, Game Development, Collaboration',
    role: 'Developer',
    difficulty: 'Beginner-Intermediate',
    collaborators: 'Arshya Maricar',
    images: [
      'Websites 9th/Screenshot 2025-08-05 131141.png',
      'Websites 9th/Screenshot 2025-08-05 131304.png'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'html-css-intro',
    title: 'Intro to Web Development: HTML & CSS Projects',
    date: 'January - May 2023',
    shortDesc: 'A collection of my first web development projects, built using only HTML for structure and CSS for styling.',
    longDesc: `
      <p>This project documents my initial steps into web development. I focused on building web pages using HTML to create the structure and CSS to add visual styles. My work includes two versions of a school project about Mark Zuckerberg: an early version using only HTML, and a later one where I added CSS to make it look better with buttons and colored text. I also made a project for the WHHS Programming club where I learned to make animated buttons. These projects were important for learning how to build and style web pages without using JavaScript.</p>
    `,
    skills: 'HTML, CSS, Front-End Development, UI/UX Design, Problem-Solving',
    role: 'Learner',
    difficulty: 'Beginner',
    collaborators: 'N/A',
    images: [
      'Websites 9th/Screenshot 2025-08-05 131141.png',
      'Websites 9th/Screenshot 2025-08-05 131304.png'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'code-org-apps',
    title: 'Web App Development with Code.org',
    date: 'January - May 2023',
    shortDesc: 'A series of introductory web applications built on Code.org\'s App Lab platform, focusing on user interface design and event-driven programming.',
    longDesc: `
      <p>This project documents my work in Code.org's App Lab environment during my Intro to Computer Programming course. The unit focused on building interactive web applications by utilizing a block-based coding interface. My projects included a collaborative app on world cuisines, a "photo liker" app where I had to replicate the code for a given example, and a museum ticket generator based on user input. These assignments provided hands-on experience with concepts such as button events, user input, and data handling, laying the groundwork for more complex front-end development.</p>
    `,
    skills: 'Code.org App Lab, JavaScript, UI/UX Design, Event Handling, Collaboration, Problem-Solving',
    role: 'Learner',
    difficulty: 'Beginner',
    collaborators: 'N/A',
    images: [
      'Websites 9th/Screenshot 2025-08-05 131141.png',
      'Websites 9th/Screenshot 2025-08-05 131304.png'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'photopea-art',
    title: 'Digital Art and Photo Editing with Photopea',
    date: 'January - May 2023',
    shortDesc: 'A series of digital art and photo manipulation projects created in Photopea, focusing on text effects, image compositing, and object removal.',
    longDesc: `
      <p>This portfolio entry documents a unit on digital design and photo editing using Photopea, an in-browser image editor. The projects served as an introduction to key photo manipulation techniques. The first project involved using special font effects to display a word. I then created a composite image by combining two unrelated objects a lion and a strawberry-into a single photo. The final assignments focused on advanced photo manipulation and object removal, where I successfully removed an umbrella from a beach scene, a potted plant from a desk, and a person from a photo of a pyramid, which required reconstructing the background.</p>
    `,
    skills: 'Photopea, Digital Art, Photo Manipulation, Image Editing, Problem-Solving',
    role: 'Learner',
    difficulty: 'Beginner',
    collaborators: 'N/A',
    images: [
      'Khan Academy/Images/Images/photopea.svg',
      'Khan Academy/Images/Images/deskafter.PNG',
      'Khan Academy/Images/Images/Hello World.PNG',
      'Khan Academy/Images/Images/LionStawberryPhotoPea.PNG',
      'Khan Academy/Images/Images/BeackAfter.PNG'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'khan-academy-js',
    title: 'Intro to JavaScript with Khan Academy',
    date: 'January - May 2023',
    shortDesc: 'A series of introductory programming projects created in the Khan Academy environment, focused on learning JavaScript fundamentals through drawing and animation.',
    longDesc: `
      <p>As a part of my Intro to Computer Programming course, I completed a unit on Khan Academy to learn the basics of JavaScript. This involved using a visual, drawing-based environment to create a variety of small projects. These included a simple animation of a waving snowman, an assignment to design my own food creation, a shooting star animation, and a character-based animation of a penguin. These projects were a valuable introduction to programming syntax, variables, and functions within a creative context.</p>
    `,
    skills: 'JavaScript, Drawing, Animation, Problem-Solving, Creativity',
    role: 'Learner',
    difficulty: 'Beginner',
    collaborators: 'N/A',
    images: [
      'Khan Academy/Images/Images/khanacademy.PNG',
      'Khan Academy/Images/Images/JSSHOOTINGSTAR.PNG',
      'Khan Academy/Images/Images/ll.PNG',
      'Khan Academy/Images/Images/khanacedemny.PNG',
      'Khan Academy/Images/Images/FoodKhan.PNG',
      'Khan Academy/Images/Images/Pengu.PNG'
    ],
    videos: [],
    links: {}
  },
  {
    id: 'scratch-games',
    title: 'Intro to Scratch Game & Animation Development',
    date: 'January - May 2023',
    shortDesc: 'A series of games and animations created in Scratch to learn fundamental programming concepts, including loops, events, and simple game logic.',
    longDesc: `
      <p>As part of an Intro to Computer Programming course, I completed a unit on Scratch, where I learned visual programming concepts through the creation of several games and animations. Projects included a public service announcement (PSA) on snow safety, a comedic animation titled "Halal Burger," and two arcade-style games: "Donkey Feed" and "Snake Chase v.2." These projects were instrumental in understanding core programming principles like event handling, conditionals, and game state management in a fun and accessible way.</p>
    `,
    skills: 'Scratch, Game Development, Animation, Storytelling, Problem-Solving',
    role: 'Learner',
    difficulty: 'Beginner',
    collaborators: 'N/A',
    images: [
      'Khan Academy/Images/Images/Scratch.png'
    ],
    videos: [],
    youtubeEmbeds: [],
    links: {}
  },
  {
    id: 'nerf-rover',
    title: 'Custom Nerf Arduino/VEX Rover',
    date: 'September 20-24, 2022',
    shortDesc: 'A VEX robotics spider kit was repurposed into a custom remote-controlled tank with a custom drivetrain, controlled by a VEX controller, and a triggered nerf gun mechanism, controlled by an IR remote.',
    longDesc: `
      <p>This project involved a significant re-engineering of a standard VEX robotics spider kit. Instead of building the default model, I designed and constructed a custom rover/tank chassis, which was driven using the original VEX controller. The most unique aspect of the project was the addition of a one-shot nerf gun. I integrated an Arduino and an IR remote to create a separate control system for the gun's trigger mechanism. This allowed for the independent control of the vehicle's movement and its payload. My testing process included a video showing the servo reacting to the IR remote, followed by a successful demonstration of the gun firing. This project was an excellent exercise in mechanical design, electrical wiring, and programming for multiple systems.</p>
    `,
    skills: 'Robotics, Arduino, Electronics, C++ (for Arduino), Mechanical Design, Problem-Solving',
    role: 'Sole Developer',
    difficulty: 'Intermediate',
    collaborators: 'N/A',
    images: [],
    videos: [],
    youtubeEmbeds: [],
    emojis: ['🤖', '🔫', '🎮'],
    links: {
      googleDrive: 'https://drive.google.com/drive/u/0/folders/1f4tex-TEHatauHJ8mKsNbU71GJODFIn'
    }
  },
  {
    id: 'beginner-python',
    title: 'Beginner Python',
    date: 'January - May 2022',
    shortDesc: 'This project documents my first foundational steps in Python programming, covering a series of collaborative notebooks that introduced me to key concepts like variables, loops, and conditional logic.',
    longDesc: `
      <p>This portfolio entry details my work in a foundational Python programming course with Dr. Hawzhin, focusing on several key collaborative notebooks.</p>
      <p>The Grade Compiler project taught me how to use loops and lists to handle and organize user-provided data, simulating a basic teacher's tool. The Guess My Number game was an exercise in building interactive applications, utilizing conditional statements and random number generation to create a fun, two-player game with clear game logic. The Clock Angler challenged my mathematical and logical reasoning by calculating the angle between a clock's hands at a user-defined or random time. The Cash Register project simulated a virtual market, using loops and conditional statements to create a running total and receipt. Finally, The MultiCalculator was a demonstration of code reusability and organization, combining several individual calculator functions into a single, user-friendly application. This entire course provided a solid base for future programming endeavors.</p>
    `,
    skills: 'Python, Variables, Data Types, Lists, User Input, Loops (while), Conditional Logic (if/elif/else), Random Number Generation, Problem-Solving, Mathematical Calculations, Collaboration',
    role: 'Learner',
    difficulty: 'Beginner',
    collaborators: 'Dr. Hawzhin',
    emojis: ['🐍', '📚', '💻'],
    images: [],
    videos: [],
    links: {}
  }
];