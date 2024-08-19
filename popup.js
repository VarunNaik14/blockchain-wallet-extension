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
let providerURL = '';

let provider;
let privateKey;
let address;

//FUNCTION
function handler(){};

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
