import { useState, useRef } from "react";
//import { useDisclosure } from "react-use-disclosure";
import {
  Avatar,
  AvatarBadge,
  Badge,
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UserProfile() {
  const rol = useSelector((state) => state.role)
  const [profile, setProfile] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const profileImage = useRef(null);

  const openChooseImage = () => {
    profileImage.current.click();
  };

  const changeProfileImage = (event) => {
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    const selected = event.target.files[0];

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => setProfile(reader.result);
      return reader.readAsDataURL(selected);
    }

    onOpen();
  };

  return (
    <VStack spacing={3} py={5} borderBottomWidth={1} borderColor="brand.light">
      <Avatar
        size="2xl"
        cursor="pointer"
        onClick={openChooseImage}
        src={profile ? profile : "../../../imgs/avatar-profile.png"}
      >
        <AvatarBadge bg="brand.blue" boxSize="1em">
          <svg width="0.4em" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
            />
          </svg>
        </AvatarBadge>
      </Avatar>
      <input
        hidden
        type="file"
        ref={profileImage}
        onChange={changeProfileImage}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Something went wrong</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>File not supported!</Text>
            <HStack mt={1}>
              <Text color="brand.cadet" fontSize="sm">
                Supported types:
              </Text>
              <Badge colorScheme="green">PNG</Badge>
              <Badge colorScheme="green">JPG</Badge>
              <Badge colorScheme="green">JPEG</Badge>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <VStack spacing={1}>
        <Heading as="h3" fontSize="xl" color="brand.dark">
          Tina Casay
        </Heading>
        <Text color="brand.gray" fontSize="sm">
          Math Teacher
        </Text>
      </VStack>
      {rol === "admin" && <Link to="/panel">Panel Admin</Link>}
    </VStack>

  );
}

export default UserProfile;
