import { useEffect } from "react";
import { CSSReset, Switch, useColorMode, Box } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import useIconColorStore from "../../store/iconColorStore";
const SwitchTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { setLight, setDark, fill } = useIconColorStore();
  useEffect(() => {
    if (colorMode === "dark") {
      setLight();
    } else {
      setDark();
    }
  }, [colorMode, setLight, setDark, fill]);
  return (
    <Box>
      <CSSReset />
      <Box p={4} display="flex" alignItems="center">
        <Box mr={2}>{colorMode === "dark" ? <SunIcon /> : <MoonIcon />}</Box>
        <Switch
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
          colorScheme="teal"
        />
      </Box>
    </Box>
  );
};

export default SwitchTheme;
