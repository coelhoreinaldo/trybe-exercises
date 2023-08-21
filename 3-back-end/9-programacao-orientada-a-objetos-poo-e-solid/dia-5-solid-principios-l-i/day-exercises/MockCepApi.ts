import { IFooCepApi } from "./FooCepAPI";

export default class MockCepApi implements IFooCepApi {
  getAddressByCEP(cep: string, number: number): Promise<string> {
    return Promise.resolve(`O endereço para o "CEP:${cep}, n°:${number}" é "endereço foo"`);
  }

  getCepByAddress(address: string, number: number): Promise<string> {
    return Promise.resolve(`O CEP para: "${address}, n°: ${number}" é "CEP baz"`);
  }
}