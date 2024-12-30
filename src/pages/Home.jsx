import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import AboutContent from "../components/AboutContent";
import Studio from "../components/Studio";
import Newsletter from "../components/Newsletter";
import InfiniteScroll from "../components/InfiniteScroll";
import Team from "../components/Team";
import Counter from "../components/Counter";
import AboutContentTwo from "../components/AboutContentTwo";
import SubscribeBox from "../components/SubscribeBox";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carousel />
      <AboutContent />
      <Studio />
      <Newsletter />
      <InfiniteScroll />
      <Team />
      <Counter />
      <AboutContentTwo />
      <SubscribeBox />
      <Cta />
      <Footer />
    </div>
  );
}
