import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-white p-10">
        <aside>
          <h1 className="text-5xl font-bold">KeenKeeper</h1>
          <p className="">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <h1 className="font-medium text-[20px] mb-4">Social Links</h1>
          <div className="grid grid-flow-col gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <AiFillInstagram className="text-black w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <FaSquareFacebook className="text-black w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <FaXTwitter className="text-black w-5 h-5" />
            </div>
          </div>
        </nav>
        <div className="footer sm:footer-horizontal border-t border-[#FAFAFA20] text-[#FAFAFA] font-normal items-center p-4">
          <aside className="grid-flow-col items-center">
            <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a>
              <h1>Privacy Policy</h1>
            </a>
            <a>
              <h1>Terms of Service</h1>
            </a>
            <a>
              <h1>Cookies</h1>
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
