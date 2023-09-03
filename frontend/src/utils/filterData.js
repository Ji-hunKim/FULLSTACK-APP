const continents = [
  {
    _id: 1,
    name: "Africa",
  },
  {
    _id: 2,
    name: "Europe",
  },
  {
    _id: 3,
    name: "Asia",
  },
  {
    _id: 4,
    name: "North America",
  },
  {
    _id: 5,
    name: "South America",
  },
  {
    _id: 6,
    name: "Australia",
  },
  {
    _id: 7,
    name: "Antarctica",
  },
];

const prices = [
  {
    _id: 1,
    name: "All",
    array: [],
  },
  {
    _id: 2,
    name: "0~9$",
    array: [0, 9],
  },
  {
    _id: 3,
    name: "10~99$",
    array: [10, 99],
  },
  {
    _id: 4,
    name: "100~999$",
    array: [100, 999],
  },
  {
    _id: 5,
    name: "1000~9999$",
    array: [1000, 9999],
  },
  {
    _id: 6,
    name: "10000~99999$",
    array: [10000, 99999],
  },
];

export { continents, prices };
