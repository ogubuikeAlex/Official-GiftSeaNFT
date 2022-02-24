import HomeScreen from './screen/HomeScreen'
import Userdashboard from './screen/Userdashboard'
import Admindashboard from './screen/Admindashboard'
import './App.css';
const App = () => {

  

  return (
    <div className='App'>
            <HomeScreen/>
            <Userdashboard/>
            <Admindashboard/>
          </div>    
  )
}

export default App;
