import React, { useState, useEffect, Fragment } from "react";
// import Form from "./components/App/Form/Form";
import axios from "axios";

function App() {
  const [term, setTerm] = useState("");
  const [result, setresult] = useState([]);
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
          srsearch: term,
        },
      });
      setresult(respond.data.query.search);
      // console.log();
    };
    /* The `debounceSearch` constant is using the `setTimeout` function to delay the execution of the
    `search` function by 1000 milliseconds (1 second). It is used to implement a debounce
    functionality, which means that the `search` function will only be called after the user has
    stopped typing for 1 second.*/
    const debounceSearch = setTimeout(() => {
      if (term) {
        search();
      }
    }, 1000);
    return () => clearTimeout(debounceSearch);
  }, [term]);

  const fetchData = result.map((el) => {
    return (
      <tr key={el.pageid}>
        <td scope="row">{el.pageid}</td>
        <td scope="row">{el.title}</td>
        <td scope="row">
          <span dangerouslySetInnerHTML={{ __html: el.snippet }} />
        </td>
      </tr>
    );
  });

  return (
    <Fragment>
      <input
        type="text"
        className="form-control m-3"
        id="exampleInputEmail1"
        placeholder="search..."
        onChange={(e) => setTerm(e.target.value)}
        value={term}
      />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">title</th>
            <th scope="col">desc</th>
          </tr>
        </thead>
        <tbody>
          <tr>{fetchData}</tr>
        </tbody>
      </table>
    </Fragment>
  );
}

export default App;
