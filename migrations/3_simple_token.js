const MyERC721 = artifacts.require('SimpleToken');

module.exports = async function (deployer) {
	await deployer.deploy(MyERC721);
	const erc721 = await MyERC721.deployed();
};
