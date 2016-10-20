function dyno(repeat, ...functions) {
  functions.forEach(func => {
    console.time(func.name);
    for (let i=0;i<repeat;i++) {
      func();
    }
    console.timeEnd(func.name);
  });
}

module.exports = dyno;
