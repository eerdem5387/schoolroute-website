import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export default function Home() {
  const [activeText, setActiveText] = useState<number>(1);
  const [activeReference, setActiveReference] = useState<number>(1);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const references = [
    {
      id: 1,
      name: "Levent Okulları",
      image: "/images/leventkolej.png",
      stats: ["15 Servis", "500 öğrencisiyle"],
      isPlaceholder: false
    },
    {
      id: 2,
      name: "Referans 1",
      image: "/images/leventkolej.png",
      stats: ["25 Servis", "750 öğrencisiyle"],
      isPlaceholder: true
    },
    {
      id: 3,
      name: "Referans 2",
      image: "/images/leventkolej.png",
      stats: ["30 Servis", "1000 öğrencisiyle"],
      isPlaceholder: true
    },
    {
      id: 4,
      name: "Referans 3",
      image: "/images/leventkolej.png",
      stats: ["20 Servis", "600 öğrencisiyle"],
      isPlaceholder: true
    },
    {
      id: 5,
      name: "Referans 4",
      image: "/images/leventkolej.png",
      stats: ["35 Servis", "900 öğrencisiyle"],
      isPlaceholder: true
    }
  ];

  const getImageSrc = (reference: typeof references[0]): string => {
    return reference.image || "/images/leventkolej.png";
  };

  const handleReferenceClick = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setActiveReference((prev) => (prev === references.length ? 1 : prev + 1));
    } else {
      setActiveReference((prev) => (prev === 1 ? references.length : prev - 1));
    }
  };

  const handleSwitch = (textNumber: number) => {
    setActiveText(textNumber);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Mesajınız başarıyla gönderildi!');
        setFormData({
          companyName: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        alert('Bir hata oluştu. Lütfen tekrar deneyiniz.');
      }
    } catch (error) {
      alert('Bir hata oluştu. Lütfen tekrar deneyiniz.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id === 'input1' ? 'companyName' : 
       id === 'input2' ? 'email' : 
       id === 'input3' ? 'phone' : 
       'message']: value
    }));
  };

  return (
    <div className="scroll-smooth">
      <Head>
        <title>School Route</title>
        <meta name="description" content="School bus tracking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-[64px] md:pt-28">
        <div className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center bg-[#F5F8FF] section-padding">
          <div className="container flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-2/5 flex flex-col space-y-6 md:space-y-8 px-4 md:px-8">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full flex"
              >
            <Image
              src="/images/school-route.svg"
              alt="School Route Logo"
              width={261}
              height={30}
                  className="h-8 w-auto"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="w-full flex flex-col space-y-2"
              >
                <p className="text-2xl md:text-4xl font-nunito font-semibold text-[#0B05BA]">
                Okul Servis Yönetiminde
              </p>
                <p className="heading-responsive font-nunito font-bold text-[#0B05BA]">
              Kontrol Sizde
            </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="w-full"
              >
                <p className="font-roboto text-base text-[#525D7B]">
              School Route, okul yönetimleri, servis şirketleri ve veliler için
              özel olarak geliştirilmiş IOS, Android ve web tabalı çalışan mobil
              uygulamadır. School Route, okul servis süreçlerinin daha güvenli,
              şeffaf ve verimli bir şekilde yönetilmesini sağlar. Günümüzde
              çocukların güvenli bir şekilde okula ulaşması ve eve dönüşleri,
              veliler ve okul yönetimleri için en önemli öncelikler arasındadır.
            </p>
            <p className="font-roboto text-base text-[#525D7B] mt-4">
              School Route, tüm veli ve okul yöneticilerin servis süreçlerini
              eksiksiz ve güvenli bir şekilde takip etmesine imkan tanır. Veri
              analizi temellerine dayanarak gerçekleştirilen raporlamalar
              sayesinde, servis süreçlerinin sorunsuz yönetimini sağlar.
            </p>
              </motion.div>
          </div>
            <div className="w-full md:w-3/5 mt-8 md:mt-0 px-4 md:px-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
          <Image
            src="/images/newslider.png"
            alt="School Route Slider"
            width={1188}
            height={571}
                  className="hidden md:block w-full h-auto"
          />
          <Image
            src="/images/mobil-slider.svg"
            alt="School Route Mobil Slider"
            width={280}
            height={270}
                  className="md:hidden w-full h-auto"
          />
              </motion.div>
            </div>
        </div>
      </div>
      <div
        id="kimler-icin"
          className="w-full min-h-screen bg-[#FFFEFD] section-padding scroll-mt-[64px] md:scroll-mt-28"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-nunito font-bold text-[#002B4B] mb-4">
              KİMLER İÇİN ?
              </h2>
              <p className="text-base font-roboto text-[#525D7B] max-w-3xl mx-auto">
                School Route, gelişmiş GPS, veri izleme ve analiz teknolojilerini kullanarak servis süreçlerini üç farklı kullanıcı grubuna uygun hale getirir: okul yönetimi, veliler ve şoförler.
            </p>
          </div>

            {/* Cards Container */}
            <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-20 mb-8">
              {/* Okullar Card */}
              <div className="relative w-full md:w-auto flex flex-col items-center">
                <motion.button
              onClick={() => handleSwitch(1)}
                  className={`w-full md:w-56 min-h-[14rem] md:h-56 rounded-lg flex flex-col items-center justify-center transition-all ${
                    activeText === 1 ? "border-2 border-[#0B05BA]" : "bg-[#EFEFF7]"
                  }`}
                  animate={{
                    scale: activeText === 1 ? 1.02 : 1,
                    transition: { duration: 0.4, ease: "easeInOut" }
                  }}
                >
                  <motion.div 
                    className="md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {activeText === 1 ? (
                      <motion.div 
                        className="p-4 text-left"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <ul className="space-y-3">
                          <li className="text-[#007700] text-sm">• Güvenliğin Artırılması</li>
                          <li className="text-[#007700] text-sm">• Operasyonel Verimlilik</li>
                          <li className="text-[#007700] text-sm">• Raporlama ve Veri Analizi</li>
                          <li className="text-[#007700] text-sm">• Ebeveyn Memnuniyeti</li>
                        </ul>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <img
                src="/images/okulicon.png"
                          alt="Okullar"
                          className="w-32 h-32 mb-4"
                        />
                        <p className="text-lg font-roboto text-[#002B4B]">Okullar</p>
                      </motion.div>
                    )}
                  </motion.div>
                  <motion.div 
                    className="hidden md:flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <img
                      src="/images/okulicon.png"
                      alt="Okullar"
                      className="w-32 h-32 mb-4"
                    />
                    <p className="text-lg font-roboto text-[#002B4B]">Okullar</p>
                  </motion.div>
                </motion.button>
                {activeText === 1 && (
                  <motion.div 
                    className="hidden md:block absolute left-1/2 w-0.5 h-8 bg-[#0B05BA] transform -translate-x-1/2"
                    style={{ top: 'calc(100% + 3px)' }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                )}
              </div>

              {/* Veliler Card */}
              <div className="relative w-full md:w-auto flex flex-col items-center">
                <motion.button
              onClick={() => handleSwitch(2)}
                  className={`w-full md:w-56 min-h-[14rem] md:h-56 rounded-lg flex flex-col items-center justify-center transition-all ${
                    activeText === 2 ? "border-2 border-[#0B05BA]" : "bg-[#EFEFF7]"
                  }`}
                  animate={{
                    scale: activeText === 2 ? 1.02 : 1,
                    transition: { duration: 0.4, ease: "easeInOut" }
                  }}
                >
                  <motion.div 
                    className="md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {activeText === 2 ? (
                      <motion.div 
                        className="p-4 text-left"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <ul className="space-y-3">
                          <li className="text-[#007700] text-sm">• Anlık Takip İmkanı</li>
                          <li className="text-[#007700] text-sm">• Güven ve Şeffaflık</li>
                          <li className="text-[#007700] text-sm">• Zaman Yönetimi</li>
                          <li className="text-[#007700] text-sm">• Kendi İhtiyaçlarına Göre Özelleştirme</li>
                        </ul>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <img
                src="/images/veliicon.png"
                          alt="Veliler"
                          className="w-32 h-32 mb-4"
                        />
                        <p className="text-lg font-roboto text-[#002B4B]">Veliler</p>
                      </motion.div>
                    )}
                  </motion.div>
                  <motion.div 
                    className="hidden md:flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <img
                      src="/images/veliicon.png"
                      alt="Veliler"
                      className="w-32 h-32 mb-4"
                    />
                    <p className="text-lg font-roboto text-[#002B4B]">Veliler</p>
                  </motion.div>
                </motion.button>
                {activeText === 2 && (
                  <motion.div 
                    className="hidden md:block absolute left-1/2 w-0.5 h-8 bg-[#0B05BA] transform -translate-x-1/2"
                    style={{ top: 'calc(100% + 3px)' }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                )}
              </div>

              {/* Servis Şirketleri Card */}
              <div className="relative w-full md:w-auto flex flex-col items-center">
                <motion.button
              onClick={() => handleSwitch(3)}
                  className={`w-full md:w-56 min-h-[14rem] md:h-56 rounded-lg flex flex-col items-center justify-center transition-all ${
                    activeText === 3 ? "border-2 border-[#0B05BA]" : "bg-[#EFEFF7]"
                  }`}
                  animate={{
                    scale: activeText === 3 ? 1.02 : 1,
                    transition: { duration: 0.4, ease: "easeInOut" }
                  }}
                >
                  <motion.div 
                    className="md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {activeText === 3 ? (
                      <motion.div 
                        className="p-4 text-left"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <ul className="space-y-3">
                          <li className="text-[#007700] text-sm">• Verimli Rota Planlaması</li>
                          <li className="text-[#007700] text-sm">• Performans Geri Bildirimi</li>
                          <li className="text-[#007700] text-sm">• Kolay Kullanımlı Arayüz</li>
                        </ul>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <img
                src="/images/soforicon.png"
                          alt="Servis Şirketleri"
                          className="w-32 h-32 mb-4"
                        />
                        <p className="text-lg font-roboto text-[#002B4B]">Servis Şirketleri</p>
                      </motion.div>
                    )}
                  </motion.div>
                  <motion.div 
                    className="hidden md:flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <img
                      src="/images/soforicon.png"
                      alt="Servis Şirketleri"
                      className="w-32 h-32 mb-4"
                    />
                    <p className="text-lg font-roboto text-[#002B4B]">Servis Şirketleri</p>
                  </motion.div>
                </motion.button>
                {activeText === 3 && (
                  <motion.div 
                    className="hidden md:block absolute left-1/2 w-0.5 h-8 bg-[#0B05BA] transform -translate-x-1/2"
                    style={{ top: 'calc(100% + 3px)' }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                )}
          </div>
                    </div>

            {/* Content Boxes - Only on Desktop */}
            <div className="hidden md:flex justify-center">
              {activeText === 1 && (
                <motion.div 
                  className="w-full md:w-3/4 p-6 border-2 border-[#0B05BA] rounded-lg bg-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <motion.ul 
                    className="space-y-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    <motion.li 
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <span className="text-[#007700] font-medium">Güvenliğin Artırılması:</span>
                      <span className="text-[#525D7B] pl-0">Öğrenci güvenliğini önceliklendirir ve olası riskleri minimize eder.</span>
                    </motion.li>
                    <motion.li 
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <span className="text-[#007700] font-medium">Operasyonel Verimlilik:</span>
                      <span className="text-[#525D7B] pl-0">Tüm servis operasyonlarını tek bir noktadan izleyerek, hızlı ve etkili kararlar alabilmeyi sağlar.</span>
                    </motion.li>
                    <motion.li 
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <span className="text-[#007700] font-medium">Raporlama ve Veri Analizi:</span>
                      <span className="text-[#525D7B] pl-0">Okul yönetimleri, öğrenci ve şoför verilerini günlük, haftalık veya aylık olarak analiz eder ve raporlar.</span>
                    </motion.li>
                    <motion.li 
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <span className="text-[#007700] font-medium">Ebeveyn Memnuniyeti:</span>
                      <span className="text-[#525D7B] pl-0">Ebeveynlerin endişelerini gidermede büyük rol oynayarak okulun güvenilirliğini ve veli memnuniyetini artırır.</span>
                    </motion.li>
                  </motion.ul>
                </motion.div>
              )}

            {activeText === 2 && (
                <motion.div 
                  className="w-full md:w-3/4 p-6 border-2 border-[#0B05BA] rounded-lg bg-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <motion.ul 
                    className="space-y-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    <motion.li 
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <span className="text-[#007700] font-medium">Anlık Takip İmkanı:</span>
                      <span className="text-[#525D7B] pl-0">Çocuklarının serviste olduğunu veya servisin eve yaklaştığını anlık olarak görüp süreci takip etme imkanı sağlar.</span>
                    </motion.li>
                    <motion.li 
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <span className="text-[#007700] font-medium">Güven ve Şeffaflık:</span>
                      <span className="text-[#525D7B] pl-0">Çocuklarının okula ve eve güvenle ulaşmasını sağladığından, velilere güven verir.</span>
                    </motion.li>
                    <motion.li 
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <span className="text-[#007700] font-medium">Zaman Yönetimi:</span>
                      <span className="text-[#525D7B] pl-0">Servis güzergahlarının tahmin edilmesi, velilerin çocuklarının ulaşımı ile ilgili daha iyi planlama yapmalarını sağlar.</span>
                    </motion.li>
                    <motion.li 
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <span className="text-[#007700] font-medium">Kendi İhtiyaçlarına Göre Özelleştirme:</span>
                      <span className="text-[#525D7B] pl-0">Bildirim ve bilgi erişim ayarlarını kendi tercihleri doğrultusunda yapılandırabilir.</span>
                    </motion.li>
                  </motion.ul>
                </motion.div>
              )}

            {activeText === 3 && (
                <motion.div 
                  className="w-full md:w-3/4 p-6 border-2 border-[#0B05BA] rounded-lg bg-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <motion.ul 
                    className="space-y-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    <motion.li 
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <span className="text-[#007700] font-medium">Verimli Rota Planlaması:</span>
                      <span className="text-[#525D7B] pl-0">Rota planlaması, yakıt tasarrufu sağlar ve iş yükünü hafifletir.</span>
                    </motion.li>
                    <motion.li 
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <span className="text-[#007700] font-medium">Performans Geri Bildirimi:</span>
                      <span className="text-[#525D7B] pl-0">Sürüş performansı ve uyum analizleri sayesinde, şoförler kendi sürüş alışkanlıklarını değerlendirebilir ve gerektiğinde iyileştirmeler yapabilir.</span>
                    </motion.li>
                    <motion.li 
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <span className="text-[#007700] font-medium">Kolay Kullanımlı Arayüz:</span>
                      <span className="text-[#525D7B] pl-0">Sürüş sırasında dikkat dağıtıcı faktörleri azaltan, sade ve güvenli bir arayüzle şoförlerin işini kolaylaştırır.</span>
                    </motion.li>
                  </motion.ul>
                </motion.div>
            )}
          </div>
        </div>
      </div>
      <div
        id="nasil-calisir"
          className="w-full md:h-screen flex flex-col justify-center items-center bg-[#F0EDFF] md:gap-5 gap-10 scroll-mt-[64px] md:scroll-mt-28"
      >
        <div className="w-11/12 flex flex-col gap-5 mt-10 md:mt-10">
          <div className="w-full text-left">
            <p className="text-[#002B4B] md:font-semibold md:text-5xl font-bold text-lg font-nunito">
              NASIL ÇALIŞIR ?
            </p>
          </div>
          <div className="md:w-3/5 w-full text-left">
            <p className="font-roboto text-base text-[#002B4B">
              School Route, gelişmiş GPS, veri izleme ve analiz teknolojilerini
              kullanır ve özelleştirilmiş arayüzleri ve kullanıcı dostu bir
              deneyim sunar.
            </p>
          </div>
        </div>
        <div className="w-full md:w-11/12 h-64 md:h-screen bg-white flex justify-center items-center md:rounded-xl md:mb-10 mb-5">
          <span className="font-bold text-xl md:text-6xl font-nunito text-[#0B05BA]">
            VİDEO ALANI
          </span>
        </div>
      </div>
      <div className="w-full md:p-10 flex flex-col justify-center items-center  bg-[#0B05BA] gap-10">
        <div className="w-full items-center flex flex-col gap-5 mt-10 md:mt-0 mb-10 md:mb-0">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              className="w-full items-center flex flex-col gap-5"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-11/12 md:w-full rounded-lg bg-[#FFFEFD] h-11 md:h-20 flex flex-row justify-between items-center"
              >
            <p className="font-nunito text-xs md:text-2xl text-[#002B4B] pl-5 font-bold">
              Gerçek Zamanlı Konum Takibi
            </p>
            <Image
              src="/images/location-icon.svg"
              alt="School Route Logo"
              width={44}
              height={44}
              className="hidden md:block h-10 w-10 items-start justify-start mr-3"
            />
            <Image
              src="/images/location-icon.svg"
              alt="School Route Logo"
              width={20}
              height={20}
              className="block md:hidden h-5 w-5 items-start justify-start mr-3"
            />
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-11/12 md:w-full rounded-lg bg-[#FFFEFD] h-11 md:h-20 flex flex-row justify-between items-center"
              >
            <p className="font-nunito text-xs md:text-2xl text-[#002B4B] pl-5 font-bold">
              Rota Optimizasyonu ve Verimlilik
            </p>
            <Image
              src="/images/rota-icon.svg"
              alt="School Route Logo"
              width={44}
              height={44}
              className="hidden md:block h-10 w-10 items-start justify-start mr-3"
            />
            <Image
              src="/images/rota-icon.svg"
              alt="School Route Logo"
              width={44}
              height={44}
              className="block md:hidden h-5 w-5 items-start justify-start mr-3"
            />
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-11/12 md:w-full rounded-lg bg-[#FFFEFD] h-11 md:h-20 flex flex-row justify-between items-center"
              >
            <p className="font-nunito text-xs md:text-2xl text-[#002B4B] pl-5 font-bold">
              Anlık Bildirimler ve Uyarılar
            </p>
            <Image
              src="/images/danger-icon.svg"
              alt="School Route Logo"
              width={44}
              height={44}
              className="hidden md:block h-10 w-10 items-start justify-start mr-3"
            />
            <Image
              src="/images/danger-icon.svg"
              alt="School Route Logo"
              width={44}
              height={44}
              className="block md:hidden h-5 w-5 items-start justify-start mr-3"
            />
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-11/12 md:w-full rounded-lg bg-[#FFFEFD] h-11 md:h-20 flex flex-row justify-between items-center"
              >
            <p className="font-nunito text-xs md:text-2xl text-[#002B4B] pl-5 font-bold">
              Öğrenci ve Servis Güvenliği Takibi
            </p>
            <Image
              src="/images/security-icon.svg"
              alt="School Route Logo"
              width={44}
              height={44}
              className="hidden md:block h-10 w-10 items-start justify-start mr-3"
            />
            <Image
              src="/images/security-icon.svg"
              alt="School Route Logo"
              width={44}
              height={44}
              className="block md:hidden h-5 w-5 items-start justify-start mr-3"
            />
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-11/12 md:w-full rounded-lg bg-[#FFFEFD] h-11 md:h-20 flex flex-row justify-between items-center"
              >
            <p className="font-nunito text-xs md:text-2xl text-[#002B4B] pl-5 font-bold">
              Veri Analizi ve Raporlama Özelliği
            </p>
            <Image
              src="/images/stats-icon.svg"
              alt="School Route Logo"
              width={44}
              height={44}
              className="hidden md:block h-10 w-10 items-start justify-start mr-3"
            />
            <Image
              src="/images/stats-icon.svg"
              alt="School Route Logo"
              width={44}
              height={44}
              className="block md:hidden h-5 w-5 items-start justify-start mr-3"
            />
              </motion.div>
            </motion.div>
        </div>
      </div>
      <div
        id="referanslar"
          className="w-full my-10 md:my-0 md:h-screen flex flex-col justify-center items-center bg-[#FFFEFD] gap-10 scroll-mt-[64px] md:scroll-mt-28"
      >
        <div className="w-full flex flex-col justify-center items-center gap-5">
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-5xl text-[#002B4B] font-bold font-nunito"
            >
            REFERANSLAR
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-11/12 md:w-1/3 font-roboto text-xs md:text-base font-semibold text-[#525D7B] text-center"
            >
            School Route sistemiyle servis süreçlerinden maksimum verimi almayı
            seçmiş bazı kurumlar:
            </motion.p>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
            {/* Previous Reference */}
            <motion.div 
              onClick={() => handleReferenceClick('prev')}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col w-full md:w-1/3 gap-5 justify-center items-center blur-[1px] cursor-pointer hover:opacity-70 transition-opacity"
            >
              <div className="h-32 w-32 md:h-60 md:w-60 bg-[#F0EDFF] rounded-full flex items-center justify-center">
                {references[(activeReference - 2 + references.length) % references.length].isPlaceholder ? (
                  <span className="text-[#0B05BA] font-nunito font-bold text-lg md:text-2xl">Yakında</span>
                ) : (
                  <Image
                    src={getImageSrc(references[(activeReference - 2 + references.length) % references.length])}
                    alt="Reference"
                    width={250}
                    height={250}
                    className="h-32 w-32 md:h-60 md:w-60 rounded-full object-cover"
                  />
                )}
              </div>
              <div className="text-center flex flex-col gap-3 justify-center items-center">
                <p className="text-[#007700] font-roboto text-sm md:text-xl font-semibold">
                  {references[(activeReference - 2 + references.length) % references.length].name}
                </p>
                <ul className="text-xs md:text-xl text-[#525D7B] font-roboto font-semibold">
                  {references[(activeReference - 2 + references.length) % references.length].stats.map((stat, index) => (
                    <li key={index}>{stat}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Current Reference */}
            <motion.div 
              layout
              key={activeReference}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col w-full md:w-1/3 gap-5 justify-center items-center order-first md:order-none"
            >
              {references[activeReference - 1].isPlaceholder ? (
                <div className="h-32 w-32 md:h-60 md:w-60 bg-[#F0EDFF] rounded-full flex items-center justify-center">
                  <span className="text-[#0B05BA] font-nunito font-bold text-lg md:text-2xl">Yakında</span>
                </div>
              ) : (
                <Image
                  src={getImageSrc(references[activeReference - 1])}
                  alt="Reference"
                  width={250}
                  height={250}
                  className="h-32 w-32 md:h-60 md:w-60 rounded-full object-cover"
                />
              )}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center flex flex-col gap-3 justify-center items-center"
              >
                <p className="text-[#007700] font-roboto text-sm md:text-xl font-semibold">
                  {references[activeReference - 1].name}
                </p>
                <ul className="text-xs md:text-xl text-[#525D7B] font-roboto font-semibold">
                  {references[activeReference - 1].stats.map((stat, index) => (
                    <li key={index}>{stat}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Next Reference */}
            <motion.div 
              onClick={() => handleReferenceClick('next')}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col w-full md:w-1/3 gap-5 justify-center items-center blur-[1px] cursor-pointer hover:opacity-70 transition-opacity"
            >
              <div className="h-32 w-32 md:h-60 md:w-60 bg-[#F0EDFF] rounded-full flex items-center justify-center">
                {references[activeReference % references.length].isPlaceholder ? (
                  <span className="text-[#0B05BA] font-nunito font-bold text-lg md:text-2xl">Yakında</span>
                ) : (
                  <Image
                    src={getImageSrc(references[activeReference % references.length])}
                    alt="Reference"
                    width={250}
                    height={250}
                    className="h-32 w-32 md:h-60 md:w-60 rounded-full object-cover"
                  />
                )}
              </div>
              <div className="text-center flex flex-col gap-3 justify-center items-center">
                <p className="text-[#007700] font-roboto text-sm md:text-xl font-semibold">
                  {references[activeReference % references.length].name}
                </p>
                <ul className="text-xs md:text-xl text-[#525D7B] font-roboto font-semibold">
                  {references[activeReference % references.length].stats.map((stat, index) => (
                    <li key={index}>{stat}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="w-full md:min-h-screen bg-[#F0EDFF] flex flex-col">
          {/* Top Section - Text and Download Buttons */}
          <div className="container mx-auto px-4 md:px-20 pt-6 md:pt-20">
            <div className="w-full md:max-w-lg">
              <h2 className="font-nunito text-2xl md:text-4xl text-[#002B4B] font-bold mb-2">
            UYGULAMAYI İNDİR
              </h2>
              <p className="text-[#525D7B] font-roboto font-normal text-sm md:text-base mb-3">
                School Route uygulaması hem IOS hem de Android cihazınızda kullanabilirsiniz.
                Hemen Deneyin.
              </p>
              <div className="flex flex-row gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.schoolbusmobile"
              className="cursor-pointer"
              target="_blank"
            >
              <Image
                src="/images/google-transparan.svg"
                    alt="Google Play"
                    width={120}
                    height={36}
                    className="w-auto h-8"
              />
            </a>
            <a
              href="https://apps.apple.com/tr/app/school-route/id6736696561?l=tr"
              className="cursor-pointer"
              target="_blank"
            >
              <Image
                src="/images/apple-transparan.svg"
                    alt="App Store"
                    width={120}
                    height={36}
                    className="w-auto h-8"
              />
            </a>
          </div>
        </div>
          </div>

          {/* Bottom Section - Phone Images */}
          <div className="w-full flex-grow flex items-end mt-10 md:mt-auto">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full"
            >
              <div className="w-full flex justify-center">
          <Image
            src="/images/dowload-gorsel.png"
                  alt="School Route App Screenshots"
            width={1000}
                  height={600}
                  className="hidden md:block w-[80%] h-auto"
          />
          <Image
            src="/images/mobil-dowload-alani.png"
                  alt="School Route App Screenshots"
            width={353}
            height={365}
                  className="block md:hidden w-full h-auto"
          />
              </div>
            </motion.div>
        </div>
      </div>
      <div
        id="iletisim"
          className="w-full flex flex-col bg-[#FFFEFD] justify-center items-center scroll-mt-[64px] md:scroll-mt-28"
      >
        <div className="flex p-10 md:p-20 flex-col justify-center items-center w-full md:w-full text-center gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-nunito font-bold text-lg md:text-5xl text-[#002B4B]"
            >
            İLETİŞİME GEÇİN
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-roboto font-semibold text-xs md:text-base text-[#525D7B]"
            >
            Sizin için en doğru bilgiyi sağlamak ve aklınızdaki tüm soruları
              yanıtlamak bizim için önemli. Hizmetlerimiz hakkında detaylı bilgi
            almak ve size özel çözümlerimizi öğrenmek için bizimle iletişime
            geçin ve birlikte harika bir başlangıç yapalım.
            </motion.div>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center">
            <motion.div 
              className="flex w-full md:w-1/2 mt-10 md:mt-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
            <Image
              src="/images/contact-img.png"
              alt="School Route Logo"
              width={976}
              height={873}
              className="w-full items-start justify-start"
            />
            </motion.div>
          <div className="flex w-full md:w-1/2">
            <div className="w-full flex items-center justify-center">
              <div className="w-4/5 flex flex-col justify-between items-center gap-10">
                  <motion.form 
                    className="w-full flex flex-col gap-16"
                    onSubmit={handleFormSubmit}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.2
                        }
                      }
                    }}
                  >
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      transition={{ duration: 0.5 }}
                      className="group relative"
                    >
                      <input
                        id="input1"
                        type="text"
                        placeholder=" "
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="peer mt-1 block w-full px-4 py-3 bg-transparent border-b-2 border-[#525D7B] focus:border-[#0B05BA] outline-none transition-all placeholder-transparent"
                        required
                      />
                        <label
                        htmlFor="input1"
                        className="absolute left-4 -top-2 text-sm text-[#525D7B] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#0B05BA]"
                        >
                        Kurum Adı
                        </label>
                    </motion.div>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.5 }}
                        className="group relative"
                      >
                        <input
                          id="input2"
                          type="email"
                          placeholder=" "
                          value={formData.email}
                          onChange={handleInputChange}
                          className="peer mt-1 block w-full px-4 py-3 bg-transparent border-b-2 border-[#525D7B] focus:border-[#0B05BA] outline-none transition-all placeholder-transparent"
                          required
                        />
                        <label
                          htmlFor="input2"
                          className="absolute left-4 -top-2 text-sm text-[#525D7B] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#0B05BA]"
                        >
                          E-Mail
                        </label>
                      </motion.div>
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.5 }}
                        className="group relative"
                      >
                        <input
                          id="input3"
                          type="tel"
                          placeholder=" "
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="peer mt-1 block w-full px-4 py-3 bg-transparent border-b-2 border-[#525D7B] focus:border-[#0B05BA] outline-none transition-all placeholder-transparent"
                          required
                        />
                      <label
                          htmlFor="input3"
                          className="absolute left-4 -top-2 text-sm text-[#525D7B] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#0B05BA]"
                      >
                          Telefon
                      </label>
                      </motion.div>
                    </div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      transition={{ duration: 0.5 }}
                      className="group relative"
                    >
                      <input
                        id="input4"
                        type="text"
                        placeholder=" "
                        value={formData.message}
                        onChange={handleInputChange}
                        className="peer mt-1 block w-full px-4 py-3 bg-transparent border-b-2 border-[#525D7B] focus:border-[#0B05BA] outline-none transition-all placeholder-transparent"
                        required
                      />
                      <label
                        htmlFor="input4"
                        className="absolute left-4 -top-2 text-sm text-[#525D7B] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#0B05BA]"
                      >
                        Mesajınız
                      </label>
                    </motion.div>
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-1/2 px-4 py-4 bg-[#0B05BA] text-[#FFFEFD] font-semibold rounded-md shadow-md hover:bg-[#0B05BA]/90 focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Gönderiliyor...' : 'İletişime Geç'}
                    </motion.button>
                  </motion.form>
                </div>
                  </div>
                  </div>
                </div>
              </div>
      </main>
      <Footer />
    </div>
  );
}
