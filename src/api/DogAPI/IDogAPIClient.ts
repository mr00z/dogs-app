import { GetBreedImageResponse } from './GetBreedImage';
import { ListAllBreedsResponse } from './ListAllBreeds';

export default interface IDogAPIClient {
  listAllBreeds(): Promise<ListAllBreedsResponse>;
  getBreedImage(breed: string): Promise<GetBreedImageResponse>;
}
