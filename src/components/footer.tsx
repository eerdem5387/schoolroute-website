import { div } from "framer-motion/client";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#8B8EAF]  mt-10">
      <div className="w-full flex flex-col md:gap-10">
        <div className="w-full flex flex-col md:flex-row p-10 md:justify-between justify-center gap-7 md:gap-0">
          <div className="flex flex-row md:flex-col md:gap-10 justify-center gap-5">
            <a
              href="https://apps.apple.com/tr/app/school-route/id6736696561?l=tr"
              target="_blank"
            >
              <Image
                src="/images/app-store.svg"
                alt="School Route Logo"
                width={202}
                height={49}
                className="hidden md:block"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.schoolbusmobile"
              target="_blank"
            >
              <Image
                src="/images/app-store.svg"
                alt="School Route Logo"
                width={86}
                height={21}
                className="block md:hidden"
              />
            </a>
            <a
              href="https://apps.apple.com/tr/app/school-route/id6736696561?l=tr"
              target="_blank"
            >
              <Image
                src="/images/google-play.svg"
                alt="School Route Logo"
                width={202}
                height={49}
                className="hidden md:block"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.schoolbusmobile"
              target="_blank"
            >
              <Image
                src="/images/google-play.svg"
                alt="School Route Logo"
                width={86}
                height={21}
                className="block md:hidden"
              />
            </a>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div>
              <Image
                src="/images/footer-logo.svg"
                alt="FooterLogo"
                width={76}
                height={76}
                className=""
              />
            </div>
            <div>
              <Image
                src="/images/schoolroute-text.svg"
                alt="FooterLogo"
                width={230}
                height={26}
                className=""
              />
            </div>
            <span className="font-roboto text-xl font-semibold text-[#002B4B]">
              YAKIN BOĞAZ
            </span>
            <span className="font-roboto text-base text-[#002B4B] font-normal">
              MADE BY STRAJEDİ
            </span>
          </div>
          <div className="flex flex-col md:items-end gap-3 items-center">
            <a
              href="#"
              className="font-roboto text-[#525D7B] text-base font-semibold"
            >
              Çerez Politikası
            </a>
            <a
              href="#"
              className="font-roboto text-[#525D7B] text-base font-semibold"
            >
              Kullanıcı ve Gizlilik Politikası
            </a>
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
        <div className="w-full">
          <Image
            src="/images/footer-bus.png"
            alt="FooterImage"
            width={1920}
            height={152}
            className="hidden md:block"
          />
          <Image
            src="/images/footer-mobil.png"
            alt="FooterImage"
            width={744}
            height={59}
            className="block md:hidden"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
