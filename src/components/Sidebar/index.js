import './index.scss';
import logo from '../../assets/images/logo.png';
const Sidebar = () => (
  <div className='Nav-bar'>
    
    <img src={logo} alt="logo"></img>
    <a href='/' id="side">Home</a>
    <a href='#About'id="side" >About Me</a>
    <a href='#Contact'id="side" >Contact</a>
    

  </div>
/*<>  hello
<img src={logo}></img>
</>*/

)

export default Sidebar;