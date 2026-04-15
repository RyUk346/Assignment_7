import Image from "next/image";
import Banner from "./components/homepage/Banner";
import FriendsSection from "./components/homepage/Friends";

export default function Home() {
  return (
    <div>
      <Banner />
      <FriendsSection />
    </div>
  );
}
