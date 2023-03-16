import { useState } from "react";
import { sendEmail } from "../Api/Api";
import "../App.css";

const Contact = () => {
  const defaultValuesForm = {
    name: "",
    message: "",
    email: "",
  };
  const [error, setError] = useState("");
  const [form, setForm] = useState(defaultValuesForm);
  const [loading, setLoading] = useState(false);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  const send_Email = () => {
    setLoading(true);
    sendEmail(form).then((res) => {
      setLoading(false);
      setError("Please provide a valid email address");
      setError(false);
      if (!res) {
        setError("invaLid Email");
      }
    });
  };
  return (
    <div className="mainLoginContainer paddingtop">
      <h1 className="loginText">Contact us</h1>
      <div className="formContainer">
        <div className="email">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            name="name"
            id="username"
            className="input"
            placeholder="What should we call you?"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="input"
            placeholder="example@domain.com"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="email">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            id="message"
            className="input message"
            placeholder="I want to collaborate..."
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>
        {!error ? <></> : <p>{error}</p>}
        {loading ? (
          <div className="primaryButton loginButton">
            <span className="loader"></span>
          </div>
        ) : (
          <button
            // type="submit"
            className="primaryButton loginButton"
            onClick={send_Email}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Contact;
