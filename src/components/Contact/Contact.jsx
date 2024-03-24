import "./Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let`s Work Together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>hello street NeYork</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+21629572401</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Sumbit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
