// src/components/CampaignChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2'; // Ganti Line menjadi Bar
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CampaignChart = ({ data }) => {
  // Data chart (untuk demo, bisa diganti sesuai data asli)
  const chartData = {
    labels: data.labels, // Label untuk sumbu X
    datasets: [
      {
        label: 'Total Donasi', // Label untuk data
        data: data.values, // Data donasi
        backgroundColor: '#4B6CB7', // Warna latar belakang batang
        borderColor: '#4B6CB7', // Warna border batang
        borderWidth: 1, // Lebar border
      },
    ],
  };


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Bulan',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Jumlah Donasi',
        },
        beginAtZero: true, // Memastikan sumbu Y dimulai dari 0
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Donasi Kampanye</h2>
      <Bar data={chartData} options={options} /> {/* Ganti Line menjadi Bar */}
    </div>
  );
};

export default CampaignChart;
