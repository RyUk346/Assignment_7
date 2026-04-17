"use client";
import React, { useState, useEffect } from "react";
import { ClockLoader, HashLoader, PulseLoader } from "react-spinners";
import FriendCard from "../ui/FriendCard";

// Fetching friends data
const friendPromise = async function () {
  const res = await fetch("https://assignment-7-ph.vercel.app/friends.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const FriendsSection = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriendsData = async () => {
      setLoading(true);
      const fetchedFriends = await friendPromise();
      setFriends(fetchedFriends);
      setLoading(false);
    };

    fetchFriendsData();
  }, []);

  return (
    <div className="container mx-auto pt-10 p-4">
      <div className="mb-8">
        <h2 className="font-semibold text-2xl">Your Friends</h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <PulseLoader color="#244D3F" size={10} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {friends.map((friend, ind) => (
            <FriendCard friend={friend} key={ind} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsSection;
