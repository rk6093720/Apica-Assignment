import { Badge, Box, Icon, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import {
  FaAsymmetrik,
  FaShoppingBag,
  FaUsers,
  FaFile,
  FaCommentDots,
  FaGift,
  FaHeadphones,
} from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
const Sidebar = ({ sidebarShow }) => {
  const boxwidth = useBreakpointValue({
    base: "100%",
    md: "100%",
    lg: !sidebarShow ? "calc(100% - 0px)" : "88px",
  });
  return (
    <React.Fragment>
      <Box
        width={boxwidth}
        visibility={{ base: "hidden",sm:"hidden", md: "visible", lg: "visible" }}
        height={"1024px"}
        border={{base:"1px solid black"}}
        position={"relative"}
        Top={0}
        Left={{base:0}}
        boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      >
        <Box
          width={"52px"}
          fontSize={"24px"}
          height={"52px"}
          marginLeft={"18px"}
          marginTop={"14px"}
          borderRadius={"12px"}
          padding={"10px 2px 20px 2px"}
          //   border={"1px solid red"}
        >
          <Icon as={FaAsymmetrik} />
        </Box>
        <Box
          width={"56px"}
          height={"415px"}
          marginLeft={"16px"}
          marginTop={"68px"}
          //   border={"1px solid red"}
          gap={"12px"}
        >
          <Box
            width={"56px"}
            height={"56px"}
            borderRadius={"12px"}
            padding={"10px 2px 20px 2px"}
            gap={"10px"}
            color={"white"}
            backgroundColor={"#5570F1"}
            fontSize={"24px"}
            // border={"1px solid red"}
          >
            <Icon width={"24px"} height={"24px"} as={RiDashboardFill} />
          </Box>
          <Box
            width={"56px"}
            height={"56px"}
            borderRadius={"12px"}
            padding={"10px 2px 20px 2px"}
            gap={"12px"}
            marginTop={"15px"}
            fontSize={"24px"}
            // border={"1px solid red"}
          >
            <Icon
              width={"24px"}
              height={"24px"}
              position={"relative"}
              as={FaShoppingBag}
            />
            <Badge
              width={"24px"}
              height={"24px"}
              marginTop={"-5px"}
              marginLeft={"-10px"}
              borderRadius={"500px"}
              position={"absolute"}
              textAlign={"center"}
              color={"black"}
              backgroundColor={"#FFCC91"}
            >
              6
            </Badge>
          </Box>
          <Box
            width={"56px"}
            height={"56px"}
            borderRadius={"12px"}
            padding={"10px 2px 20px 2px"}
            gap={"10px"}
            marginTop={"15px"}
            fontSize={"24px"}
            // border={"1px solid red"}
          >
            <Icon width={"24px"} height={"24px"} as={FaUsers} />
          </Box>
          <Box
            width={"56px"}
            height={"56px"}
            borderRadius={"12px"}
            padding={"10px 2px 20px 2px"}
            gap={"10px"}
            marginTop={"15px"}
            fontSize={"24px"}
            // border={"1px solid red"}
          >
            <Icon width={"24px"} height={"24px"} as={FaFile} />
          </Box>
          <Box
            width={"56px"}
            height={"56px"}
            borderRadius={"12px"}
            padding={"10px 2px 20px 2px"}
            gap={"12px"}
            marginTop={"15px"}
            fontSize={"24px"}
            // border={"1px solid red"}
          >
            <Icon
              width={"24px"}
              height={"24px"}
              position={"relative"}
              as={FaCommentDots}
            />
            <Badge
              width={"24px"}
              height={"24px"}
              marginTop={"-5px"}
              marginLeft={"-10px"}
              borderRadius={"500px"}
              position={"absolute"}
              textAlign={"center"}
              color={"black"}
              backgroundColor={"#FFCC91"}
            >
              6
            </Badge>
          </Box>
          <Box
            width={"56px"}
            height={"56px"}
            borderRadius={"12px"}
            padding={"10px 2px 20px 2px"}
            gap={"10px"}
            marginTop={"15px"}
            fontSize={"24px"}
            // border={"1px solid red"}
          >
            <Icon width={"24px"} height={"24px"} as={IoMdSettings} />
          </Box>
        </Box>
        {/* footer  */}
        <Box
          width={"56px"}
          height={"280px"}
          marginLeft={"16px"}
          marginTop={"180px"}
          //   border={"1px solid red"}
          gap={"12px"}
        >
          <Box
            width={"56px"}
            height={"56px"}
            borderRadius={"12px"}
            padding={"10px 2px 20px 2px"}
            gap={"10px"}
            fontSize={"24px"}
            // border={"1px solid red"}
          >
            <Icon width={"24px"} height={"24px"} as={FaHeadphones} />
          </Box>
          <Box
            width={"56px"}
            height={"56px"}
            borderRadius={"12px"}
            padding={"10px 2px 20px 2px"}
            gap={"12px"}
            marginTop={"15px"}
            fontSize={"24px"}
            // border={"1px solid red"}
          >
            <Icon width={"24px"} height={"24px"} as={FaGift} />
          </Box>
          <Box
            width={"56px"}
            height={"56px"}
            borderRadius={"12px"}
            padding={"10px 2px 20px 2px"}
            gap={"10px"}
            marginTop={"95px"}
            fontSize={"24px"}
            // border={"1px solid red"}
          >
            <Icon width={"24px"} height={"24px"} as={IoLogOut} />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Sidebar;
