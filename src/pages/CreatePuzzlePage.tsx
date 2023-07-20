// CreatePuzzlePage.tsx

import React from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Text,
} from "@chakra-ui/react";

const CreatePuzzlePage = () => {
    return (
        <Box>
            <Box bg="blue.500" p={4} color="white">
                {/* Header content */}
            </Box>
            <Box p={4}>
                <Text fontSize="xl" fontWeight="bold">
                    Create a Puzzle
                </Text>
                <form>
                    <FormControl mt={4}>
                        <FormLabel>Title</FormLabel>
                        <Input placeholder="Enter title" />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Description</FormLabel>
                        <Textarea placeholder="Enter description" rows={4} />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Difficulty Level</FormLabel>
                        <Input placeholder="Enter difficulty level" />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Upload Image</FormLabel>
                        <Input type="file" />
                    </FormControl>
                    <Button mt={4} colorScheme="blue">
                        Create Puzzle
                    </Button>
                </form>
            </Box>
            <Box bg="gray.200" p={4}>
                {/* Footer content */}
            </Box>
        </Box>
    );
};

export default CreatePuzzlePage;
