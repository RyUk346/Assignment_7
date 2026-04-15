import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const FriendCard = ({ friend }) => {
  return (
    <Link href={`/apps/${friend.id}`} className="card bg-base-100 shadow-sm">
      <figure className="">
        <Image
          src={friend.picture}
          alt={friend.name}
          height={200}
          width={200}
          className="h-[200px] w-auto"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{friend.name}</h2>
      </div>
    </Link>
  );
};

export default FriendCard;
