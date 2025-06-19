import { Anta } from "next/font/google";

import { Button } from "../ui/button";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export function Sponsors() {
  return (
    <div className="mx-auto max-w-7xl p-8 pt-16" id="sponsors">
      <div className="flex flex-row justify-center">
        <h1
          className={`${anta.className} bg-gradient-p bg-clip-text text-5xl text-transparent`}
        >
          Sponsors
        </h1>
      </div>
      <div className="text-p mt-8 flex flex-row justify-center text-xl">
        <p className="text-center">
          Our hackathon depends on generous donations from companies and grants
          to sustain. Contributions will be used for the venue, website costs,
          prizes, food, and more. <br />
          <br />
          View more information about our sponsorship packages below. Contact us
          by filling out the form or emailing us at{" "}
          <b className="">blairhacks@gmail.com.</b> <br />
          <br />
          We thank you for your generosity.
        </p>
      </div>
      <div className="mt-8 flex flex-row items-center justify-center gap-x-12">
        <Button>Sponsorship Package</Button>
        <Button>Sponsor Us!</Button>
      </div>
    </div>
  );
}
