import './App.css';
import Application from "./components/Application";
import UserProvider from "./providers/UserProvider";
import './App.scss';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Application/>
      </UserProvider>
    </div>
  );
}

export default App;