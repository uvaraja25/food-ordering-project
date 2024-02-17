import logoImage from "../../images/Logo.jpg"
const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                
                <img 
                    className="logo" 
                    src={logoImage}
                    //"file:///Users/uvaraj/Downloads/react-learning-project/images/image.jpeg" 
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
