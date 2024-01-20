import React, { useState, useEffect, Fragment } from "react";
// import Form from "./components/App/Form/Form";
import axios from "axios";

function App() {
  const [term, setTerm] = useState('');
  // const [state, setstate] = useState("");
  // const getTermHandler = (term) => {
  //   if (term)
  //     setstate((prevState) => {
  //       return term;
  //     });
  // };
  // ------------------------------------------------------------------------?
  //  https://en.wikipedia.org/w/api.php?
  // action=query&
  // list=search&
  // prop=info&
  // inprop=url&
  // utf8=&
  // format=json&
  // origin=*&
  // srlimit=20&
  // srsearch=java

  useEffect(() => {
    const search = async () => {
      const respond = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          prop: "info",
          inprop: "url",
          utf8: "",
          format: "json",
          origin: "*",
          srlimit: 20,
          srsearch: term
        }
        
      });
      
    };
    search()
  });
  return (
    <Fragment>
      <input
        type="text"
        className="form-control m-3"
        id="exampleInputEmail1"
        placeholder="search..."
        onChange={(e)=>setTerm(e.target.value)}
        value={term}
      />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}

export default App;
