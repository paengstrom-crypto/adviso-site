import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StudentHub from "./components/StudentHub";
import EnterpriseHub from "./components/EnterpriseHub";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <StudentHub />
        <EnterpriseHub />
        <About />
      </main>
      <Footer />
    </>
  );
}

