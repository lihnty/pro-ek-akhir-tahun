// src/pages/CampaignPage.jsx
import React from 'react';
import CampaignChart from '../components/CampaignChart';

const CampaignPage = () => {
  // Data untuk chart (misalnya, jumlah donasi bulanan)
  const campaignData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Bulan
    values: [1200, 1500, 1800, 2000, 2500, 3000, 3500], // Jumlah donasi
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Halaman Kampanye</h1>
      <CampaignChart data={campaignData} />
    </div>
  );
};

export default CampaignPage;
