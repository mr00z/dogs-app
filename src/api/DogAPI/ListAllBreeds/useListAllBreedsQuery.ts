import { useContext } from 'react';
import { useQuery } from 'react-query';
import { DogsAPIClientContext } from '../DogAPIClientProvider';

export default function useListAllBreedsQuery() {
  const client = useContext(DogsAPIClientContext);
  const breedsQuery = useQuery('breeds', client.listAllBreeds);

  return breedsQuery;
}
