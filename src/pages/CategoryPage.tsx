// CategoryPage.tsx

import React from "react";
import { Box, Text } from "@chakra-ui/react";

const CategoryPage = () => {
    return (
        <Box>
            <Box bg="blue.500" p={4} color="white">
                {/* Header content */}
            </Box>
            <Box p={4}>
                <Text fontSize="xl" fontWeight="bold">
                    Category Name
                </Text>
                {/* Title indicating the category name */}
            </Box>
            <Box p={4}>
                <Text fontSize="xl" fontWeight="bold">
                    Puzzles
                </Text>
                {/* Grid layout displaying puzzles in the selected category */}
            </Box>
            <Box bg="gray.200" p={4}>
                {/* Footer content */}
            </Box>
        </Box>
    );
};

export default CategoryPage;
