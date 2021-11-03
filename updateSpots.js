/**
 * Update Spots for current day. (one possible solution)
 *
 * @param {Object}   state           State Object.
 * @param {Object}   appointments    New Appointments array
 * @param {Object}   id              Optional appointment id (may not need)
 * @return {Array}   A Days array we can save back into state.
 */

const updateSpots = function (state, appointments, id) {
  let spotCount = 0;

  const daysIndex = state.days.findIndex((day) => day.name === state.day);
  let appointArr = state.days[daysIndex].appointments;

  for (let key of appointArr) {
    if (appointments[key].interview === null) {
      spotCount++;
    }
  }

  const day = {
    ...state.days[daysIndex],
    spots: spotCount
  };
  const beginning = state.days.slice(0, daysIndex);
  const ending = state.days.slice(daysIndex + 1, state.days.length);
  const days = [...beginning, day, ...ending];

  return days;
};

module.exports = updateSpots;


