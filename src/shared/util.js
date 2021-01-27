export const planetsDevAPIURL = 'https://swapi.dev/api/planets/?search=';
export const peopleDevAPIURL = 'https://swapi.dev/api/people';
export const timeoutMsgforOther = 'Only the user Luke Skywalker should be able to make more than 15 searches in a minute. Other, please sit idle for a minute.';
export const userNameforNoSearchLimit = 'Luke Skywalker';
export const timeLimitInSec = 60;
export const counterLimit = 15;
export function calculateHeightWidth(population) {
  let range = 200;
  if (!isNaN(population)) {
    if (population > 10000 && population < 50000) {
      range = range + 10;
    } else if (population > 50000 && population < 100000) {
      range = range + 20;
    } else if (population > 100000 && population < 500000) {
      range = range + 30;
    } else if (population > 500000 && population < 1000000) {
      range = range + 40;
    } else if (population > 1000000 && population < 20000000) {
      range = range + 50;
    } else if (population > 20000000 && population < 50000000) {
      range = range + 60;
    } else if (population > 50000000) {
      range = range + 70;
    }
  }
  return range;
}