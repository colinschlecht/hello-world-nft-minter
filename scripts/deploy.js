async function main() {
    const HelloWorldNFT = await ethers.getContractFactory("HelloWorldNFT");
    
    // Start deployment, returning a promise that resolves to a contract object
    const helloWorldNFT = await HelloWorldNFT.deploy();
    console.log("Contract deployed to address:", helloWorldNFT.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });