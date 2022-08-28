function solution(queue1, queue2) {
  let sumOfQueue1 = calculateSum(queue1);
  let sumOfQueue2 = calculateSum(queue2);
  const sumOfQueue = sumOfQueue1 + sumOfQueue2;

  if (sumOfQueue % 2 === 1) {
    return -1;
  }

  const queue = [...queue1, ...queue2];
  const max = queue.length;

  let pointer1 = 0;
  let pointer2 = queue1.length;

  const target = sumOfQueue / 2;

  let count = 0;

  while (sumOfQueue1 !== target) {
    if (sumOfQueue1 > target) {
      sumOfQueue1 -= queue[pointer1++];
      count++;
    } else {
      sumOfQueue1 += queue[pointer2++];
      count++;
    }
    if (pointer2 === max) {
      return -1;
    }
  }
  return count;
}

const calculateSum = (arr) => arr.reduce((pv, cv) => pv + cv, 0);

// console.log(
//   solution([3, 2, 7, 2], [4, 6, 5, 1]),
//   solution([1, 2, 1, 2], [1, 10, 1, 2]),
//   solution([1, 1], [1, 5])
// );
