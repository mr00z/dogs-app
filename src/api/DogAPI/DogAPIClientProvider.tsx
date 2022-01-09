import React, { createContext } from 'react';

import IDogAPIClient from './IDogAPIClient';

export const DogsAPIClientContext = createContext({} as IDogAPIClient);

interface IDogAPIClientProvider {
  children: React.ReactNode;
  client: IDogAPIClient;
}

export default function DogAPIClientProvider({ children, client }: IDogAPIClientProvider) {
  return <DogsAPIClientContext.Provider value={client}>{children}</DogsAPIClientContext.Provider>;
}
