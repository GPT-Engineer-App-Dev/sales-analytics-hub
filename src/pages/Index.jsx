import { Box, Container, Flex, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaChartPie } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} mb={6} justifyContent="center">
        <Heading size="lg">Business Dashboard</Heading>
      </Flex>
      <VStack spacing={8}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Flex align="center" mb={2}>
              <FaChartLine size="24px" />
              <Heading size="md" ml={2}>Sales</Heading>
            </Flex>
            <Text mt={4}>$50,000</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Flex align="center" mb={2}>
              <FaDollarSign size="24px" />
              <Heading size="md" ml={2}>Revenue</Heading>
            </Flex>
            <Text mt={4}>$120,000</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Flex align="center" mb={2}>
              <FaChartPie size="24px" />
              <Heading size="md" ml={2}>Key Metrics</Heading>
            </Flex>
            <Text mt={4}>Customer Satisfaction: 85%</Text>
            <Text>New Customers: 300</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;