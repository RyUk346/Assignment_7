// import logoImg from "@/assets/img/logo.png";
// import { FaGithub } from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";

import Image from "next/image";
import MyLink from "./MyLink";

import { IoTimeOutline } from "react-icons/io5";
import { PiChartLine } from "react-icons/pi";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
      icon: <RiHome2Line />,
    },
    {
      path: "/timeline",
      text: "Timeline",
      icon: <IoTimeOutline />,
    },
    {
      path: "/stats",
      text: "Stats",
      icon: <PiChartLine />,
    },
  ];

  return (
    <nav className=" shadow border-b border-[#E9E9E9]">
      <div className="flex justify-between gap-4 items-center py-4 container mx-auto px-2">
        {/* <Image
          src={logoImg}
          alt="PH play store logo"
          className="w-[50px] h-[50px]"
        /> */}
        <h2 className="font-extrabold text-2xl">
          Keen<span className="text-[#244D3F] font-semibold">Keeper</span>
        </h2>

        <ul className="flex justify-between items-center  ">
          {navItems.map((item, index) => (
            // Client component
            <MyLink key={index} href={item.path}>
              <div className="flex justify-center items-center gap-2 px-4 py-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-[16px] font-semibold hidden sm:flex">
                  {item.text}
                </span>
              </div>
            </MyLink>
          ))}

          {/* 
          <li>
            <MyNavLink to={"/"}>Home</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/apps"}>Apps</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/installedApps"}>Installation</MyNavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
