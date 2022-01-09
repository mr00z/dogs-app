import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import DogAPIClient from 'api/DogAPI/DogAPIClient';
import DogAPIClientProvider from 'api/DogAPI/DogAPIClientProvider';
import { Main } from 'components/Main';
import Navbar from 'components/Navbar';
import { GlobalStyle } from 'theme/globalStyles';
import { theme } from 'theme';
import BreedsList from 'views/BreedsList';

const queryClient = new QueryClient();
const dogApiClient = new DogAPIClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DogAPIClientProvider client={dogApiClient}>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Main>
            <BreedsList />
          </Main>
        </QueryClientProvider>
      </DogAPIClientProvider>
    </ThemeProvider>
  );
}

export default App;
