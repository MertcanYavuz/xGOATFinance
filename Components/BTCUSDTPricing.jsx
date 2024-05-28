import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BTCUSDTPricing = () => {
    const [price, setPrice] = useState('Yükleniyor...');
    const [priceHistory, setPriceHistory] = useState([]);

    useEffect(() => {
        const socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

        socket.onopen = () => {
            console.log('WebSocket Bağlantısı Kuruldu.');
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const livePrice = parseFloat(data.p).toFixed(2);
            setPrice(`$${livePrice}`);
            setPriceHistory(prevState => [...prevState, livePrice].slice(-30));
        };

        socket.onclose = () => {
            console.log('WebSocket Bağlantısı Kesildi.');
        };

        return () => {
            socket.close();
        };
    }, []);

    const data = {
        labels: priceHistory.map((_, index) => index.toString()),
        datasets: [
            {
                label: 'BTC/USDT',
                data: priceHistory,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: false
            }
        },
        elements: {
            line: {
                tension: 0.1
            }
        }
    };

    const widgetStyle = {
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '300px',
        margin: '10px'
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center'
    };

    return (
        <div style={containerStyle}>
            <div style={widgetStyle}>
                <h1 style={{ color: '#333', fontSize: '24px', margin: '0' }}>BTC/USDT</h1>
                <p style={{ color: '#666', fontSize: '18px' }}>{price}</p>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default BTCUSDTPricing;
