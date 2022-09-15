import React from "react";
import { JumiaLogo } from "../imports/Imports";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__section__one">
          <h3>
            Jumia: Online Shopping in Nigeria - No. 1 Shopping Destination
          </h3>

          <p>
            Jumia is your number one online shopping site in Nigeria. We are an
            online store where you can purchase all your electronics, as well as
            books, home appliances, kiddies items, fashion items for men, women,
            and children; cool gadgets, computers, groceries, automobile parts,
            and more on the go. What more? You can have them delivered directly
            to you. Shop online with great ease as you pay with JumiaPay which
            guarantees you the safest online shopping payment method, allowing
            you to make stress free payments. Whatever it is you wish to buy,
            Jumia offers you all and lots more at prices which you can trust.
            Jumia has payment options for everyone irrespective of taste, class,
            and preferences. Here, you also have the option to make your payment
            on delivery for extra convenience. Shopping online in Nigeria is
            easy and convenient with Jumia. We provide you with a wide range of
            products you can trust. Take part in the deals of the day and
            discover the best prices on a wide range of products.
          </p>

          <p>
            Protect yourself from getting sick by avoiding unprotected and
            unsolicited contact with sick people. Shop surgical masks,
            thermometers, hand sanitizers, wipes, purifiers, hand wash,
            disinfectants, and surgical hand gloves and other household
            essentialsat competitive prices on Jumia Nigeria. Get discounts on a
            large collection of different items when you pick one today and do
            not forget to shop groceries online from our top grocery items here
            on Jumia Nigeria either. Shop for safety items here on Jumia Nigeria
          </p>

          <p>
            Official Stores is here! You can now shop several genuine & 100%
            Authentic products from Top Brands: Samsung, Apple, Microsoft ,
            Michelin Tyres, Scanfrost HP , P&G Intel, Xiaomiand more shipped to
            you directly from official distributors with full warranty and
            returns available up to 15 days.
          </p>

          <h3>
            Buy Mobile Phones, Fashion, Electronics, Appliances & more on Jumia
          </h3>

          <p>
            Be in the loop this year with new products and offers from Jumia.
            Brand your home with various electronics and home and office
            appliances from Binatone, Panasonic, Samsung, Toshiba, Sony, and LG.
            Get top phone brands all the latest gadgets and devices for school
            projects from brands like HP, IMose, Lenovo, Samsung, and Apple with
            no hassles as you enjoy fast delivery service even to your
            institution. Jumia Nigeria also offers the latest innovative mobile
            phones such as Tecno Spark 4, Samsung A51 , Samsung S20, Samsung S20
            Plus, Samsung S20 Ultra Gionee M11, Tecno Camon 12, Tecno Camon 12
            Pro, Samsung A30, Infinix Hot 8, Nokia 7.2, Xiaomi Note 10 Pro,
            iPhone 11, iPhone 11 Pro Max, Huawei Y9s, Samsung S9, as well as the
            latest Samsung S10 series , Samsung Note 10 & 10+, Samsung Note 10
            Lite, Samsung A71, Samsung S20 Phones, Samsung S20, Tecno Camon 15,
            Samsung S20 Plus, Samsung S20 Ultra and more. Also take advantage of
            computing products available to own laptops like the Dell Inspiron,
            printers and other storage devices such as hard drives at affordable
            prices. Get Professional Services online like insurance services,
            medical services, IT Training, educational services and so much
            more.
          </p>

          <p>
            Jumia Nigeria offers deals and discounts and never ceases to form
            campaigns all year around, all for the satisfaction and joy of our
            customers. Our newsletter subscribers and Facebook fans get to know
            all of our offers before anyone else such as Mobile & Tech Week,
            Ramadan, and Jumia Anniversary.
          </p>
        </div>

        <div className="footer__section__two">
          <div className="footer__section__two__first">
            <img src={JumiaLogo} alt="" />
          </div>

          <div className="footer__section__two__second">
            <h3>NEW TO JUMIA?</h3>
            <p>
              Subscribe to our newsletter to get updates on our latest offers!
            </p>
          </div>

          <div className="footer__section__two__third">
            <h3>DOWNLOAD JUMIA FREE APP</h3>

            <p>Get access to exclusive offers!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
