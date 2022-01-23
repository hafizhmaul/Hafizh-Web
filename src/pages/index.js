import { AboutMe, Experience, HomeLayout, LandingPage } from "@/components";


export default function Home() {
  return (
    <HomeLayout>
      <LandingPage />
      <AboutMe />
      <Experience />
    </HomeLayout>
  )
}
