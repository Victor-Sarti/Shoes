import logo from "./assets/react.svg"
const NavBar = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <ul>
                <li>Home</li>
                <li>Tenis</li>
                <li>Fale Consoco</li>
            </ul>
        </header>
    );
    ;
}

export default NavBar
