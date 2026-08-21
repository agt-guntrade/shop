import { Box, Text, Stack } from "@chakra-ui/react";

const DisclaimerBanner = () => {
  return (
    <Box bg="yellow.100" border="1px" borderColor="yellow.300" p={4} my={4} mx="auto" maxW="5xl" borderRadius="md" boxShadow="md">
  <Stack spacing={2}>
    <Text fontWeight="bold" fontSize="lg" color="yellow.800">
      Wichtiger Hinweis
    </Text>
    <Text color="gray.700">
      Liebe Kundinnen und Kunden, wir arbeiten weiterhin mit Hochdruck an einer neuen und verbesserten Version unserer Website, 
      die Ihnen bald ein noch angenehmeres Einkaufserlebnis bieten wird.
    </Text>
    <Text color="gray.700">
      Bis dahin pflegen wir selbstverständlich weiterhin neue Produkte in unser bestehendes Sortiment ein – 
      es lohnt sich also, regelmäßig vorbeizuschauen.
    </Text>
    <Text color="gray.700">
      Bei Fragen, Wünschen oder Anregungen erreichen Sie uns gerne telefonisch oder per E-Mail.
    </Text>
    <Text fontStyle="italic" color="gray.600">
      Vielen Dank für Ihre Geduld und Ihr Vertrauen.
    </Text>
  </Stack>
</Box>
  );
};

export default DisclaimerBanner;
