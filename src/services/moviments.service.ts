import { request } from "./api";

class MovimentsService {
  private static INSTANCE: MovimentsService;



  async getMoviments() {

    const {data} = await request("/moviments")

    return data
  }

  static getInstance() {
    if (!this.INSTANCE) this.INSTANCE = new MovimentsService();
    return this.INSTANCE;
  }
}
