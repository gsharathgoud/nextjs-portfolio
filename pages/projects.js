// /pages/projects.js

import { VStack } from "@chakra-ui/react";
import ProjectCard from "@components/ProjectCard";

export default function Projects() {
  return (
    <VStack spacing={10} mt={10} justify='flex-start' direction='column'>
      <ProjectCard
        image='/project.png'
        name='Portfolio'
        link='https://github.com/gsharathgoud/nextjs-portfolio'
      />
    </VStack>
  );
}
