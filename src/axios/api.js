import axios from "axios";

const apiUrl = import.meta.env.VITE_SERVER_URL;

const remote = axios.create({
  baseURL: `${apiUrl}`,
});

const fetchCat = async () => {
  let { data } = await remote.get(`/cat?json=true`);
  console.log("data : ", data);
  return `${remote.defaults.baseURL}/cat/${data._id}?type=medium&filter=custom&fit=cover&position=center&width=400&height=400`;
};

export { remote, fetchCat };