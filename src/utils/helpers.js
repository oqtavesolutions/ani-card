export const getRandomInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

export const getLastName = (name) => {
  let nameArray = name.split(" ");
  return nameArray.length > 0 ? nameArray[1] : nameArray[0];
};
