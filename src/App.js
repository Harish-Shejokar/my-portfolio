import "./App.css";
import About from "./components/about";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Projects from "./components/projects";
// import { Routes,Route } from 'react-router-dom';
import TechStack from "./components/techStack";

function App() {
  return (
    <div className="mx-[0px] my-[0px] w-[100%] ">
      <Header />
      <div className="">
        <About />
        <Experience />
        <TechStack />
        <Projects />
      </div>
        <Footer />
      
      {/* //     <Main />
    //   <Routes>
    //     <Route path='/' element={<Header/>} />
    //     <Route path="/about" element={<About/>} />
    //     <Route path="/tech-stack" element={<TechStack/>} />
    //   </Routes> */}
      {/* <Footer/> */}
      {/* header */}
      {/* login & signup page */}
      {/* banner */}
      {/* popup for cart */}
      {/* dynamic cart-details-page */}
      {/*contact page with email sending feature*/}
      {/* footer */}
    </div>
  );
}

export default App;
