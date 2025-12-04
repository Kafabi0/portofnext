import LogoLoop from "@/components/LogoLoop";
import HeroSectionOne from "../components/hero-section-demo-1";
import Navbar from "@/components/navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSectionOne />
      <LogoLoop
        logos={[
          {
            src: "/assets/vercel.png",
            alt: "Vercel",
          },
          {
            src: "/assets/nextjs.png",
            alt: "Next.js",
          },
          {
            src: "/assets/react.png",
            alt: "React",
          },
        ]}
      />
    </div>
  );
}
