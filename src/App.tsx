const App = () => {
  // define the callAPI function that takes a first name and last name as parameters
  var callAPI = (firstName: string, lastName: string) => {
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append('Content-Type', 'application/json');
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({ firstName: firstName, lastName: lastName });
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    // make API call with parameters and use promises to get response
    fetch(
      'https://sn6qiavuk7.execute-api.eu-central-1.amazonaws.com/dev',
      requestOptions as any
    )
      .then((response) => response.text())
      .then((result) => alert(JSON.parse(result).body))
      .catch((error) => console.log('error', error));
  };

  return (
    <form>
      <label>First Name :</label>
      <input type='text' id='fName' />
      <label>Last Name :</label>
      <input type='text' id='lName' />
      <button
        type='button'
        onClick={() =>
          callAPI(
            (document.getElementById('fName') as any).value,
            (document.getElementById('lName') as any).value
          )
        }
      >
        Call API
      </button>
    </form>
  );
};

export default App;
