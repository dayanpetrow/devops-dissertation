import { BY_POSITION } from "../../segmentationData";

export const generateExperienceGroupsBySegment = (segmentData) => {
  return segmentData.reduce((hashmap, response) => {
    const { PRO_EXP } = response;

    hashmap[PRO_EXP] =
      hashmap[PRO_EXP] !== undefined ? (hashmap[PRO_EXP] += 1) : 1;

    return hashmap;
  }, {});
};

export const generateGroupedChartDataBySegment = (segment, group) => {
  const EXPERIENCE = {
    1: "0-2",
    2: "3-5",
    3: "6-10",
    4: "11-20",
    5: "More than 20",
  };
  return Object.keys(segment).map((relation) => ({
    label: EXPERIENCE[relation],
    count: segment[relation],
    group: group,
  }));
};

export const POSITION_BY_EXPERIENCE_DATA = {
  software_developmnent: generateExperienceGroupsBySegment(
    BY_POSITION.software_development
  ),
  cloud_devops: generateExperienceGroupsBySegment(BY_POSITION.cloud_devops),
  leadership_management: generateExperienceGroupsBySegment(
    BY_POSITION.leadership_management
  ),
  other: generateExperienceGroupsBySegment(BY_POSITION.other),
};

export const POSITION_BY_EXPERIENCE_CHART_DATA = [
  ...generateGroupedChartDataBySegment(
    POSITION_BY_EXPERIENCE_DATA.software_developmnent,
    "Software Development"
  ),
  ...generateGroupedChartDataBySegment(
    POSITION_BY_EXPERIENCE_DATA.cloud_devops,
    "Cloud/DevOps"
  ),
  ...generateGroupedChartDataBySegment(
    POSITION_BY_EXPERIENCE_DATA.leadership_management,
    "Leadership/Management"
  ),
  ...generateGroupedChartDataBySegment(
    POSITION_BY_EXPERIENCE_DATA.other,
    "Other"
  ),
].sort((a, b) => a.label.length - b.label.length);
