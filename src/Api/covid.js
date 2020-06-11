import axios from "axios";

export async function getCovidData() {
  let response = await axios
    .get("https://covid19.mathdro.id/api")
    .catch((err) => {
      console.log(err);
    });
  console.log(response.data);
  return response.data;
}
