import React, { useState } from "react";
import Description from "../components/Description";
// import { axios } from "axios";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Urlresponse } from "../services/axios";

const Home = () => {
  const [longUrl, setlongUrl] = useState("");
  const navigate = useNavigate();
  const handlershorten = async (e) => {
    e.preventDefault();

    try {
      const response = await Urlresponse(longUrl);
      localStorage.setItem("Responsedata", JSON.stringify(response));
      navigate("/response");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="container  flex flex-wrap lg:flex-nowrap gap-2 p-11">
        <Description />

        <div className="input_card bg-slate-300 w-3/5  m-auto">
          <form onSubmit={handlershorten}>
            <div className="m-auto text-center mt-3">
              <input
                type="text"
                placeholder=" Enter long URL"
                className="p-4 mb-2 border-none w-4/5"
                onChange={(e) => setlongUrl(e.target.value)}
                required
              />
            </div>

            <div className="btn text-center mb-2">
              <button className="m-auto w-1/2" type="submmit">
                {" "}
                Shorten it
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
