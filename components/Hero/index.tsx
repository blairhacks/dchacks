import { Anta } from "next/font/google";
import { HiArrowDown } from "react-icons/hi2";

import { ScrollTo } from "@/components/ScrollTo";
import { Button } from "@/components/ui/button";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export function Hero() {
  return (
    <div className="flex h-[110vh] w-full flex-col bg-[url(/hero_image.png)] bg-cover bg-top bg-no-repeat">
      <div className="flex h-[100vh] grow flex-col items-center justify-center">
        <div className="flex flex-1 flex-col items-center justify-end">
          <div className="bg-hero-bg rounded-2xl p-8 text-center text-white">
            <h1 className={anta.className + " mb-4 text-8xl"}>DCHacks</h1>
            <p className="text-xl">
              An upcoming hackathon coming to the DMV for secondary students of
              all skill levels
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-end">
          <div className="flex flex-col items-center">
            <div className="mb-16 flex flex-row gap-12">
              <ScrollTo id="join">
                <Button>Join Our Team</Button>
              </ScrollTo>
              <ScrollTo id="register">
                <Button>Register</Button>
              </ScrollTo>
              <ScrollTo id="sponsors">
                <Button>Sponsor Us</Button>
              </ScrollTo>
            </div>
            <ScrollTo id="about">
              <div className="mb-20 flex flex-col items-center text-white duration-100 hover:cursor-pointer hover:font-semibold">
                <HiArrowDown size="20px" />
                <p className="text-xl">Learn More</p>
              </div>
            </ScrollTo>
          </div>
        </div>
      </div>
      <div className="to-bg h-[10vh] bg-linear-to-b from-transparent"></div>
    </div>
  );
}
