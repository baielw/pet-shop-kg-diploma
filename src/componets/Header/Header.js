import "./Header.css";
import headerImage from '../../assens/table1img.jpg'

function Header() {
    return (
        <header>
            {/**/}
            <div className="conteiner">

                <div className="copy">
                    <div className="copyin "><p>
                        Clean It Right 'Round The Pets
                    </p></div>

                    <div className="copyin">
                        <p>
                        Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    </div>
                    <div className="copyin"></div>
                    <div className="copyin">
                        <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="copyin"></div>
                    <div className="copyin">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                   
                </div>

                {/*
            <div className="table">
                <div className="tabled">
                    <img src={headerImage} alt='headerImage' width={320} height={400} />
                </div>
                <div className="tabled">Lorem ipsum dolor</div>
                <div className="tabled">Lorem ipsum dolor</div>
                <div className="tabled">Lorem ipsum dolor</div>
                <div className="tabled">Lorem ipsum dolor</div>
                <div className="tabled">Lorem ipsum dolor</div>
            </div>

*/}




            </div>
        </header>

    );
}


export default Header;