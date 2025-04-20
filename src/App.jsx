import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound.jsx";
import Home from "./pages/Home.jsx";
import BlogsPosts from "./pages/Blogs.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Router>
        <div
          className={"min-h-screen flex flex-col max-w-[700px] mx-auto w-full"}
        >
          <div className={"flex-grow"}>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/blogs"} element={<BlogsPosts />} />
              <Route path={"*"} element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
