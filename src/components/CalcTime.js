const CalcTime = (Time) => {
  //Time chega em milisegundos
  Time = Time / 1000;

  let Hours = Time / 60 / 60;
  let Minutes = Time / 60;
  let Days = Hours / 24;

  if (Days >= 1) {
    return Math.round(Days) + " Dias";
  } else if (Hours >= 1 && Hours <= 24) {
    return Math.round(Hours) + " Horas";
  } else if (Minutes > 1 && Minutes < 60) {
    return Math.round(Minutes) + " Minutos";
  }
  return Math.round(Time) + " Segundos";
};

export { CalcTime };
