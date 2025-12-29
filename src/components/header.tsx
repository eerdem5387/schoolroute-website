import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#FFFEFD] shadow-sm px-4 py-3 md:p-4 flex flex-row md:h-28 items-center justify-between" role="banner">
      <div className="flex items-center">
        <div onClick={scrollToTop} className="cursor-pointer">
          <Image
            src="/images/logo.svg"
            alt="School Route Logo"
            width={100}
            height={100}
            className="hidden md:block h-20 w-20 items-start justify-start"
          />
          <Image
            src="/images/mobil-logo.svg"
            alt="School Route Logo"
            width={106}
            height={44}
            className="block md:hidden h-11 w-24 items-start justify-start"
          />
        </div>
      </div>
      <nav className="hidden w-full md:flex flex-row justify-center items-center gap-20 font-roboto" aria-label="Ana navigasyon">
        <ul className="flex text-center gap-10 w-1/2 items-center justify-center text-[#525D7B] font-semibold text-base">
          <li>
            <a 
              href="#kimler-icin" 
              className="hover:text-[#0B05BA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 rounded px-2"
              aria-label="Kimler İçin bölümüne git"
            >
              KİMLER İÇİN
            </a>
          </li>
          <li>
            <a 
              href="#nasil-calisir" 
              className="hover:text-[#0B05BA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 rounded px-2"
              aria-label="Nasıl Çalışır bölümüne git"
            >
              NASIL ÇALIŞIR?
            </a>
          </li>
          <li>
            <a 
              href="#referanslar" 
              className="hover:text-[#0B05BA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 rounded px-2"
              aria-label="Referanslar bölümüne git"
            >
              REFERANSLAR
            </a>
          </li>
          <li>
            <a 
              href="#iletisim" 
              className="hover:text-[#0B05BA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 rounded px-2"
              aria-label="İletişim bölümüne git"
            >
              İLETİŞİM
            </a>
          </li>
        </ul>
        <div className="flex flex-row gap-10">
          <a
            href="https://apps.apple.com/tr/app/school-route/id6736696561?l=tr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="App Store'dan indir"
          >
            <Image
              src="/images/app-store.svg"
              alt="App Store'dan indir"
              width={140}
              height={34}
              className="items-start justify-start"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.schoolbusmobile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Play'den indir"
          >
            <Image
              src="/images/google-play.svg"
              alt="Google Play'den indir"
              width={140}
              height={34}
              className="items-start justify-start"
            />
          </a>
        </div>
        <div className="w-1/12 p-3 flex justify-center items-center bg-[#0B05BA] text-[#FFFEFD] rounded-md hover:bg-[#0B05BA]/90 transition-colors">
          <a 
            href="https://admin-j2kjfrifbq-ez.a.run.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none focus:ring-2 focus:ring-[#FFFEFD] focus:ring-offset-2 rounded px-2"
            aria-label="Admin paneline giriş yap"
          >
            Giriş Yap
          </a>
        </div>
      </nav>
      <div className="flex md:hidden justify-between items-center">
        <button
          className="text-2xl text-[#525D7B] p-2 focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <Image
              src="/images/close-icon.svg"
              alt="Menüyü kapat"
              width={24}
              height={24}
            />
          ) : (
            <span aria-hidden="true">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-[#F0EDFF] shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        } ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        role="menu"
        aria-hidden={!isMenuOpen}
      >
        <div className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-0">
            {/* Menu Items */}
            <ul className="w-full md:w-1/2 space-y-3 md:space-y-4" role="menubar">
              <li role="none">
                <a 
                  href="#kimler-icin" 
                  className="text-base font-roboto text-[#525D7B] hover:text-[#0B05BA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 rounded px-2" 
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                >
                  Kimler İçin
                </a>
              </li>
              <li role="none">
                <a 
                  href="#nasil-calisir" 
                  className="text-base font-roboto text-[#525D7B] hover:text-[#0B05BA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 rounded px-2" 
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                >
                  Nasıl Çalışır?
                </a>
              </li>
              <li role="none">
                <a 
                  href="#referanslar" 
                  className="text-base font-roboto text-[#525D7B] hover:text-[#0B05BA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 rounded px-2" 
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                >
                  Referanslar
                </a>
              </li>
              <li role="none">
                <a 
                  href="#iletisim" 
                  className="text-base font-roboto text-[#525D7B] hover:text-[#0B05BA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 rounded px-2" 
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                >
                  İletişim
                </a>
              </li>
            </ul>

            {/* Store Links */}
            <div className="w-full md:w-1/2 flex flex-row md:flex-col justify-center md:justify-end items-center md:items-end gap-4 md:gap-0 md:space-y-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.schoolbusmobile"
                target="_blank"
              >
                <Image
                  src="/images/google-play.svg"
                  alt="Google Play"
                  width={86}
                  height={26}
                />
              </a>
              <a
                href="https://apps.apple.com/tr/app/school-route/id6736696561?l=tr"
                target="_blank"
              >
                <Image
                  src="/images/app-store.svg"
                  alt="App Store"
                  width={86}
                  height={26}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
