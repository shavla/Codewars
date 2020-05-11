function removeSmallest(numbers) {
  const smallest = Math.min(...numbers);
  const index = numbers.indexOf(smallest);
  return numbers.filter((_, i) => i !== index);
}
