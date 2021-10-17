import BG_BULGARIA_DATA from "./BG_Bulgaria.json";
import BG_INTERNATIONAL_DATA from "./BG_International.json";
import MULTINATIONAL_DATA from "./Multinational.json";

const processDefinitionsByNationality = (nationalitySegment) =>
  nationalitySegment.reduce(
    (hashmap, definition) => {
      const { CATEGORIES = [], TYPE = "" } = definition;

      CATEGORIES.forEach(
        (category) =>
          (hashmap.categories[category] =
            hashmap.categories[category] !== undefined
              ? ++hashmap.categories[category]
              : 1)
      );

      hashmap.type[TYPE] =
        hashmap.type[TYPE] !== undefined ? ++hashmap.type[TYPE] : 1;

      return hashmap;
    },
    {
      type: {},
      categories: {},
      count: nationalitySegment.length,
    }
  );

export const BG_BULGARIA_DATA_STATISTICS =
  processDefinitionsByNationality(BG_BULGARIA_DATA);
export const BG_INTERNATIONAL_DATA_STATISTICS = processDefinitionsByNationality(
  BG_INTERNATIONAL_DATA
);
export const MULTINATIONAL_DATA_STATISTICS =
  processDefinitionsByNationality(MULTINATIONAL_DATA);

export const TOTAL_DATA_STATISTICS = processDefinitionsByNationality([
  ...BG_INTERNATIONAL_DATA,
  ...BG_BULGARIA_DATA,
  ...MULTINATIONAL_DATA,
]);

/** PROCESS DEFINITION */
console.log("------ START PROCCESS DIFINITIONS ------");
console.log("BG_BULGARIA_DATA_STATISTICS: ", BG_BULGARIA_DATA_STATISTICS);
console.log(
  "BG_INTERNATIONAL_DATA_STATISTICS: ",
  BG_INTERNATIONAL_DATA_STATISTICS
);
console.log("MULTINATIONAL_DATA_STATISTICS: ", MULTINATIONAL_DATA_STATISTICS);
console.log("TOTAL_DATA_STATISTICS: ", TOTAL_DATA_STATISTICS);
console.log("------ END PROCCESS DIFINITIONS ------");
