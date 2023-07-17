export function countChiaHetCho3(numbers: number[]): number {
  // Làm Bài Tại Đây
  let count: number = 0;

  numbers.forEach((num: number) => {
    if (num % 3 === 0) {
      count++;
    }
  });

  return count;
}

export function sum(numbers: number[]): number {
  // Làm Bài Tại Đây
  let total: number = 0;
  numbers.forEach((num: number) => {
    total += num;
  });
  return total;
}

export function hasNumber10(numbers: number[]): boolean {
  // Làm Bài Tại Đây
  let filterTen: boolean = false;
  numbers.forEach((num: number) => {
    if (num === 10) {
      filterTen = true;
      return filterTen;
    }
  });
  return filterTen;
}

export function filterChiaHetCho7(numbers: number[]): number[] {
  // Làm Bài Tại Đây
  let numsDevisibleBySeven: number[] = [];

  numbers.forEach((num: number) => {
    if (num % 7 === 0) {
      numsDevisibleBySeven.push(num);
    }
  });

  return numsDevisibleBySeven;
}

