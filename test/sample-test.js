const { expect } = require("chai");

describe("TestModifyVariable", function () { 
  it("should change x to 1337", async function () { 
    const modifyVariableContract = await ethers.deployContract("ModifyVariable", [10]);
    await modifyVariableContract.modifyToLeet();

    const newX = await modifyVariableContract.x();
    expect(Number(newX)).to.equal(1337)
  });
});