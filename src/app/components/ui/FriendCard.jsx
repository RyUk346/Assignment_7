import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const FriendCard = ({ friend }) => {
  return (
    <Link
      href={`/friends/${friend.id}`}
      className="card bg-base-100 shadow-sm py-6"
    >
      <figure className="">
        <Image
          src={friend.picture}
          alt={friend.name}
          height={80}
          width={80}
          className="h-20 w-auto rounded-full"
        />
      </figure>
      <div className="card-body items-center px-6">
        <h2 className="card-title text-[20px]">{friend.name}</h2>
        <p className="text-12px text-[#64748B]">
          {friend.days_since_contact}d ago
        </p>
        <div className="flex gap-2 flex-wrap justify-center">
          {friend.tags.map((tag, ind) => {
            return (
              <div
                tag={tag}
                key={ind}
                className="bg-[#CBFADB] text-[#1F2937] font-medium p-2 rounded-full px-3 uppercase whitespace-nowrap"
              >
                {tag}
              </div>
            );
          })}
        </div>
        <div>
          <p
            className={`text-white font-medium p-2 rounded-full px-4 capitalize ${friend.status === "overdue" ? "bg-[#EF4444]" : friend.status === "On-Track" ? "bg-[#244D3F]" : friend.status === "Almost Due" ? "bg-[#EFAD44]" : ""}`}
          >
            {friend.status}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
