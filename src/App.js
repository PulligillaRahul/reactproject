import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Login />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
