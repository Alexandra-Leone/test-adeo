const { count } = require("../app.js");

process.argv.push("--filter=ry", "--count");

describe("count and filter test", () => {
  it("should show the animals matching with the ry string pattern with arguments with 1 as the number of people, 1 as the number of anumals", () => {
    const result = count();
    expect(result).toEqual(
      '[{"name":"Uzuzozne [1]","people":[{"name":"Lillie Abbott [1]","animals":[{"name":"John Dory"}]}]},{"name":"Satanwi [1]","people":[{"name":"Anthony Bruno [1]","animals":[{"name":"Oryx"}]}]}]'
    );
  });
});