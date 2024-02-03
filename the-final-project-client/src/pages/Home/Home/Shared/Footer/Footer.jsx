import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row text-white">
        <div className="flex-1 space-y-5 text-center bg-[#1F2937] py-20">
          <h2 className="text-3xl font-medium">Contact Us</h2>
          <p>123 ABS Street, Uni 21, Bangladesh </p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className="flex-1 space-y-5 text-center bg-[#111827] py-20">
          <h2 className="text-3xl font-medium">Follow Us</h2>
          <p>Join us on social media</p>
          <div className="justify-center text-3xl flex items-center gap-5">
            <FaFacebookF />
            <IoLogoInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div>
        <p className="text-white bg-[#151515] font-medium text-center py-3">
          Copyright © CulinaryCloud. All rights reserved.
        </p>
      </div>
    </div>
  );
}
