import { useEffect, useState } from 'react';
import { Heading, Text } from 'styled-typography';

import { useGetBreedImageQuery } from 'api/DogAPI/GetBreedImage';
import { ButtonGroup, PrimaryButton, SecondaryButton } from 'components/Button';
import { FullHeightContainer } from 'components/Container';
import { Modal, IModal } from 'components/Modal';

import DogImage from './DogImage';

interface IDogModal extends IModal {
  breed: string;
}

export default function DogModal({ open, breed, onClose }: IDogModal) {
  const [currentImage, setCurrentImage] = useState('');

  const { data, refetch, isLoading, isError } = useGetBreedImageQuery(breed, (data) => setCurrentImage(data?.message));

  useEffect(() => {
    if (data?.message !== currentImage) refetch();
  }, [currentImage, data?.message, refetch]);

  let textContent = '';

  if (isLoading) textContent = 'Loading...';

  if (isError) textContent = 'No picture found ☹';

  const messageOnly = isLoading || isError;

  return (
    <Modal open={open}>
      <Modal.Content>
        <Modal.Header>
          <Heading level={3} displayLevel={2}>
            {breed}
          </Heading>
        </Modal.Header>
        <Modal.Body messageTextOnly={messageOnly} loading={isLoading}>
          <FullHeightContainer>
            {/* @ts-ignore */}
            {messageOnly ? <Text level={3}>{textContent}</Text> : <DogImage src={data?.message} alt={breed} />}
          </FullHeightContainer>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup>
            <SecondaryButton onClick={onClose}>Close</SecondaryButton>
            <PrimaryButton onClick={() => refetch()}>Give me another picture!</PrimaryButton>
          </ButtonGroup>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
