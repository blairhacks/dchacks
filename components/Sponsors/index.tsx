"use client";

import { motion } from "framer-motion";
import { Anta } from "next/font/google";
import Link from "next/link";

import { Button } from "../ui/button";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export function Sponsors() {
  return (
    <div className="mx-auto max-w-5xl p-8 pt-16" id="sponsors">
      <motion.div
        className="flex flex-row justify-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1
          className={`${anta.className} bg-gradient-p bg-clip-text text-5xl text-transparent`}
        >
          Sponsors
        </h1>
      </motion.div>
      <div className="text-p mt-8 flex flex-col items-center justify-center text-xl">
        <motion.p
          className="text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          Our hackathon depends on generous donations from companies and grants
          to sustain. Contributions will be used for the venue, website costs,
          prizes, food, and more.
        </motion.p>
        <motion.p
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
        >
          All contributions are tax-deductible, as DCHacks is fiscally sponsored
          by <Link
            href="https://hackclub.com/"
            className="bg-gradient-p gradient-underline-p bg-clip-text text-transparent"
          >
            The Hack Foundation (d.b.a. Hack Club)
          </Link>
          , a 501(c)(3) nonprofit organization (EIN: 81-2908499).
        </motion.p>
        <motion.p
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
        >
          View more information about our sponsorship packages below. Contact us
          by filling out the form or emailing us at <Link
            href="mailto:blairhacks@gmail.com"
            className="bg-gradient-p gradient-underline-p bg-clip-text text-transparent"
          >
            blairhacks@gmail.com
          </Link>
          .
        </motion.p>
        <motion.p
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
        >
          We thank you for your generosity.
        </motion.p>
      </div>
      <motion.div
        className="mt-8 flex flex-row items-center justify-center gap-x-12"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
      >
        <Button asChild>
          <Link href="/dchacks_prospectus.pdf">Sponsorship Package</Link>
        </Button>
        <Button asChild>
          <Link href="mailto:blairhacks@gmail.com">Sponsor Us!</Link>
        </Button>
      </motion.div>
    </div>
  );
}
