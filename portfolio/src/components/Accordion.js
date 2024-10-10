import React, { useState, useRef, useEffect } from 'react';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // Ref to measure content height
  const [height, setHeight] = useState(0); // State for content height

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight); // Set the height to content height when open
    } else {
      setHeight(0); // Set height to 0 when closed
    }
  }, [isOpen]);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      <div
        className="accordion-content"
        style={{
          height: `${height}px`, // Transition height based on content size
          transition: 'height 0.3s ease', // Smooth transition for opening/closing
        }}
        ref={contentRef}
      >
        <div className="accordion-inner-content">{children}</div> {/* Inner content to measure height */}
      </div>
    </div>
  );
}

export default Accordion;
