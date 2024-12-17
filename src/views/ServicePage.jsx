import React from 'react';

const ServicePage = () => {
  const services = [
    {
      title: "Layanan Penggalangan Dana",
      description:
        "Kami menyediakan platform untuk penggalangan dana untuk berbagai tujuan sosial, seperti bantuan bencana, pendidikan, dan lainnya.",
      imageUrl: "/donasi1.jpg",
    },
    {
      title: "Kampanye Sosial",
      description:
        "Bergabunglah dengan kampanye sosial kami untuk mendukung berbagai inisiatif sosial yang dapat mengubah kehidupan banyak orang.",
      imageUrl: "https://i.pinimg.com/736x/96/bd/10/96bd10a3cbb77d1915fa7e0ec592c717.jpg" ,
    },
    {
      title: "Kemudahan Pembayaran",
      description:
        "Kami menawarkan berbagai metode pembayaran yang aman dan mudah digunakan untuk mendukung kemudahan donasi online.",
      imageUrl: "https://i.pinimg.com/474x/e3/39/6d/e3396d145d8d19dad5ac4d0dbae2e7f5.jpg", 
    },
    {
      title: "Laporan Transparan",
      description:
        "Kami memberikan laporan yang transparan mengenai penggunaan dana yang telah dikumpulkan untuk memastikan kepercayaan para donatur.",
      imageUrl: "https://i.pinimg.com/474x/6f/76/16/6f7616284cccfb151e460b9cb14d12f0.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
    <h2 className="text-3xl text-center font-medium capitalize mb-3">
          Layanan <span className="text-blue-500">Kami</span>
        </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center h-72 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ backgroundImage: `url(${service.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div> {/* Overlay gelap untuk kontras */}
            <div className="relative z-10 p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">{service.title}</h2>
              <p className="text-white">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
