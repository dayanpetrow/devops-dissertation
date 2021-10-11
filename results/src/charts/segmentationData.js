import data from "./allDataJSON.json";

/** SEGMENTATION BY NATIONALITY */
const NATIONALITY = {
  1: "Bulgarian and operates in Bulgaria",
  2: "Bulgarian and operates internationally",
  3: "Multinational",
};

export const BY_COMPANY_NATIONALITY = {
  bulgaria_bulgarian: data.filter((response) => response.PRO_COMNAT === "1"),
  bulgaria_international: data.filter(
    (response) => response.PRO_COMNAT === "2"
  ),
  multinational: data.filter((response) => response.PRO_COMNAT === "3"),
};

const POSITIONS = {
  1: "Software Development",
  2: "Cloud/DevOps",
  3: "Leadership/Management",
  4: "Design",
  5: "Testing",
  6: "Other",
};

export const BY_POSITION = {
  software_development: data.filter((response) => response.PRO_POS === "1"),
  cloud_devops: data.filter((response) => response.PRO_POS === "2"),
  leadership_management: data.filter((response) => response.PRO_POS === "3"),
  other: data.filter(
    (response) =>
      response.PRO_POS !== "1" &&
      response.PRO_POS !== "2" &&
      response.PRO_POS !== "3"
  ),
};

const EXPERIENCE = {
  1: "0-2",
  2: "3-5",
  3: "6-10",
  4: "11-20",
  5: "More than 20",
};

export const BY_EXPERIENCE = {
  "0-2": data.filter((response) => response.PRO_EXP === "1"),
  "3-5": data.filter((response) => response.PRO_EXP === "2"),
  "6-10": data.filter((response) => response.PRO_EXP === "3"),
  "11-20": data.filter((response) => response.PRO_EXP === "4"),
  "More than 20": data.filter((response) => response.PRO_EXP === "5"),
};

const SIZE = {
  1: "1-19",
  2: "20-99",
  3: "100-249",
  4: "250-499",
  5: "500-1999",
  6: "More than 2000",
};

export const BY_SIZE = {
  "1-19": data.filter((response) => response.PRO_COMSIZE === "1"),
  "20-99": data.filter((response) => response.PRO_COMSIZE === "2"),
  "100-249": data.filter((response) => response.PRO_COMSIZE === "3"),
  "250-499": data.filter((response) => response.PRO_COMSIZE === "4"),
  "500-1999": data.filter((response) => response.PRO_COMSIZE === "5"),
  "More than 2000": data.filter((response) => response.PRO_COMSIZE === "6"),
};

const ORIENTATION = {
  1: "Service",
  2: "Product",
  3: "Mixed",
};

export const BY_ORIENTATION = {
  service: data.filter((response) => response.PRO_COMORI === "1"),
  product: data.filter((response) => response.PRO_COMORI === "2"),
  mixed: data.filter((response) => response.PRO_COMORI === "3"),
};
