import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
  id?: string;
}

/** Editorial section: consistent left/right padding aligned to Frame's
 *  interior vertical rule, with an optional hairline top border. */
const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  bordered = true,
  id,
}) => (
  <section
    id={id}
    className={`relative ${bordered ? 'border-t border-border' : ''} pl-6 pr-6 md:pl-[6.5rem] md:pr-10 ${className}`}
  >
    {children}
  </section>
);

export default Section;
