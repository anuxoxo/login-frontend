import Form from './components/Form';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserContextProvider from "./context/userContext";
import Footer from './components/Footer';
import Orders from './components/Orders';

function App() {

  // useEffect(() => {
  //   callBackendAPI().then((result) => {
  //     setData(result);
  //   })
  // }, [])

  // const callBackendAPI = async () => {
  //   fetch('http://localhost:8000/', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   }).then((response) => response.json())
  //     .then((msg) => { setData(JSON.stringify(msg)) })
  //     .catch((err) => { console.log(err); })
  // };

  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Switch>

            <Route exact path="/orders">
              <Navbar />
              <Orders />
              {/* <Form actionName="Login" /> */}
              <Footer />
            </Route>

            <Route exact path="/login">
              <Navbar />
              <Form actionName="Login" />
              <Footer />
            </Route>

            <Route exact path="/register">
              <Navbar />
              <Form actionName="Register" />
              <Footer />
            </Route>

            <Route exact path="/">
              <Navbar />
              <Home />
              <Footer />
            </Route>

          </Switch>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
