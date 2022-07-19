import React from 'react';

const Contact = () => {

  const [userData, setUserData] = React.useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Connect With FireBase 
  const submitData = async (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;
    if (firstName && lastName && phone && email && address && message) {
      const response = await fetch(
        "https://reactfirebasewebsite-224de-default-rtdb.firebaseio.com/userDataRecord.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          })
        }
      );
      if (response) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored");
      }
    } else {
      alert("Please Fill the Data");
    }
  }

  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">

            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">

                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Sales Team
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis placeat quo doloribus voluptate? Non ex distinctio ullam necessitatibus sint magnam!
                  </p>
                  <figure>
                    <img src="./images/hero1.jpg" alt="contactUsImage" className='img-fluid' />
                  </figure>
                </div>

                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">

                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" name="firstName" value={userData.firstName} onChange={postUserData} placeholder='First Name' className="form-control" />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" name="lastName" value={userData.lastName} onChange={postUserData} placeholder='Last Name' className="form-control" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" name="phone" value={userData.phone} onChange={postUserData} placeholder='Phone Number' className="form-control" />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" name="email" value={userData.email} onChange={postUserData} placeholder='Email ID' className="form-control" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input type="text" name="address" id="" value={userData.address} onChange={postUserData} placeholder='Add Address' className="form-control" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <input type="text" name="message" id="" value={userData.message} onChange={postUserData} placeholder='Enter Your Message' className="form-control" />
                      </div>
                    </div>

                    <div className="form-check form-checkbox-style">
                      <input className="form-check-input" type="checkbox" value="userData.firstName" id="flexCheckChecked" />
                      <label className="form-check-label main-hero-para">
                        I agree that the Ansh Goyal may contact me at the Email Address or Phone Number above...
                      </label>
                    </div>

                    <button type="submit" className="btn btn-style w-100 mt-5" onClick={submitData}>
                      Submit
                    </button>

                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
