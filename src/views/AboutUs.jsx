import React from "react";
import DonationCard from '../components/DonationCard';
const AboutUs = () => {
  return (
    <div>
    <section className="mx-auto max-w-7xl mb-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        <div className="flex flex-col justify-between gap-6">
            <p><b></b></p>
          <p className="font-medium text-gray-900">
            Join us in making a difference and creating a better world.
          </p>
          <p className="text-gray-400">
           
          Kami adalah platform penggalangan dana terpercaya yang membantu banyak
          individu dan organisasi mencapai tujuan mereka. Dengan semangat gotong
          royong, kami berkomitmen memberikan solusi terbaik untuk kebutuhan
          pendanaan Anda.
          </p>
        </div>
        <div>
        <img
        src="/hero.png"
        alt="About Us"
        className="w-full h-auto object-cover rounded-md shadow-md"
      />
        </div>
      </section>
      
      <br/>
      
      <h2 className="text-3xl text-center font-medium capitalize mb-3">
          Our Commitment <span className="text-blue-500">to Change</span>
        </h2>
      <div className="flex justify-center space-x-4 p-6">
      <div className="flex justify-center space-x-4 p-6">
      <DonationCard
        name="Anak sekolah biyaya siswa"
        imageUrl="https://i.pinimg.com/474x/7d/3b/c9/7d3bc93bab0865a0e27dab20b287157c.jpg"
      />
      <DonationCard
        name="Vaksin Gratis"
        imageUrl="https://i.pinimg.com/474x/09/ce/b4/09ceb4a2e67287e2f575a41ed46cfacb.jpg"
      />
      <DonationCard
        name="Siswa mendapat kan penghargaan"
        imageUrl="https://i.pinimg.com/474x/5e/85/4b/5e854bc685a5eaf0cd57a21d743b80b0.jpg"
      />
      <DonationCard
        name="Prestasi bermain futsal"
        imageUrl="https://i.pinimg.com/474x/49/2f/40/492f407c77854b983fe75ac4efe8f841.jpg"
      />
      <DonationCard
        name="Membantu anak para ibu-ibu"
        imageUrl="https://i.pinimg.com/736x/76/46/c0/7646c0e8a2a36bc7d9972a3efc134d73.jpg"
      />
      <DonationCard
        name="membantu anak kurang mampu"
        imageUrl="https://i.pinimg.com/474x/c5/6e/81/c56e812270b9ba9cb2755d7cc4ebabe4.jpg"
      />
    </div>
    </div>
      </div>
  );
};

export default AboutUs;
