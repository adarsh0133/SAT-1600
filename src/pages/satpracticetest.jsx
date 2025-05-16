import withAuth from '@/utils/withAuth';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SatPracticeTest = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleStartExam = () => {
    setLoading(true);
    // Remove all relevant localStorage items
    [
      "LunchBreakStartTime",
      "component",
      "component1startTime",
      "component3startTime",
      "component6startTime",
      "component8startTime",
      "section1",
      "section2",
      "section3",
      "section4"
    ].forEach(item => localStorage.removeItem(item));

    // Simulate loading, then navigate to /satexam
    setTimeout(() => {
      setLoading(false);
      router.push('/satexam');
    }, 1000);
  };

  return (
    <div className="w-full h-screen grid place-items-center bg-[url('/images/SAT1600/Benefits.webp')] bg-cover">
      <button
        onClick={handleStartExam}
        className="rounded-full px-6 py-2 text-white bg-[#008BDC]"
        disabled={loading}
      >
        {loading ? "Starting..." : "Start SAT Practice Test"}
      </button>
    </div>
  );
};

export default withAuth(SatPracticeTest);