function task1(x) {
  setTimeout(() => {
    console.log("wakeup up by 5a.m");
    x();
  });
}

function task2(y) {
  setTimeout(() => {
    console.log("office");
    y();
  });
}
function task3(x) {
  setTimeout(() => {
    console.log("Gym");
    x();
  });
}

console.log();
