import { Anta } from "next/font/google";

import { Button } from "../ui/button";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export function Register() {
  return (
    <div className="mx-auto max-w-5xl p-8 pt-16" id="register">
      <div className="flex flex-row justify-center">
        <h1
          className={`${anta.className} bg-gradient-p bg-clip-text text-5xl text-transparent`}
        >
          Register
        </h1>
      </div>
      <div className="text-p mt-8 flex flex-row justify-center text-xl">
        <p className="text-center">
          DCHacks isn&apos;t taking full registrations just yet, but feel free
          to fill out our interest form to be notified of any updates! We expect
          registration to start around <b>August</b> when more details are
          finalized.
        </p>
      </div>
      <div className="mt-8 flex flex-row items-center justify-center">
        <Button>I&apos;m Interested!</Button>
      </div>
    </div>
  );
}
