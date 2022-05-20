

// import Home from "./pages/Home";
// import Animals from "./pages/Animals";
// import About from "./pages/About/About";
// import Header from "./componets/Header/Header";
// import { Route, Routes } from "react-router-dom";
// import Layout from "./componets/Layout/Layout";

// function App() {
//   return (
//     <div className="App">

//       <Header />
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/animals" element={<Animals />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </Layout>

//       {/**/}
//     </div>
//   );
// }

// export default App;




import Home from "./pages/Home";
import Contacts from "./pages/Animals";
import Products from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Categories from "./pages/Categories";
import Category from "./pages/Category";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Category />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;


