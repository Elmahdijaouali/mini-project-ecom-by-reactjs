import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";

function App() {
  return (
    <div className="  min-h-screen w-full">
      <Header />
      {/* section hero */}
      <Hero />
      {/* section 2 */}
      <Section2 />
      {/* section 3 */}
      <Section3 />
      {/* section 4 */}
      <Section4 />
      {/* section 5 */}
      <Section5 />
      {/* section 6 */}
      <Section6 />
      {/* section 7 */}
      <Section7 />
      {/* section 8 */}
      <Section8 />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
