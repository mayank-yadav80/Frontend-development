let count = 0;

function simulateCounter() {
  function increment() {
    count++;
    console.log("Count:", count);
  }

  function decrement() {
    count--;
    console.log("Count:", count);
  }

  increment();
  increment();
  decrement();
}

simulateCounter();