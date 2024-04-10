import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import Features from "@/components/Features";
import Interface from "@/components/features/Interface";
import NewsLetter from "@/components/NewsLetter";

export default function Home() {
  return (
    <div className={"bg-white"}>
      <Hero />
      <Sponsors />
      <Features />
      <Interface />
      <NewsLetter />
    </div>
  );
}
