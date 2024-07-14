import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  GridItem,
  Flex,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { Line, Bar } from "react-chartjs-2";
import { FaEllipsisV } from "react-icons/fa";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const WidgetsDropdown = ({ className }) => {
  const widgetChartRef1 = useRef(null);
  const widgetChartRef2 = useRef(null);

  const handleModal = () => {
    alert("modal");
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 1,
        tension: 0.4,
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  };

  const widgetData = [
    {
      color: "blue.500",
      value: (
        <Button onClick={handleModal} size="sm">
          26K{" "}
          <Text as="span" fontSize="sm" fontWeight="normal">
            (No of People in the Event)
          </Text>
        </Button>
      ),
      title: "Event Participants",
      chartData: [65, 59, 84, 84, 51, 55, 40],
      ref: widgetChartRef1,
    },
    {
      color: "cyan.500",
      value: (
        <>
          $6,200{" "}
          <Text as="span" fontSize="sm" fontWeight="normal">
            (Parking Spots)
          </Text>
        </>
      ),
      title: "Parking Revenue",
      chartData: [1, 18, 9, 17, 34, 22, 11],
      ref: widgetChartRef2,
    },
    {
      color: "yellow.500",
      value: (
        <>
          2.49%{" "}
          <Text as="span" fontSize="sm" fontWeight="normal">
            (Guard) online
          </Text>
        </>
      ),
      title: "Guard Online Rate",
      chartData: [78, 81, 80, 45, 34, 12, 40],
    },
    {
      color: "red.500",
      value: (
        <>
          44K{" "}
          <Text as="span" fontSize="sm" fontWeight="normal">
            (-23.6%)
          </Text>
        </>
      ),
      title: "Sessions",
      chartData: [
        78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82,
      ],
      isBar: true,
    },
  ];

  return (
    <div>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(auto-fill, minmax(240px, 1fr))",
        }}
        gap={4}
        width={{base:"100%",sm:"100%",md:"100%",lg:"100%"}}
        marginTop={{base:"-300%",sm:"10%",md:"10%",lg:"0%"}}
        className={className}
      >
        {widgetData.map((widget, index) => (
          <GridItem
            key={index}
            bg={widget.color}
            p={4}
            borderRadius="md"
            color="white"
            position="relative"
            height="150px"
            alignContent="center"
            border="1px solid blue"
            marginTop={{base:"0px",lg:"80px"}}
          >
            <Flex justify="space-between" align="center">
              <Box>
                <Text fontSize="2xl" fontWeight="bold">
                  {widget.value}
                </Text>
                <Text fontSize="sm">{widget.title}</Text>
              </Box>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<FaEllipsisV />}
                  variant="ghost"
                  colorScheme="whiteAlpha"
                  aria-label="Options"
                />
                <MenuList>
                  <MenuItem>Action</MenuItem>
                  <MenuItem>Another action</MenuItem>
                  <MenuItem>Something else here...</MenuItem>
                  <MenuItem isDisabled>Disabled action</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              height="70px"
            >
              {widget.isBar ? (
                <Bar
                  ref={widget.ref}
                  data={{
                    labels: [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                    ],
                    datasets: [
                      {
                        label: "Dataset",
                        backgroundColor: "rgba(255,255,255,.2)",
                        borderColor: "rgba(255,255,255,.55)",
                        data: widget.chartData,
                        barPercentage: 0.6,
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
                          display: false,
                          drawTicks: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        grid: {
                          display: false,
                          drawTicks: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                  }}
                />
              ) : (
                <Line
                  ref={widget.ref}
                  data={{
                    labels: [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                    ],
                    datasets: [
                      {
                        label: "Dataset",
                        backgroundColor: "transparent",
                        borderColor: "rgba(255,255,255,.55)",
                        pointBackgroundColor: widget.color,
                        data: widget.chartData,
                      },
                    ],
                  }}
                  options={chartOptions}
                />
              )}
            </Box>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
};

export default WidgetsDropdown;
