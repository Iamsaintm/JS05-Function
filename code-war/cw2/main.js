const feb = (num) => {
  let c0 = 0;
  let c1 = 1;
  if (num <= 0) {
    return 0;
  }
  if (num == 1) {
    return 1;
  }
  let febo = [0, 1];
  for (i = 2; i < num; i++) {
    ntfe = c0 + c1;
    febo.push(ntfe);
    c0 = c1;
    c1 = ntfe;
  }
  return febo[num - 1];
};
