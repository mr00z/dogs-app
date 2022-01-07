import { useContext } from 'react';
import { useQuery } from 'react-query';
import { DogsAPIClientContext } from '../DogAPIClientProvider';

export default function useGetBreedImageQuery(breed: string) {
  const client = useContext(DogsAPIClientContext);
  const breedImageQuery = useQuery(`${breed}_image`, () => client.getBreedImage(breed));

  return breedImageQuery;
}
