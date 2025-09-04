'use client';

import { useEffect, useState } from 'react';

function IonIcon({ name, ...props }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render ion-icon on client side to prevent hydration mismatch
  if (!isClient) {
    // Return a placeholder div with the same dimensions during SSR
    return <div className="ion-icon-placeholder" style={{ width: '24px', height: '24px' }} {...props}></div>;
  }

  return <ion-icon name={name} {...props}></ion-icon>;
}

export default IonIcon;
