import Image from "next/image";
import Banner from "./components/homepage/Banner";
import FriendsSection from "./components/homepage/Friends";

export default function Home() {
  return (
    <div>
      <div className="py-20 bg-[#F8FAFC]">
        <Banner />
        <FriendsSection />
      </div>
    </div>
  );
}
