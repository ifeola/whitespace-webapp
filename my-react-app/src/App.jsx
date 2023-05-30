import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Faqs from "./components/Faqs";
import Blog from "./components/Blog/Blog";
import Subscription from "./components/Subscription";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <Faqs />
        <Blog />
        <Subscription />
        <Clients />
        <Footer />
      </main>
    </>
  );
}

export default App;
