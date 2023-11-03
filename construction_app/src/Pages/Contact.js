function Contact() {
  return (
    <>
      <div className="contactContainer">
        <h1> What do we do </h1>
        <div className="row">
          <div className="column">
            <img src="/Images/location.png" width="100" height="100"></img>
            <h2>Address</h2>
            <p> 123 Get Lost Avenue</p>
          </div>
          <div className="column">
            <img src="/Images/phone.png" width="100" height="100"></img>
            <h2>Phone</h2>
            <p> (111) 111 1111</p>
          </div>
          <div className="column">
            <img src="/Images/email.png" width="100" height="100"></img>
            <h2> Email</h2>
            <p>email.address@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
