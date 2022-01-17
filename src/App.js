
import './App.css';
import Header from './Header/Header';
import BlockUser from './BlockUser/BlockUser';
import BlockChat from './BlockChat/BlockChat';
import Footer from './Footer/Footer';

function App() {
  return <div>
    <Header/>
    <div className="Body">
      <BlockUser />
      <BlockChat />
    </div>
    <Footer />
  </div>
}

export default App;
