import "./App.css";
import { useState , useEffect} from "react";
// import Navbar from "./components/Navbar";

const App = () => {
  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return ( 
    <div className="App"> 
      {/* <Navbar/> */}
      <div className="quote">
        <p id="text">{quotes.text}</p>
        <p id="author">-{quotes.author}</p>
        <div className="btncontainer">
          <button type="button" className="btn btn-warning" onClick={getQuote}>
            Get Quote 
          </button>

          <p id="foot"> &copy; Coded with &#10084; by Brijesh Singh</p>
        </div>
      </div>
    </div>
    
  );
};

export default App;
