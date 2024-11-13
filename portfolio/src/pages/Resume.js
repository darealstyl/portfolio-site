import React from 'react';
import Accordion from '../components/Accordion';

function Resume() {
  return (
    <div className="resume-container">
      <h1>My Resume</h1>

      <div className='list-item'>
        <h3>Summary</h3>
        <p> </p>
        <p>
          Software Engineering Student with 4 years of diverse experience,
          including a strong foundation in C++, Java, SQL, HTML, Python, and Agile development methodologies.
          Demonstrates proficiency in both individual and collaborative development environments, leveraging skills in C# and JavaScript to drive forward innovative solutions.
          Adept at utilizing GitHub for version control, showcasing a detail-oriented approach to software development and a commitment to delivering high-quality, efficient software solutions.
        </p>
      </div>

      <Accordion title="Education">
        <div className="education-section">
          <div className='list-item'>
            <h3>Bachelor of Engineering: Software Engineering</h3>
            <p>Concordia University, Montreal, QC (May 2020 - May 2025)</p>
          </div>
          <div className='list-item'>
            <h3>DEC/DCS: Pure And Applied Science</h3>
            <p>John Abbott College, Sainte-Anne-de-Bellevue, QC (Sep 2018 - May 2020)</p>
          </div>
        </div>
      </Accordion>

      <Accordion title="Employment History">
        <div className="employment-section">
          <div className='list-item'>
            <h3>Delivery Driver</h3>
            <p>FedEx, Mirabel, QC (Feb 2023 - Present)</p>
            <ul>
              <li>Assisted in sorting packages into vans at the warehouse.</li>
              <li>Delivered packages according to the provided route.</li>
            </ul>
          </div>
          <div className='list-item'>
            <h3>General Laborer</h3>
            <p>INDUSTRIES OKAPLY LTÉE, Oka, QC (Apr 2022 - Aug 2022)</p>
            <ul>
              <li>Prepared and packaged different cuts of plywood and gyprock for shipment.</li>
            </ul>
          </div>
          <div className='list-item'>
            <h3>Cultivation Technician</h3>
            <p>Lyonleaf Cannabis Inc., Montreal, QC (Oct 2020 - May 2022)</p>
            <ul>
              <li>Managed maintenance and care of cannabis plants.</li>
              <li>Handled nutrient mixing, trimming, and harvesting.</li>
            </ul>
          </div>
        </div>
      </Accordion>

      <Accordion title="Languages">
        <div className='list-item'>
          <ul>
            <li>English (Spoken, Written)</li>
            <li>French (Spoken, Written)</li>
          </ul>
        </div>
      </Accordion>

      <Accordion title="Technical Proficiencies">
        <div className='list-item'>
          <ul>
            <li>SQL</li>
            <li>Agile development methodologies</li>
            <li>HTML, CSS, JavaScript</li>
            <li>Java, C#, C++</li>
            <li>Python</li>
            <li>GitHub</li>
            <li>Neo4J</li>
            <li>Unity Game Development</li>
          </ul>
        </div>
      </Accordion>
    </div>
  );
}

export default Resume;
