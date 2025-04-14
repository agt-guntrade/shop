import { Box, Text, Stack } from "@chakra-ui/react";

const DisclaimerBanner = () => {
  return (
    <Box bg="yellow.100" border="1px" borderColor="yellow.300" p={4} my={4} mx="auto" maxW="5xl" borderRadius="md" boxShadow="md">
      <Stack spacing={2}>
        <Text fontWeight="bold" fontSize="lg" color="yellow.800">
          Wichtiger Hinweis
        </Text>
        <Text color="gray.700">
          Liebe Kundinnen und Kunden, wir bitten um Ihr Verständnis, dass derzeit keine Produkte auf unserer Website angezeigt werden. 
          Wir arbeiten momentan an einer neuen und verbesserten Version unserer Seite.
        </Text>
        <Text color="gray.700">
          In den kommenden zwei Monaten wird unsere Website überarbeitet. Bei Fragen, Wünschen oder Anregungen können Sie uns gerne telefonisch oder per E-Mail kontaktieren.
        </Text>
        <Text fontStyle="italic" color="gray.600">
          Vielen Dank für Ihre Geduld und Ihr Vertrauen.
        </Text>
      </Stack>
    </Box>
  );
};

export default DisclaimerBanner;
