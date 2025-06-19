import Link from "next/dist/client/link";
import { Anta } from "next/font/google";
import {
  HiOutlineAcademicCap,
  HiOutlineCalendarDateRange,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import { ScrollTo } from "@/components/ScrollTo";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export function AboutUs() {
  return (
    <div className="mx-auto max-w-7xl p-8 pt-24" id="about">
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
          Join us for a 2-day hackathon this October for all secondary students.
        </p>
      </div>
      <div className="mt-20 mr-auto max-w-3/5 text-left">
        <div className="text-p">
          <div className="flex flex-row items-end justify-start gap-x-4 pb-4">
            <HiOutlineCalendarDateRange
              size="64px"
              style={{ stroke: "url(#primary-gradient)" }}
              fill="none"
            />
            <h2 className="pb-1 text-3xl">Details Coming Soon!</h2>
          </div>
          <p className="text-xl">
            <b>Where:</b> In or near Washington, DC metro area. Exact venue TBD.
            <br />
            <b>Date:</b> A weekend in late October to early November. Exact date
            TBD. <br />
            <b>Time:</b> Saturday Morning to Sunday Evening <br />
            <b>Format:</b> Virtual (day 1), In-person (day 2) <br />
            <b>Theme:</b> TBD! Submit theme suggestions{" "}
            <Link
              href="#"
              className="bg-gradient-p gradient-underline-p bg-clip-text text-transparent"
            >
              here!
            </Link>{" "}
            <br />
            <br />
            <b>
              We are looking for more team members.{" "}
              <ScrollTo
                id="join"
                className="bg-gradient-p gradient-underline-p bg-clip-text text-transparent"
              >
                Join us
              </ScrollTo>{" "}
              below!
            </b>
          </p>
        </div>
      </div>
      <div className="mt-20 ml-auto max-w-3/5 text-right">
        <div className="text-p">
          <div className="flex flex-row items-end justify-end gap-x-4 pb-4">
            <h2 className="pb-1 text-3xl">All students may participate!</h2>
            <HiOutlineAcademicCap
              size="64px"
              style={{ stroke: "url(#primary-gradient)" }}
              fill="none"
            />
          </div>
          <p className="text-xl">
            Have you never touched a code editor before? Or, have you deployed 4
            apps on the App Store? <br />
            <br />
            Doesn&apos;t matter!{" "}
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
            <b>
              Fill out our{" "}
              <ScrollTo
                id="register"
                className="bg-gradient-p gradient-underline-p bg-clip-text text-transparent"
              >
                interest form
              </ScrollTo>{" "}
              below!
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}
