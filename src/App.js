import './App.css';
import CardOFANew from './Components/CardOfANew/CardOfANew'
import  Data  from './Components/CardOfANew/Moks/Mock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="Title"> Mr Worldwide </h1>
      </header>
      <CardOFANew
      title={Data.title}
      photo={Data.photo}
      description={Data.description}
      />
    </div>
  );
}

export default App;
