import { AboutUs } from "@/components/AboutUs";
import { Hero } from "@/components/Hero";
import { JoinTeam } from "@/components/JoinTeam";
import { Anta } from "next/font/google";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className="bg-bg">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <linearGradient
          id="primary-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop stopColor="var(--color-grad-p-from)" offset="0%" />
          <stop stopColor="var(--color-grad-p-to)" offset="100%" />
        </linearGradient>
      </svg>
      <Hero />
      <AboutUs />
      <JoinTeam />
    </div>
  );
}
