// src/pages/FAQPage.jsx
import React, { useState } from 'react';

const FAQPage = () => {
  const [open, setOpen] = useState(null); // Untuk mengontrol pertanyaan yang terbuka

  const toggleAnswer = (index) => {
    setOpen(open === index ? null : index); // Toggle jawaban jika pertanyaan sudah terbuka
  };

  const faqs = [
    {
      question: "Apa itu kampanye penggalangan dana?",
      answer:
        "Kampanye penggalangan dana adalah upaya untuk mengumpulkan dana dari berbagai pihak untuk mendukung tujuan tertentu, seperti bantuan bencana atau mendanai proyek sosial.",
    },
    {
      question: "Bagaimana cara berdonasi?",
      answer:
        "Anda bisa berdonasi melalui situs kami dengan memilih jumlah yang ingin disumbangkan, kemudian mengikuti langkah-langkah pembayaran yang disediakan.",
    },
    {
      question: "Apakah saya bisa mendapatkan bukti sumbangan?",
      answer:
        "Ya, setelah Anda berdonasi, kami akan mengirimkan bukti sumbangan melalui email atau dapat diunduh melalui akun Anda di situs kami.",
    },
    {
      question: "Apakah donasi saya dapat dikembalikan?",
      answer:
        "Donasi bersifat final dan tidak dapat dikembalikan. Pastikan untuk mempertimbangkan keputusan Anda dengan matang sebelum berdonasi.",
    },
    {
      question: "Apakah saya bisa memilih tujuan kampanye?",
      answer:
        "Tentu! Setiap kampanye biasanya memiliki tujuan yang jelas. Anda dapat memilih untuk mendukung kampanye yang sesuai dengan minat Anda.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-8">FAQ - Pertanyaan yang Sering Diajukan</h1>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              <span className="text-xl">{open === index ? '-' : '+'}</span>
            </div>
            {open === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
