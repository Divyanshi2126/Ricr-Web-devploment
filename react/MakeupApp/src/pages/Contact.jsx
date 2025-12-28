import React, { useState } from "react";

const Contact = () => {
  const [fullName, setfullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setmessage] = useState("");
  const [isloading, setIsloading] = useState(false);

  const handleclearfrom = () => {
    setfullName("");
    setEmail("");
    setmessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      const data = {
        fullName,
        Email,
        Message,
      };
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }

    handleclearfrom();
  };

  return (
    <>
      <div className="">
        <h1 className="text-4xl text-center ">Contact us </h1>
        <div className=" text-center">
          <form onReset={handleclearfrom} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName">fullName</label>
              <input
                type="Full Name"
                name="fullName"
                id="FullName"
                className="border p-2 m-2 "
                value={fullName}
                onChange={(e) => setfullName(e.target.value)}
                placeholder="Enter the name"
                required
              />
            </div>
            <div>
              <label htmlFor="Email">Email</label>
              <input
                type="Email"
                name="Eamil"
                className="border  p-2 m-2 "
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter the Email"
                required
              />
            </div>
            <div>
              <label htmlFor="Message">message</label>
              <textarea
                name="Message"
                className="border  p-2 m-2 "
                value={Message}
                onChange={(e) => setmessage(e.target.value)}
                placeholder="write message"
                required
              ></textarea>
            </div>
            <div>
              <button className="border m-2" type="reset">
                clear From
              </button>
              <button className="border m-2" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
