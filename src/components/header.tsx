import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full bg-[#FFFEFD] p-4 flex flex-row md:h-36 items-center justify-between">
      <Image
        src="/images/logo.svg"
        alt="School Route Logo"
        width={100}
        height={100}
        className="hidden md:block h-24 w-24 items-start justify-start"
      />
      <Image
        src="/images/mobil-logo.svg"
        alt="School Route Logo"
        width={106}
        height={44}
        className="block md:hidden h-11 w-24 items-start justify-start"
      />
      <nav className="hidden w-full md:flex flex-row justify-center items-center gap-20  font-roboto">
        <ul className="flex text-center gap-10 w-1/2 items-center justify-center text-[#525D7B] font-semibold text-base">
          <li>
            <a href="#" className="hover:text-[#0B05BA]">
              KİMLER İÇİN
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#0B05BA]">
              NASIL ÇALIŞIR?
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#0B05BA]">
              REFERANSLAR
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#0B05BA]">
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
              width={165}
              height={40}
              className=" items-start justify-start"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.schoolbusmobile"
            target="_blank"
          >
            <Image
              src="/images/google-play.svg"
              alt="App Store"
              width={165}
              height={40}
              className=" items-start justify-start"
            />
          </a>
        </div>
        <div className="w-1/12 p-3 flex justify-center items-center bg-[#0B05BA] text-[#FFFEFD] rounded-md">
          <button>Giriş Yap</button>
        </div>
      </nav>
      <div className="flex md:hidden justify-between items-center bg-transpara">
        <button
          className="text-2xl text-[#525D7B]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-white shadow-lg z-10">
          <ul className="flex flex-row gap-5 p-5 text-center text-[#525D7B] font-semibold text-base w-full">
            <div className="flex flex-col justify-between gap-3 w-full">
              <li>
                <a href="#" className="hover:text-[#0B05BA]">
                  KİMLER İÇİN
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0B05BA]">
                  NASIL ÇALIŞIR?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0B05BA]">
                  REFERANSLAR
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0B05BA]">
                  İLETİŞİM
                </a>
              </li>
              <li className="flex justify-center gap-4">
                <a
                  href="https://apps.apple.com/tr/app/school-route/id6736696561?l=tr"
                  target="_blank"
                >
                  <Image
                    src="/images/app-store.svg"
                    alt="App Store"
                    width={120}
                    height={30}
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.schoolbusmobile"
                  target="_blank"
                >
                  <Image
                    src="/images/google-play.svg"
                    alt="Google Play"
                    width={120}
                    height={30}
                  />
                </a>
              </li>
            </div>
            <div className="flex justify-end items-start">
              <button
                className="text-2xl text-[#525D7B]"
                onClick={() => setIsMenuOpen(false)}
              >
                ✕
              </button>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
