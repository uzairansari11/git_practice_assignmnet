function prime(num) {


  let factor = 0;

  for (let n = 1; n <= num; n++) {
    if (num % n == 0) {
      factor++
    }
  }
  if (factor == 2) {
    return "Prime"
  } else {
    
  }
}