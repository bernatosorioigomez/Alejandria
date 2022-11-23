
import './App.css';
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
