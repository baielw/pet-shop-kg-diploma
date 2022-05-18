

import Nav from "./componets/Nav/Nav";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Layout from "./componets/Layout/Layout";

function App() {
  return (
    <div className="App">

      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Animals />} />
          <Route path="/" element={<About />} />
        </Routes>
      </Layout>

      {/**/}
    </div>
  );
}

export default App;