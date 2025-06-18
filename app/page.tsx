import { Button } from "@/components/ui/button";
import { Anta } from "next/font/google";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div>
      <div className="flex h-[120vh] w-full flex-row bg-[url(/hero_image.png)] bg-cover bg-top bg-no-repeat">
        <div className="flex max-h-screen grow flex-col items-center justify-center border">
          <div className="bg-hero-bg rounded-2xl p-8 text-center text-white">
            <h1 className={anta.className + " mb-4 text-8xl"}>DCHacks</h1>
            <p className="text-xl">
              An upcoming hackathon coming to the DMV For secondary students of
              all skill levels
            </p>
          </div>
          <div className="mt-24 flex flex-row gap-12">
            <Button>Join Our Team</Button>
            <Button>Register</Button>
            <Button>Sponsor Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
