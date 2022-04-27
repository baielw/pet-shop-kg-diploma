import "./Footer.css";
function Footer() {
    return (
        <footer>
        <div className="row">
              <ul className="copyright">
                <li>&copy; Copyright 2021 Nordic Giant</li>
                <li>
                  Design by{" "}
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    Styleshout
                  </a>
                </li>
              </ul>
            </div>
      </footer>
        );
}
export default Footer;