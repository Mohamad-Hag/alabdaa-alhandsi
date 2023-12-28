import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        colorScheme: "yellow",
      },
    },
  },
});

export default theme;
