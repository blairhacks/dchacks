import { HiOutlineRocketLaunch } from "react-icons/hi2";

import { Hero } from "@/components/Hero";
import { Anta } from "next/font/google";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className="bg-bg">
      <Hero />
      <div className="mx-auto h-[100vh] max-w-7xl p-8">
        <div className="mt-8 flex flex-row justify-center">
          <h1
            className={`${anta.className} bg-gradient-p bg-clip-text text-5xl text-transparent`}
          >
            About Us
          </h1>
        </div>
        <div className="mt-16 flex flex-row items-center justify-between">
          <div className="text-p flex w-lg flex-col items-center justify-center gap-y-4">
            <div className="rounded-full border-2 p-3">
              <HiOutlineRocketLaunch size="32px" />
            </div>
            <p className="text-center text-3xl">Our Mission</p>
          </div>
          <div className="bg-gradient-s flex w-lg flex-row items-center justify-center rounded-2xl p-8">
            <p className="text-p text-center text-lg">
              Our mission is to inspire students to innovate and build using
              technology while creating a sense of community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
