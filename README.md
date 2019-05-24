# FancyCars
a react native cars app

## Running
- Clone project and navigate to the project folder in Terminal
- Install expo: `npm install -g expo-cli`
- Start project: `npm start`

## Tasks
- Show list of all the cars and for each car, they want to show picture, name, make, model and availability of the car. 
- Your app should support infinite scroll for the listing of the cars
- Have a sort Dropdown which can sort the results by both the name and availability of the car
- Show a buy button that only shows up if Availability is “In Dealership”
- Make sure your app can also work when its offline

API spec is as follows: 

### GET /availability?id=123
RESPONSE: `{available: “In Dealership”}`  // all  options are [ “Out of Stock”, “Unavailable”]

### GET /cars
RESPONSE:  `[ {id: 1, img: http://myfancycar/image, name: “My Fancy Car”, make: “MyMake”, model: “MyModel”, year: 2018} ….]`
