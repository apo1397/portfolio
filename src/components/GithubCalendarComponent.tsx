import React, { useEffect, useRef } from 'react';

interface GithubCalendarProps {
  username: string;
  responsive?: boolean;
}

const GithubCalendarComponent: React.FC<GithubCalendarProps> = ({ username, responsive = true }) => {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js';
    script.async = true;
    script.onload = () => {
      if (calendarRef.current) {
        const options = responsive ? { responsive: true } : {};
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        GitHubCalendar(calendarRef.current, username, options);
        setTimeout(() => {
          if (calendarRef.current) {
            // More robust selector:
            const textElements = calendarRef.current.querySelectorAll(
              'text, span, caption' // Covers various element types
            );
            textElements.forEach((el) => {
              // Check if element has a textContent property before applying style.
              if (el instanceof HTMLElement && el.textContent) {
                el.style.fontFamily = "'Poppins', sans-serif";
              }
            });
          }
        }, 500);
      }
    };
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
      if (link.parentNode) link.parentNode.removeChild(link);
    };
  }, [username, responsive]);

  return <div ref={calendarRef} className="calendar" />;
};

export default GithubCalendarComponent;