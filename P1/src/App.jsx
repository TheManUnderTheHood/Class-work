import { useState } from "react";

export default function AgeValidator() {
  const [dob, setDob] = useState("");
  const [msg, setMsg] = useState("");

  const validateAge = () => {
    if (!dob) return setMsg("Please select your date of birth.");

    const today = new Date();
    const birth = new Date(dob);
    let age = today.getFullYear() - birth.getFullYear();
    if (
      today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    setMsg(
      age < 18
        ? "You must be at least 18."
        : `Your age: ${age}, You are Eligible to use our services.`
    );
  };

  return (
    <>
      <h1>Age Validator</h1>
      <div className="card">
        <div>Find out if you are eligible to use our services!</div>
        <p>What is your DOB?</p>
        <input type="date" value={dob} onChange={e => setDob(e.target.value)} />
        <br />
        <button onClick={validateAge} style={{ marginTop: "10px" }}>
          Validate
        </button>
        {msg && <p>{msg}</p>}
      </div>
    </>
  );
}