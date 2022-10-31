let age = 42;
let country = 'USA';
let myName = 'John Doe';
let email = 'john.doe@gmail.com';
let phone = '555-555-5555';
let streetNumber = '330';
let streetName = 'Salem St';
let city = 'Glendale';
let state = 'CA';
let zipCode = '91203';
let plan = 'basic';
let monthlyCost = '$19.99';
let customerSince = 'March 1, 2020';
let promotion = 'none';
let companyName ='NetFlix';
let eligiblePromotion = '15% Off';
let promotionCode ='SAVE15%'
let genre1 = 'Action';
let genre2 = 'Romance';
let genre3 = 'Horror';
let genre4 = 'Comedy';
let genre5 = 'Family';
let submit = 'Submit';






document.write (`
<h2 style = "color: red"> ${companyName}</h2>

<h2>Customer Profile</h2>
    <ul>
        <li>Name: ${myName}</li>
        <li>Age: ${age}</li>
        <li>Country: ${country}</li>
        <li>Phone Number: ${phone}</li>
        <li>Address: ${streetNumber} ${streetName} ${city} ${state} ${zipCode}</li>
        <li>Customer Since: ${customerSince}</li>
        <li>Egilgible Promotion: ${promotion}</li>
        <li>Monthly Cost: ${monthlyCost}</li>
    </ul> 

    <h2>Choose your favorite genre: </h2>
    <ul>
        <input type="radio">${genre1}</button>
        <input type="radio">${genre2}</button>
        <input type="radio">${genre3}</button>
        <input type="radio">${genre4}</button>
        <input type="radio">${genre5}</button>
    </ul>
`);
document.write ("<p>" + myName + " is eligible for additional " + eligiblePromotion + "</p>");

document.write (`
    <h2> Promo Code</h2>
    <p> Please submit your promotion code here: 
    <input></input>
    <button>${submit}</button>
`);

