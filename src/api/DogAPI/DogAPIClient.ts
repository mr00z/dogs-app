import { DOG_API } from 'constants/endpoints';

import { GetBreedImageResponse } from './GetBreedImage';
import IDogAPIClient from './IDogAPIClient';
import { ListAllBreedsResponse } from './ListAllBreeds';

export default class DogAPIClient implements IDogAPIClient {
  private endpoint: string;

  constructor() {
    this.endpoint = DOG_API;
  }

  getBreedImage = async (breed: string): Promise<GetBreedImageResponse> => {
    const res = await fetch(`${this.endpoint}/breed/${breed}/images/random`);
    return res.json();
  };

  listAllBreeds = async (): Promise<ListAllBreedsResponse> => {
    const res = await fetch(`${this.endpoint}/breeds/list`);
    return res.json();
  };
}
