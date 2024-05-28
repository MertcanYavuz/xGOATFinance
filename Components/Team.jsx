import React, { useState, useEffect } from 'react';

// Stil tanımlamaları
const styles = {
  widgetContainer: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    margin: '20px',
    textAlign: 'center'
  },
  indexTitle: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '10px'
  },
  currentValue: {
    color: '#555',
    fontSize: '18px',
    margin: '5px 0'
  },
  change: {
    color: '#555',
    fontSize: '18px',
    margin: '5px 0'
  }
};

function BIST100Widget() {
  const [indexData, setIndexData] = useState({ index: 'XU100', value: null, change: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/xu100');
        const data = await response.json();
        setIndexData({
          index: 'XU100',
          value: data.value,
          change: data.change
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.widgetContainer}>
      <h1 style={styles.indexTitle}>{indexData.index} Index</h1>
      <p style={styles.currentValue}>Current Value: {indexData.value}</p>
      <p style={styles.change}>Change: {indexData.change}</p>
    </div>
  );
}

export default BIST100Widget;
