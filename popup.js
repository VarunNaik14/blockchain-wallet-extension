
document.addEventListener("DOMContentLoaded", function(){

    document
        .getElementById("accountList")
        .addEventListener("click",changeAccount);

    document
        .getElementById("userAddress")
        .addEventListener("click",copyAddress);

    document
        .getElementById("transferFund")
        .addEventListener("click",handler);
    
    document
        .getElementById("header_network")
        .addEventListener("click",getOpenNetwork);
    
    document
        .getElementById("network_item")
        .addEventListener("click",getSelectedNetwork);

    document
        .getElementById("add_network")
        .addEventListener("click",setNetwork);
    
    document
        .getElementById("loginAccount")
        .addEventListener("click",loginUser);

    document
        .getElementById("accountCreate")
        .addEventListener("click",createUser);

    document
        .getElementById("openCreate")
        .addEventListener("click",openCreate);
    
    document
        .getElementById("sign_up")
        .addEventListener("click",signUp);
    
    document
        .getElementById("login_up")
        .addEventListener("click",login);

    document
        .getElementById("logout")
        .addEventListener("click",logout);

    document
        .getElementById("open_Transfer")
        .addEventListener("click",openTransfer);

    document
        .getElementById("goBack")
        .addEventListener("click",goBack);

    document
        .getElementById("open_import")
        .addEventListener("click",openImport);

    document
        .getElementById("open_assets")
        .addEventListener("click",openAssets);
    
    document
        .getElementById("open_activity")
        .addEventListener("click",openActivity);

    document
        .getElementById("goHomePage")
        .addEventListener("click",goHomePage);

    document
        .getElementById("openAccountImport")
        .addEventListener("click",openImportModel);    

    document
        .getElementById("close_import_account")
        .addEventListener("click",closeImportModel);    

    document
        .getElementById("add_new_token")
        .addEventListener("click",addToken);    

    document
        .getElementById("add_new_account")
        .addEventListener("click",addAccount);    

})


//STATE VARIABLE
let providerURL = 'https://polygon-mainnet.g.alchemy.com/v2/UnvUkRpOqOqnbJw4mCsH49LU34eojO4H';

//let provider;
let privateKey;
let address;

//FUNCTION
function handler(){
    document.getElementById("transfer_center").style.display = "flex";

    const amount = document.getElementById("amount").value;
    const address = document.getElementById("address").value;

    //add space in front of private key
    //account two
    const private_key = "dd98bf713a16a0a246f8cabfc2a195293e1b6b0749be560f140dbcc36ccd1039";

    //account three
    const testAccount = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";

    //PROVIDER
    const provider = new ethers.providers.JsonRpcProvider(providerURL);

    let wallet = new ethers.Wallet(privateKey, provider);

    const tx = {
        to: address,
        value: ethers.utils.parseEther(amount),
    };

    let a = document.getElementById("link");
    a.href = "somelink url";

    wallet.sendTransaction(tx).then((txObj) =>{

        console.log("txHash:", txObj.hash);

        document.getElementById("transfer_center").style.display = "none";
        const a = document.getElementById("link");

        document.getElementById("link").style.display = "block";
    })
};

function checkBalance(){};

function getOpenNetwork(){};

function getSelectedNetwork(){};

function setNetwork(){};

function loginUser(){};

function createUser(){};

function openCreate(){};

function signUp(){};

function login(){};

function logout(){};

function openTransfer(){};

function goBack(){};

function openImport(){};

function importGoBack(){};

function openActivity(){};

function openAssets(){};

function goHomePage(){};

function openImportModel(){};

function closeImportModel(){};

function addToken(){};

function addAccount(){};

function myFunction(){};

function copyAddress(){};

function changeAccount(){};
