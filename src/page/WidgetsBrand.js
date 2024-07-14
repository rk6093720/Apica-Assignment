import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  GridItem,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaTwitter, FaCalendar } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const WidgetsBrand = ({ className, withCharts }) => {
  console.log(className);
  const chartOptions = {
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
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  const widgetData = [
    {
      icon: FaFacebook,
      bg: "#3b5998",
      title: "friends",
      value: "89K",
      subTitle: "feeds",
      subValue: "459",
      chartData: [65, 59, 84, 84, 51, 55, 40],
    },
    {
      icon: FaTwitter,
      bg: "#00aced",
      title: "followers",
      value: "973k",
      subTitle: "tweets",
      subValue: "1.792",
      chartData: [1, 13, 9, 17, 34, 41, 38],
    },
    {
      icon: FaLinkedin,
      bg: "#4875b4",
      title: "contacts",
      value: "500",
      subTitle: "feeds",
      subValue: "1.292",
      chartData: [78, 81, 80, 45, 34, 12, 40],
    },
    {
      icon: FaCalendar,
      bg: useColorModeValue("orange.400", "orange.200"),
      title: "events",
      value: "12+",
      subTitle: "meetings",
      subValue: "4",
      chartData: [35, 23, 56, 22, 97, 23, 64],
    },
  ];

  return (
    <div>
      <Grid
        className={className}
        templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
        gap={4}
      >
        {widgetData.map((widget, index) => (
          <GridItem
            key={index}
            position="relative"
            bg={widget.bg}
            p={4}
            borderRadius="md"
            color="white"
          >
            <Flex direction="column" align="center" justify="center" h="100%">
              <Icon as={widget.icon} boxSize={10} mb={4} />
              <Text fontSize="2xl" fontWeight="bold">
                {widget.value}
              </Text>
              <Text>{widget.title}</Text>
              <Text fontSize="sm" mt={2}>
                {widget.subValue}
              </Text>
              <Text fontSize="sm">{widget.subTitle}</Text>
            </Flex>
            {withCharts && (
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                height="50px"
              >
                <Line
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
                        backgroundColor: "rgba(255,255,255,.1)",
                        borderColor: "rgba(255,255,255,.55)",
                        pointHoverBackgroundColor: "#fff",
                        borderWidth: 2,
                        data: widget.chartData,
                        fill: true,
                      },
                    ],
                  }}
                  options={chartOptions}
                  height={50}
                />
              </Box>
            )}
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

WidgetsBrand.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
};

export default WidgetsBrand;
