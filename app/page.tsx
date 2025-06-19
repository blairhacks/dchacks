import {
  HiOutlineAcademicCap,
  HiOutlineCalendarDateRange,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import { Hero } from "@/components/Hero";
import { Anta } from "next/font/google";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className="bg-bg">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <linearGradient
          id="primary-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop stopColor="var(--color-grad-p-from)" offset="0%" />
          <stop stopColor="var(--color-grad-p-to)" offset="100%" />
        </linearGradient>
      </svg>
      <Hero />
      <div className="mx-auto min-h-[100vh] max-w-7xl p-8 py-24">
        <div className="flex flex-row justify-center">
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
            <p className="text-p text-center text-xl">
              Our mission is to inspire students to innovate and build using
              technology while creating a sense of community.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 flex flex-row justify-center">
          <p className="text-p text-3xl">
            Join us for a 2-day hackathon this October for all secondary
            students.
          </p>
        </div>
        <div className="mt-20 mr-auto max-w-3/5 text-left">
          <div className="text-p">
            <div className="flex flex-row items-end justify-start gap-x-4 pb-4">
              <HiOutlineCalendarDateRange
                size="80px"
                style={{ stroke: "url(#primary-gradient)" }}
                fill="none"
              />
              <h2 className="pb-1 text-3xl">Details Coming Soon!</h2>
            </div>
            <p className="text-xl">
              <b>Where:</b> In or near Washington, DC metro area <br />
              <b>Date:</b> A weekend in late October to early November <br />
              <b>Time:</b> Saturday Morning to Sunday Evening <br />
              <b>Format:</b> Virtual (day 1), In-person (day 2) <br />
              <b>Theme:</b> TBD! Submit theme suggestions here! <br />
              <br />
              <b>We are looking for more team members. Join us below!</b>
            </p>
          </div>
        </div>
        <div className="mt-20 ml-auto max-w-3/5 text-right">
          <div className="text-p">
            <div className="flex flex-row items-end justify-end gap-x-4 pb-4">
              <h2 className="pb-1 text-3xl">All students may participate!</h2>
              <HiOutlineAcademicCap
                size="80px"
                style={{ stroke: "url(#primary-gradient)" }}
                fill="none"
              />
            </div>
            <p className="text-xl">
              Have you never touched a code editor before? Or, have you deployed
              4 apps on the App Store? <br />
              <br />
              Doesn't matter!{" "}
              <b>
                Secondary students of{" "}
                <span className="bg-gradient-p bg-clip-text text-transparent">
                  all skill levels
                </span>{" "}
                are welcome.
              </b>{" "}
              We promise everyone will be able to learn something new by the end
              of the hackathon. <br />
              <br />
              <b>Fill out our interest form below!</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
