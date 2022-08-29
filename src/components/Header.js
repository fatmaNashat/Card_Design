import classes from "../styles/Header.module.css" 

const Header = () => {
  return (
    <div> 
    <nav> 
      <ul>
        <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/TI_Group_logo.svg/2048px-TI_Group_logo.svg.png" width="80px" height="80px"></img></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">ِAbout</a></li>
        <li><a href="#">Shipment</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
    </nav>
    </div>
  );
};
export default Header;
