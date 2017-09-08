import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

const API = {

	search: function(query) {
		return axios.get(BASEURL + APIKEY + "&q=" + query)
	},
  // Retrieves all quotes from the db
  // getQuotes: function() {
  //   return axios.get("/api/quotes");
  // },
  // // Saves a new quote to the db
  saveArticle: function(text) {
    return axios.post("/api/saved", { text });
  }
  // // Deletes a quote from the db
  // deleteQuote: function(id) {
  //   return axios.delete(`/api/quotes/${id}`);
  // },
  // // Toggles a quote's favorite property in the db
  // favoriteQuote: function(quote) {
  //   quote.favorited = !quote.favorited;
  //   const { _id, favorited } = quote;
  //   return axios.patch(`/api/quotes/${_id}`, { favorited });
  // }
};

export default API;
