import React from 'react';
import Accordion from '../components/Accordion';

function Resume() {
  return (
    <div className="resume-container">
      <h1>My Resume</h1>

      <Accordion title="Professional Summary">
        <p>
          Software Engineering Student with 4 years of diverse experience, including a strong foundation in C++, Java, SQL, HTML, Python, and Agile development methodologies. Demonstrates proficiency in both individual and collaborative development environments, leveraging skills in C# and JavaScript to drive forward innovative solutions. Adept at utilizing GitHub for version control, showcasing a detail-oriented approach to software development and a commitment to delivering high-quality, efficient software solutions.
        </p>
      </Accordion>

      <Accordion title="Education">
        <p>
          <strong>Bachelor of Engineering: Software Engineering</strong><br />
          Concordia University, Montreal, QC (May 2020 - May 2025)
        </p>
        <p>
          <strong>DEC/DCS: Pure And Applied Science</strong><br />
          John Abbott College, Sainte-Anne-de-Bellevue, QC (Sep 2018 - May 2020)
        </p>
      </Accordion>

      <Accordion title="Employment History">
        <p>
          <strong>Delivery Driver</strong>, FedEx, Mirabel, QC (Feb 2023 - Present)<br />
          Assisted in sorting packages into vans at the warehouse and delivered packages according to the provided route.
        </p>
        <p>
          <strong>General Laborer</strong>, INDUSTRIES OKAPLY LTÉE, Oka, QC (Apr 2022 - Aug 2022)<br />
          Prepared and packaged different cuts of plywood and gyprock for shipment.
        </p>
        <p>
          <strong>Cultivation Technician</strong>, Lyonleaf Cannabis Inc., Montreal, QC (Oct 2020 - May 2022)<br />
          Managed the maintenance and care of cannabis plants, including nutrient mixing, trimming, and harvesting.
        </p>
      </Accordion>

      <Accordion title="Languages">
        <p>English (Spoken, Written), French (Spoken, Written)</p>
      </Accordion>

      <Accordion title="Technical Proficiencies">
        <p>
          SQL, Agile development methodologies, HTML, CSS, JavaScript, Java, C#, C++, Python, GitHub, Neo4J, Unity Game Development
        </p>
      </Accordion>
    </div>
  );
}

export default Resume;
