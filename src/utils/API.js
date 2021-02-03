import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=20";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
    // return axios.get(BASEURL + query + APIKEY);
  }
};
