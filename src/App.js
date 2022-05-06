import './App.css';
import CountryArray from './CountryArray';
import PageLayout from './PageLayout';

function App() {
  return (
    <div className="App">
      <PageLayout countries={CountryArray} />


    </div>
  );
}

export default App;
