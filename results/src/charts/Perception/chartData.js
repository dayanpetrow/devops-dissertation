import data from "./perceptionStatistics.json";

export const AGILE_RELATION_COLUMN_DATA = Object.keys({
  "DevOps extends Agile": 45,
  "I don't know": 9,
  "DevOps has no relation to Agile": 22,
  "DevOps aims to replace Agile": 0,
}).map((relation) => ({
  relation: relation,
  count: data.agile[relation],
}));
