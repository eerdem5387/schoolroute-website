import Head from "next/head";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [activeText, setActiveText] = useState<number>(1);
  const [activeReference, setActiveReference] = useState<number>(1);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const references = [
    {
      id: 1,
      name: "Levent Okulları",
      image: "/images/leventkolej.png",
      stats: ["15 Servis", "500 öğrencisiyle"],
      isPlaceholder: false,
    },
  ];

  const getImageSrc = (reference: (typeof references)[0]): string => {
    return reference.image || "/images/leventkolej.png";
  };

  const handleReferenceClick = (direction: "next" | "prev") => {
    if (direction === "next") {
      setActiveReference((prev) => (prev === references.length ? 1 : prev + 1));
    } else {
      setActiveReference((prev) => (prev === 1 ? references.length : prev - 1));
    }
  };

  const handleSwitch = (textNumber: number) => {
    setActiveText(textNumber);
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      errors.fullName = "Ad Soyad gereklidir";
    }
    
    if (!formData.companyName.trim()) {
      errors.companyName = "Kurum Adı gereklidir";
    }
    
    if (!formData.email.trim()) {
      errors.email = "E-Mail gereklidir";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Geçerli bir e-mail adresi giriniz";
    }
    
    if (!formData.phone.trim()) {
      errors.phone = "Telefon gereklidir";
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      errors.phone = "Geçerli bir telefon numarası giriniz";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Mesaj gereklidir";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Mesaj en az 10 karakter olmalıdır";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          message: "",
        });
        setFormErrors({});
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id === "input0"
        ? "fullName"
        : id === "input1"
        ? "companyName"
        : id === "input2"
        ? "email"
        : id === "input3"
        ? "phone"
        : "message"]: value,
    }));
  };

  return (
    <div className="scroll-smooth" lang="tr">
      <Head>
        <title>School Route - Okul Servis Yönetiminde Kontrol Sizde</title>
        <meta 
          name="description" 
          content="School Route, okul yönetimleri, servis şirketleri ve veliler için özel olarak geliştirilmiş iOS, Android ve web tabanlı mobil uygulamadır. Okul servis süreçlerinin daha güvenli, şeffaf ve verimli yönetimi." 
        />
        <meta name="keywords" content="okul servisi, servis takibi, okul yönetimi, veli uygulaması, servis güvenliği, GPS takip" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="School Route" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Turkish" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://schoolroute.com.tr/" />
        <meta property="og:title" content="School Route - Okul Servis Yönetiminde Kontrol Sizde" />
        <meta property="og:description" content="Okul servis süreçlerinin daha güvenli, şeffaf ve verimli yönetimi için School Route uygulamasını kullanın." />
        <meta property="og:image" content="/images/og-image.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://schoolroute.com.tr/" />
        <meta property="twitter:title" content="School Route - Okul Servis Yönetiminde Kontrol Sizde" />
        <meta property="twitter:description" content="Okul servis süreçlerinin daha güvenli, şeffaf ve verimli yönetimi için School Route uygulamasını kullanın." />
        <meta property="twitter:image" content="/images/og-image.png" />
        
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      <main className="pt-[56px] md:pt-28" role="main">
        <div className="w-full min-h-[calc(100vh-56px)] md:min-h-screen flex flex-col md:flex-row justify-center items-center bg-[#F5F8FF] py-8 md:py-12 lg:py-16">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
            <div className="w-full md:w-2/5 flex flex-col space-y-4 md:space-y-8 px-4 md:px-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full flex"
              >
                <Image
                  src="/images/school-route.svg"
                  alt="School Route - Okul Servis Yönetim Sistemi"
                  width={261}
                  height={30}
                  className="h-8 w-auto"
                  priority
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="w-full flex flex-col space-y-2"
              >
                <p className="text-xl sm:text-2xl md:text-4xl font-nunito font-semibold text-[#0B05BA] leading-tight">
                  Okul Servis Yönetiminde
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-nunito font-bold text-[#0B05BA] leading-tight">
                  Kontrol Sizde
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="w-full"
              >
                <p className="font-roboto text-sm sm:text-base text-[#525D7B] leading-relaxed">
                  School Route, okul yönetimleri, servis şirketleri ve veliler
                  için özel olarak geliştirilmiş IOS, Android ve web tabalı
                  çalışan mobil uygulamadır. School Route, okul servis
                  süreçlerinin daha güvenli, şeffaf ve verimli bir şekilde
                  yönetilmesini sağlar. Günümüzde çocukların güvenli bir şekilde
                  okula ulaşması ve eve dönüşleri, veliler ve okul yönetimleri
                  için en önemli öncelikler arasındadır.
                </p>
                <p className="font-roboto text-sm sm:text-base text-[#525D7B] mt-3 md:mt-4 leading-relaxed">
                  School Route, tüm veli ve okul yöneticilerin servis
                  süreçlerini eksiksiz ve güvenli bir şekilde takip etmesine
                  imkan tanır. Veri analizi temellerine dayanarak
                  gerçekleştirilen raporlamalar sayesinde, servis süreçlerinin
                  sorunsuz yönetimini sağlar.
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
                  alt="School Route uygulaması ekran görüntüleri"
                  width={1188}
                  height={571}
                  className="hidden md:block w-full h-auto"
                  priority
                />
                <Image
                  src="/images/mobil-slider.svg"
                  alt="School Route mobil uygulama ekran görüntüleri"
                  width={280}
                  height={270}
                  className="md:hidden w-full h-auto"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div
          id="kimler-icin"
          className="w-full min-h-[calc(100vh-56px)] md:min-h-screen bg-[#FFFEFD] py-8 md:py-12 lg:py-16 scroll-mt-[56px] md:scroll-mt-28"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-nunito font-bold text-[#002B4B] mb-3 md:mb-4 px-2">
                KİMLER İÇİN ?
              </h2>
              <p className="text-sm sm:text-base font-roboto text-[#525D7B] max-w-3xl mx-auto px-2 leading-relaxed">
                School Route, gelişmiş GPS, veri izleme ve analiz
                teknolojilerini kullanarak servis süreçlerini üç farklı
                kullanıcı grubuna uygun hale getirir: okul yönetimi, veliler ve
                şoförler.
              </p>
            </div>

            {/* Cards Container */}
            <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-20 mb-6 md:mb-8">
              {/* Okullar Card */}
              <div className="relative w-full md:w-auto flex flex-col items-center">
                <motion.button
                  onClick={() => handleSwitch(1)}
                  aria-label="Okullar için özellikler"
                  aria-pressed={activeText === 1}
                  className={`w-full md:w-56 min-h-[12rem] sm:min-h-[14rem] md:h-56 rounded-lg flex flex-col items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 touch-manipulation ${
                    activeText === 1
                      ? "border-2 border-[#0B05BA]"
                      : "bg-[#EFEFF7]"
                  }`}
                  animate={{
                    scale: activeText === 1 ? 1.02 : 1,
                    transition: { duration: 0.4, ease: "easeInOut" },
                  }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
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
                          <li className="text-[#007700] text-sm">
                            • Güvenliğin Artırılması
                          </li>
                          <li className="text-[#007700] text-sm">
                            • Operasyonel Verimlilik
                          </li>
                          <li className="text-[#007700] text-sm">
                            • Raporlama ve Veri Analizi
                          </li>
                          <li className="text-[#007700] text-sm">
                            • Ebeveyn Memnuniyeti
                          </li>
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
                          className="w-24 h-24 sm:w-32 sm:h-32 mb-3 md:mb-4"
                        />
                        <p className="text-base sm:text-lg font-roboto text-[#002B4B] font-semibold">
                          Okullar
                        </p>
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
                    <p className="text-lg font-roboto text-[#002B4B]">
                      Okullar
                    </p>
                  </motion.div>
                </motion.button>
                {activeText === 1 && (
                  <motion.div
                    className="hidden md:block absolute left-1/2 w-0.5 h-8 bg-[#0B05BA] transform -translate-x-1/2"
                    style={{ top: "calc(100% + 3px)" }}
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
                  aria-label="Veliler için özellikler"
                  aria-pressed={activeText === 2}
                  className={`w-full md:w-56 min-h-[12rem] sm:min-h-[14rem] md:h-56 rounded-lg flex flex-col items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 touch-manipulation ${
                    activeText === 2
                      ? "border-2 border-[#0B05BA]"
                      : "bg-[#EFEFF7]"
                  }`}
                  animate={{
                    scale: activeText === 2 ? 1.02 : 1,
                    transition: { duration: 0.4, ease: "easeInOut" },
                  }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
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
                          <li className="text-[#007700] text-sm">
                            • Anlık Takip İmkanı
                          </li>
                          <li className="text-[#007700] text-sm">
                            • Güven ve Şeffaflık
                          </li>
                          <li className="text-[#007700] text-sm">
                            • Zaman Yönetimi
                          </li>
                          <li className="text-[#007700] text-sm">
                            • Kendi İhtiyaçlarına Göre Özelleştirme
                          </li>
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
                          className="w-24 h-24 sm:w-32 sm:h-32 mb-3 md:mb-4"
                        />
                        <p className="text-base sm:text-lg font-roboto text-[#002B4B] font-semibold">
                          Veliler
                        </p>
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
                    <p className="text-lg font-roboto text-[#002B4B]">
                      Veliler
                    </p>
                  </motion.div>
                </motion.button>
                {activeText === 2 && (
                  <motion.div
                    className="hidden md:block absolute left-1/2 w-0.5 h-8 bg-[#0B05BA] transform -translate-x-1/2"
                    style={{ top: "calc(100% + 3px)" }}
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
                  aria-label="Servis Şirketleri için özellikler"
                  aria-pressed={activeText === 3}
                  className={`w-full md:w-56 min-h-[12rem] sm:min-h-[14rem] md:h-56 rounded-lg flex flex-col items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 touch-manipulation ${
                    activeText === 3
                      ? "border-2 border-[#0B05BA]"
                      : "bg-[#EFEFF7]"
                  }`}
                  animate={{
                    scale: activeText === 3 ? 1.02 : 1,
                    transition: { duration: 0.4, ease: "easeInOut" },
                  }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
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
                          <li className="text-[#007700] text-sm">
                            • Verimli Rota Planlaması
                          </li>
                          <li className="text-[#007700] text-sm">
                            • Performans Geri Bildirimi
                          </li>
                          <li className="text-[#007700] text-sm">
                            • Kolay Kullanımlı Arayüz
                          </li>
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
                          className="w-24 h-24 sm:w-32 sm:h-32 mb-3 md:mb-4"
                        />
                        <p className="text-base sm:text-lg font-roboto text-[#002B4B] font-semibold">
                          Servis Şirketleri
                        </p>
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
                    <p className="text-lg font-roboto text-[#002B4B]">
                      Servis Şirketleri
                    </p>
                  </motion.div>
                </motion.button>
                {activeText === 3 && (
                  <motion.div
                    className="hidden md:block absolute left-1/2 w-0.5 h-8 bg-[#0B05BA] transform -translate-x-1/2"
                    style={{ top: "calc(100% + 3px)" }}
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
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    <motion.li
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <span className="text-[#007700] font-medium">
                        Güvenliğin Artırılması:
                      </span>
                      <span className="text-[#525D7B] pl-0">
                        Öğrenci güvenliğini önceliklendirir ve olası riskleri
                        minimize eder.
                      </span>
                    </motion.li>
                    <motion.li
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <span className="text-[#007700] font-medium">
                        Operasyonel Verimlilik:
                      </span>
                      <span className="text-[#525D7B] pl-0">
                        Tüm servis operasyonlarını tek bir noktadan izleyerek,
                        hızlı ve etkili kararlar alabilmeyi sağlar.
                      </span>
                    </motion.li>
                    <motion.li
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <span className="text-[#007700] font-medium">
                        Raporlama ve Veri Analizi:
                      </span>
                      <span className="text-[#525D7B] pl-0">
                        Okul yönetimleri, öğrenci ve şoför verilerini günlük,
                        haftalık veya aylık olarak analiz eder ve raporlar.
                      </span>
                    </motion.li>
                    <motion.li
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <span className="text-[#007700] font-medium">
                        Ebeveyn Memnuniyeti:
                      </span>
                      <span className="text-[#525D7B] pl-0">
                        Ebeveynlerin endişelerini gidermede büyük rol oynayarak
                        okulun güvenilirliğini ve veli memnuniyetini artırır.
                      </span>
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
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    <motion.li
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <span className="text-[#007700] font-medium">
                        Anlık Takip İmkanı:
                      </span>
                      <span className="text-[#525D7B] pl-0">
                        Çocuklarının serviste olduğunu veya servisin eve
                        yaklaştığını anlık olarak görüp süreci takip etme imkanı
                        sağlar.
                      </span>
                    </motion.li>
                    <motion.li
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <span className="text-[#007700] font-medium">
                        Güven ve Şeffaflık:
                      </span>
                      <span className="text-[#525D7B] pl-0">
                        Çocuklarının okula ve eve güvenle ulaşmasını
                        sağladığından, velilere güven verir.
                      </span>
                    </motion.li>
                    <motion.li
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <span className="text-[#007700] font-medium">
                        Zaman Yönetimi:
                      </span>
                      <span className="text-[#525D7B] pl-0">
                        Servis güzergahlarının tahmin edilmesi, velilerin
                        çocuklarının ulaşımı ile ilgili daha iyi planlama
                        yapmalarını sağlar.
                      </span>
                    </motion.li>
                    <motion.li
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <span className="text-[#007700] font-medium">
                        Kendi İhtiyaçlarına Göre Özelleştirme:
                      </span>
                      <span className="text-[#525D7B] pl-0">
                        Bildirim ve bilgi erişim ayarlarını kendi tercihleri
                        doğrultusunda yapılandırabilir.
                      </span>
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
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    <motion.li
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <span className="text-[#007700] font-medium">
                        Verimli Rota Planlaması:
                      </span>
                      <span className="text-[#525D7B] pl-0">
                        Rota planlaması, yakıt tasarrufu sağlar ve iş yükünü
                        hafifletir.
                      </span>
                    </motion.li>
                    <motion.li
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <span className="text-[#007700] font-medium">
                        Performans Geri Bildirimi:
                      </span>
                      <span className="text-[#525D7B] pl-0">
                        Sürüş performansı ve uyum analizleri sayesinde, şoförler
                        kendi sürüş alışkanlıklarını değerlendirebilir ve
                        gerektiğinde iyileştirmeler yapabilir.
                      </span>
                    </motion.li>
                    <motion.li
                      className="flex flex-col gap-1"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <span className="text-[#007700] font-medium">
                        Kolay Kullanımlı Arayüz:
                      </span>
                      <span className="text-[#525D7B] pl-0">
                        Sürüş sırasında dikkat dağıtıcı faktörleri azaltan, sade
                        ve güvenli bir arayüzle şoförlerin işini kolaylaştırır.
                      </span>
                    </motion.li>
                  </motion.ul>
                </motion.div>
              )}
            </div>
          </div>
        </div>
        <div
          id="nasil-calisir"
          className="w-full min-h-[calc(100vh-56px)] md:h-screen flex flex-col justify-center items-center bg-[#F0EDFF] py-8 md:py-12 lg:py-16 md:gap-5 gap-6 md:gap-10 scroll-mt-[56px] md:scroll-mt-28"
        >
          <div className="w-11/12 max-w-7xl mx-auto flex flex-col gap-4 md:gap-5 mt-6 md:mt-10 px-2">
            <div className="w-full text-left">
              <p className="text-[#002B4B] text-xl sm:text-2xl md:text-4xl lg:text-5xl md:font-semibold font-bold font-nunito">
                NASIL ÇALIŞIR ?
              </p>
            </div>
            <div className="md:w-4/5 w-full text-left">
              <p className="font-roboto text-sm sm:text-base md:text-lg text-[#002B4B] leading-relaxed mb-4">
                School Route, okul servis yönetimini dijitalleştiren ve tüm süreçleri tek bir platformda birleştiren kapsamlı bir çözümdür. Sistem, gelişmiş GPS teknolojisi, gerçek zamanlı veri izleme ve akıllı analiz araçları kullanarak okul yönetimleri, veliler ve servis şirketleri için özelleştirilmiş arayüzler sunar.
              </p>
              <p className="font-roboto text-sm sm:text-base md:text-lg text-[#002B4B] leading-relaxed mb-8">
                Platform, kullanıcı dostu tasarımı ve sezgisel navigasyonu sayesinde her yaş grubundan kullanıcının kolayca adapte olabileceği bir deneyim sağlar. Mobil uygulama ve web arayüzü üzerinden erişilebilen sistem, 7/24 kesintisiz hizmet vererek okul servis süreçlerinin tam kontrolünü sağlar.
              </p>
            </div>
            
            {/* Öne Çıkan Temel Özellikler */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-4/5 text-left"
            >
              <h3 className="text-[#002B4B] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-nunito mb-4 md:mb-6">
                Öne Çıkan Temel Özellikler
              </h3>
              <ul className="space-y-4 md:space-y-5">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <span className="font-roboto text-sm sm:text-base md:text-lg text-[#002B4B] font-semibold">
                    • Donanımsız Takip Teknolojisi:
                  </span>
                  <span className="font-roboto text-sm sm:text-base md:text-lg text-[#525D7B] leading-relaxed pl-4">
                    Araca özel herhangi bir GPS cihazı veya ek donanım takılmasına gerek duymaz. Tamamen sürücü ve veli/yolcu mobil uygulamaları üzerinden entegre çalışır.
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col gap-2"
                >
                  <span className="font-roboto text-sm sm:text-base md:text-lg text-[#002B4B] font-semibold">
                    • Anlık Harita ve Rota Takibi:
                  </span>
                  <span className="font-roboto text-sm sm:text-base md:text-lg text-[#525D7B] leading-relaxed pl-4">
                    Araçların belirlenen rotadan sapıp sapmadığı, hız sınırlarına uyup uymadığı merkezden ve ilgili taraflardan anlık olarak izlenebilir.
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col gap-2"
                >
                  <span className="font-roboto text-sm sm:text-base md:text-lg text-[#002B4B] font-semibold">
                    • Tam Entegre Bilgilendirme:
                  </span>
                  <span className="font-roboto text-sm sm:text-base md:text-lg text-[#525D7B] leading-relaxed pl-4">
                    Öğrencinin/yolcunun araca biniş anı, aracın mevcut konumu ve varış noktasına teslimatı; okul yönetimi, servis şirketi ve veli üçgeninde eş zamanlı paylaşılır.
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col gap-2"
                >
                  <span className="font-roboto text-sm sm:text-base md:text-lg text-[#002B4B] font-semibold">
                    • Acil Durum Yönetimi:
                  </span>
                  <span className="font-roboto text-sm sm:text-base md:text-lg text-[#525D7B] leading-relaxed pl-4">
                    Beklenmedik durumlarda veya rota dışı hareketlerde sistem otomatik olarak uyarı mekanizmalarını devreye sokar.
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col gap-2"
                >
                  <span className="font-roboto text-sm sm:text-base md:text-lg text-[#002B4B] font-semibold">
                    • White-Label Özelleştirme:
                  </span>
                  <span className="font-roboto text-sm sm:text-base md:text-lg text-[#525D7B] leading-relaxed pl-4">
                    Yazılım, hizmet alan firmanın kendi logosu, renkleri ve kurumsal kimliği ile markalanır. Bu sayede firmalar, müşterilerine kendi özel yazılımlarını sunuyormuş gibi prestijli bir deneyim yaşatır.
                  </span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
        <div className="w-full p-4 md:p-10 flex flex-col justify-center items-center bg-[#0B05BA] gap-6 md:gap-10">
          <div className="w-full max-w-7xl mx-auto items-center flex flex-col gap-4 md:gap-5 mt-6 md:mt-10 mb-6 md:mb-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="w-full items-center flex flex-col gap-5"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full md:w-full rounded-lg bg-[#FFFEFD] min-h-[3.5rem] md:h-20 flex flex-row justify-between items-center px-3 md:px-5 py-2 md:py-0"
              >
                <p className="font-nunito text-sm sm:text-base md:text-xl lg:text-2xl text-[#002B4B] pl-2 md:pl-5 font-bold leading-tight">
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
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full md:w-full rounded-lg bg-[#FFFEFD] min-h-[3.5rem] md:h-20 flex flex-row justify-between items-center px-3 md:px-5 py-2 md:py-0"
              >
                <p className="font-nunito text-sm sm:text-base md:text-xl lg:text-2xl text-[#002B4B] pl-2 md:pl-5 font-bold leading-tight">
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
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full md:w-full rounded-lg bg-[#FFFEFD] min-h-[3.5rem] md:h-20 flex flex-row justify-between items-center px-3 md:px-5 py-2 md:py-0"
              >
                <p className="font-nunito text-sm sm:text-base md:text-xl lg:text-2xl text-[#002B4B] pl-2 md:pl-5 font-bold leading-tight">
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
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full md:w-full rounded-lg bg-[#FFFEFD] min-h-[3.5rem] md:h-20 flex flex-row justify-between items-center px-3 md:px-5 py-2 md:py-0"
              >
                <p className="font-nunito text-sm sm:text-base md:text-xl lg:text-2xl text-[#002B4B] pl-2 md:pl-5 font-bold leading-tight">
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
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full md:w-full rounded-lg bg-[#FFFEFD] min-h-[3.5rem] md:h-20 flex flex-row justify-between items-center px-3 md:px-5 py-2 md:py-0"
              >
                <p className="font-nunito text-sm sm:text-base md:text-xl lg:text-2xl text-[#002B4B] pl-2 md:pl-5 font-bold leading-tight">
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
          
          {/* Neden SchoolRoute? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-7xl mx-auto px-4 md:px-0 mt-8 md:mt-12"
          >
            <div className="w-full bg-[#FFFEFD] rounded-lg p-6 md:p-8 shadow-lg">
              <h3 className="text-[#002B4B] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-nunito mb-4 md:mb-6">
                Neden SchoolRoute?
              </h3>
              <p className="font-roboto text-sm sm:text-base md:text-lg text-[#525D7B] leading-relaxed">
                SchoolRoute sadece bir takip yazılımı değil; veli güvenini artıran, okul ve servis şirketi arasındaki iletişimi dijitalleştiren ve operasyonel hataları minimize eden bir yönetim asistanıdır. Bugün iki büyük eğitim kurumunda aktif olarak kullanılan bu sistem, taşımacılıkta dijital dönüşümün en pratik halidir.
              </p>
            </div>
          </motion.div>
        </div>
        <div
          id="referanslar"
          className="w-full py-10 md:py-0 md:h-screen flex flex-col justify-center items-center bg-[#FFFEFD] gap-6 md:gap-10 scroll-mt-[56px] md:scroll-mt-28"
        >
          <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-5 px-4">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-[#002B4B] font-bold font-nunito text-center"
            >
              REFERANSLAR
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-1/3 font-roboto text-xs sm:text-sm md:text-base font-semibold text-[#525D7B] text-center px-2 leading-relaxed"
            >
              School Route sistemiyle servis süreçlerinden maksimum verimi
              almayı seçmiş bazı kurumlar:
            </motion.p>
          </div>
          <div className="w-full max-w-7xl mx-auto flex justify-center items-center px-4">
            {/* Levent Okulları - Only Reference */}
            <motion.div
              layout
              key={activeReference}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col w-full md:w-auto gap-4 md:gap-5 justify-center items-center"
            >
              <Image
                src={getImageSrc(references[activeReference - 1])}
                alt="Levent Okulları"
                width={250}
                height={250}
                className="h-32 w-32 sm:h-40 sm:w-40 md:h-60 md:w-60 rounded-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center flex flex-col gap-2 md:gap-3 justify-center items-center"
              >
                <p className="text-[#007700] font-roboto text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                  {references[activeReference - 1].name}
                </p>
                <ul className="text-sm sm:text-base md:text-lg lg:text-xl text-[#525D7B] font-roboto font-semibold">
                  {references[activeReference - 1].stats.map((stat, index) => (
                    <li key={index}>{stat}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="w-full min-h-[calc(100vh-56px)] md:min-h-screen bg-[#F0EDFF] flex flex-col">
          {/* Top Section - Text and Download Buttons */}
          <div className="container mx-auto px-4 md:px-20 pt-6 md:pt-20 pb-4 md:pb-0">
            <div className="w-full md:max-w-lg">
              <h2 className="font-nunito text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#002B4B] font-bold mb-2 md:mb-3">
                UYGULAMAYI İNDİR
              </h2>
              <p className="text-[#525D7B] font-roboto font-normal text-sm sm:text-base mb-4 md:mb-6 leading-relaxed">
                School Route uygulaması hem IOS hem de Android cihazınızda
                kullanabilirsiniz. Hemen Deneyin.
              </p>
              <div className="flex flex-row gap-3 md:gap-4">
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
                  className="w-auto h-7 sm:h-8"
                />
                </a>
                <a
                  href="https://apps.apple.com/tr/app/school-route/id6736696561?l=tr"
                  className="cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/apple-transparan.svg"
                    alt="App Store"
                    width={120}
                    height={36}
                    className="w-auto h-7 sm:h-8"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section - Phone Images */}
          <div className="w-full flex-grow flex items-end mt-6 md:mt-10 lg:mt-auto">
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
                  alt="School Route uygulaması ekran görüntüleri - iPhone ve Android cihazlarda"
                  width={1000}
                  height={600}
                  className="hidden md:block w-[80%] h-auto"
                  loading="lazy"
                />
                <Image
                  src="/images/mobil-dowload-alani.png"
                  alt="School Route mobil uygulama ekran görüntüleri"
                  width={353}
                  height={365}
                  className="block md:hidden w-full h-auto"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div
          id="iletisim"
          className="w-full flex flex-col bg-[#FFFEFD] justify-center items-center py-8 md:py-12 lg:py-20 scroll-mt-[56px] md:scroll-mt-28"
        >
          <div className="flex p-4 sm:p-6 md:p-10 lg:p-20 flex-col justify-center items-center w-full text-center gap-6 md:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-nunito font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl text-[#002B4B] px-4"
            >
              İLETİŞİME GEÇİN
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-roboto font-semibold text-xs sm:text-sm md:text-base text-[#525D7B] max-w-3xl mx-auto px-4 leading-relaxed"
            >
              Sizin için en doğru bilgiyi sağlamak ve aklınızdaki tüm soruları
              yanıtlamak bizim için önemli. Hizmetlerimiz hakkında detaylı bilgi
              almak ve size özel çözümlerimizi öğrenmek için bizimle iletişime
              geçin ve birlikte harika bir başlangıç yapalım.
            </motion.div>
          </div>
          <div className="w-full flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
            <motion.div
              className="flex w-full md:w-1/2 mt-6 md:mt-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                src="/images/contact-img.png"
                alt="İletişim - School Route ile iletişime geçin"
                width={976}
                height={873}
                className="w-full items-start justify-start"
                loading="lazy"
              />
            </motion.div>
            <div className="flex w-full md:w-1/2 px-4 md:px-0">
              <div className="w-full flex items-center justify-center">
                <div className="w-full md:w-4/5 flex flex-col justify-between items-center gap-6 md:gap-10">
                    <motion.form
                      className="w-full flex flex-col gap-8 md:gap-16"
                      onSubmit={handleFormSubmit}
                      noValidate
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.2,
                          },
                        },
                      }}
                    >
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.5 }}
                      className="group relative"
                    >
                      <input
                        id="input0"
                        type="text"
                        placeholder=" "
                        value={formData.fullName}
                        onChange={handleInputChange}
                        aria-label="Ad Soyad"
                        aria-required="true"
                        aria-invalid={!!formErrors.fullName}
                        className={`peer mt-1 block w-full px-4 py-3 bg-transparent border-b-2 ${
                          formErrors.fullName
                            ? "border-red-500"
                            : "border-[#525D7B] focus:border-[#0B05BA]"
                        } outline-none transition-all placeholder-transparent`}
                        required
                      />
                      <label
                        htmlFor="input0"
                        className="absolute left-4 -top-2 text-sm text-[#525D7B] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#0B05BA]"
                      >
                        Ad Soyad
                      </label>
                      {formErrors.fullName && (
                        <span className="absolute -bottom-5 left-4 text-xs text-red-500" role="alert">
                          {formErrors.fullName}
                        </span>
                      )}
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
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
                        aria-label="Kurum Adı"
                        aria-required="true"
                        aria-invalid={!!formErrors.companyName}
                        className={`peer mt-1 block w-full px-4 py-3 bg-transparent border-b-2 ${
                          formErrors.companyName
                            ? "border-red-500"
                            : "border-[#525D7B] focus:border-[#0B05BA]"
                        } outline-none transition-all placeholder-transparent`}
                        required
                      />
                      <label
                        htmlFor="input1"
                        className="absolute left-4 -top-2 text-sm text-[#525D7B] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#0B05BA]"
                      >
                        Kurum Adı
                      </label>
                      {formErrors.companyName && (
                        <span className="absolute -bottom-5 left-4 text-xs text-red-500" role="alert">
                          {formErrors.companyName}
                        </span>
                      )}
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
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
                          aria-label="E-Mail"
                          aria-required="true"
                          aria-invalid={!!formErrors.email}
                          className={`peer mt-1 block w-full px-4 py-3 bg-transparent border-b-2 ${
                            formErrors.email
                              ? "border-red-500"
                              : "border-[#525D7B] focus:border-[#0B05BA]"
                          } outline-none transition-all placeholder-transparent`}
                          required
                        />
                        <label
                          htmlFor="input2"
                          className="absolute left-4 -top-2 text-sm text-[#525D7B] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#0B05BA]"
                        >
                          E-Mail
                        </label>
                        {formErrors.email && (
                          <span className="absolute -bottom-5 left-4 text-xs text-red-500" role="alert">
                            {formErrors.email}
                          </span>
                        )}
                      </motion.div>
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
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
                          aria-label="Telefon"
                          aria-required="true"
                          aria-invalid={!!formErrors.phone}
                          className={`peer mt-1 block w-full px-4 py-3 bg-transparent border-b-2 ${
                            formErrors.phone
                              ? "border-red-500"
                              : "border-[#525D7B] focus:border-[#0B05BA]"
                          } outline-none transition-all placeholder-transparent`}
                          required
                        />
                        <label
                          htmlFor="input3"
                          className="absolute left-4 -top-2 text-sm text-[#525D7B] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#0B05BA]"
                        >
                          Telefon
                        </label>
                        {formErrors.phone && (
                          <span className="absolute -bottom-5 left-4 text-xs text-red-500" role="alert">
                            {formErrors.phone}
                          </span>
                        )}
                      </motion.div>
                    </div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
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
                        aria-label="Mesajınız"
                        aria-required="true"
                        aria-invalid={!!formErrors.message}
                        className={`peer mt-1 block w-full px-3 md:px-4 py-2.5 md:py-3 bg-transparent border-b-2 ${
                          formErrors.message
                            ? "border-red-500"
                            : "border-[#525D7B] focus:border-[#0B05BA]"
                        } outline-none transition-all placeholder-transparent text-sm md:text-base`}
                        required
                      />
                      <label
                        htmlFor="input4"
                        className="absolute left-4 -top-2 text-sm text-[#525D7B] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#0B05BA]"
                      >
                        Mesajınız
                      </label>
                      {formErrors.message && (
                        <span className="absolute -bottom-5 left-4 text-xs text-red-500" role="alert">
                          {formErrors.message}
                        </span>
                      )}
                    </motion.div>
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full md:w-1/2 px-4 py-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-sm"
                        role="alert"
                        aria-live="polite"
                      >
                        Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                      </motion.div>
                    )}
                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full md:w-1/2 px-4 py-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm"
                        role="alert"
                        aria-live="assertive"
                      >
                        Bir hata oluştu. Lütfen tekrar deneyiniz.
                      </motion.div>
                    )}
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      aria-label="İletişim formunu gönder"
                      className="w-full md:w-1/2 px-4 py-3 md:py-4 bg-[#0B05BA] text-[#FFFEFD] font-semibold rounded-md shadow-md hover:bg-[#0B05BA]/90 focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base touch-manipulation"
                    >
                      {isSubmitting ? "Gönderiliyor..." : "İletişime Geç"}
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
