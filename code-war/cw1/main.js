const cstar = (row) => {
  let ct = 0;
  if (row < 0) {
    return 0;
  }
  for (i = 0; i <= row; i++) {
    ct = ct + i;
  }
  return ct;
};
