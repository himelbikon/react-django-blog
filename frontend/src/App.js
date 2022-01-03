import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import PostScreen from "./screens/PostScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/post/:himel" element={<PostScreen />} />
            </Routes>
          </Container>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
