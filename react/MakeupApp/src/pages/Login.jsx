import React from "react";

const Login = () => {
  return (
    <>
      <div className=" text-black">
        <h1 className=" text to-black text-center text-4xl font-bold mb-2">
          Login
        </h1>
        <div className="text-center ">
          <form>
            <div>
              <label htmlFor="fullName">FULL Name:</label>
              <input
                type="text"
                className="border p-2 m-1.5"
                // value={fullName}
                // onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter Your Full Name"
                required
              />
            </div>

            <div>
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input
                type="number"
                name="mobileNumber"
                className="border p-2  m-1.5 "
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Number"
                required
              />
            </div>

            <div>
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                name="Email"
                className="border p-2  m-1.5 ml-10"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div>
              <label htmlFor="Address">Address:</label>
              <textarea
                name="Adresss"
                id=""
                className="border p-2  m-1.5 ml-1"
                // value={message}
                // onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter Your Address"
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="createPassword">Create Password:</label>
              <input
                type="password"
                name="password"
                className="border p-2  m-1.5 "
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Password"
                required
              />
            </div>
            <button
              type="reset"
              className="border m-2 p-1 bg-[#F5AFAF] text-white p-1  border-black border-2 "
            >
              Reset
            </button>

            <button
              type="submit"
              className="border m-2 p-1 bg-[#F5AFAF] text-white p-1  border-black border-2 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
