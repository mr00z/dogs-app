import { useContext } from 'react';
import { useQuery } from 'react-query';

import { GetBreedImageResponse } from '.';
import { DogsAPIClientContext } from '../DogAPIClientProvider';

export default function useGetBreedImageQuery(breed: string, onSuccess?: (data: GetBreedImageResponse) => void) {
  const client = useContext(DogsAPIClientContext);
  const breedImageQuery = useQuery(`${breed}_image`, () => client.getBreedImage(breed), { onSuccess });

  return breedImageQuery;
}
