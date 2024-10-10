import './App.css';
import AboutMe from './Components/Home/AboutMe';
import Navbar from './Components/Home/Navbar';

function App1() {
  return (
    <>
      <div className="container-fluid">
        <div className='row'>
          <Navbar />
        </div>
        <div className='row About'>
          <div className='col-sm-12 col-md-8 col-lg-8 col-xl-8'>
            <AboutMe />
          </div>
          <div className='col-sm-12 col-md-4 col-lg-4 col-xl-4 piccontainer d-flex justify-content-center align-items-center' style={{ height: '400px', overflow: 'hidden' }}>
  <img
    src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    alt='Profile'
    className='img-fluid rounded-5 shadow hover-shadow image-effect'
  />
</div>



        </div>
      </div>
    </>
  );
}

export default App1;
