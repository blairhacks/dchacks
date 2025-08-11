"use client";

import { motion } from "framer-motion";
import { Anta } from "next/font/google";
import Link from "next/link";

import { Button } from "../ui/button";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export function Donate() {
  return (
    <div className="mx-auto max-w-5xl p-8 pt-16" id="register">
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
          Donate
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
          We greatly appreciate any donations to help us make DCHacks a success!
        </motion.p>
        <motion.p
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
        >
          DCHacks is fiscally sponsored by
          {" "}
          <Link
            href="https://hackclub.com/"
            target="_blank"
            className="bg-gradient-p gradient-underline-p bg-clip-text text-transparent"
          >
            The Hack Foundation
          </Link>
          , a 501(c)(3) nonprofit organization, so all donations are
          {" "}
          <span className="bg-gradient-p bg-clip-text text-transparent">
            tax-deductible
          </span>
          .
        </motion.p>
        <motion.p
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
        >
          We also accept <b>employer donation matches</b>, so your impact can be
          doubled! Donations may be sent using
          {" "}
          <Link
            href="https://hcb.hackclub.com/donations/start/dchacks"
            target="_blank"
            className="bg-gradient-p gradient-underline-p bg-clip-text text-transparent"
          >
            HCB
          </Link>
          , our financial platform.
        </motion.p>
        <motion.p
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
        >
          Your contribution will help provide students in the DC area with an
          opportunity to build innovative projects and learn new skills with
          peers.
        </motion.p>
      </div>
      <motion.div
        className="mt-8 flex flex-row items-center justify-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
      >
        <Button asChild>
          <Link
            href="https://hcb.hackclub.com/donations/start/dchacks"
            target="_blank"
          >
            Donate!
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
