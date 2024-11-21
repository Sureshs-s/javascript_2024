//Async and await
//Async - it returns the promise
//await - it will make the promise wait

async function data() {
  try {
    const waterbottle = await water();
    console.log(waterbottle);

    const rooms = await room();
    console.log(rooms);

    const garbage = await trash();
    console.log(garbage);
  } catch (e) {
    console.log();
  }
}
data();
