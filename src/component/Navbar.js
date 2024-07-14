import {
  Box,
  Badge,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Flex,
  Icon,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon, BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FaImage } from "react-icons/fa";
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
import { Link } from "react-router-dom";

const Navbar = ({ handleSize }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThanLG] = useMediaQuery("(min-width: 60em)");

  const onClick = () => {
    if (isLargerThanLG) {
      handleSize();
    } else {
      onOpen();
    }
  };

  return (
    <Box
      borderBottom="1px solid"
      borderColor="gray.200"
      width="100%"
      height={{ base: "60px", md: "70px" }}
      padding={{
        base: "10px 16.5px",
        sm: "10px 16.5px",
        md: "10px 25px",
        lg: "10px 25px",
      }}
      position="fixed"
      top={0}
      zIndex={1}
      backgroundColor="white"
    >
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Button onClick={onClick} marginInlineStart="-14px">
            <Icon width="24px" height="24px" as={HamburgerIcon} />
          </Button>
          <Text marginLeft="15px" fontSize={{ base: "16px", lg: "20px" }}>
            <Link to={"/"}>Dashboard</Link>
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          padding="0 12px"
          // border={"1px solid red"}
          gap="10px"
          marginRight={"70px"}
        >
          <Box
            display="flex"
            alignItems="center"
            padding="0 12px"
            borderRadius="8px"
            backgroundColor="gray.100"
          >
            <Text fontSize={{ base: "14px", lg: "16px" }}>Shop</Text>
            <Icon as={ChevronDownIcon} marginLeft="5px" />
          </Box>
          <Box width="32px" height="32px">
            <Icon as={BellIcon} width="24px" height="24px" />
          </Box>
          <Box width="32px" height="32px" borderRadius="8px">
            <Icon as={FaImage} width="100%" height="100%" />
          </Box>
        </Flex>
      </Flex>

      <Drawer
        width="296px"
        height={{base:"1024px",sm:"1024px",md:"1024px",lg:"1024px"}}
        margin={"20px 20px"}
        placement="left"
        onClose={onClose}
        overflowX="hidden"
        isOpen={isOpen}
      >
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Flex
              direction="column"
              alignItems="center"
              fontSize="18px"
              width="100%"
              height="100%"
              margin={"20px 20px"}
            >
              <Box
                width="100%"
                height="1024px"
                position="relative"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              >
                <Flex direction="column" alignItems="center" mt="5px">
                  <Box
                    width={"123.49px"}
                    height={"52px"}
                    marginLeft={"-34.51px"}
                    padding={"3px"}
                    display={"flex"}
                    direction="row"
                    fontSize={"24px"}
                  >
                    <Icon as={FaAsymmetrik} fontSize="24px" />
                    <Text width={"90px"} height={"30px"} marginLeft={"32px"}>
                      Metrix
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  direction="column"
                  alignItems="center"
                  mt="49px"
                  gap="12px"
                >
                  {/* Menu Items */}
                  <Box
                    width={"233px"}
                    height={"56px"}
                    marginLeft={"35.51px"}
                    borderRadius="12px"
                    padding={"16px 20px 16px 20px"}
                    gap={"10px"}
                    display={"flex"}
                    direction="row"
                  >
                    <IconBox icon={RiDashboardFill} />
                    <Text
                      width={"100px"}
                      height={"17px"}
                      marginLeft={"2px"}
                      marginTop={"-5px"}
                    >
                      Dashboard
                    </Text>
                  </Box>
                  <Box
                    width={"233px"}
                    height={"56px"}
                    marginLeft={"35.51px"}
                    borderRadius="12px"
                    padding={"16px 20px 16px 20px"}
                    gap={"10px"}
                    display={"flex"}
                    direction="row"
                  >
                    <IconBoxWithBadge icon={FaShoppingBag} badgeCount={6} />
                    <Text
                      width={"100px"}
                      height={"17px"}
                      marginLeft={"2px"}
                      marginTop={"-3px"}
                    >
                      Bag
                    </Text>
                  </Box>
                  <Box
                    width={"233px"}
                    height={"56px"}
                    marginLeft={"35.51px"}
                    borderRadius="12px"
                    padding={"16px 20px 16px 20px"}
                    gap={"10px"}
                    display={"flex"}
                    direction="row"
                  >
                    <IconBox icon={FaUsers} />
                    <Text
                      width={"100px"}
                      height={"17px"}
                      marginLeft={"2px"}
                      marginTop={"-5px"}
                    >
                      Users
                    </Text>
                  </Box>
                  <Box
                    width={"233px"}
                    height={"56px"}
                    marginLeft={"35.51px"}
                    borderRadius="12px"
                    padding={"16px 20px 16px 20px"}
                    gap={"10px"}
                    display={"flex"}
                    direction="row"
                  >
                    <IconBox icon={FaFile} />
                    <Text
                      width={"100px"}
                      height={"17px"}
                      marginLeft={"2px"}
                      marginTop={"-5px"}
                    >
                      File
                    </Text>
                  </Box>
                  <Box
                    width={"233px"}
                    height={"56px"}
                    marginLeft={"35.51px"}
                    borderRadius="12px"
                    padding={"16px 20px 16px 20px"}
                    gap={"10px"}
                    display={"flex"}
                    direction="row"
                  >
                    <IconBoxWithBadge icon={FaCommentDots} badgeCount={6} />
                    <Text
                      width={"100px"}
                      height={"17px"}
                      marginLeft={"2px"}
                      marginTop={"-3px"}
                    >
                      Comment
                    </Text>
                  </Box>

                  <Box
                    width={"233px"}
                    height={"56px"}
                    marginLeft={"35.51px"}
                    borderRadius="12px"
                    padding={"16px 20px 16px 20px"}
                    gap={"10px"}
                    display={"flex"}
                    direction="row"
                  >
                    <IconBox icon={IoMdSettings} />
                    <Text
                      width={"100px"}
                      height={"17px"}
                      marginLeft={"2px"}
                      marginTop={"-5px"}
                    >
                      Settings
                    </Text>
                  </Box>
                </Flex>

                {/* Footer */}
                <Flex
                  direction="column"
                  alignItems="center"
                  mt="180px"
                  gap="12px"
                >
                  <Box
                    width={"233px"}
                    height={"56px"}
                    marginLeft={"35.51px"}
                    borderRadius="12px"
                    padding={"16px 20px 16px 20px"}
                    gap={"10px"}
                    display={"flex"}
                    direction="row"
                  >
                    <IconBox icon={FaHeadphones} />
                    <Text
                      width={"150px"}
                      height={"17px"}
                      marginLeft={"2px"}
                      marginTop={"-5px"}
                    >
                      Contact support
                    </Text>
                  </Box>
                  <Box
                    width={"233px"}
                    height={"56px"}
                    marginLeft={"35.51px"}
                    borderRadius="12px"
                    padding={"16px 20px 16px 20px"}
                    gap={"10px"}
                    display={"flex"}
                    direction="row"
                  >
                    <IconBox icon={FaGift} />
                    <Text
                      width={"200px"}
                      height={"27px"}
                      marginLeft={"2px"}
                      marginTop={"-5px"}
                      textOverflow={"hidden"}
                    >
                      Free gift Await You
                    </Text>
                  </Box>
                  <Box
                    width={"233px"}
                    height={"56px"}
                    marginLeft={"35.51px"}
                    borderRadius="12px"
                    padding={"16px 20px 16px 20px"}
                    gap={"10px"}
                    display={"flex"}
                    direction="row"
                  >
                    <IconBox icon={IoLogOut} />
                    <Text
                      width={"100px"}
                      height={"17px"}
                      marginLeft={"2px"}
                      marginTop={"-5px"}
                    >
                      Logout
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

const IconBox = ({ icon }) => (
  <Box
    width="20px"
    height="20px"
    borderRadius="12px"
    padding="10px 2px"
    display="flex"
    justifyContent="center"
    alignItems="center"
    bg="gray.200"
  >
    <Icon as={icon} fontSize="24px" />
  </Box>
);

const IconBoxWithBadge = ({ icon, badgeCount }) => (
  <Box position="relative">
    <IconBox icon={icon} />
    <Badge
      position="absolute"
      top="-2px"
      left="110px"
      borderRadius="full"
      color="black"
      backgroundColor="#FFCC91"
      width="24px"
      height="24px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {badgeCount}
    </Badge>
  </Box>
);

export default Navbar;
