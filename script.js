function storeRecords() {
    carDetails = {
        brand: cbrand.value,
        price: cprice.value,
        key: ckey.value,
    };

    if (carDetails.key in localStorage) {
        storeRecordsSuccessfully.innerHTML = "<span style='color:green;'>This car key is already Added 🤣</span>";
        setTimeout(function () {
            storeRecordsSuccessfully.innerHTML = "";
            
        },1500)
    }
    else if (cbrand.value == '' || cprice.value == '' || ckey.value == '') {
        alert("Please enter car details");
    }
        
    else {
        window.localStorage.setItem(carDetails.key, JSON.stringify(carDetails));
        storeRecordsSuccessfully.innerHTML = "<span style='color:green'>Car details added successfully 👍</span>";
        setTimeout(function () {
            storeRecordsSuccessfully.innerHTML = "";
            cbrand.value = '';
            cprice.value = '';
            ckey.value = ''; 

            
        },1500)


    }
}



function searchRecord()
{
    k = retrieveKey.value;
    if (k in localStorage)
        {
        carDetails = JSON.parse(localStorage.getItem(k));
        searchResult.innerHTML = 
        `
        <span style='color:green;font-weight:bold;'>
        "brand":"${carDetails.brand}",
        "price":"${carDetails.price}",
        "key":"${carDetails.key}"
        </span>
        `;

        // retrieveKey.value = '';
        }
    else if(retrieveKey.value == "")
    {
        alert("Please Enter a Key");
    }   
    else {
        searchResult.innerHTML = "<span style='color:green'>You Entered key is not found in localStorage 🧐 </span>";
        setTimeout(function () {
            searchResult.innerHTML = "";
            
        },1500)
    }
}

function removeItem()
{
    rem = Remove.value;
    if (rem in localStorage)
    {
        localStorage.removeItem(rem);
        RemoveItem.innerHTML = "<span style='color:green'>You deleted key successfully ✔</span>"
        setTimeout(function () {
            RemoveItem.innerHTML = "";
            Remove.value = '';
            
        }, 1500)
        setTimeout(function () {
            searchResult.innerHTML = '';
            retrieveKey.value = '';
            
        }, 1500)
        
        
    }

    else if (Remove.value == '')
    {
        alert("Please Enter a Key");
    }
    else {
        RemoveItem.innerHTML = "<span style='color:green'>You entered Key not in localStorage 🧐</span>";
        setTimeout(function () {
            RemoveItem.innerHTML = "";
            
            
        },1500)
    }
    
}

function clearAll()
{
    
    localStorage.clear();
    Clear.innerHTML = "<span style='color:darkblue;font-weight:bold;'>All records cleared from <italic>Local Storage</italic> successfully ✔ </span>"
    setTimeout(function () {
        Clear.innerHTML = "";
        retrieveKey.value = '';
        Remove.value = '';
        searchResult.innerHTML = "";

        
    },1500)
}
