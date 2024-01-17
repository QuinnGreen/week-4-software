import inquirer from 'inquirer'; //import inquirer, may have to add "type": "module", to package.json

class CoffeeShop {
    constructor(cusName) {
        this.shopName = "Blergh Coffee";
        this.name = cusName
        this.order = []
        this.total = 0  
    } // create class object for customers name, order and total
    
finOrder() {
    
    console.log(`Thanks, ${this.name}`)
    
    for(let i = 0; i < this.order.length; i++){
        console.log(`${this.order[i]} - £${menu[this.order[i]]}`)
        this.total += menu[this.order[i]] //iterates over the order array and adds it up
    }
    
    console.log(`Your total is £${this.total}`)
    }// fuction to end loop and finish order.

set updateOrder(newItem) {
    this.order.push(newItem)
    } // adds items to the array
} 
// end of object


let menu = {
    Coffee: 3.2,
    Tea: 2.0,
    HotChocolate: 4.0
    
}

let menuChoices = Object.keys(menu) // targets the integers
menuChoices.push("--Done Ordering--") //adds option to menu

// console.log(menuChoices)
const question = [
    {
    type: "input",
    name: "getName",
    message: "What is your name?"
    },
    
]
const nameResponse = await inquirer.prompt(question) //asks for name

console.log(nameResponse.getName) //display name

const customer = new CoffeeShop( nameResponse.getName ) // important!! initialises new instance of coffe shop


// async to make the await work in function
async function askForOrder() {
    const takeOrder = await inquirer.prompt([
        {
            type: "list",
            name: "drinks",
            message: "What do you want to drink?",
            choices: menuChoices
        } // asks for drink
    ])
    if (takeOrder.drinks === "--Done Ordering--") {
        customer.finOrder();
        return; // breakout for loop  
    } 
    customer.updateOrder = takeOrder.drinks // runs the setter that adds orders to array

    askForOrder(); //loops

}
askForOrder()














// original code
class CoffeeShop {
    constructor(drink) {
        this.drinks = {
            Coffee: 3.2,
            Tea: 2.0,
            HotChocolate: 4.0
        }
        this.total = 0;
        this.orders = [];
    }
    order(drink) {
        if (drink in this.drinks) {
            console.log(`"adding ${drink} to order"`)
            this.orders.push(drink);
            this.total += this.drinks[drink];
            console.log(`your total so far is £${this.total}`);
            
        }
        else {
            console.log(`We dont sell ${drink}`)
        }
    }   
    finishOrder() {
        console.log(`Final price is £${this.total}, have a nice day.`);
        
    } 
}

class Person extends CoffeeShop {
    constructor (name,balance) {
        super()
        this.name = name;
        this.balance = balance
    }
    checkBalance() {
        if (this.balance >= this.total) {
            console.log(`thanks for your payment, ${this.name}`)
        }
        else {
            console.log("you dont have enough money")
        }
    }
}


const newCust = new Person("Dave",10)

newCust.order("Coffee");
newCust.order("Tea");
newCust.order("Beer");
newCust.order("HotChocolate");
newCust.finishOrder();
newCust.checkBalance();