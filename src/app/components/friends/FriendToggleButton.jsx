"use client";
import { FriendsContext } from "@/context/context";
import React, { useContext } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { PiChatDotsBold, PiVideoCamera } from "react-icons/pi";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const FriendToggleButton = ({ friend }) => {
  const { addToTimeline } = useContext(FriendsContext);

  const handleAdd = (type) => {
    addToTimeline(type, friend);

    toast.success(
      `${type.charAt(0).toUpperCase() + type.slice(1)} with ${friend.name}`,
    );
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <button
        onClick={() => handleAdd("call")}
        className="btn flex flex-col p-4 h-24"
      >
        <FiPhoneCall className="text-3xl" />
        <h2 className="text-lg text-[#1F2937]">Call</h2>
      </button>

      <button
        onClick={() => handleAdd("text")}
        className="btn flex flex-col p-4 h-24"
      >
        <PiChatDotsBold className="text-3xl" />
        <h2 className="text-lg text-[#1F2937]">Text</h2>
      </button>

      <button
        onClick={() => handleAdd("video")}
        className="btn flex flex-col p-4 h-24"
      >
        <PiVideoCamera className="text-3xl" />
        <h2 className="text-lg text-[#1F2937]">Video</h2>
      </button>
    </div>
  );
};

export default FriendToggleButton;
