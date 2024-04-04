import axios from "axios";
export const Urlresponse = async (longUrl) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
  };
  const url = `${import.meta.env.VITE_API_URL}`;
  const data = {
    long_url: longUrl,
  };

  try {
    const response = await axios.post(url, data, {
      headers: headers,
    });

    return response.data;
  } catch (error) {
    console.log(error, "error");
    alert(error.response.data.message);
  }
};
