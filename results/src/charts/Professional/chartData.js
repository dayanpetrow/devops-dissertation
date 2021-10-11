import data from "./professionalStatistics.json";

export const POSITION_COLUMN_DATA = Object.keys(data.PRO_POS).map(
  (position) => ({
    position: position,
    count: data.PRO_POS[position],
  })
);

export const EXPERIENCE_COLUMN_DATA = Object.keys(data.PRO_EXP).map(
  (experience) => ({
    experience: experience,
    count: data.PRO_EXP[experience],
  })
);

export const NATIONALITY_COLUMN_DATA = Object.keys(data.PRO_COMNAT).map(
  (nationality) => ({
    nationality: nationality,
    count: data.PRO_COMNAT[nationality],
  })
);

export const ORIENTATION_COLUMN_DATA = Object.keys(data.PRO_COMORI).map(
  (orientation) => ({
    orientation: orientation,
    count: data.PRO_COMORI[orientation],
  })
);

export const SIZE_COLUMN_DATA = Object.keys(data.PRO_COMSIZE).map((size) => ({
  size: size,
  count: data.PRO_COMSIZE[size],
}));
