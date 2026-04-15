// "use client";
import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import Link from "next/link";
import FriendCard from "../ui/FriendCard";
// import useApps from "@/hooks/useApps";

// import { useLoaderData } from "react-router";

const friendPromise = async function () {
  const res = await fetch("http://localhost:3000/friends.json");
  const data = await res.json();
  return data;
};

const FriendsSection = async ({ from }) => {
  const friends = await friendPromise();

  return (
    <div className="container mx-auto  pt-10">
      {/* Section header */}
      <div className="mb-8">
        <h2 className="font-semibold text-2xl">Your Friends</h2>
      </div>
      {/* {loading ? (
        <div className="flex justify-center items-center"> */}
      {/* <HashLoader color="#ad46ff" /> */}
      {/* Loading......
        </div>
      ) : ( */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {friends.map((friend, ind) => {
          return <FriendCard friend={friend} key={ind} />;
        })}
      </div>
      {/* )} */}
    </div>
  );
};

export default FriendsSection;
