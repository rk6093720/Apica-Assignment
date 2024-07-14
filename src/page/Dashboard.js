import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  HStack,
  Progress,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import WidgetsBrand from "./WidgetsBrand";
import WidgetsDropdown from "./WidgetsDropdown";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle } from "@coreui/utils";
import { useEffect, useRef } from "react";

const MainChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const updateChartColors = () => {
      if (chartRef.current) {
        setTimeout(() => {
          const { options } = chartRef.current;
          options.scales.x.grid.borderColor = getStyle(
            "--cui-border-color-translucent"
          );
          options.scales.x.grid.color = getStyle(
            "--cui-border-color-translucent"
          );
          options.scales.x.ticks.color = getStyle("--cui-body-color");
          options.scales.y.grid.borderColor = getStyle(
            "--cui-border-color-translucent"
          );
          options.scales.y.grid.color = getStyle(
            "--cui-border-color-translucent"
          );
          options.scales.y.ticks.color = getStyle("--cui-body-color");
          chartRef.current.update();
        });
      }
    };

    document.documentElement.addEventListener(
      "ColorSchemeChange",
      updateChartColors
    );
    return () => {
      document.documentElement.removeEventListener(
        "ColorSchemeChange",
        updateChartColors
      );
    };
  }, [chartRef]);

  const random = () => Math.round(Math.random() * 100);

  return (
    <CChartLine
      ref={chartRef}
      style={{ height: "300px", marginTop: "40px" }}
      data={{
        labels: [
          "8:00 AM",
          "9:00 AM",
          "10:00 AM",
          "11:00 AM",
          "12:00 PM",
          "1:00 PM",
          "2:00 PM",
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: `rgba(${getStyle("--cui-info-rgb")}, .1)`,
            borderColor: getStyle("--cui-info"),
            pointHoverBackgroundColor: getStyle("--cui-info"),
            borderWidth: 2,
            data: Array.from({ length: 7 }, random),
            fill: true,
          },
          {
            label: "My Second dataset",
            backgroundColor: "transparent",
            borderColor: getStyle("--cui-success"),
            pointHoverBackgroundColor: getStyle("--cui-success"),
            borderWidth: 2,
            data: Array.from({ length: 7 }, random),
          },
          {
            label: "My Third dataset",
            backgroundColor: "transparent",
            borderColor: getStyle("--cui-danger"),
            pointHoverBackgroundColor: getStyle("--cui-danger"),
            borderWidth: 1,
            borderDash: [8, 5],
            data: [65, 65, 65, 65, 65, 65, 65],
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              color: getStyle("--cui-border-color-translucent"),
              drawOnChartArea: false,
            },
            ticks: {
              color: getStyle("--cui-body-color"),
            },
          },
          y: {
            beginAtZero: true,
            border: {
              color: getStyle("--cui-border-color-translucent"),
            },
            grid: {
              color: getStyle("--cui-border-color-translucent"),
            },
            max: 100,
            ticks: {
              color: getStyle("--cui-body-color"),
              maxTicksLimit: 6,
              stepSize: Math.ceil(200 / 5),
            },
          },
        },
        elements: {
          line: {
            tension: 0.4,
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
          },
        },
      }}
    />
  );
};

const Dashboard = () => {
  const sidebarShow = true;
  const progressExample = [
    { title: "Visits", value: "29.703 Users", percent: 40, color: "green" },
    { title: "Unique", value: "24.093 Users", percent: 20, color: "blue" },
    { title: "Pageviews", value: "78.706 Views", percent: 60, color: "orange" },
    { title: "New Users", value: "22.123 Users", percent: 80, color: "red" },
    {
      title: "Bounce Rate",
      value: "Average Rate",
      percent: 40.15,
      color: "purple",
    },
  ];

  const tableExample = [
    {
      cars_plate: "1232342345345",
      status: "Enter",
      usage: {
        value: 50,
        period: "Jun 11, 2023 - Jul 10, 2023",
        color: "green",
      },
      payment: "Mastercard",
      timeline: "10 sec ago",
    },
    {
      cars_plate: "1232342345345",
      status: "Exit",
      usage: {
        value: 22,
        period: "Jun 11, 2023 - Jul 10, 2023",
        color: "blue",
      },
      payment: "Visa",
      timeline: "5 minutes ago",
    },
    // Add more data as needed
  ];

  const boxwidth = useBreakpointValue({
    base: "320px",
    md: "100%",
    lg: !sidebarShow ? "calc(100% - 0.5%)" : "100%",
  });

  return (
    <Box
      width={boxwidth}
      position={"absolute"}
      height={"1024px"}
      border={"1px solid black"}
      marginTop={{base:"0%"}}
    >
      <WidgetsDropdown mb={4} />
      <Card mt={4}>
        <CardBody>
          <Flex justify="space-between" align="center">
            <Box>
              <Heading size="md" mb={0}>
                Vehicles
              </Heading>
              <Text fontSize="sm" color="gray.500">
                January - July 2023
              </Text>
            </Box>
            <HStack spacing={3}>
              <Button colorScheme="blue">
                <DownloadIcon />
              </Button>
              <ButtonGroup>
                {["Day", "Month", "Year"].map((value) => (
                  <Button
                    colorScheme="blue"
                    variant={value === "Month" ? "solid" : "outline"}
                    key={value}
                  >
                    {value}
                  </Button>
                ))}
              </ButtonGroup>
            </HStack>
          </Flex>
          <MainChart />
        </CardBody>
        <CardFooter>
          <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={4} textAlign="center">
            {progressExample.map((item, index) => (
              <Box key={index}>
                <Text color="gray.500">{item.title}</Text>
                <Text fontWeight="bold">
                  {item.value} ({item.percent}%)
                </Text>
                <Progress
                  mt={2}
                  colorScheme={item.color}
                  value={item.percent}
                  size="sm"
                />
              </Box>
            ))}
          </SimpleGrid>
        </CardFooter>
      </Card>
      <WidgetsBrand mb={4} withCharts />
      <SimpleGrid columns={1}>
        <Card mb={4}>
          <CardHeader>Vehicles</CardHeader>
          <CardBody>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th textAlign={"start"}>Status</Th>
                    <Th textAlign={"start"}>Car's Number Plate</Th>
                    <Th textAlign={"start"}>Usage</Th>
                    <Th textAlign={"start"}>Timeline</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {tableExample.map((item, index) => (
                    <Tr key={index}>
                      <Td
                        textAlign={"start"}
                        bg={item.status === "Enter" ? "green" : "red"}
                        color="white"
                      >
                        {item.status}
                      </Td>
                      <Td>{item.cars_plate}</Td>
                      <Td>
                        <Text fontWeight="bold">{item.usage.value}%</Text>
                        <Progress
                          colorScheme={item.usage.color}
                          value={item.usage.value}
                          size="sm"
                        />
                        <Text fontSize="xs" color="gray.500">
                          {item.usage.period}
                        </Text>
                      </Td>
                      <Td>{item.timeline}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
