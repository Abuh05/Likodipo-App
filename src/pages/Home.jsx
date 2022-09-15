import React from 'react'
import { useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="home">
        <button onClick={() => setIsVisible((prev) => !prev)}>
            {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <h1>Hidden Text</h1>}
    </div>
  )
}

export default Home