function getSecondsToday() {
    
  let now = new Date();

  let mid = new Date().setHours(0,0,0);

  let diff = now - mid; // ms difference

  return Math.round(diff / 1000); // make seconds
}

alert( getSecondsToday() );