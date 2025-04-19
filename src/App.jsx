import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"*"} element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
