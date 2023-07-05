type Func<T, U> = (arg: T) => U;

function memoizerFunction<T, U>(func: Func<T, U>): Func<T, U> {
  const cache = new Map<T, U>();

  return (arg: T): U => {
    if (cache.has(arg)) {
      console.log(`Getting memorized value...`)
      return cache.get(arg) as U;
    }

    const result = func(arg);
    cache.set(arg, result);

    return result;
  };
}

// Example usage:
function getCalculatedData(n: number): number {
  console.log(`Calculating for ${n}...`);
  return n * 2;
}

const memoizedFunction = memoizerFunction(getCalculatedData);

console.log(memoizedFunction(100)); 
console.log(memoizedFunction(100)); // (returns 100) - Value is now cached and not recalculated
