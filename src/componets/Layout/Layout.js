import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

function Layout({ children }) {
    return (
        <main className="layout">

            <Nav/>
            {children}
            <Footer/>
        </main>
    )
}

export default Layout;