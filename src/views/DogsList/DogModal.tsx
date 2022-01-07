import { Heading } from 'styled-typography';

import { useGetBreedImageQuery } from 'api/DogAPI/GetBreedImage';
import { ButtonGroup, PrimaryButton, SecondaryButton } from 'components/Button';
import { Container, FullHeightContainer } from 'components/Containers';
import { Modal, IModal } from 'components/Modal';

import DogImage from './DogImage';

interface IDogModal extends IModal {
  breed: string;
}

export default function DogModal({ open, breed, onClose }: IDogModal) {
  const { data, refetch, isLoading } = useGetBreedImageQuery(breed);
  return (
    <Modal open={open}>
      <Modal.Content>
        <Modal.Header>
          <Heading level={2} displayLevel={3}>
            {breed}
          </Heading>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {isLoading ? (
              <FullHeightContainer>Loading...</FullHeightContainer>
            ) : (
              <DogImage src={data?.message} alt={breed} />
            )}
          </Container>
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
