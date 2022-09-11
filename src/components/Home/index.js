import './index.scss';
import photo from '../../assets/images/DSC_0023.JPG';
import resume from '../../assets/images/praveen resume final.jpg';
import htmllogo from '../../assets/images/logo1.png';
import csslogo from '../../assets/images/logo2.png';
import jslogo from '../../assets/images/logo3.png';
import clogo from '../../assets/images/logo5.png' ;
import pslogo from '../../assets/images/logo6.png' ;
import xllogo from '../../assets/images/logo7.png';
import maillogo from '../../assets/images/logo8.png'
import calllogo from '../../assets/images/logo9.png'
import inlogo from '../../assets/images/logo10.png'
import gitlogo from '../../assets/images/logo11.png'
const Home = () => (

  <><div className="Homepage">
      <img src={photo} id="photo"></img> 
      </div>
      <div className="text">
      <h2>Hello</h2>
      <h2>I am Praveen Kumar</h2>
      <h2 id='desc'>Front end Web Developer</h2>
      <a href={resume} download id='Resume'>Download My Resume</a> 
    </div>
    
    <div className="about" id="About">
      <h1>About Me</h1>
      <h2>A Creative and Collaborative Web developer seeking opportunity to employ my technical skills for the the continuous growth of the organization.</h2>
    </div>
    
    <div className="expertise">
    
     
    <h1>Expertise</h1>
      <div className='logogrid'>
      <img src={htmllogo} id="logo"></img>
      <img src={csslogo} id="logo"></img>
      <img src={jslogo} id="logo"></img>
      <img src={clogo} id="logo"></img>
      <img src={pslogo} id="logo"></img>
      <img src={xllogo} id="logo"></img>
      </div>  
    </div>

    <div className="internships">
      <h1>Internships</h1>
      <ul>
        <li>Completed an Internship with Virby Infotech in “Web development”</li>
        <li>Completed an Internship with DLK Career Development Center in “Artificial Intelligence”.</li>
      </ul>
    </div>
    <div className="education">
      <h1>Education</h1>
      <table id='edutable'>
        <tr>
          <th>Time Period</th>
          <th>Qualification</th>
        </tr>
        <tr>
          <td>2019-23</td>
          <td>Meenakshi Sundararajan engineering college<br />
          B.Tech Information Technology<br />
          <p id = 'marks'>CGPA - 8.36</p></td>
        </tr>
        <tr>
          <td>2019-18</td>
          <td>St Vincent Pallotti Matriculation Higher Secondary School<br />
          <p id = 'marks'>Percentage - 78.5</p></td>
        </tr>
        <tr>
          <td>2016-17</td>
          <td>St Vincent Pallotti Matriculation Higher Secondary School<br />
          <p id = 'marks'>Percentage - 94.8</p></td>
        </tr>
      </table>
    </div>
    <div className="contact" id="Contact">
      <h1>Contact me</h1>
      <div className='gridcontact2'>
      <div className='gridcontact'>
       <img src={maillogo} id="mail" className='logo'></img>
      <div className='hide'><h4>pk1512002@yahoo.com</h4></div>
      <img src={inlogo} id="linkedin" className='logo'></img>
      <div className='hide'><h4><a href='https://www.linkedin.com/in/praveen-kumar-53642a245/' target="_blank">Praveen Kumar</a></h4></div>
      <img src={calllogo} id="call" className='logo'></img>
      <div className='hide'><h4>7358413761</h4></div>
      <img src={gitlogo} id="git" className='logo'></img>
      <div className='hide'><h4><a href='https://github.com/Praveenkumar151' target="_blank">PraveenKumar151</a></h4></div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.0321130169133!2d80.16875282923101!3d12.963631306352454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b16eae19ab213f!2zMTLCsDU3JzQ5LjEiTiA4MMKwMTAnMDkuNSJF!5e0!3m2!1sen!2sin!4v1662882987439!5m2!1sen!2sin"  ></iframe>
      </div>
    </div>
    
   
  </>
  
  )
  
export default Home;