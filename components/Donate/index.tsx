import { Anta } from "next/font/google";

import { Button } from "../ui/button";
import Link from "next/link";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export function Donate() {
  return (
    <div className="mx-auto max-w-7xl p-8 pt-16" id="register">
      <div className="flex flex-row justify-center">
        <h1
          className={`${anta.className} bg-gradient-p bg-clip-text text-5xl text-transparent`}
        >
          Donate
        </h1>
      </div>
      <div className="text-p mt-8 flex flex-row justify-center text-xl">
        <p className="text-center">
          We greatly appreciate any donations to help us make DCHacks a success!{" "}
          <br />
          <br />
          DCHacks is fiscally sponsored by{" "}
          <Link
            href="https://hackclub.com/"
            target="_blank"
            className="bg-gradient-p gradient-underline-p bg-clip-text text-transparent"
          >
            The Hack Foundation
          </Link>
          , a 501(c)(3) nonprofit organization, so all donations are{" "}
          <span className="bg-gradient-p bg-clip-text text-transparent">
            tax-deductible
          </span>
          . We also accept <b>employer donation matches</b>, so your impact can
          be doubled! Donations may be sent using{" "}
          <Link
            href="https://hcb.hackclub.com/donations/start/dchacks"
            target="_blank"
            className="bg-gradient-p gradient-underline-p bg-clip-text text-transparent"
          >
            HCB
          </Link>
          , our financial platform.
          <br />
          <br />
          Your contribution will help provide students in the DC area with an
          opportunity to build innovative projects and learn new skills with
          peers.
        </p>
      </div>
      <div className="mt-8 flex flex-row items-center justify-center">
        <Button asChild>
          <Link
            href="https://hcb.hackclub.com/donations/start/dchacks"
            target="_blank"
          >
            Donate!
          </Link>
        </Button>
      </div>
    </div>
  );
}
