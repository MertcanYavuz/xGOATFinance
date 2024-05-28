import React from 'react';
import styles from '../styles/Roadmap.module.css';

const Roadmap = () => {
  return (
    <div className={styles.roadmapContainer}>
      <h1 className={styles.pageTitle}>Roadmap</h1>
      <p></p>
      <div className={styles.roadmapStep}>
        <div className={styles.roadmapContent}>
          <h2>1</h2>
          <p>Building Social Media Account</p>
          <p>New Website Launch</p>
          <p>Create Goat Coin</p>
          <p>Pre-Sale on own Website</p>
          <p>Pre-Sale on Pinksale</p>
          <p className={styles.roadmapDate}>May 2024</p>
        </div>
      </div>
      <div className={styles.roadmapStep}>
        <div className={styles.roadmapContent}>
          <h2>2</h2>
          <p>Listing on Coingecko and Coinmarketcap</p>
          <p>DEX Listing, CEX Listing</p>
          <p>Great Community Building</p>
          <p>Marketing and Partnership Announcements</p>
          <p className={styles.roadmapDate}>June 2024</p>
        </div>
      </div>
      <div className={styles.roadmapStep}>
        <div className={styles.roadmapContent}>
          <h2>3</h2>
          <p>Creation of AI-powered Algorithmic Trading bots</p>
          <p>Creation of Prospectors Staking program</p>
          <p>Trading Competitions</p>
          <p className={styles.roadmapDate}>October 2025</p>
        </div>
      </div>
      <div className={styles.roadmapStep}>
        <div className={styles.roadmapContent}>
          <h2>4</h2>
          <p>Creating The Great Prospector Portfolio</p>
          <p>Establishment of GOAT Foundation</p>
          <p>Establishing Representatives around the world</p>
          <p>Commercial Agreements</p>
          <p className={styles.roadmapDate}>October 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;