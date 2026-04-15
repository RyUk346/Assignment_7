// import InstallToggleButton from "@/components/apps/InstallToggleButton";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import callIcon from "@/assets/call.png";
import { FiArchive, FiPhoneCall } from "react-icons/fi";
import {
  PiBellSimpleZBold,
  PiChatDotsBold,
  PiVideoCamera,
} from "react-icons/pi";
import { FaRegTrashAlt } from "react-icons/fa";
const friendPromise = async function () {
  const res = await fetch("http://localhost:3000/friends.json");
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const friends = await friendPromise();
  const friend = friends.find((friend) => String(friend.id) === id);

  if (!friend) {
    return {
      title: `Not found - PH play store`,
    };
  }

  return {
    title: `${friend.name} - PH play store`,
    description: friend.description,
  };
}

const friendDetailsPage = async ({ params }) => {
  const friends = await friendPromise();

  const { id } = await params;
  // console.log(id, "params");

  const friend = friends.find((friend) => String(friend.id) === id);
  // console.log(app, "apps");

  if (!friend) {
    notFound();
  }

  // const totalRatings = app.rating.reduce((sum, item) => sum + item.count, 0);
  //   let totalRatings = 0;
  //   app.ratings.forEach((rating) => {
  //     totalRatings += rating.count;
  //   });
  // console.log(totalRatings, "totalRatings");

  return (
    <main className="bg-[#F8FAFC]">
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-[0.6fr_1fr] lg:grid-cols-[0.4fr_0.9fr] ">
          <div>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl relative py-4">
              <figure className="flex items-center justify-center">
                <Image
                  src={friend.picture}
                  alt={friend.name}
                  height={80}
                  width={80}
                  className="h-20 w-auto rounded-full"
                />
              </figure>
              <div className="card-body items-center px-6 text-center">
                <h2 className="card-title text-[20px]">{friend.name}</h2>

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
                <p className="text-[#64748B] font-medium italic ">
                  {friend.bio}
                </p>
                <p className="text-[#64748B]">{friend.email}</p>
              </div>
            </div>
            <div className="space-y-2 py-4">
              <button className="btn gap-1 w-full bg-white border border-[#E9E9E9] rounded-sm">
                <PiBellSimpleZBold className="text-xl" />
                <h2 className="font-medium">Snooze 2 Weeks</h2>
              </button>
              <button className="btn gap-1 w-full bg-white border border-[#E9E9E9] rounded-sm">
                <FiArchive className="text-xl" />
                <h2 className="font-medium">Archive</h2>
              </button>
              <button className="btn gap-1 w-full bg-white border border-[#E9E9E9] rounded-sm text-[#EF4444]">
                <FaRegTrashAlt className="text-xl" />
                <h2 className="font-medium">Delete</h2>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center bg-white border border-white rounded-lg shadow-lg py-8 px-4 space-y-2">
                <h1 className="text-[#244D3F] font-semibold text-3xl">
                  {friend.days_since_contact}
                </h1>
                <p className="text-[#64748B]">Days Since Contact</p>
              </div>
              <div className="text-center bg-white border border-white rounded-lg shadow-lg py-8 px-4 space-y-2">
                <h1 className="text-[#244D3F] font-semibold text-3xl">
                  {friend.goal}
                </h1>
                <p className="text-[#64748B]">Goal (Days)</p>
              </div>
              <div className="text-center bg-white border border-white rounded-lg shadow-lg py-8 px-4 space-y-2">
                <h1 className="text-[#244D3F] font-semibold text-3xl">
                  {friend.next_due_date}
                </h1>
                <p className="text-[#64748B]">Next Due</p>
              </div>
            </div>
            <div className="bg-white border border-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between">
                <h2 className="text-[#244D3F] font-medium text-xl">
                  Relationship Goal
                </h2>
                <button className="btn">Edit</button>
              </div>
              <h2 className="text-[#64748B] text-lg">
                Connect every{" "}
                <span className="text-[#1F2937] font-bold">
                  {friend.goal} days
                </span>
              </h2>
            </div>
            <div className="bg-white border border-white rounded-lg shadow-lg p-6 space-y-4">
              <h2 className="text-[#244D3F] font-medium text-xl">
                Quick Check-In
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <button className="btn flex flex-col p-4 h-24">
                  <FiPhoneCall className="text-3xl" />
                  <h2 className="text-lg text-[#1F2937]">Call</h2>
                </button>
                <button className="btn flex flex-col p-4 h-24">
                  <PiChatDotsBold className="text-3xl" />
                  <h2 className="text-lg text-[#1F2937]">Text</h2>
                </button>
                <button className="btn flex flex-col p-4 h-24">
                  <PiVideoCamera className="text-3xl" />
                  <h2 className="text-lg text-[#1F2937]">Call</h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default friendDetailsPage;
