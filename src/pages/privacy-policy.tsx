import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Privacy = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <div className="w-full flex flex-col gap-5 px-10">
        <span className="text-[#0B05BA] font-nunito text-3xl font-bold">
          Gizlilik Politikası
        </span>
        <span className="font-nunito text-xl flex flex-col">
          <span className="text-[#0B05BA]">Giriş</span>
          <span className="text-[#525D7B]">
            Bu gizlilik politikası, "SchoolRoute" uygulamasını kullanarak
            topladığımız bilgileri ve bu bilgileri nasıl kullandığımızı
            açıklamaktadır.
          </span>
        </span>
        <span className="font-nunito text-xl flex flex-col">
          <span className="text-[#0B05BA]">Toplanan Bilgiler </span>
          <span className="text-[#525D7B]">
            Uygulamamız, kullanıcıların konum bilgilerini toplar. Ayrıca,
            kullanıcı adı, e-posta adresi ve telefon numarası gibi kişisel
            bilgileri de toplayabiliriz.
          </span>
        </span>
        <span className="font-nunito text-xl flex flex-col">
          <span className="text-[#0B05BA]">Kullanıcı Doğrulaması </span>
          <span className="text-[#525D7B]">
            Uygulamamızda kullanıcıların güvenliğini sağlamak için kullanıcı
            doğrulama süreçleri uygulanmaktadır. Bu süreç, kullanıcıların
            kimliklerini doğrulamak ve sadece yetkili kişilerin uygulamayı
            kullanmasını sağlamak amacıyla kullanılmaktadır.
          </span>
        </span>
        <span className="font-nunito text-xl flex flex-col">
          <span className="text-[#0B05BA]">Bilgilerin Kullanımı </span>
          <span className="text-[#525D7B]">
            Topladığımız bilgileri, kullanıcıların güvenliğini sağlamak ve
            uygulamamızı geliştirmek amacıyla kullanmaktayız.
          </span>
        </span>
        <span className="font-nunito text-xl flex flex-col">
          <span className="text-[#0B05BA]">Bilgilerin Paylaşımı </span>
          <span className="text-[#525D7B]">
            Kullanıcı bilgileriniz, yalnızca yasal gereklilikler doğrultusunda
            ve kullanıcıların güvenliğini sağlamak amacıyla gerekli olan üçüncü
            şahıslarla paylaşılabilir.
          </span>
        </span>
        <span className="font-nunito text-xl flex flex-col">
          <span className="text-[#0B05BA]">Veri Güvenliği</span>
          <span className="text-[#525D7B]">
            Kullanıcı bilgilerinin güvenliği için çeşitli güvenlik önlemleri
            almakta ve verilerinizi korumak için elimizden geleni yapmaktayız.
          </span>
        </span>
        <span className="font-nunito text-xl flex flex-col">
          <span className="text-[#0B05BA]">Kullanıcı Hakları</span>
          <span className="text-[#525D7B]">
            Kullanıcılar, kendi kişisel bilgilerine erişim sağlama, bilgilerini
            düzeltme ve silme haklarına sahiptir.
          </span>
        </span>
        <span className="font-nunito text-xl flex flex-col">
          <span className="text-[#0B05BA]">
            Gizlilik Politikasındaki Değişiklikler
          </span>
          <span className="text-[#525D7B]">
            Gizlilik politikamızda yapacağımız değişiklikler hakkında
            kullanıcıları bilgilendireceğiz.
          </span>
        </span>
        <span className="font-nunito text-xl flex flex-col">
          <span className="text-[#0B05BA]">İletişim Bilgileri</span>
          <span className="text-[#525D7B]">
            Herhangi bir sorunuz varsa, lütfen bizimle{" "}
            <span className="text-[#0B05BA]">info@schoolroute.net</span> adresi
            üzerinden iletişime geçin.
          </span>
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
