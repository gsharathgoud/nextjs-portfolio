// /pages/index.js

/*

	Make sure you swap out my information with your own! 
	We want to be ready to ship by the end of the workshop 👀

	- Name
	- Title
	- Image (if you'd like) -> put this in the public folder
	- Bio 
	- Twitter link (if you have one)
	- Github link

*/

import {
  Heading,
  Flex,
  VStack,
  HStack,
  Icon,
  Text,
  Link,
  Avatar,
} from "@chakra-ui/react";

import { FaTwitter, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <VStack align='center' gap='32px' justify='center'>
      <Avatar src='/mine.jpg' size='2xl' />
      <VStack>
        <Heading as='h1'>Sharath Gaddameedi</Heading>
        <Heading size='md' as='h3'>
          Senior Software Engineer
        </Heading>
      </VStack>
      <Text textAlign='center'>
        Sharath is an Adobe Certified Expert - AEM (Adobe Experience Manager)
        Technical Lead and a Senior Software Engineer focused on Frontend User
        Interface. He is a vibrant and versatile individual with an array of
        ever-growing skills bought in and out of schools and earlier and current
        job(s). Furthermore, he can develop and integrate modern web
        applications which are not only robust but reusable to improve the
        efficiency of any organization’s information system. <br /> Lets connect
        👇
      </Text>
      <HStack spacing='20px' justifySelf='center'>
        <Link href='https://twitter.com/domitriusclark' target='_blank'>
          <Icon color='blue.200' as={FaTwitter} />
        </Link>
        <Link href='https://github.com/domitriusclark' target='_blank'>
          <Icon color='black' as={FaGithub} />
        </Link>
      </HStack>
    </VStack>
  );
}
