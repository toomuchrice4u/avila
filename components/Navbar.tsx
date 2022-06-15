import {
	Box,
	Button,
	Center,
	Flex,
	HStack,
	Icon,
	IconButton,
	Link,
	useBreakpointValue,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import MobileNav from './MobileNav'
import logo from '../assets/avilacare-logo.webp'
import type { Navigation } from '../types/payload-types'
import { FaMoon, FaSun } from 'react-icons/fa'

export type NavbarProps = {
	nav: Navigation
	height: string
	mobile: boolean
}

export default function MyNavbar({ nav, height, mobile }: NavbarProps) {
	const { colorMode, toggleColorMode } = useColorMode()
	const buttonBg = useColorModeValue('whiteAlpha.800', 'whiteAlpha.300')
	const buttonHover = { bg: useColorModeValue('whiteAlpha.900', 'whiteAlpha.400') }
	return (
		<Box
			as="nav"
			w="full"
			h={height}
			px={useBreakpointValue({ base: 4, lg: 12, xl: 28 })}
			bg={useColorModeValue('white', 'gray.800')}
			// bg="white"
			position="absolute"
			zIndex={10}
		>
			<Flex h="full" alignItems="center" justifyContent="space-between">
				<Box data-aos="fade-right">
					<NextLink href="/" passHref>
						<Link>
							<Center h="full">
								<Image src={logo} width={240} height={68} alt="AvilaCare Logo" />
							</Center>
						</Link>
					</NextLink>
				</Box>

				{mobile ? (
					<MobileNav nav={nav} data-aos="fade-left" />
				) : (
					<HStack h="full" spacing={4} data-aos="fade-left">
						<HStack spacing={0} h="full">
							{nav.links?.slice(0, nav.links.length - 1).map(({ id, url, label }) => (
								<NextLink key={id} href={url} passHref>
									<Link
										w={28}
										h="full"
										display="flex"
										alignItems="center"
										justifyContent="center"
										fontSize="20px"
										_hover={{
											bg: 'gray.100',
										}}
									>
										{label}
									</Link>
								</NextLink>
							))}
						</HStack>
						{nav.links?.slice(nav.links.length - 1).map(({ id, url, label }) => (
							<NextLink key={id} href={url} passHref>
								<Button as="a" variant="primarySolid" p={6} borderRadius="3xl">
									{label}
								</Button>
							</NextLink>
						))}
						<IconButton
							size="lg"
							onClick={toggleColorMode}
							aria-label={colorMode === 'light' ? 'dark-mode' : 'light-mode'}
							icon={colorMode === 'light' ? <Icon as={FaMoon} /> : <Icon as={FaSun} />}
							bg={buttonBg}
							_hover={buttonHover}
						/>
					</HStack>
				)}
			</Flex>
		</Box>
	)
}
