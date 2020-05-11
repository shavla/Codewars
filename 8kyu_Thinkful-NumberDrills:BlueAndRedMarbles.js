function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let full = blueStart + redStart - bluePulled - redPulled;
  return (blueStart - bluePulled) / full;
}
