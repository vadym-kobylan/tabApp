import React from 'react';
import styles from '../styles.module.scss';

const DummyChart = () => {
  const data = [
    { label: 'D', value: 5 },
    { label: 'U', value: 8 },
    { label: 'M', value: 3 },
    { label: 'M', value: 12 },
    { label: 'Y', value: 7 },
  ];

  const renderBars = () => {
    const maxValue = Math.max(...data.map(item => item.value)); // Corrected the closing parenthesis

    return data.map((item, index) => {
      const barHeight = (item.value / maxValue) * 100 + '%';
      return (
        <div key={index} className={styles.bar}>
          <div className={styles.label}>{item.label}</div>
          <div className={styles.barInner} style={{ height: barHeight }}>
            {item.value}
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.chart}>
      {renderBars()}
    </div>
  );
};

export default DummyChart;
