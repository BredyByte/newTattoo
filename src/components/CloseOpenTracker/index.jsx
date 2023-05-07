import React from 'react';

export const CloseOpenTracker = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    const now = new Date().toLocaleString('en-US', {
      timeZone: 'Europe/Madrid',
    });

    const currentTime = new Date(now);

    const startTime = new Date(currentTime);
    startTime.setHours(10, 0, 0, 0);

    const endTime = new Date(currentTime);
    endTime.setHours(20, 30, 0, 0);

    const dayOfWeek = currentTime.getDay();
    console.log(dayOfWeek);

    const isBetween =
      currentTime.getTime() >= startTime.getTime() &&
      currentTime.getTime() <= endTime.getTime() &&
      dayOfWeek !== 0 &&
      dayOfWeek !== 6;

    setIsOpen(isBetween);
  }, []);
  return isOpen ? (
    <p style={{ color: 'green', display: 'inline' }}>Open</p>
  ) : (
    <p style={{ color: 'red', display: 'inline' }}>Closed</p>
  );
};
