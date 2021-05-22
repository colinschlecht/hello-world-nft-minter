
//wallet and smart contract interaction functions

export const connectWallet = async () => {
    if(window.ethereum){
        try {
            const address = await window.ethereum.enable()
            const obj = {
                connectedStatus: true,
                status: "",
                address: address
            }
            return obj
        } catch (error) {
            return {
                connectedStatus: false,
                status: "🦊 Connect to Metamask using the button on the top right."
            }
        }
    }
}