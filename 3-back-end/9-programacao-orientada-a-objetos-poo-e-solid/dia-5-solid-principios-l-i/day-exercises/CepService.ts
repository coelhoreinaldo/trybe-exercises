import FooCepAPI, { IFooCepApi } from './FooCepAPI';

class CepService {
  private readonly cepApi: IFooCepApi;

  constructor(cepApi: IFooCepApi) {
    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;