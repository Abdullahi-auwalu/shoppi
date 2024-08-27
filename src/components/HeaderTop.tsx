import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top_icon_wrapper">
              <FaFacebook />
            </div>
            <div className="header_top_icon_wrapper">
              <FaInstagramSquare />
            </div>
            <div className="header_top_icon_wrapper">
              <FaSquareTwitter />
            </div>
            <div className="header_top_icon_wrapper">
              <FaLinkedin />
            </div>
          </div>

          <div className="text-gray-500 text-[12px]">
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
          </div>

          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[70px] outline-none cursor-pointer"
              name="currency"
              id="currency"
            >
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
              <option value="NGN ₦">NGN ₦</option>
            </select>

            <select
              className="text-gray-500 text-[12px] w-[80px] outline-none cursor-pointer"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
