import { useState,useEffect } from "react";

export default function Studend() {
  const [obj, setobj] = useState({});
  const [submitobj, setSubmitobj] = useState([]);

  function jsChange(e) {
    setobj({ ...obj, [e.target.name]: e.target.value });
  }

  useEffect(()=>{
    if (
      obj["tamil"] < 35 ||
      obj["english"] < 35 ||
      obj["maths"] < 35 ||
      obj["secience"] < 35 ||
      obj["social"] < 35
    ) {
      console.log("fail");
      setobj({ ...obj, status: "fail" });
    } else {
      console.log("pass");
      setobj({ ...obj, status: "pass" });
    }

  },[obj])
  function jsSubmit(e) {
    e.preventDefault();

    
    setSubmitobj([...submitobj, obj]);
  }

  return (
    <>
      <div>
        <form onSubmit={jsSubmit} className="bg-danger">
          <div>
            <lable>Name</lable>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              onChange={jsChange}
            />
          </div>

          <div>
            <lable>Roll no</lable>
            <input
              type="number"
              id="rollno"
              name="rollno"
              className="form-control"
              onChange={jsChange}
            />
          </div>

          <div>
            <lable>Tamil</lable>
            <input
              type="number"
              id="tamil"
              name="tamil"
              className="form-control"
              onChange={jsChange}
            />
          </div>

          <div>
            <lable>English</lable>
            <input
              type="number"
              id="english"
              name="english"
              className="form-control"
              onChange={jsChange}
            />
          </div>

          <div>
            <lable>Maths</lable>
            <input
              type="number"
              id="maths"
              name="maths"
              className="form-control"
              onChange={jsChange}
            />
          </div>

          <div>
            <lable>Secince</lable>
            <input
              type="number"
              id="secince"
              name="secince"
              className="form-control"
              onChange={jsChange}
            />
          </div>
          <div>
            <lable>Social</lable>
            <input
              type="number"
              id="social"
              name="social"
              className="form-control"
              onChange={jsChange}
            />
          </div>

          <div>
            <input type="submit" className="bg-primary" />
          </div>
        </form>
        <div>
          <table className="table container mt-5">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll no</th>
                <th>Tamil</th>
                <th>English</th>
                <th>Maths</th>
                <th>Secicence</th>
                <th>Social</th>
                <th>Pass/Fail</th>
              </tr>
            </thead>
            <tbody>
              {submitobj.map((value) => (
                <tr key={value.intex}>
                  <td>{value.name}</td>
                  <td>{value.rollno}</td>
                  <td>{value.tamil}</td>
                  <td>{value.english}</td>
                  <td>{value.maths}</td>
                  <td>{value.secince}</td>
                  <td>{value.social}</td>
                  <td>{value.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
