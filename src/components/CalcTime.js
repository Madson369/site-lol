const CalcTime = (Time) => {
  //Time chega em milisegundos
  Time = Time / 1000;

  let Hours = Time / 60 / 60;
  let Minutes = Time / 60;
  let Days = Hours / 24;

  if (Days >= 1) {
    return Math.round(Days) + " Days ago";
  } else if (Hours >= 1 && Hours <= 24) {
    return Math.round(Hours) + " Hours ago";
  } else if (Minutes > 1 && Minutes < 60) {
    return Math.round(Minutes) + " Minutes ago";
  }
  return Math.round(Time) + " Segundos";
};

export { CalcTime };
