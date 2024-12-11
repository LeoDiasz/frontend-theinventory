import { ICreateMovimentRequest, IGetMovimentRequest } from "../models/moviments";
import { request } from "./api";

export class MovimentsService {
  private static INSTANCE: MovimentsService;

  async getMoviments(body: IGetMovimentRequest) {

    const {data} = await request.post(`/moviments/search`, body)

    return data
  }

  async createMoviment(body: ICreateMovimentRequest) {
    
    await request.post("/moviments", body)

  }

  static getInstance() {
    if (!this.INSTANCE) this.INSTANCE = new MovimentsService();
    return this.INSTANCE;
  }
}
