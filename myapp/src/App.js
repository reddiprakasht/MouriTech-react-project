import './App.css';
import Homepage from './Components/Header/Homepage';
import Icons from './Components/Header/Icons';
import Name from './Components/Header/Name';
import profilepic from './Images/profile.jpg'


function App() {
  return (
    <>
      <div className="container-fluid bodycolor"  >
        <div className='row'>
          <Name />
        </div>
        <div className='row About'>
          <div className='col-sm-12 col-md-8 col-lg-8 col-xl-8'>
            <Homepage />
          </div>
            <div className='col-xl-4'>
            <img src={profilepic} alt='profilepic' className='img-fluid '/>
            </div>
        </div>
        <div className='row'>
        <Icons/>
        </div>
      </div>
    </>
  );
}

export default App;
