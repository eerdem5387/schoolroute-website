import React from "react";
import { useState } from "react";

const Example = () => {
  const [activeText, setActiveText] = useState<number>(1);

  const handleSwitch = (textNumber: number) => {
    setActiveText(textNumber);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center items-center w-full gap-20">
        <DrawOutlineButton
          onClick={() => handleSwitch(1)}
          className={`h-56 w-56 rounded-lg border-2 flex flex-col justify-center items-center gap-5 ${
            activeText === 1 ? "border-[#0B05BA] bg-transparent" : ""
          }`}
        >
          <div className="flex flex-col gap-5">
            <img
              src="/images/okulicon.png"
              alt="Metin 1"
              className="w-32 h-32 mx-auto"
            />
            <p className="text-2xl font-nunito font-bold text-[#002B4B]">
              Okullar
            </p>
          </div>
        </DrawOutlineButton>
        <DrawOutlineButton
          onClick={() => handleSwitch(2)}
          className={`h-56 w-56 rounded-lg border-2 flex flex-col justify-center items-center gap-5 ${
            activeText === 1 ? "border-[#0B05BA] bg-transparent" : ""
          }`}
        >
          <div className="flex flex-col gap-5">
            <img
              src="/images/veliicon.png"
              alt="Metin 1"
              className="w-32 h-32 mx-auto"
            />
            <p className="text-2xl font-nunito font-bold text-[#002B4B]">
              Veliler
            </p>
          </div>
        </DrawOutlineButton>
        <DrawOutlineButton
          onClick={() => handleSwitch(3)}
          className={`h-56 w-56 rounded-lg border-2 flex flex-col justify-center items-center gap-5 ${
            activeText === 1 ? "border-[#0B05BA] bg-transparent" : ""
          }`}
        >
          <div className="flex flex-col gap-5">
            <img
              src="/images/soforicon.png"
              alt="Metin 1"
              className="w-32 h-32 mx-auto"
            />
            <p className="text-2xl font-nunito font-bold text-[#002B4B]">
              Şoförler
            </p>
          </div>
        </DrawOutlineButton>
      </div>
      <div className="pt-10">
        {activeText === 1 && (
          <div className="flex flex-col w-full justify-center items-center">
            <ul className="flex flex-col w-4/5 text-xs font-semibold text-left gap-3 ">
              <li className="flex flex-row justify-start items-start gap-1 text-left">
                <p className="font-roboto text-[#525D7B] text-base">
                  <p className="text-base text-[#007700] font-roboto">
                    Güvenliğin Artırılması:
                  </p>
                  Öğrenci güvenliğini önceliklendirir ve olası riskleri minimize
                  eder.
                </p>
              </li>
              <li className="flex flex-row justify-start items-start gap-1 text-left">
                <p className="font-roboto text-[#525D7B] text-base">
                  <p className="text-base text-[#007700] font-roboto">
                    Ebeveyn Memnuniyeti:
                  </p>
                  Ebeveynlerin endişelerini gidermede büyük rol oynayarak okulun
                  güvenilirliğini ve veli memnuniyetini artırır.
                </p>
              </li>
              <li className="flex flex-row justify-start items-start gap-1 text-left">
                <p className="font-roboto text-[#525D7B] text-base">
                  <p className="text-base text-[#007700] font-roboto">
                    Operasyonel Verimlilik:
                  </p>
                  Tüm servis operasyonlarını tek bir noktadan izleyerek, hızlı
                  ve etkili kararlar alabilmeyi sağlar.
                </p>
              </li>
              <li className="flex flex-row justify-start items-start gap-1 text-left">
                <p className="font-roboto text-[#525D7B] text-base">
                  <p className="text-base text-[#007700] font-roboto">
                    Raporlama ve Veri Analizi:
                  </p>
                  Okul yönetimleri, öğrenci ve şoför verilerini günlük, haftalık
                  veya aylık olarak analiz eder ve raporlar. Öğrenci sayısındaki
                  artış ya da azalış, güzergah performansı ve yoğun servis
                  saatleri gibi veriler sayesinde okul yönetimi daha etkin
                  planlamalar yapabilir.
                </p>
              </li>
            </ul>
          </div>
        )}
        {activeText === 2 && (
          <div className="flex flex-col w-full justify-center items-center">
            <ul className="flex flex-col w-4/5 text-xs font-semibold text-left gap-3 ">
              <li className="flex flex-row justify-start items-start gap-1 text-left">
                <p className="font-roboto text-[#525D7B] text-base">
                  <p className="text-base text-[#007700] font-roboto">
                    Ebeveyn Memnuniyeti:
                  </p>
                  Ebeveynlerin endişelerini gidermede büyük rol oynayarak okulun
                  güvenilirliğini ve veli memnuniyetini artırır.
                </p>
              </li>
              <li className="flex flex-row justify-start items-start gap-1 text-left">
                <p className="font-roboto text-[#525D7B] text-base">
                  <p className="text-base text-[#007700] font-roboto">
                    Güvenliğin Artırılması:
                  </p>
                  Öğrenci güvenliğini önceliklendirir ve olası riskleri minimize
                  eder.
                </p>
              </li>
              <li className="flex flex-row justify-start items-start gap-1 text-left">
                <p className="font-roboto text-[#525D7B] text-base">
                  <p className="text-base text-[#007700] font-roboto">
                    Operasyonel Verimlilik:
                  </p>
                  Tüm servis operasyonlarını tek bir noktadan izleyerek, hızlı
                  ve etkili kararlar alabilmeyi sağlar.
                </p>
              </li>
              <li className="flex flex-row justify-start items-start gap-1 text-left">
                <p className="font-roboto text-[#525D7B] text-base">
                  <p className="text-base text-[#007700] font-roboto">
                    Raporlama ve Veri Analizi:
                  </p>
                  Okul yönetimleri, öğrenci ve şoför verilerini günlük, haftalık
                  veya aylık olarak analiz eder ve raporlar. Öğrenci sayısındaki
                  artış ya da azalış, güzergah performansı ve yoğun servis
                  saatleri gibi veriler sayesinde okul yönetimi daha etkin
                  planlamalar yapabilir.
                </p>
              </li>
            </ul>
          </div>
        )}
        {activeText === 3 && (
          <div className="flex flex-col w-full justify-center items-center">
            <ul className="flex flex-col w-4/5 text-xs font-semibold text-left gap-3 ">
              <li className="flex flex-row justify-start items-start gap-1 text-left">
                <p className="font-roboto text-[#525D7B] text-base">
                  <p className="text-base text-[#007700] font-roboto">
                    Operasyonel Verimlilik:
                  </p>
                  Tüm servis operasyonlarını tek bir noktadan izleyerek, hızlı
                  ve etkili kararlar alabilmeyi sağlar.
                </p>
              </li>
              <li className="flex flex-row justify-start items-start gap-1 text-left">
                <p className="font-roboto text-[#525D7B] text-base">
                  <p className="text-base text-[#007700] font-roboto">
                    Ebeveyn Memnuniyeti:
                  </p>
                  Ebeveynlerin endişelerini gidermede büyük rol oynayarak okulun
                  güvenilirliğini ve veli memnuniyetini artırır.
                </p>
              </li>
              <li className="flex flex-row justify-start items-start gap-1 text-left">
                <p className="font-roboto text-[#525D7B] text-base">
                  <p className="text-base text-[#007700] font-roboto">
                    Güvenliğin Artırılması:
                  </p>
                  Öğrenci güvenliğini önceliklendirir ve olası riskleri minimize
                  eder.
                </p>
              </li>
              <li className="flex flex-row justify-start items-start gap-1 text-left">
                <p className="font-roboto text-[#525D7B] text-base">
                  <p className="text-base text-[#007700] font-roboto">
                    Raporlama ve Veri Analizi:
                  </p>
                  Okul yönetimleri, öğrenci ve şoför verilerini günlük, haftalık
                  veya aylık olarak analiz eder ve raporlar. Öğrenci sayısındaki
                  artış ya da azalış, güzergah performansı ve yoğun servis
                  saatleri gibi veriler sayesinde okul yönetimi daha etkin
                  planlamalar yapabilir.
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="h-56 w-56 group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms]"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#0B05BA] transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#0B05BA] transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#0B05BA] transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#0B05BA] transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Example;
