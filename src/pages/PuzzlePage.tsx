// PuzzlePage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import {
    Box,
    Heading,
    Text,
    Button,
    Flex,
    VStack,
    Divider,
} from "@chakra-ui/react";
import PuzzleGame from "../components/PuzzleGame"; // import our new PuzzleGame component

interface Puzzle {
    id: number;
    title: string;
    description: string;
    difficulty: string;
    creator: string;
    imageUrl: string; // Added image Url for puzzle game
}

// Pretend we fetched this data from an API
const puzzleData: Puzzle = {
    id: 1,
    title: "Mystery Mansion",
    description: "A mysterious adventure puzzle with many hidden secrets.",
    difficulty: "Hard",
    creator: "John Doe",
    imageUrl: "https://wallpaperaccess.com/full/549823.jpg", // Added image Url for puzzle game
};

const PuzzlePage = () => {
    let { id } = useParams(); // This id should be used to fetch data in real scenario.

    return (
        <Flex>
            <Box flex="1">
                <Box bg="blue.500" p={4} color="white">
                    <Heading as="h1" size="lg">
                        {puzzleData.title}
                    </Heading>
                    <Text fontSize="sm" mt={2}>
                        Created by: {puzzleData.creator}
                    </Text>
                    <Text fontSize="sm" mt={1}>
                        Difficulty: {puzzleData.difficulty}
                    </Text>
                </Box>
                <Box p={4}>
                    <Text>{puzzleData.description}</Text>
                </Box>
                <Box p={4}>
                    <PuzzleGame imageUrl={puzzleData.imageUrl} />
                </Box>
                <Box p={4}>
                    {/* Comment section for users to discuss the puzzle */}
                    <Text>Comment section goes here...</Text>
                </Box>
                <Box bg="gray.200" p={4}>
                    {/* Footer content */}
                    <Text>Footer content goes here...</Text>
                </Box>
            </Box>

            {/* Side Menu */}
            <VStack
                align="stretch"
                spacing={4}
                ml={8}
                mr={4}
                p={4}
                bg="gray.50"
                rounded="md"
                shadow="sm"
            >
                <Button colorScheme="teal">Save Progress</Button>
                <Button colorScheme="orange">Reset Puzzle</Button>
                <Button colorScheme="purple">Solve Puzzle</Button>
                <Divider />
                <Text>Your Time: 00:00</Text>
                <Text>Average Time: 00:21</Text>
                <Text>Best Time: 00:10</Text>
            </VStack>
        </Flex>
    );
};

export default PuzzlePage;
