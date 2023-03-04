import http from "../http-common";

class TicketingService {
  getAll() {
    return http.get("/ticketingapi");
  }


  // get(id) {
  //   return http.get(`/ticketingapi/${id}`);
  // }

  create(data) {
    return http.post("/ticketingapi", data);
  }

//   update(id, data) {
//     return http.put(`/ticketingapi/${id}`, data);
//   }

  // delete(id) {
  //   return http.delete(`/ticketingapi/${id}`);
  // }

  deleteAll() {
    return http.delete(`/ticketingapi`);
  }

}



export default new TicketingService();
