import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    IconButton,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiPlay } from "react-icons/bi";
import { Link } from "react-router-dom";

interface RatingProps {
    rating: number;
    numOfGames: number;
}

interface GameData {
    id: number;
    badge: string;
    title: string;
    imageURL: string;
    rating: number;
    numOfGames: number;
}

interface GameProps {
    data: GameData;
}

function Rating({ rating, numOfGames }: RatingProps) {
    return (
        <Flex alignItems="center" flexDirection={"column"}>
            <Flex alignItems="center">
                {Array(5)
                    .fill("")
                    .map((_, i) => {
                        const roundedRating = Math.round(rating * 2) / 2;
                        if (roundedRating - i >= 1) {
                            return (
                                <BsStarFill
                                    key={i}
                                    style={{ marginLeft: "1" }}
                                    color={i < rating ? "teal.500" : "gray.300"}
                                />
                            );
                        }
                        if (roundedRating - i === 0.5) {
                            return (
                                <BsStarHalf
                                    key={i}
                                    style={{ marginLeft: "1" }}
                                />
                            );
                        }
                        return <BsStar key={i} style={{ marginLeft: "1" }} />;
                    })}
            </Flex>
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {numOfGames} review{numOfGames > 1 && "s"}
            </Box>
        </Flex>
    );
}

const PuzzleCard: React.FC<GameProps> = ({ data }) => {
    return (
        <Flex p={2} w="full" alignItems="center" justifyContent="center">
            <Box
                bg={useColorModeValue("white", "gray.800")}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
            >
                {data.badge && (
                    <Circle
                        size="10px"
                        position="absolute"
                        top={2}
                        right={2}
                        bg="red.200"
                    />
                )}

                <Image
                    src={data.imageURL}
                    alt={`Picture of ${data.title}`}
                    roundedTop="lg"
                />

                <Box p="6">
                    <Flex alignItems="baseline">
                        {data.badge && (
                            <Badge
                                rounded="full"
                                px="2"
                                fontSize="0.8em"
                                colorScheme="red"
                            >
                                {data.badge}
                            </Badge>
                        )}
                    </Flex>
                    <Flex
                        mt="1"
                        justifyContent="space-between"
                        alignContent="center"
                    >
                        <Box
                            fontSize="xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                            pb={4}
                        >
                            {data.title}
                        </Box>
                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center">
                        <Rating
                            rating={data.rating}
                            numOfGames={data.numOfGames}
                        />
                        <Box color={useColorModeValue("gray.800", "white")}>
                            <Link to={`/puzzle/${data.id}`}>
                                <IconButton
                                    bg={useColorModeValue(
                                        "pink.400",
                                        "pink.800"
                                    )}
                                    color={useColorModeValue(
                                        "white",
                                        "gray.800"
                                    )}
                                    _hover={{
                                        bg: "pink.600",
                                    }}
                                    icon={<BiPlay />}
                                    aria-label={"Play"}
                                />
                            </Link>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
};

export default PuzzleCard;
