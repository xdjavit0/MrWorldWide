import './App.css';
import data from './components/NavigationBar/Mocks/Mock'
import NavigationBar from './components/NavigationBar/index'

function App() {
  return (
    <div className="App">
      <NavigationBar categories={data}/>
    </div>
  );
}

export default App;
