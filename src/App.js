import { Box, Flex } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import { useState } from "react";
import MainRoutes from "./page/MainRoutes";

function App() {
  const [sidebarShow, setSidebarShow] = useState(true);
  const [unfoldable, setUnfoldable] = useState(false);

  const handleSize = () => {
    switch (true) {
      case !sidebarShow && unfoldable:
        // Sidebar is visible and unfolded, collapse it
        toggleUnfoldable();
        break;
      case sidebarShow && !unfoldable:
        // Sidebar is visible and folded, hide it
        toggleSidebar();
        break;
      default:
        // Sidebar is hidden, show it
        toggleSidebar();
        break;
    }
  };

  const toggleUnfoldable = () => {
    setUnfoldable(!unfoldable);
  };

  const toggleSidebar = () => {
    setSidebarShow(!sidebarShow);
  };

  return (
    <div className="App">
      <Flex
        width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          width={sidebarShow ? (unfoldable ? "88px" : "88px") : "0px"}
          overflowX="hidden"
          transition="width 0.3s ease"
          display={{ base: sidebarShow ? "block" : "none", md: "block" }}
        >
          <Sidebar sidebarShow={sidebarShow} />
        </Box>
        <Box
          flex="1"
          width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
          position="relative"
        >
          <Navbar handleSize={handleSize} />
          <MainRoutes />
        </Box>
      </Flex>
    </div>
  );
}

export default App;
