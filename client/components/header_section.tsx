import React from 'react';

export default function HeaderSection(props: HeaderSectionProps) {
  return (
    <div className={(props.selected) ? 'header-section selected' : 'header-section'}>
      { props.name }
    </div>
  );
}

class HeaderSectionProps {
  name: string;
  selected?: boolean;

  constructor(headerSectionProps: HeaderSectionProps) {
    this.name = headerSectionProps.name;
    this.selected = headerSectionProps.selected;
  }
}
