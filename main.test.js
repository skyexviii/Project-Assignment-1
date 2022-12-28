import { sort, search, newsList, inputValue } from "./main.js";

//Example testing for search function
test("Search function testing", () => {
  expect(search(inputValue)).toEqual(["I am a cool web developer"]);
});


test("Sort function testing", () => {
  expect(sort(newsList)).toBe(newsList.sort())
})