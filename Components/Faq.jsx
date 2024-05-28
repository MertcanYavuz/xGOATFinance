import React, { useState } from 'react';

// Haber verileri sabit bir dizi olarak tanımlanmıştır.
const newsData = [
  { id: 1, title: 'Haber Başlığı 1', description: 'Haber açıklaması 1 burada yer alacak.' },
  { id: 2, title: 'Haber Başlığı 2', description: 'Haber açıklaması 2 burada yer alacak.' },
  { id: 3, title: 'Haber Başlığı 3', description: 'Haber açıklaması 3 burada yer alacak.' }
];

// NewsList fonksiyon bileşeni, haberleri bir liste olarak görüntüler.
const NewsList = () => {
  const [news, setNews] = useState(newsData);

  return (
    <div style={styles.newsContainer}>
      {news.map(item => (
        <div key={item.id} style={styles.newsItem}>
          <h2 style={styles.newsTitle}>
            <a href="about:blank" target="_blank" rel="noopener noreferrer" style={styles.link}>
              {item.title}
            </a>
          </h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

// Stiller, JavaScript objesi olarak tanımlanmıştır.
const styles = {
  newsContainer: {
    margin: '20px',
    padding: '10px',
    backgroundColor: 'transparent', // Arka planı şeffaf yapar
    borderRadius: '8px',
    maxWidth: '600px', // Maksimum genişlik belirle
    margin: '0 auto' // Ortalamak için otomatik kenar boşluğu ekle
  },
  newsItem: {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Haber öğeleri için yarı şeffaf beyaz arka plan
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  newsTitle: {
    marginBottom: '5px',
    color: '#333',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  link: {
    color: 'inherit', // Link renklerini başlık ile aynı tutar.
    textDecoration: 'none', // Alt çizgiyi kaldırır.
  },
};

export default NewsList;
