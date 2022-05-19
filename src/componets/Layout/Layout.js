// import Footer from "../Footer/Footer";
// import Nav from "../Nav/Nav";

// function Layout({ children }) {
//     return (
//         <main className="layout">
//             <Nav/>
//             {children}
//             <Footer/>
//         </main>
//     )
// }

// export default Layout;


import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import Footer from "../Footer/Footer";
import Toolbar from "../Toolbar/Toolbar";

function Layout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <main className="Layout">
      <Toolbar toggleDrawer={toggleDrawer} />
      <Drawer open={drawerOpen} toggle={toggleDrawer} />
      <div className="container">
        {children}
      </div>
      <Footer />
    </main>
  );
}

export default Layout;