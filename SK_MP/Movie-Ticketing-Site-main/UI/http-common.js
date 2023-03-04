import axios from "axios";

export default axios.create({

  baseURL: "http://back.sk-mp.site/api",

  headers: {
    "Content-type": "application/json"
  }
});