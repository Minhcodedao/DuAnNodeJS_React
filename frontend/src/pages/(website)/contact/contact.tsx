import React from "react";

const ContactPage = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Thông tin liên hệ</h2>
          <p className="mb-2">
            <strong>Địa chỉ:</strong> Số 12A, Đường Lê Quang Đạo, Quận Nam Từ Liêm, Thành phố Hà Nội
          </p>
          <p className="mb-2">
            <strong>Điện thoại:</strong> 0377961716
          </p>
          <p className="mb-2">
            <strong>Email:</strong> minhtoyotabla@gmail.com
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">Bản đồ</h2>
          <div className="relative h-0" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.0744387479817!2d106.39905867397178!3d20.46213558104916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135fb0c1ab24567%3A0xe9d74c39db12cebc!2zxJDDoSB44bq7IE1pbmggSGnhur91!5e0!3m2!1svi!2s!4v1712393024215!5m2!1svi!2s"
              width="600"
              height="450"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
