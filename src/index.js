let screenOneSeats = 200
let screenTwoSeats = 150
let screenThreeSeats = 300

class order {
    constructor(name, age, food, drink, filmType, ticketsPurchased) {
        this.name = name; 
        this.age = age; 
        this.food = food;
        this.drink = drink;
        this.filmType = filmType;
        this.ticketsPurchased;
    } 
    seats(seat) {
        if(seat > 5){
            console.log("Not enough remaining seats");
        }else {
            this.seat = seat;
            console.log(this.seat);
        }
    };

    numberOfSeatsLeft(){
        if(this.ticketsPurchased<=5 && (screenOneSeats >=5 || screenThreeSeats >=5) && this.filmType == "twoD"){
            console.log(`You are purchasing ${this.ticketsPurchased} tickets. Seats available in screen 1: ${screenOneSeats}. Seats available in screen 3: ${screenThreeSeats}`)
            screenOneSeats -= this.ticketsPurchased 
            screenThreeSeats -= this.ticketsPurchased
            console.log(`After your purchase, seats now available in screen 1: ${screenOneSeats}. Seats now available in screen 3: ${screenThreeSeats}`)
        }
        else if (this.ticketsPurchased<=5 && (screenTwoSeats >=5 || screenThreeSeats >=5) && this.filmType == "threeD"){
            console.log(`You are purchasing ${this.ticketsPurchased} tickets. Seats available in screen 2: ${screenTwoSeats}. Seats available in screen three: ${screenThreeSeats}`)
            screenTwoSeats -= this.ticketsPurchased 
            screenThreeSeats -= this.ticketsPurchased
            console.log(`After your purchase, seats now available in screen 2: ${screenTwoSeats} seats now available in screen 3: ${screenThreeSeats}`)
        }
        else {
            console.log("No seats available")
        }
    }

    price() {
        if (this.age <= 7) {
            return("Your child ticket price will be £3")
        }
        else if (this.age >= 7 && this.age <= 65) {
                return("Your adult ticket price will be £10")
        }
        else if (this.age >= 65) { 
            return("Your senior ticket price will be £5")

        }
        else {
            return("Invaild age")
        };
    }
    refreshmentsFood() {
        if(this.food === "Twix") {
            console.log(`Your choice is: ${this.food}`)
        }
        else if(this.food === "Carmac") {
            console.log(`Your choice is: ${this.food}`)
            }
        else if(this.food === "Wispa") {
            console.log(`Your choice is ${this.food}`)
        }
        else if(this.food === "Twirl") {
            console.log(`Your choice is: ${this.food}`)
        }
    };
    refreshmentsDrink() {
        if (this.drink === "Coke") {
            console.log(`You choice is: ${this.drink}`)
        }
        else if(this.drink === "Sprite") {
            console.log(`Your choice is: ${this.drink}`)
        }
        else if(this.drink === "Water") {
            console.log(`Your choice is: ${this.drink}`)
        }
        else if(this.drink === "Tango Ice Blast") {
            console.log(`Your choice is: ${this.drink}`)
        }
    }
    
}

//* TEST CODE

const newPerson = new order ("James", 67,"Twix", "Coke", "threeD", 5)

console.log(newPerson.price())
console.log(newPerson.numberOfSeatsLeft())

