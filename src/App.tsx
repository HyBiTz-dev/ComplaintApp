import React, { useState } from "react";
import "./App.css";

function App() {
  const [characterCount, setCharacterCount] = useState<number>(0);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<string>("");
  const [description, setDescripton] = useState<string>("");

  const handleSubmit = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();

    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email === "" && phoneNo === "") {
      alert("Please enter your email or phone number.");
    }
    if (email || phoneNo) {
      if (email && !email.match(mailFormat)) {
        alert("Invalid Email Address!");
      } else {
        const data = new FormData(event.target);

        const formObject = Object.fromEntries(data.entries());
        console.log(formObject);

        alert(
          `Name : ${firstName} ${lastName}\nEmail : ${email}\nPhone : ${phoneNo}\nDescription : ${description}`
        );
      }
    }
  };

  return (
    <main>
      <h1>Complaint From</h1>
      <form className="container" onSubmit={handleSubmit}>
        <div className="box-1">
          <div className="box-1-child-1">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="box-1-child-2">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              name="lname"
              id="lname"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="box-2">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="box-3">
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            type="tel"
            name="phonenumber"
            id="phonenumber"
            placeholder="Phone Number"
            pattern="[0]{1}[1-9]{1}[0-9]{8}"
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
        <div className="box-4">
          <label htmlFor="desciption">Description</label>
          <textarea
            name="desciption"
            id="desciption"
            cols={30}
            rows={10}
            maxLength={1000}
            onChange={(event) => {
              setCharacterCount(event.target.value.length);
              setDescripton(event.target.value);
            }}
            placeholder="Description"
            required
          />
          <div className="box-4-child">
            <span>{characterCount}</span>
            <span>/ 1000</span>
          </div>
        </div>
        <div className="box-5">
          <button className="btn-submit" type="submit">
            Submit
          </button>
          <button
            className="btn-reset"
            type="reset"
            onClick={() => window.location.reload()}
          >
            Reset
          </button>
        </div>
      </form>
    </main>
  );
}

export default App;
