import Footer from "@/components/common/footer";
import LandingCard from "@/components/landingCard";
import LandingHistory from "@/components/landingHistory";
import LandingNews from "@/components/landingNews";
import LandingTeam from "@/components/landingTeam";
import LandingVision from "@/components/landingVision";

export default function Home() {
  return (
    <main className="flex flex-col overflow-y-auto w-[100vw] items-center">
      <LandingCard />
      <LandingVision />
      <LandingHistory />
      <LandingNews />
      <LandingTeam />
      <Footer />
    </main>
  );
}
