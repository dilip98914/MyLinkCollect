import './App.css';
import Container from './components/container';
import Footer from './components/footer';
import Copyright from './components/footer/copyright';
import Header from './components/header'

function App() {
  return (
    <>
      <div id="app">
        <Header />
        <Container />
      </div>
      <Footer />
      <Copyright/>
    </>
  );
}

export default App;
