import * as myModule from "src/my-module";

describe("my module test", () => {
  it("should use the mocked token", async () => {
    const spy = jest
      .spyOn(myModule, "getToken")
      .mockResolvedValue("the mocked token");

    await myModule.sendRequest();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
