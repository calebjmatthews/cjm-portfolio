import React, { useState, useEffect } from 'react';
import HeaderSection from './header_section';

const headerSectionNames = ['Home', 'Snippets', 'Projects'];

export default function Header() {
  const [currentSection, setCurrentSection] = useState('');
  
  useEffect(() => {
    let urlSuffix = document.URL.split('/')[-1] || '';
    setCurrentSection(urlSuffix);
  }, [document.URL])

  return (
    <div className="header">
      {headerSectionNames.map((headerSectionName) => {
        let selected = false;
        if (headerSectionName.toLowerCase() == currentSection.toLowerCase()) {
          selected = true;
        }
        else if (headerSectionName == 'Home' && currentSection.length == 0) {
          selected = true;
        }
        return (
          <HeaderSection key={headerSectionName} name={headerSectionName}
            selected={selected} />
        );
      })}
    </div>
  );
}
