import Banner from "@/components/Banner";
import FabricBot from "@/components/ChatBot/FabricBot";
import Companies from "@/components/Companies/Companies";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/shared/Features";
import Stats from "@/components/shared/Stats";

export default function Home() {
  return (
    <main style={{marginTop: '4rem'}}>
      <Banner />
      <Companies />
      <Courses />
      {/* <Mentor /> */}
      <Testimonials />
      {/* <Newsletter /> */}
      <Features />
      <Stats />
      <FabricBot />
    </main>
  )
}
