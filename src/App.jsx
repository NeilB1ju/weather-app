import Main from './components/Main';
import Navbar from './components/Navbar';
import Favorites from './components/Favorites';
import { GlobalProvider } from './context/GlobalState';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </GlobalProvider>
    </>
  );
}

export default App;
