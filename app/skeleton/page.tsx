// page.tsx
"use client";
import { useState, useEffect } from 'react';
import PostSkeletons from './loading'; // Adjust the path if necessary

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching with a 3-second timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PostSkeletons />;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Actual Content</h1>
      <p>This is the actual content that is loaded after the skeletons.</p>
    </div>
  );
}
