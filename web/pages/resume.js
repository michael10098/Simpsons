import Link from 'next/link'
import { Menu } from "../components/Menu.js"

function ResumePage() {
 return (
  <div>
   <Menu/>
   <br/>
   <br/>
   <a href="/resumepdf">My Resume in PDF format</a>
   <h1>Michael G. Van Hulle</h1>
   <h2>Senior Software Engineer</h2>
   <i>Mike@TheComputer.com</i><br/>
   <a href="https://www.linkedin.com/in/michael-van-hulle-309546298">
     https://www.linkedin.com/in/michael-van-hulle-309546298</a><br/>
   (951) 285-9072<br/>
   <br/>
   Extensive experience in software development.<br/>
   Detail-oriented, motivated, multi-tasker with communication skills.<br/>
   Able to work independently with High problem-solving and troubleshooting skills.<br/>
   Collaborates with other engineers to build complex software systems emphasizing team building, and technical expertise.<br/>
   Always refining application development with a CI/CD workflow.<br/>
   <br/>
   <h2>Work Experience</h2>
   <b>Senior Software Enginner</b><br/>
   Sep 2013-Present<br/>
   <i>Leverage Information System / NWN Carousel | Riverside, ca</i><br/>
   I designed the front-end user Interface software, the Network Video Recorder, and the back end server for a video system.
   <ul>
     <li>Designed and supported a scalable Video Management System (VMS) for public safety organizations</li>
     <li>Interfaced with law enforcement agencies such as the Los Angeles County Sheriff Department, Inglewood, and Redlands Police Departments to ascertain feedback about the system and maintain constant improvements.</li>
     <li>Developed a desktop application UI for dispatchers (video viewing) and administrators (system configuration). Integrated Google Mapping APIs, Open Street Maps, and GIS functions to map cameras, enhancing situational awareness.</li>
     <li>Developed an image storage and retrieval system. Utilized a fast database design so that images can be quickly found and displayed to the users.  A large scale relational database with fast indexing was used to keep track of images.</li>
     <li>Wrote a Network Video Recorder (NVR) in C# as a Windows service.  This robust service is designed for uninterrupted 24/7 operation. This service managed petabytes of recordings from around a hundred cameras retaining video for over one year.</li>
     <li>I developed Network Video Recorder on a Linux platform in C++.  This code runs in a Docker container.  It is used to record video cameras and can be used on a rack mountable Linux system or a Raspberry PI device.</li>
     <li>Developed a library in C# that can be used to communicate with cameras using ONVIF (Open Network Video Interface Forum).  The ONVIF standard uses SOAP messaging protocol.  For secure communications to the cameras, I added encrypted security authentication to this protocol.</li>
     <li>I wrote a ASP.NET MVC CSHTML Razor type application to analyze network video streams. This web application is used to test various streaming formats and to report the CPU usage.</li>
     <li>Modified Ffmpeg source code to add accelerated RTSP video requests for fast NVR video transfer. Developed software to backfill missing NVR video.  Ffmpeg is used extensively in my software to encode and decode video.</li>
     <li>Enacted a method to watermark, catalog, store and retrieve video in long term storage. Watermarking ensured the video is not tampered with and can be used in a courtroom.</li>
     <li>Designed and implemented a centralized server that keeps track of all the devices in the VMS system. All logging, status, and error reporting are managed by this server.  A Postgres relational database was used to store logging information.</li>
     <li>Worked as part of a team to design a system written in Java and Javascript used as a web application development to retrieve video from this VMS system on an Android or iPhone.</li>
     <li>Designed an ASP.Net service application to interface between systems. Utilized WCF for VMS communication and provided restful web services for external web device integration.  This was used as an API for other parts of the system.</li>
     <li>Wrote an application that interfaces with Briefcam, an AI image recognition model that can find objects in a video scene.</li>
     <li>In many cases where I worked with TCP/IP networks, I used Wireshark and tcpdump to diagnose and debug network traffic.</li>
     <li>Helped to design a guided antenna system written in C++ to deliver a constant stream of video from an aircraft or vehicle at a long distance.</li>
     <li>Helped with a project that identifies faulty cameras. I engineered an AI/ML model in Python to identify items such as street and traffic lights to ensure proper camera operational status and ensure camera quality.</li>
     <li>Created an application leveraging Sqlite’s advanced indexing capabilities used for quick lookup of automobile license plates. My software used a method to identify similar license plate characters in case of AI misreading the plate number.</li>
     <li>Provided mentorship to numerous software engineers with projects that involved adding features to our system.  Collaborated with multiple teams to perform regular code inspection and ensure software meets industry standards.</li>
    </ul>
    <h2>Core Skills</h2>
    C#, .NET, ASP.NET, NET Core, LINQ, Microsoft .NET Framework, Entity Framework, Microsoft Azure, DASH and HLS Video formats, video streaming technologies, low-latency video, Java, maven, spring boot, REST, XML, SOAP, WebAPI, Python, SQLite, Git, SQL, PostgreSQL, Microsoft SQL Server, MYSQL, HTML, TheoPlayer, Docker, React.js, AWS, GitHub, Streaming Video Systems, ffmpeg, JavaScript, Wireshark, tcpdump, Agile product development, AI/ML
    <h2>Education</h2>
    <b>University of California, Riverside</b><br/>
    <b>Bachelor of Science</b><br/>
    Computer Science

  </div>
 )
}

export default ResumePage