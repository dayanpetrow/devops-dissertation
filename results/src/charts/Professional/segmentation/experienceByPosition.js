import { BY_EXPERIENCE } from "../../segmentationData";

export const generatePositionGroupsBySegment = (segmentData) => {
  return segmentData.reduce((hashmap, response) => {
    const { PRO_POS } = response;

    hashmap[PRO_POS] =
      hashmap[PRO_POS] !== undefined ? (hashmap[PRO_POS] += 1) : 1;

    return hashmap;
  }, {});
};

export const generateGroupedChartDataBySegment = (segment, group) => {
  const POSITIONS = {
    1: "Software Development",
    2: "Cloud/DevOps",
    3: "Leadership/Management",
    4: "Design",
    5: "Testing",
    6: "Other",
  };

  return Object.keys(segment).map((relation) => ({
    label: POSITIONS[relation],
    count: segment[relation],
    group: group,
  }));
};

export const EXPERIENCE_BY_POSITION_DATA = {
  "0-2": generatePositionGroupsBySegment(BY_EXPERIENCE["0-2"]),
  "3-5": generatePositionGroupsBySegment(BY_EXPERIENCE["3-5"]),
  "6-10": generatePositionGroupsBySegment(BY_EXPERIENCE["6-10"]),
  "11-20": generatePositionGroupsBySegment(BY_EXPERIENCE["11-20"]),
  "More than 20": generatePositionGroupsBySegment(
    BY_EXPERIENCE["More than 20"]
  ),
};

export const EXPERIENCE_BY_POSITION_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    EXPERIENCE_BY_POSITION_DATA["0-2"],
    "0-2"
  ),
  ...generateGroupedChartDataBySegment(
    EXPERIENCE_BY_POSITION_DATA["3-5"],
    "3-5"
  ),
  ...generateGroupedChartDataBySegment(
    EXPERIENCE_BY_POSITION_DATA["6-10"],
    "6-10"
  ),
  ...generateGroupedChartDataBySegment(
    EXPERIENCE_BY_POSITION_DATA["11-20"],
    "11-20"
  ),
  ...generateGroupedChartDataBySegment(
    EXPERIENCE_BY_POSITION_DATA["More than 20"],
    "More than 20"
  ),
];
