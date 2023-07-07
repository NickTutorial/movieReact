import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series"
import Header from "./components/Header";
import ContentPage from "./pages/ContentPage";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="/movies" Component={Movies}/>
        <Route path="/series" Component={Series} />
        <Route path="/contentpage/:type/:id" Component={ContentPage} />
      </Routes>
      {/* <Footer/> */}
    </>
  );  
}

export default App;
