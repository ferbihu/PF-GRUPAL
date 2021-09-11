import { Container } from '@chakra-ui/layout'
import Content from './Content/Content';
import Sidebar from './SideBar/SideBar';

export default function MainProfile() {
  return (
    <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl">
      <Sidebar />
      <Content />
    </Container>
  )
}