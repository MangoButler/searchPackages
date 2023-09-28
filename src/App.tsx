import './App.css';
import { RepositoriesList } from './components/RepositoriesList';

function App() {
  return (
    <>
      <h1>Search for Package</h1>
      <RepositoriesList />
    </>
  );
}

export default App;

//registry.npmjs.org/-/v1/search?text=react
