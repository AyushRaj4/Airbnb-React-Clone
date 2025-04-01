import styled from "styled-components";
import { useGlobalContext } from "../../Context";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import EditableParagraph from "./EditablePragraph";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Wrapper = styled.article`
  padding: 0 1.5rem;
  height: 70vh;
  overflow-y: auto;

  .place-type {
    padding: 2rem 0;
    padding-bottom: 1.7rem;
    border-bottom: 2px solid #ebebeb;
    /* margin-bottom: 1rem; */
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .select-type {
    display: flex;
    align-items: center;
    padding: 0.3rem;
    border: 1px solid #dddddd;
    border-radius: 0.7rem;
    /* column-gap: 0.5px; */
  }

  .type-btn {
    width: 100%;
    padding: 0.6rem;
    background: white;
    border-radius: 0.7rem;
  }

  .type-btn:hover {
    background: #f7f7f7;
  }

  .separator {
    height: 2rem;
    width: 1px;
    background: #dddddd;
    z-index: 10;
  }

  .price-range {
    padding: 2rem 0;
    padding-bottom: 1.7rem;
    border-bottom: 1px solid #ebebeb;
  }

  .price-range h4 {
    margin-bottom: 0.5rem;
  }

  .bar-graph {
    margin-bottom: 1.5rem;
  }

  .range-values {
    display: flex;
    justify-content: space-between;
  }

  .range-values label {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.7rem;
    font-weight: 500;
    color: #6a6a6a;
  }

  .input {
    display: flex;
    justify-content: center;
    color: #222222;
    min-width: 5rem;
    font-size: 0.95rem;
    margin-top: 0.35rem;
    border: 1px solid #dddddd;
    padding: 1rem 1.4rem;
    border-radius: 10rem;
    cursor: text;
  }
`;

const data = {
  labels: Array(50).fill(""), // Generates 25 empty labels dynamically
  datasets: [
    {
      label: "Number of Listings",
      data: [
        1, 1, 1, 5, 7, 6, 10, 8, 14, 19, 22, 30, 25, 28, 35, 40, 45, 38, 50, 42,
        48, 37, 30, 25, 20, 17, 12, 9, 6, 8, 5, 3, 2, 1, 4, 2, 0, 1, 0, 1, 2, 0,
      ],
      backgroundColor: "#e31c5f",
      borderRadius: 2,
      barThickness: 8,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide legend
    },
  },
  scales: {
    x: {
      display: true, // Show X-axis
      grid: {
        drawOnChartArea: false, // Remove grid lines between bars
        drawTicks: false, // Hide tick marks
        drawBorder: false, // Remove default axis border
      },
      ticks: {
        display: false, // Hide X-axis labels
      },
      border: {
        color: "#ed638b",
        width: 2,
      },
    },
    y: {
      display: false, // Hide Y-axis completely
      grid: {
        drawBorder: false, // Remove Y-axis border
      },
    },
  },
};

const Filters = () => {
  const { state2, togglePlaceType, setRange } = useGlobalContext();
  const [chartData, setData] = useState(data);
  console.log(state2.priceRange);

  useEffect(() => {
    let newData = {
      ...data, // Copy the existing data object
      datasets: [
        {
          ...data.datasets[0], // Copy the dataset
          data: [], // Initialize empty data array
        },
      ],
    };

    if (state2.placeType === "Any type") {
      newData.datasets[0].data = [
        0, 0, 0, 0, 1, 1, 1, 5, 1, 1, 15, 9, 10, 6, 8, 9, 45, 38, 50, 42, 48,
        37, 30, 25, 20, 17, 12, 9, 6, 8, 5, 3, 2, 1, 4, 2, 0, 1, 0, 1, 2, 0,
      ];
    } else if (state2.placeType === "Room") {
      newData.datasets[0].data = [
        0, 1, 2, 0, 3, 7, 5, 9, 10, 8, 11, 15, 14, 18, 20, 24, 30, 35, 33, 39,
        45, 50, 48, 42, 40, 38, 36, 32, 30, 28, 25, 22, 18, 14, 10, 8, 5, 3, 2,
        1, 0, 0,
      ];
    } else if (state2.placeType === "Entire home") {
      newData.datasets[0].data = [
        2, 3, 1, 4, 6, 9, 7, 12, 14, 13, 17, 22, 18, 24, 28, 35, 38, 40, 42, 45,
        50, 48, 47, 42, 40, 38, 36, 32, 30, 27, 22, 18, 14, 12, 8, 6, 5, 3, 1,
        2, 0, 0,
      ];
    }

    setData(newData); // Update state with the new object
  }, [state2]);

  return (
    <Wrapper>
      <div className="place-type">
        <h4>Type of place</h4>
        <div className="select-type">
          {state2.placeTypes.map((placeType, index) => {
            return (
              <>
                <button
                  key={index}
                  className="type-btn"
                  style={{
                    border: `${
                      placeType === state2.placeType ? "2px solid black" : ""
                    }`,
                  }}
                  onClick={() => {
                    togglePlaceType(placeType);
                  }}
                >
                  {placeType}
                </button>
                {index === 0 &&
                state2.placeType !== "Any type" &&
                state2.placeType !== "Room" ? (
                  <span className="separator"></span>
                ) : index === 1 &&
                  state2.placeType !== "Room" &&
                  state2.placeType !== "Entire home" ? (
                  <span className="separator"></span>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className="price-range">
        <h4>Price range</h4>
        <p style={{ marginBottom: "1rem" }}>
          Nightly prices before fees and taxes
        </p>
        <Bar
          className="bar-graph"
          height={40}
          data={chartData}
          options={options}
        />
        <div className="range-values">
          <label htmlFor="min">
            Minimum
            <EditableParagraph
              value={`₹${state2.priceRange.min}`}
              onChange={(newValue) =>
                setRange("min", newValue.replace("₹", ""))
              }
            />
          </label>
          <label htmlFor="max">
            Maximum
            <EditableParagraph
              value={`₹${state2.priceRange.max}`}
              onChange={(newValue) =>
                setRange("max", newValue.replace("₹", ""))
              }
            />
          </label>
        </div>
      </div>
    </Wrapper>
  );
};

export default Filters;
