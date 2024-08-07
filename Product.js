import { useState } from "react";
export default function Product() {
  const [obj, setobj] = useState({});
  const [Submitobj, setSubmitobj] = useState([]);
  function jsChange(e) {
    setobj({ ...obj, [e.target.name]: e.target.value });
  }

  function jsSubmit(e) {
    e.preventDefault();
    console.log(obj);
    setSubmitobj([...Submitobj, obj]);
  }

  return (
    <>
    <div className="container mt-5 bg-danger">
      <form onSubmit={jsSubmit}>
        <div>
          <label className="form-lable">product name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            onChange={jsChange}
          />
        </div>

        <div>
          <label className="form-lable">Rate</label>
          <input
            type="number"
            id="rate"
            name="rate"
            className="form-control"
            onChange={jsChange}
          />
        </div>

        <div>
          <label className="form-lable">qunity</label>
          <input
            type="number"
            id="qunity"
            name="qunity"
            className="form-control"
            onChange={jsChange}
          />
        </div>
        <input type="submit"  />
      </form>
      </div>
      {Submitobj.map((value) => (
        <div className="container mt-5 bg-primary">
          <table className="table">
            <thead>
              <tr>
                <th>product name</th>
                <th>rate</th>
                <th>qunity</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>{value.name}</td>
              <td>{value.rate}</td>
              <td>{value.qunity}</td>
              <td>{value.rate * value.qunity}</td>
            </tr>
            </tbody>
          </table>
        </div>
      ))}
      </>
  );
}
