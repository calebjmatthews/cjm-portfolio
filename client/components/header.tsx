import React, { useState } from 'react';
import HeaderSection from './header_section';

const headerSectionNames = ['Home', 'Snippets', 'Projects'];

export default function Header() {
  console.log('document.URL');
  console.log(document.URL);
  const [currentSection, setCurrentSection] = useState(null);
  return (
    <div className="header">
      {headerSectionNames.map((headerSectionName) => {
        return (
          <HeaderSection key={headerSectionName} name={headerSectionName} />
        );
      })}
    </div>
  );
}
