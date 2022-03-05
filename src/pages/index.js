import { AboutMe, Experience, HomeLayout, LandingPage, Work } from "@/components";


export default function Home() {
  return (
    <HomeLayout>
      <LandingPage />
      <AboutMe />
      <Experience />
      <Work/>
    </HomeLayout>
  )
}
