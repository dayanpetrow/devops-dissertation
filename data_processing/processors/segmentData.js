const fs = require("fs");

const segmentData = (data) => {
  /** SEGMENTATION BY COMPANY NATIONALITY */
  const NATIONALITY = {
    1: "Bulgarian and operates in Bulgaria",
    2: "Bulgarian and operates internationally",
    3: "Multinational",
  };

  const BY_COMPANY_NATIONALITY = {
    bulgaria_bulgarian: data.filter((response) => response.PRO_COMNAT === "1"),
    bulgaria_international: data.filter(
      (response) => response.PRO_COMNAT === "2"
    ),
    multinational: data.filter((response) => response.PRO_COMNAT === "3"),
  };

  const byNationalityJSON = JSON.stringify(BY_COMPANY_NATIONALITY);
  fs.writeFileSync(
    "./dist/combined/segmentation/byNationality.json",
    byNationalityJSON
  );

  /** SEGMENTATION BY JOB POSITION */
  const POSITIONS = {
    1: "Software Development",
    2: "Cloud/DevOps",
    3: "Leadership/Management",
    4: "Design",
    5: "Testing",
    6: "Other",
  };

  const BY_POSITION = {
    software_development: data.filter((response) => response.PRO_POS === "1"),
    cloud_devops: data.filter((response) => response.PRO_POS === "2"),
    leadership_management: data.filter((response) => response.PRO_POS === "3"),
    other: data.filter((response) => response.PRO_POS === "6"), // design, testing and other are combined within the data processor service
  };

  const byPositionJSON = JSON.stringify(BY_POSITION);
  fs.writeFileSync(
    "./dist/combined/segmentation/byPosition.json",
    byPositionJSON
  );

  /** SEGMENTATION BY PROFESSIONAL EXPERIENCE */
  const EXPERIENCE = {
    1: "0-2",
    2: "3-5",
    3: "6-10",
    4: "11-20",
    5: "More than 20",
  };

  const BY_EXPERIENCE = {
    "0-2": data.filter((response) => response.PRO_EXP === "1"),
    "3-5": data.filter((response) => response.PRO_EXP === "2"),
    "6-10": data.filter((response) => response.PRO_EXP === "3"),
    "11-20": data.filter((response) => response.PRO_EXP === "4"),
    "More than 20": data.filter((response) => response.PRO_EXP === "5"),
  };

  const byExperienceJSON = JSON.stringify(BY_EXPERIENCE);
  fs.writeFileSync(
    "./dist/combined/segmentation/byExperience.json",
    byExperienceJSON
  );

  /** SEGMENTATION BY COMPANY SIZE */
  const SIZE = {
    1: "1-19",
    2: "20-99",
    3: "100-249",
    4: "250-499",
    5: "500-1999",
    6: "More than 2000",
  };

  const BY_SIZE = {
    "1-19": data.filter((response) => response.PRO_COMSIZE === "1"),
    "20-99": data.filter((response) => response.PRO_COMSIZE === "2"),
    "100-249": data.filter((response) => response.PRO_COMSIZE === "3"),
    "250-499": data.filter((response) => response.PRO_COMSIZE === "4"),
    "500-1999": data.filter((response) => response.PRO_COMSIZE === "5"),
    "More than 2000": data.filter((response) => response.PRO_COMSIZE === "6"),
  };

  const bySizeJSON = JSON.stringify(BY_SIZE);
  fs.writeFileSync("./dist/combined/segmentation/bySize.json", bySizeJSON);

  /** SEGMENTATION BY COMPANY ORIENTATION */
  const ORIENTATION = {
    1: "Service",
    2: "Product",
    3: "Mixed",
  };

  const BY_ORIENTATION = {
    service: data.filter((response) => response.PRO_COMORI === "1"),
    product: data.filter((response) => response.PRO_COMORI === "2"),
    mixed: data.filter((response) => response.PRO_COMORI === "3"),
  };

  const byOrientationJSON = JSON.stringify(BY_ORIENTATION);
  fs.writeFileSync(
    "./dist/combined/segmentation/byOrientation.json",
    byOrientationJSON
  );
};

module.exports = segmentData;
