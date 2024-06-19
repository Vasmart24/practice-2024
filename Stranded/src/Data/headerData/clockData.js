const clock = {
  minutes: 480,
  time: function (minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(mins).padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}`;
  },
};

export default clock;
