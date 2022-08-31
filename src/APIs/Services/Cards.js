import { HttpClient } from "../HttpClientts";

class CardService extends HttpClient {
  constructor() {
    super("https://630cee00b37c364eb7fce4e3.mockapi.io");

   // https://630cee00b37c364eb7fce4e3.mockapi.io/
   // https://jsonplaceholder.typicode.com/
  }

  getAllPost() {
    return this.get("posts");
  }

  postNewPost(body) {
    return this.post("posts",body);
  }
}

export const cardService = new CardService();
