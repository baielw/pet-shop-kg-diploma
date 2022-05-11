import "./Header.css";
import headerImage from '../../assens/table1img.jpg'

function Header() {
    return (
        <header>
            {/**/}





                <div className="table">
                    <div className="tabled">
                        <img src={headerImage} alt='headerImage' width={320} height={350} />
                    </div>
                    <div className="tabled">Lorem ipsum dolor</div>
                    <div className="tabled">Lorem ipsum dolor</div> 
                    <div className="tabled">Lorem ipsum dolor</div>
                    <div className="tabled">Lorem ipsum dolor</div>
                    <div className="tabled">Lorem ipsum dolor</div>
                </div>






        </header>

    );
}


export default Header;