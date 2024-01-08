import React from 'react';
import Gallery from './Gallery.js';
import Profile  from './Profile.js';

export default function Profiler() {
  const a = 11 + 3; 

  return (
    <>
    <Profile />
    <Gallery/>
    {a}
    
    <h3>Export successful from index </h3></>
  );
}
