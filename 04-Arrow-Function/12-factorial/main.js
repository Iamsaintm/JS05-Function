const fat = (num) => {
  let multi = 1;
  for (i = 1; i <= num; i++) {
    multi = multi * i;
  }
  return multi;
};
