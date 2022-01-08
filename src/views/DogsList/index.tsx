import { useState } from 'react';
import { FontWeight, Text } from 'styled-typography';

import useListAllBreedsQuery from 'api/DogAPI/ListAllBreeds/useListAllBreedsQuery';
import { FullHeightContainer } from 'components/Container';
import ButtonsGrid from './ButtonsGrid';
import DogButton from './DogButton';
import DogModal from './DogModal';

export default function DogsList() {
  const [currentBreed, setCurrentBreed] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoading, data, isSuccess } = useListAllBreedsQuery();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const breed = e.currentTarget.innerText.toLowerCase();

    if (!breed) return;

    setCurrentBreed(breed);
    setIsModalOpen(true);
  };

  if (isLoading)
    return (
      <FullHeightContainer>
        <Text level={2} fontWeight={FontWeight.Medium}>
          Looking for dogs...
        </Text>
      </FullHeightContainer>
    );

  if (isSuccess)
    return (
      <>
        <ButtonsGrid>
          {data?.message.map((breed) => (
            <DogButton key={breed} title="Click me!" onClick={handleButtonClick}>
              <Text level={3} fontWeight={FontWeight.Bold} color="inherit">
                {breed}
              </Text>
            </DogButton>
          ))}
        </ButtonsGrid>
        <DogModal open={isModalOpen} breed={currentBreed} onClose={() => setIsModalOpen(false)} />
      </>
    );

  return null;
}
