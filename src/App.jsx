import { useState } from "react";

function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function handlerfirst(e) {
    setFirst(e.target.value);
  }

  function handlerlast(e) {
    setLast(e.target.value);
  }

  function submit(e) {
    e.preventDefault();

    if (!first || !last) {
      return;
    }

    setSubmittedName(`${first} ${last}`);
  }

  return (
    <>
      <h1>Full Name Display</h1>

      <form onSubmit={submit}>
        <label htmlFor="first">First Name</label>

        <input
          type="text"
          id="first"
          value={first}
          onChange={handlerfirst}
        />

        <br />

        <label htmlFor="last">Last Name</label>

        <input
          type="text"
          id="last"
          value={last}
          onChange={handlerlast}
        />

        <br />

        <button type="submit">Submit</button>
      </form>

      {submittedName && <h2>{submittedName}</h2>}
    </>
  );
}

export default App;
