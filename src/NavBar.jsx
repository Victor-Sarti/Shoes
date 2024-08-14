import logo2 from "./assets/logo2.png"
const NavBar = () => {
    return (
        <header className=" z-10 fixed left-2/4 -translate-x-1/2 flex items-center gap-28">
            <img className="w-20" src={logo2} alt="logo" />
            <ul className=" grid grid-cols-3">
                <li>Home</li>
                <li>Tenis</li>
                <li>Mande Mensagem</li>
            </ul>
        </header>
    );
    ;
}

export default NavBar
