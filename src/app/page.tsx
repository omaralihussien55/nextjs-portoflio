import Image from "next/image";
import HomeBanners from "./_component/Home";
import Services from "./_component/Services";
import About from "./_component/About";
import Contact from "./_component/Contact";
import Projects from "./_component/Projects";

export default function Home() {
  return (
    <div>
      <HomeBanners />
      <div className='w-11/12 m-auto' >
        <Services />
        <About />
        <Projects/>
        <Contact/>
      </div>
      
    </div>
  );
}
