import { Anta } from "next/font/google";
import Link from "next/link";
import {
  HiOutlineCodeBracket,
  HiOutlineGlobeAmericas,
  HiOutlinePaintBrush,
} from "react-icons/hi2";

import { Button } from "../ui/button";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export function JoinTeam() {
  return (
    <div className="mx-auto max-w-7xl p-8 pt-16" id="join">
      <div className="bg-gradient-s text-p rounded-2xl px-20 py-12">
        <div className="flex flex-row justify-center">
          <h1 className={`${anta.className} text-5xl`}>Join Us</h1>
        </div>
        <div className="mt-8">
          <p className="text-center text-xl">
            We are looking to expand our team to reach as many people as
            possible and increase our impact! If you are a high school student
            and want to help us further our mission, apply to one of our roles
            below.
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-y-8">
          <div>
            <div className="flex flex-row justify-start gap-x-4 pb-4">
              <HiOutlinePaintBrush size="32px" />
              <h2 className={`${anta.className} text-3xl`}>Graphic Designer</h2>
            </div>
            <ul className="pl-5 text-xl">
              <li className="list-disc pl-2">
                Create digital artwork for our website, posters, social media
                posts, and more!
              </li>
              <li className="list-disc pl-2">
                Work with our web developers and outreach team
              </li>
            </ul>
          </div>
          <div>
            <div className="flex flex-row justify-start gap-x-4 pb-4">
              <HiOutlineCodeBracket size="32px" />
              <h2 className={`${anta.className} text-3xl`}>
                UI Designer or Developer
              </h2>
            </div>
            <ul className="pl-5 text-xl">
              <li className="list-disc pl-2">Design our website</li>
              <li className="list-disc pl-2">
                Be familiar with Figma or similar tools
              </li>
              <li className="my-2 pl-2">
                <i>(and/or)</i>
              </li>
              <li className="list-disc pl-2">Build our website</li>
              <li className="list-disc pl-2">
                Be familiar with Next.js/React and Tailwind
              </li>
              <li className="list-disc pl-2">
                Prefer knowledge of a UI library (shadcn/ui, HeroUI, etc.),
                Vercel
              </li>
            </ul>
          </div>
          <div>
            <div className="flex flex-row justify-start gap-x-4 pb-4">
              <HiOutlineGlobeAmericas size="32px" />
              <h2 className={`${anta.className} text-3xl`}>Outreach</h2>
            </div>
            <ul className="pl-5 text-xl">
              <li className="list-disc pl-2">
                Spread word of DCHacks in your school, neighborhood, or other
                community
              </li>
              <li className="list-disc pl-2">
                Create posts for our social media accounts with our graphic
                designers
              </li>
              <li className="list-disc pl-2">
                Help manage communications with participants
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-row justify-center">
          <Button asChild>
            <Link href="https://link.dchacks.org/apply" target="_blank">
              Apply!
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
