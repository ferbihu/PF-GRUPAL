import { Box } from '@chakra-ui/react'
import UserProfile from './UserProfile';


function Sidebar() {
  return (
    <Box
      mt="150px"
      as="aside"
      flex={1}
      mr={{ base: 0, md: 5 }}
      mb={{ base: 5, md: 0 }}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="brand.light"
      style={{ transform: 'translateY(-100px)' }}
    >
      <UserProfile />
    </Box>
  )
}

export default Sidebar;