import axios from "axios";

const requestAPI = async () => {
  const payload = {"raw-text":"http://localhost:3333"}
  const response = axios.post(
    "http://localhost:3333/encode",
    payload
  );
  return response;
}

test("Should return 200 status code on successful encode", async () => {
  const response = await requestAPI();
  expect(response.status).toBe(200);
})

test("Should return the equivalent encoded URL", async () => {
  const response = await requestAPI();
  const encodedURL = encodeURIComponent("http://localhost:3333");
  expect(response.data).toStrictEqual({success: encodedURL})
})
