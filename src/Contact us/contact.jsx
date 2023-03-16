import "../App.css";

const Contact = () => {
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
          />
        </div>
        <button type="submit" className="primaryButton loginButton">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
