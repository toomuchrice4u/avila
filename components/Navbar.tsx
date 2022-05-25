import {
	Box,
	Button,
	Center,
	Divider,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Flex,
	HStack,
	Icon,
	IconButton,
	Link,
	List,
	ListIcon,
	ListItem,
	useBreakpointValue,
	useDisclosure,
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { FiMenu } from 'react-icons/fi'
import logo from '../assets/avilacare-logo.webp'
import NavLink from '../components/NavLink'

import { FaHome } from 'react-icons/fa'
import { AiFillInfoCircle } from 'react-icons/ai'
import { BsNewspaper } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'

export default function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<Box
			as="nav"
			w="full"
			h={useBreakpointValue({ base: 20, md: '90px' })}
			px={useBreakpointValue({ base: 4, md: 24, xl: 32 })}
			bg="white"
			position="absolute"
			zIndex={10}
		>
			<Flex h="full" alignItems="center" justifyContent="space-between">
				<NextLink href="/" passHref>
					<Link>
						<Center h="full">
							<Image src={logo} width={240} height={68} alt="AvilaCare Logo" />
						</Center>
					</Link>
				</NextLink>

				<HStack h="full" spacing={4} display={{ base: 'none', md: 'flex' }}>
					<HStack spacing={0} h="full">
						<NavLink href="/">Home</NavLink>
						<NavLink href="/about">About Us</NavLink>
						<NavLink href="/blog">Blog</NavLink>
					</HStack>
					<NextLink href="/contact" passHref>
						<Button as="a" variant="primarySolid" p={6} borderRadius="3xl">
							Contact Us
						</Button>
					</NextLink>
				</HStack>

				<Box display={{ base: 'flex', md: 'none' }}>
					<IconButton
						onClick={onOpen}
						icon={<Icon as={FiMenu} h={9} w={9} />}
						color="gray.900"
						bg="transparent"
						aria-label="Open menu"
						_active={{
							bg: 'whiteAlpha.300',
						}}
						_hover={{
							bg: 'tranparent',
						}}
					/>

					<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
						<DrawerOverlay />
						<DrawerContent bg="gray.100">
							<DrawerCloseButton fontSize="2xl" />
							<DrawerBody mt={16}>
								<List>
									<NextLink href="/" passHref>
										<Link>
											<ListItem p={4} m={2} fontSize="2xl">
												<ListIcon as={FaHome} />
												Home
											</ListItem>
										</Link>
									</NextLink>

									<Divider />

									<NextLink href="/" passHref>
										<Link>
											<ListItem p={4} m={2} fontSize="2xl">
												<ListIcon as={AiFillInfoCircle} />
												About Us
											</ListItem>
										</Link>
									</NextLink>

									<Divider />

									<NextLink href="/" passHref>
										<Link>
											<ListItem p={4} m={2} fontSize="2xl">
												<ListIcon as={BsNewspaper} />
												Blog
											</ListItem>
										</Link>
									</NextLink>

									<Divider />

									<NextLink href="/" passHref>
										<Link>
											<ListItem p={4} m={2} fontSize="2xl">
												<ListIcon as={GrMail} />
												Contact Us
											</ListItem>
										</Link>
									</NextLink>
								</List>
							</DrawerBody>
						</DrawerContent>
					</Drawer>
				</Box>
			</Flex>
		</Box>
	)
}