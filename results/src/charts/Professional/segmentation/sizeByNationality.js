import { BY_COMPANY_NATIONALITY, BY_SIZE } from "../../segmentationData";

export const generatePositionGroupsBySegment = (segmentData) => {
  return segmentData.reduce((hashmap, response) => {
    const { PRO_COMNAT } = response;

    hashmap[PRO_COMNAT] =
      hashmap[PRO_COMNAT] !== undefined ? (hashmap[PRO_COMNAT] += 1) : 1;

    return hashmap;
  }, {});
};

export const generateGroupedChartDataBySegment = (segment, group) => {
  const NATIONALITY = {
    1: "Bulgarian and operates in Bulgaria",
    2: "Bulgarian and operates internationally",
    3: "Multinational",
  };

  return Object.keys(segment).map((relation) => ({
    label: NATIONALITY[relation],
    count: segment[relation],
    group: group,
  }));
};

const SIZE = {
  1: "1-19",
  2: "20-99",
  3: "100-249",
  4: "250-499",
  5: "500-1999",
  6: "More than 2000",
};

export const SIZE_BY_NATIONALITY_DATA = {
  "1-19": generatePositionGroupsBySegment(BY_SIZE["1-19"]),
  "20-99": generatePositionGroupsBySegment(BY_SIZE["20-99"]),
  "100-249": generatePositionGroupsBySegment(BY_SIZE["100-249"]),
  "250-499": generatePositionGroupsBySegment(BY_SIZE["250-499"]),
  "500-1999": generatePositionGroupsBySegment(BY_SIZE["500-1999"]),
  "More than 2000": generatePositionGroupsBySegment(BY_SIZE["More than 2000"]),
};

export const SIZE_BY_NATIONALITY_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    SIZE_BY_NATIONALITY_DATA["1-19"],
    "1-19"
  ),
  ...generateGroupedChartDataBySegment(
    SIZE_BY_NATIONALITY_DATA["20-99"],
    "20-99"
  ),
  ...generateGroupedChartDataBySegment(
    SIZE_BY_NATIONALITY_DATA["100-249"],
    "100-249"
  ),
  ...generateGroupedChartDataBySegment(
    SIZE_BY_NATIONALITY_DATA["250-499"],
    "250-499"
  ),
  ...generateGroupedChartDataBySegment(
    SIZE_BY_NATIONALITY_DATA["500-1999"],
    "500-1999"
  ),
  ...generateGroupedChartDataBySegment(
    SIZE_BY_NATIONALITY_DATA["More than 2000"],
    "More than 2000"
  ),
];
