import { useState } from 'react';
import { FontWeight, Heading, Text } from 'styled-typography';

import useListAllBreedsQuery from 'api/DogAPI/ListAllBreeds/useListAllBreedsQuery';
import { FullHeightContainer } from 'components/Container';
import ButtonsGrid from './ButtonsGrid';
import BreedButton from './BreedButton';
import DogModal from './DogModal';
import ViewTitle from 'components/ViewTitle';

const Message = ({ children }: { children: string }) => (
  <FullHeightContainer>
    <Text level={2} fontWeight={FontWeight.Medium}>
      {children}
    </Text>
  </FullHeightContainer>
);

export default function BreedsList() {
  const [currentBreed, setCurrentBreed] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoading, data, isSuccess, isError } = useListAllBreedsQuery();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const breed = e.currentTarget.innerText.toLowerCase();

    if (!breed) return;

    setCurrentBreed(breed);
    setIsModalOpen(true);
  };

  if (isLoading) return <Message>Looking for breeds...</Message>;

  if (isError) return <Message>No breeds found ☹ </Message>;

  if (isSuccess)
    return (
      <>
        <ViewTitle>
          <Heading level={1}>Breeds list</Heading>
          <Heading level={2} displayLevel={3} fontWeight={FontWeight.Light}>
            Select a breed to view an example picture
          </Heading>
        </ViewTitle>
        <ButtonsGrid>
          {data?.message.map((breed) => (
            <BreedButton key={breed} title="Click me!" onClick={handleButtonClick}>
              <Text level={3} fontWeight={FontWeight.Bold} color="inherit">
                {breed}
              </Text>
            </BreedButton>
          ))}
        </ButtonsGrid>
        <DogModal open={isModalOpen} breed={currentBreed} onClose={() => setIsModalOpen(false)} />
      </>
    );

  return null;
}
