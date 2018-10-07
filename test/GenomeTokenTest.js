const GenomeToken = artifacts.require("GenomeToken");

contract("Genome token", accounts => {
   it("Should make first account an owner", async () => {
   	let instance = await GenomeToken.deployed();
	let owner = await instance.owner();
	assert.equal(owner, accounts[0];

	});
});
