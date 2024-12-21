import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function Home() {
  const [activeText, setActiveText] = useState<number>(1);

  const handleSwitch = (textNumber: number) => {
    setActiveText(textNumber);
  };
  return (
    <div className="scroll-smooth">
      <Head>
        <title>School Route</title>
        <meta name="description" content="School bus tracking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="w-full md:h-screen flex flex-col md:flex-row justify-center items-center bg-[#F5F8FF]">
        <div className="md:w-2/5 md:gap-8 md:pl-20 md:m-0 m-5 gap-5 flex flex-col text-left ">
          <div className="w-full flex">
            <Image
              src="/images/school-route.svg"
              alt="School Route Logo"
              width={261}
              height={30}
              className="hidden md:block h-8 w-72 items-start justify-start"
            />
            <Image
              src="/images/school-route.svg"
              alt="School Route Logo"
              width={261}
              height={30}
              className="block md:hidden items-start justify-start"
            />
          </div>
          <div className="w-full flex flex-col ">
            <div className="w-full flex flex-row md:flex-col gap-1 md:gap-0">
              <p className="leading-6 flex text-lg md:text-5xl font-nunito font-normal md:font-light text-left text-[#0B05BA]">
                Okul Servis Yönetiminde
              </p>
            </div>
            <p className="w-full leading-6 flex text-lg md:text-5xl font-nunito font-extrabold md:font-semibold  text-left text-[#0B05BA]">
              Kontrol Sizde
            </p>
          </div>
          <div className="w-full">
            <p className="font-roboto font-semibold text-xs md:text-base text-[#525D7B]">
              School Route, okul yönetimleri, servis şirketleri ve veliler için
              özel olarak geliştirilmiş IOS, Android ve web tabalı çalışan mobil
              uygulamadır. School Route, okul servis süreçlerinin daha güvenli,
              şeffaf ve verimli bir şekilde yönetilmesini sağlar. Günümüzde
              çocukların güvenli bir şekilde okula ulaşması ve eve dönüşleri,
              veliler ve okul yönetimleri için en önemli öncelikler arasındadır.
              School Route, tüm veli ve okul yöneticilerinin servis süreçlerini
              eksiksiz ve güvenli bir şekilde takip etmesine imkan tanır. Veri
              analizi temellerine dayanarak gerçekleştirilen raporlamalar
              sayesinde, servis süreçlerinin sorunsuz yönetimini sağlar.
            </p>
          </div>
        </div>
        <div className="md:w-3/5 w-full md:pr-10 md:m-0 m-5">
          <Image
            src="/images/newslider.png"
            alt="School Route Slider"
            width={1188}
            height={571}
            className="hidden md:block h-full w-full items-start justify-start"
          />
          <Image
            src="/images/mobil-slider.svg"
            alt="School Route Mobil Slider"
            width={280}
            height={270}
            className="block md:hidden h-full w-full items-start justify-start"
          />
        </div>
      </div>
      <div
        id="kimler-icin"
        className="w-full md:h-screen bg-[#FFFEFD] flex flex-col justify-center items-center"
      >
        <div className="flex flex-col w-full gap-5 justify-center items-center text-center pb-5 md:pb-0">
          <div>
            <p className="font-nunito text-lg mt-5 md:mt-0 md:text-5xl font-bold text-[#002B4B]">
              KİMLER İÇİN ?
            </p>
          </div>
          <div className="flex flex-col text-center justify-center items-center w-full">
            <p className="font-roboto text-xs md:text-2xl font-semibold text-[#525D7B] w-full md:w-3/5">
              Okul Yolculuğunda Yeni Bir Dönem!
            </p>
            <p className="font-roboto text-xs md:text-base font-semibold text-[#525D7B] w-full md:w-3/5">
              School Route, servis süreçleri takibi için üç farklı kullanıcı
              grubuna hizmet sağlar.
            </p>
            <p className="font-roboto text-xs md:text-base font-semibold text-[#525D7B] w-full md:w-3/5">
              Okullar - Veliler - Servis Şirketleri
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full bg-[#FFFEFD] md:p-4">
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-10 md:mb-0">
            <button
              onClick={() => handleSwitch(1)}
              className={`h-56 w-56 rounded-lg border-2 flex flex-col justify-center items-center gap-5 ${
                activeText === 1
                  ? "border-[#0B05BA] bg-transparan"
                  : "border-none bg-[#EFEFF7]"
              }`}
            >
              <img
                src="/images/okulicon.png"
                alt="Metin 1"
                className="w-32 h-32 mx-auto"
              />
              <p>Okullar</p>
            </button>
            <button
              onClick={() => handleSwitch(2)}
              className={`h-56 w-56 rounded-lg border-2 flex flex-col justify-center items-center gap-5 ${
                activeText === 2
                  ? "border-[#0B05BA] bg-transparan"
                  : "border-none bg-[#EFEFF7]"
              }`}
            >
              <img
                src="/images/veliicon.png"
                alt="Metin 1"
                className="w-32 h-32 mx-auto"
              />
              <p>Veliler</p>
            </button>
            <button
              onClick={() => handleSwitch(3)}
              className={`h-56 w-56 rounded-lg border-2 flex flex-col justify-center items-center gap-5 ${
                activeText === 3
                  ? "border-[#0B05BA] bg-transparan"
                  : "border-none bg-[#EFEFF7]"
              }`}
            >
              <img
                src="/images/soforicon.png"
                alt="Metin 1"
                className="w-32 h-32 mx-auto"
              />
              <p>Servis Şirketleri</p>
            </button>
          </div>
          <div className="hidden py-5 md:px-0 md:pt-10 md:flex flex-col justify-center items-center">
            {activeText === 1 && (
              <div className="flex flex-col w-3/5 justify-center items-center">
                <ul className="flex flex-col w-full text-xs font-semibold text-left gap-2 ">
                  <li className="flex flex-row justify-start items-start gap-1 text-left">
                    <div className="font-roboto font-normal leading-6 text-[#525D7B] text-base">
                      <p className="text-base text-[#007700] font-roboto">
                        Güvenliğin Artırılması:
                      </p>
                      Öğrenci güvenliğini önceliklendirir ve olası riskleri
                      minimize eder.
                    </div>
                  </li>
                  <li className="flex flex-row justify-start items-start gap-1 text-left">
                    <div className="font-roboto font-normal leading-6 text-[#525D7B] text-base">
                      <p className="text-base text-[#007700] font-roboto">
                        Operasyonel Verimlilik:
                      </p>
                      Tüm servis operasyonlarını tek bir noktadan izleyerek,
                      hızlı ve etkili kararlar alabilmeyi sağlar.
                    </div>
                  </li>
                  <li className="flex flex-row justify-start items-start gap-1 text-left">
                    <div className="font-roboto font-normal leading-6 text-[#525D7B] text-base">
                      <p className="text-base text-[#007700] font-roboto">
                        Raporlama ve Veri Analizi:
                      </p>
                      Okul yönetimleri, öğrenci ve şoför verilerini günlük,
                      haftalık veya aylık olarak analiz eder ve raporlar.
                      Öğrenci sayısındaki artış ya da azalış, güzergah
                      performansı ve yoğun servis saatleri gibi veriler
                      sayesinde okul yönetimi daha etkin planlamalar yapabilir.
                    </div>
                  </li>
                  <li className="flex flex-row justify-start items-start gap-1 text-left">
                    <div className="font-roboto font-normal leading-6 text-[#525D7B] text-base">
                      <p className="text-base text-[#007700] font-roboto">
                        Ebeveyn Memnuniyeti:
                      </p>
                      Ebeveynlerin endişelerini gidermede büyük rol oynayarak
                      okulun güvenilirliğini ve veli memnuniyetini artırır.
                    </div>
                  </li>
                </ul>
              </div>
            )}
            {activeText === 2 && (
              <div className="flex flex-col w-full justify-center items-center">
                <ul className="flex flex-col w-full text-xs font-semibold text-left gap-3 ">
                  <li className="flex flex-row justify-start items-start gap-1 text-left">
                    <div className="font-roboto font-normal leading-6 text-[#525D7B] text-base">
                      <p className="text-base text-[#007700] font-roboto">
                        Anlık Takip İmkanı:
                      </p>
                      Çocuklarının serviste olduğunu veya servisin eve
                      yaklaştığını anlık olarak görüp süreci takip etme imkanı
                      sağlar.
                    </div>
                  </li>
                  <li className="flex flex-row justify-start items-start gap-1 text-left">
                    <div className="font-roboto font-normal leading-6 text-[#525D7B] text-base">
                      <p className="text-base text-[#007700] font-roboto">
                        Güven ve Şeffaflık:
                      </p>
                      Çocuklarının okula ve eve güvenle ulaşmasını
                      sağladığından, velilere güven verir.
                    </div>
                  </li>
                  <li className="flex flex-row justify-start items-start gap-1 text-left">
                    <div className="font-roboto font-normal leading-6 text-[#525D7B] text-base">
                      <p className="text-base text-[#007700] font-roboto">
                        Zaman Yönetimi:
                      </p>
                      Servis güzergahlarının tahmin edilmesi, velilerin
                      çocuklarının ulaşımı ile ilgili daha iyi planlama
                      yapmalarını sağlar.
                    </div>
                  </li>
                  <li className="flex flex-row justify-start items-start gap-1 text-left">
                    <div className="font-roboto font-normal leading-6 text-[#525D7B] text-base">
                      <p className="text-base text-[#007700] font-roboto">
                        Kendi İhtiyaçlarına Göre Özelleştirme:
                      </p>
                      Bildirim ve bilgi erişim ayarlarını kendi tercihleri
                      doğrultusunda yapılandırabilir.
                    </div>
                  </li>
                </ul>
              </div>
            )}
            {activeText === 3 && (
              <div className="flex flex-col w-4/5 justify-center items-center">
                <ul className="flex flex-col w-full text-xs font-semibold text-left gap-3 ">
                  <li className="flex flex-row justify-start items-start gap-1 text-left">
                    <div className="font-roboto font-normal leading-6 text-[#525D7B] text-base">
                      <p className="text-base text-[#007700] font-roboto">
                        Verimli Rota Planlaması:
                      </p>
                      Rota planlaması, yakıt tasarrufu sağlar ve iş yükünü
                      hafifletir.
                    </div>
                  </li>
                  <li className="flex flex-row justify-start items-start gap-1 text-left">
                    <div className="font-roboto font-normal leading-6 text-[#525D7B] text-base">
                      <p className="text-base text-[#007700] font-roboto">
                        Performans Geri Bildirimi:
                      </p>
                      Sürüş performansı ve uyum analizleri sayesinde, şoförler
                      kendi sürüş alışkanlıklarını değerlendirebilir ve
                      gerektiğinde iyileştirmeler yapabilir.
                    </div>
                  </li>
                  <li className="flex flex-row justify-start items-start gap-1 text-left">
                    <div className="font-roboto font-normal leading-6 text-[#525D7B] text-base">
                      <p className="text-base text-[#007700] font-roboto">
                        Kolay Kullanımlı Arayüz:
                      </p>
                      Sürüş sırasında dikkat dağıtıcı faktörleri azaltan, sade
                      ve güvenli bir arayüzle şoförlerin işini kolaylaştırır.
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        id="nasil-calisir"
        className="w-full md:h-screen flex flex-col justify-center items-center bg-[#F0EDFF] md:gap-5 gap-10"
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
          <div className="w-11/12 md:w-full rounded-lg bg-[#FFFEFD] h-11 md:h-20 flex flex-row justify-between items-center">
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
          </div>
          <div className="w-11/12 md:w-full rounded-lg bg-[#FFFEFD] h-11 md:h-20 flex flex-row justify-between items-center">
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
          </div>
          <div className="w-11/12 md:w-full rounded-lg bg-[#FFFEFD] h-11 md:h-20 flex flex-row justify-between items-center">
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
          </div>
          <div className="w-11/12 md:w-full rounded-lg bg-[#FFFEFD] h-11 md:h-20 flex flex-row justify-between items-center">
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
          </div>
          <div className="w-11/12 md:w-full rounded-lg bg-[#FFFEFD] h-11 md:h-20 flex flex-row justify-between items-center">
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
          </div>
        </div>
      </div>
      <div
        id="referanslar"
        className="w-full my-10 md:my-0 md:h-screen flex flex-col justify-center items-center bg-[#FFFEFD] gap-10"
      >
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <p className="text-lg md:text-5xl text-[#002B4B] font-bold font-nunito">
            REFERANSLAR
          </p>
          <p className="w-11/12 md:w-1/3 font-roboto text-xs md:text-base font-semibold text-[#525D7B] text-center">
            School Route sistemiyle servis süreçlerinden maksimum verimi almayı
            seçmiş bazı kurumlar:
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col w-full md:w-1/3 gap-5 justify-center items-center">
            <Image
              src="/images/leventkolej.png"
              alt="School Route Logo"
              width={250}
              height={250}
              className="h-32 w-32 md:h-60 md:w-60 items-center justify-center"
            />
            <div className="text-center flex flex-col gap-3 justify-center items-center">
              <p className="text-[#007700] font-roboto text-sm md:text-xl font-semibold">
                Levent Okulları:
              </p>
              <ul className="text-xs md:text-xl text-[#525D7B] font-roboto font-semibold">
                <li>5 Okul</li>
                <li>50 Servis</li>
                <li>5000 öğrencisiyle</li>
              </ul>
              <p className="text-[#525D7B] font-roboto font-normal md:text-xl text-xs w-full md:w-3/4 text-center">
                School Route sistemini aktif olarak kullanmaktadır
              </p>
            </div>
          </div>
          <div className="md:flex hidden flex-col w-full md:w-1/3 gap-5 justify-center items-center">
            <Image
              src="/images/leventkolej.png"
              alt="School Route Logo"
              width={250}
              height={250}
              className="h-32 w-32 md:h-60 md:w-60 items-center justify-center"
            />
            <div className="text-center flex flex-col gap-3 justify-center items-center">
              <p className="text-[#007700] font-roboto text-xl font-semibold">
                Levent Okulları:
              </p>
              <ul className="text-xl text-[#525D7B] font-roboto font-semibold">
                <li>5 Okul</li>
                <li>50 Servis</li>
                <li>5000 öğrencisiyle</li>
              </ul>
              <p className="text-[#525D7B] font-roboto font-normal text-xl w-3/4 text-center">
                School Route sistemini aktif olarak kullanmaktadır
              </p>
            </div>
          </div>
          <div className="md:flex hidden flex-col w-full md:w-1/3 gap-5 justify-center items-center">
            <Image
              src="/images/leventkolej.png"
              alt="School Route Logo"
              width={250}
              height={250}
              className="md:-60 md:w-60 items-center justify-center"
            />
            <div className="text-center flex flex-col gap-3 justify-center items-center">
              <p className="text-[#007700] font-roboto text-xl font-semibold">
                Levent Okulları:
              </p>
              <ul className="text-xl text-[#525D7B] font-roboto font-semibold">
                <li>5 Okul</li>
                <li>50 Servis</li>
                <li>5000 öğrencisiyle</li>
              </ul>
              <p className="text-[#525D7B] font-roboto font-normal text-xl w-3/4 text-center">
                School Route sistemini aktif olarak kullanmaktadır
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  flex flex-col bg-[#F0EDFF] justify-center items-center">
        <div className="w-full mt-5 md:mt-0 h-1/5 flex flex-col justify-center md:justify-start md:pt-10 md:pl-20 items-center md:items-start gap-7">
          <p className="font-nunito text-lg md:text-5xl text-[#002B4B] font-bold">
            UYGULAMAYI İNDİR
          </p>
          <p className="text-[#525D7B] font-roboto font-semibold text-xs md:text-base w-full md:w-10/12 text-center md:text-left">
            School Route uygulaması hem IOS hem de Android cihazınızda
            kullanabilirsiniz. Hemen Deneyin.
          </p>
          <div className="flex flex-row justify-center items-center gap-5 mb-5 md:mb-0">
            <a
              href="https://play.google.com/store/apps/details?id=com.schoolbusmobile"
              className="cursor-pointer"
              target="_blank"
            >
              <Image
                src="/images/google-transparan.svg"
                alt="School Route Logo"
                width={246}
                height={77}
                className="hidden md:block h-14 w-52 items-center justify-center"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.schoolbusmobile"
              className="cursor-pointer"
              target="_blank"
            >
              <Image
                src="/images/google-transparan.svg"
                alt="School Route Logo"
                width={86}
                height={23}
                className="block md:hidden h-6 w-20 items-center justify-center"
              />
            </a>
            <a
              href="https://apps.apple.com/tr/app/school-route/id6736696561?l=tr"
              className="cursor-pointer"
              target="_blank"
            >
              <Image
                src="/images/apple-transparan.svg"
                alt="School Route Logo"
                width={246}
                height={77}
                className="hidden md:block h-14 w-52 items-center justify-center"
              />
            </a>
            <a
              href="https://apps.apple.com/tr/app/school-route/id6736696561?l=tr"
              className="cursor-pointer"
              target="_blank"
            >
              <Image
                src="/images/apple-transparan.svg"
                alt="School Route Logo"
                width={86}
                height={23}
                className="block md:hidden h-6 w-20 items-center justify-center"
              />
            </a>
          </div>
        </div>
        <div className="w-full h-full md:w-4/5 md:h-4/5 flex flex-col justify-end items-end mx-5 md:mx-0">
          <Image
            src="/images/dowload-gorsel.png"
            alt="School Route Logo"
            width={1000}
            height={400}
            className="hidden md:block h-4/5 w-full items-end justify-end"
          />
          <Image
            src="/images/mobil-dowload-alani.png"
            alt="School Route Logo"
            width={353}
            height={365}
            className="block md:hidden h-full w-full items-end justify-end"
          />
        </div>
      </div>
      <div
        id="iletisim"
        className="w-full flex flex-col bg-[#FFFEFD] justify-center items-center "
      >
        <div className="flex p-10 md:p-20 flex-col justify-center items-center w-full md:w-full text-center gap-10">
          <div className="font-nunito font-bold text-lg md:text-5xl text-[#002B4B]">
            İLETİŞİME GEÇİN
          </div>
          <div className="font-roboto font-semibold text-xs md:text-base text-[#525D7B]">
            Sizin için en doğru bilgiyi sağlamak ve aklınızdaki tüm soruları
            yanıtlamak bizim için önemli.Hizmetlerimiz hakkında detaylı bilgi
            almak ve size özel çözümlerimizi öğrenmek için bizimle iletişime
            geçin ve birlikte harika bir başlangıç yapalım.
          </div>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="flex w-full md:w-1/2 mt-10 md:mt-0">
            <Image
              src="/images/contact-img.png"
              alt="School Route Logo"
              width={976}
              height={873}
              className="w-full items-start justify-start"
            />
          </div>
          <div className="flex w-full md:w-1/2">
            <div className="w-full flex items-center justify-center">
              <div className="w-4/5 flex flex-col justify-between items-center gap-10">
                <div className="w-full flex flex-col">
                  <form className="w-full flex flex-col gap-16">
                    <div>
                      <label
                        htmlFor="input1"
                        className="block text-sm font-medium text-[#525D7B]"
                      >
                        Kurum Adı:
                      </label>
                      <input
                        id="input1"
                        type="text"
                        className="mt-1 block w-full px-4 py-2 border-b focus:outline-none focus:ring-[#525D7B] focus:border-[#525D7B] sm:text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="input2"
                          className="block text-sm font-medium text-[#525D7B]"
                        >
                          E-Mail:
                        </label>
                        <input
                          id="input2"
                          type="text"
                          className="mt-1 block w-full px-4 py-2 border-b focus:outline-none focus:ring-[#525D7B] focus:border-[#525D7B] sm:text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="input3"
                          className="block text-sm font-medium text-[#525D7B]"
                        >
                          Telefon:
                        </label>
                        <input
                          id="input3"
                          type="text"
                          className="mt-1 block w-full px-4 py-2 border-b focus:outline-none focus:ring-[#525D7B] focus:border-[#525D7B] sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="input4"
                        className="block text-sm font-medium text-[#525D7B]"
                      >
                        Mesajınız:
                      </label>
                      <input
                        id="input4"
                        type="text"
                        className="mt-1 block w-full px-4 py-2 border-b focus:outline-none focus:ring-[#525D7B] focus:border-[#525D7B] sm:text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full md:w-1/2 px-4 py-4 bg-[#0B05BA] text-[#FFFEFD] font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                    >
                      İletişime Geç
                    </button>
                  </form>
                </div>
                <div className="hidden w-full md:flex flex-col justify-start gap-3">
                  <div className="font-roboto text-[#002B4B] font-semibold text-xl">
                    Bizi Takip Edin:
                  </div>
                  <div className="flex flex-row gap-2">
                    <a href="#">
                      <Image
                        src="/images/linkedin.svg"
                        alt="LinkedinLogo"
                        width={48}
                        height={48}
                        className=""
                      />
                    </a>
                    <a href="#">
                      <Image
                        src="/images/instagram.svg"
                        alt="InstagramLogo"
                        width={48}
                        height={48}
                        className=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
