import Banner from "@/components/Banner";
import Companies from "@/components/Companies/Companies";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main style={{marginTop: '4rem'}}>
      <Banner />
      <Companies />
      <Courses />
      {/* <Mentor /> */}
      <Testimonials />
      {/* <Newsletter /> */}
    </main>
  )
}
