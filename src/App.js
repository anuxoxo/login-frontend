import Form from './components/Form';

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
      <Form actionName="Register" />
      <Form actionName="Login" />
    </div>
  );
}

export default App;
