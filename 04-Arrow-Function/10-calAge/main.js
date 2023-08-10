const age = (year) => {
  let allYear = -1;
  for (i = year; year <= 2020; year++) {
    if (year % 4 == 0) {
      allYear = allYear + 366;
    } else {
      allYear = allYear + 365;
    }
  }
  return allYear;
};
