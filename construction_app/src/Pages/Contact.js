function Contact() {
  return (
    <>
      <body className="contactBody">
        <div className="contactContainer">
          <h1>Get in Contact With Us</h1>
          <div className="contactRow">
            <div className="contactColumn">
              <img src="/Images/location.png" width="100" height="100"></img>
              <h2>Address</h2>
              <p> 802 Glade Fork Rd Crab Orchard KY 40419</p>
            </div>
            <div className="contactColumn">
              <img src="/Images/phone.png" width="100" height="100"></img>
              <h2>Phone</h2>
              <p> (606) 879 1792</p>
            </div>
            <div className="contactColumn">
              <img src="/Images/email.png" width="100" height="100"></img>
              <h2> Email</h2>
              <p>blakemanbrosconstruction@gmail.com</p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Contact;
