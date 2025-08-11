"use client";

import { motion } from "framer-motion";
import { Anta } from "next/font/google";
import Link from "next/link";

import { Button } from "../ui/button";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export function Register() {
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
          Register
        </h1>
      </motion.div>
      <motion.div
        className="text-p mt-8 flex flex-row justify-center text-xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
      >
        <p className="text-center">
          DCHacks isn&apos;t taking full registrations just yet, but feel free
          to fill out our interest form to be notified of any updates! We expect
          registration to start around <b>August</b> when more details are
          finalized.
        </p>
      </motion.div>
      <motion.div
        className="mt-8 flex flex-row items-center justify-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
      >
        <Button asChild>
          <Link href="https://link.dchacks.org/interest" target="_blank">
            I&apos;m Interested!
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
