import axios from "axios";

const requestAPI = async () => {
  const payload = {"raw-text":"http://localhost:3333"}
  const response = axios.post(
    "http://localhost:3333/encode",
    payload
  );
  return response;
}

