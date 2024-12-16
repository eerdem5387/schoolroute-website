import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedComponent() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  // Tab içerikleri
  const tabContent = {
    1: "Güvenliğin Artırılması:Öğrenci güvenliğini önceliklendirir ve olası riskleri minimize eder.",
    2: "Veliler İçin İçerik",
    3: "Şoförler İçin İçerik",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // İlk görünmeden önce
      animate={{ opacity: 1, y: 0 }} // Ekrana kayarak görünür
      transition={{ duration: 1 }} // Animasyon süresi
      className="flex flex-col items-center justify-center min-h-screen bg-[#F5F8FF]"
    >
      {/* Başlık */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }} // Küçük başlar
        animate={{ opacity: 1, scale: 1 }} // Normal boyuta gelir
        transition={{ duration: 0.8 }}
        className="text-2xl font-bold text-blue-600 mb-6"
      >
        Animasyonlu Tab Sistemi
      </motion.h1>

      {/* Tablar */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, x: -50 }} // Soldan gelir
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {Object.keys(tabContent).map((key) => (
          <motion.button
            key={key}
            onClick={() => handleTabClick(Number(key))}
            className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
              activeTab === Number(key)
                ? "border-blue-500 bg-blue-100 shadow-lg scale-105"
                : "border-gray-300 hover:shadow-md hover:scale-105"
            }`}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} // Hover animasyonu
            whileTap={{ scale: 0.95 }} // Tıklama animasyonu
          >
            {key === "1" ? "Okullar" : key === "2" ? "Veliler" : "Şoförler"}
          </motion.button>
        ))}
      </motion.div>

      {/* İçerik Alanı */}
      <motion.div
        className="mt-8 w-[300px] h-[150px] flex items-center justify-center border rounded-lg bg-white shadow-lg relative"
        initial={{ opacity: 0, scale: 0.9 }} // Küçük ve şeffaf başlar
        animate={{ opacity: 1, scale: 1 }} // Normal boyuta gelir
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          key={activeTab} // Her tab değişiminde animasyon tetiklenir
          initial={{ opacity: 0, y: 50 }} // Aşağıdan gelir
          animate={{ opacity: 1, y: 0 }} // Ortaya gelir
          exit={{ opacity: 0, y: -50 }} // Yukarı kaybolur
          transition={{ duration: 0.5 }}
          className="absolute text-center text-xl text-gray-700"
        >
          {tabContent[activeTab]}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
