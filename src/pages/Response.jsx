import React, { useEffect, useState } from "react";
import Description from "../components/Description";
import { Urlresponse } from "../services/axios";

const Response = () => {
  const [longUrl, setlongUrl] = useState("");

  const responseData = JSON.parse(localStorage.getItem("Responsedata"));
  const [responseURL, setResponse] = useState(responseData);

  const handlershorten = async (e) => {
    e.preventDefault();

    try {
      const response = await Urlresponse(longUrl);
      localStorage.setItem("Responsedata", JSON.stringify(response));
  
      setResponse(response);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="container  flex flex-wrap lg:flex-nowrap gap-2 p-11">
      <Description />
      <div className="response_card bg-slate-300 w-3/5  m-auto p-4">
        <h5 className="text-center text-green-500 font-bold text-1xl md:text-2xl">
          {" "}
          Your URL has been shortned
        </h5>

        <div className="card_body mt-3">
          {/* <h5>Long URL : </h5> */}
          <p className=" font-bold text-black">
            <span> Long URL :</span>
            <a href={responseURL.long_url}> {`${responseURL.long_url}`}</a>
          </p>{" "}
          <p className="font-bold text-black">
            <span> Shortned URL :</span>
            <a href={responseURL.link}> {`${responseURL.link}`}</a>
          </p>{" "}
        </div>

        <div className="another_url">
          {/* <p> </p> */}

          <div className="m-auto text-center mt-3">
            <label htmlFor="another" className="font-bold text-black pb-3">
              {" "}
              Shortner Another URL{" "}
            </label>
            <input
              type="text"
              placeholder=" Enter long URL"
              className="p-4 mb-2 border-none w-4/5"
              onChange={(e) => setlongUrl(e.target.value)}
              id="another"
            />

            <button
              className="m-auto w-1/2"
              type="submmit"
              onClick={handlershorten}
            >
              {" "}
              Shorten it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Response;
