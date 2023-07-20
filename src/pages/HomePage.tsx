import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from "@chakra-ui/react";
import PuzzleCard from "../components/PuzzleCard";

interface PuzzleCardProps {
    title: string;
    stat: string;
}

const puzzlesData = [
    {
        badge: "new",
        title: "Dragon puzzle",
        imageURL: "https://wallpaperaccess.com/full/549823.jpg",
        rating: 4.2,
        numOfGames: 34,
    },
    {
        badge: "popular",
        title: "Space adventure",
        imageURL: "https://wallpaperaccess.com/full/549823.jpg",
        rating: 4.8,
        numOfGames: 78,
    },
    {
        badge: "hot",
        title: "Mystery Mansion",
        imageURL: "https://wallpaperaccess.com/full/549823.jpg",
        rating: 4.5,
        numOfGames: 52,
    },
    {
        badge: "new",
        title: "Jungle Adventure",
        imageURL: "https://wallpaperaccess.com/full/549823.jpg",
        rating: 4.3,
        numOfGames: 21,
    },
    {
        title: "Zombie Apocalypse",
        imageURL: "https://wallpaperaccess.com/full/549823.jpg",
        rating: 4.6,
        numOfGames: 68,
    },
    {
        title: "Word Puzzle",
        imageURL: "https://wallpaperaccess.com/full/549823.jpg",
        rating: 4.4,
        numOfGames: 92,
    },
    {
        badge: "hot",
        title: "Tower Defense",
        imageURL: "https://wallpaperaccess.com/full/549823.jpg",
        rating: 4.9,
        numOfGames: 43,
    },
    {
        badge: "new",
        title: "Fantasy Quest",
        imageURL: "https://wallpaperaccess.com/full/549823.jpg",
        rating: 4.1,
        numOfGames: 17,
    },
];

export default function BasicStatistics() {
    return (
        <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
                textAlign={"center"}
                fontSize={"2xl"}
                py={10}
                fontWeight={"bold"}
            >
                Free Jigsaw Puzzles: Choose your game, become a champion!
            </chakra.h1>
            <SimpleGrid
                columns={{ base: 1, md: 4 }}
                spacing={{ base: 5, lg: 8 }}
            >
                {puzzlesData.map((puzzle) => (
                    <PuzzleCard data={puzzle} />
                ))}
            </SimpleGrid>
        </Box>
    );
}
