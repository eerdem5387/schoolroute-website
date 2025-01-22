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
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#FFFEFD] shadow-sm p-4 flex flex-row md:h-28 items-center justify-between">
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
      <nav className="hidden w-full md:flex flex-row justify-center items-center gap-20 font-roboto">
        <ul className="flex text-center gap-10 w-1/2 items-center justify-center text-[#525D7B] font-semibold text-base">
          <li>
            <a href="#kimler-icin" className="hover:text-[#0B05BA]">
              KİMLER İÇİN
            </a>
          </li>
          <li>
            <a href="#nasil-calisir" className="hover:text-[#0B05BA]">
              NASIL ÇALIŞIR?
            </a>
          </li>
          <li>
            <a href="#referanslar" className="hover:text-[#0B05BA]">
              REFERANSLAR
            </a>
          </li>
          <li>
            <a href="#iletisim" className="hover:text-[#0B05BA]">
              İLETİŞİM
            </a>
          </li>
        </ul>
        <div className="flex flex-row gap-10">
          <a
            href="https://apps.apple.com/tr/app/school-route/id6736696561?l=tr"
            target="_blank"
          >
            <Image
              src="/images/app-store.svg"
              alt="App Store"
              width={140}
              height={34}
              className="items-start justify-start"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.schoolbusmobile"
            target="_blank"
          >
            <Image
              src="/images/google-play.svg"
              alt="App Store"
              width={140}
              height={34}
              className="items-start justify-start"
            />
          </a>
        </div>
        <div className="w-1/12 p-3 flex justify-center items-center bg-[#0B05BA] text-[#FFFEFD] rounded-md">
          <a href="https://admin-j2kjfrifbq-ez.a.run.app/">Giriş Yap</a>
        </div>
      </nav>
      <div className="flex md:hidden justify-between items-center">
        <button
          className="text-2xl text-[#525D7B]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <Image
              src="/images/close-icon.svg"
              alt="Close Menu"
              width={24}
              height={24}
            />
          ) : (
            "☰"
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-[#F0EDFF] shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        } ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div className="p-6">
          <div className="flex">
            {/* Menu Items */}
            <ul className="w-1/2 space-y-4">
              <li>
                <a 
                  href="#kimler-icin" 
                  className="text-base font-roboto text-[#525D7B]" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kimler İçin
                </a>
              </li>
              <li>
                <a 
                  href="#nasil-calisir" 
                  className="text-base font-roboto text-[#525D7B]" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nasıl Çalışır?
                </a>
              </li>
              <li>
                <a 
                  href="#referanslar" 
                  className="text-base font-roboto text-[#525D7B]" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Referanslar
                </a>
              </li>
              <li>
                <a 
                  href="#ucretlendirme" 
                  className="text-base font-roboto text-[#525D7B]" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ücretlendirme
                </a>
              </li>
            </ul>

            {/* Store Links */}
            <div className="w-1/2 flex flex-col justify-center items-end space-y-3">
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
