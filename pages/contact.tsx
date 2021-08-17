import Layout from "../components/layout";
import { useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  //should type this correctly
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Sending contact email.");

    let data = {
      firstName,
      lastName,
      email,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      }
    });
  };

  return (
    <Layout>
      <div className="container text-center min-w-3xl pb-24 pt-20 mx-auto">
        <div className="text-8xl">✉️</div>
        <div className="max-w-6xl mx-auto">
          <div className="font-bold text-6xl text-gray-900 max-w-xl mx-auto">
            Contact Us.
          </div>
          <div className="w-full border border-gray-100 my-8"></div>
          <div id="contactForm" className="mx-auto flex justify-center p-8">
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  {/*
                  <p className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p>
                      */}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    E-mail
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Message
                  </label>
                  <textarea
                    className=" no-resize appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-full">
                  <button
                    className="shadow bg-green-400 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-6 rounded"
                    type="button"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
