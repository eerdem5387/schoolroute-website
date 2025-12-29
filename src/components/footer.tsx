import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#8B8EAF] mt-6 md:mt-10" role="contentinfo">
      <div className="w-full flex flex-col md:gap-10">
        <motion.div 
          className="w-full flex flex-col md:flex-row p-6 md:p-10 md:justify-between justify-center gap-6 md:gap-0"
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
          {/* App Store Links */}
          <motion.div 
            className="flex flex-row md:flex-col md:gap-10 justify-center gap-5"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <a 
              href="https://apps.apple.com/tr/app/school-route/id6736696561?l=tr" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="App Store'dan indir"
              className="focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 rounded"
            >
              <Image
                src="/images/app-store.svg"
                alt="App Store'dan indir"
                width={140}
                height={34}
                className="hidden md:block"
              />
              <Image
                src="/images/app-store.svg"
                alt="App Store'dan indir"
                width={72}
                height={19}
                className="block md:hidden"
              />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.schoolbusmobile" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Play'den indir"
              className="focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 rounded"
            >
              <Image
                src="/images/google-play.svg"
                alt="Google Play'den indir"
                width={140}
                height={34}
                className="hidden md:block"
              />
              <Image
                src="/images/google-play.svg"
                alt="Google Play'den indir"
                width={72}
                height={19}
                className="block md:hidden"
              />
            </a>
          </motion.div>

          {/* Center Logo and Text */}
          <motion.div 
            className="flex flex-col justify-center items-center gap-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div>
              <Image
                src="/images/footer-logo.svg"
                alt="FooterLogo"
                width={76}
                height={76}
              />
            </div>
            <div>
              <Image
                src="/images/schoolroute-text.svg"
                alt="FooterLogo"
                width={230}
                height={26}
              />
            </div>
            <div className="flex flex-col items-center gap-1 px-4">
              <span className="font-roboto text-sm sm:text-base text-[#002B4B] font-normal text-center">
                School Route bir Yakın Boğaz Projesidir.
              </span>
              <span className="font-roboto text-xs sm:text-sm text-[#002B4B] font-normal text-center">
                Tüm hakları saklıdır © 2024
              </span>
            </div>
          </motion.div>

          {/* Right Links and Social Media */}
          <motion.div 
            className="flex flex-col md:items-end gap-3 items-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <a 
              href="/privacy-policy" 
              className="font-roboto text-[#525D7B] text-sm sm:text-base font-semibold hover:text-[#0B05BA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 rounded px-2 text-center"
            >
              Çerez Politikası
            </a>
            <a 
              href="/privacy-policy" 
              className="font-roboto text-[#525D7B] text-sm sm:text-base font-semibold hover:text-[#0B05BA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 rounded px-2 text-center"
            >
              Kullanıcı ve Gizlilik Politikası
            </a>
            <div className="flex flex-row gap-2">
              <a 
                href="https://www.linkedin.com/company/school-route/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn sayfamızı ziyaret et"
                className="focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 rounded"
              >
                <Image
                  src="/images/linkedin.svg"
                  alt="LinkedIn"
                  width={48}
                  height={48}
                />
              </a>
              <a 
                href="https://www.instagram.com/schoolroute.app/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram sayfamızı ziyaret et"
                className="focus:outline-none focus:ring-2 focus:ring-[#0B05BA] focus:ring-offset-2 rounded"
              >
                <Image
                  src="/images/instagram.svg"
                  alt="Instagram"
                  width={48}
                  height={48}
                />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bus Image */}
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
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
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
