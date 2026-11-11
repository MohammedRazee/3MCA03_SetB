// ==================================================================
// EDIT THIS FILE ONLY. Do not change any other file in this project.
// Complete every function below. Each function must return its result.
// ==================================================================


// Step 1: Import mongoose here.



// Step 2: Write your MongoDB connection URI here.
//         Database name: mobileshop



// Step 3: Create the schema and the model here.
//         Model name: Phone   (Mongoose saves it in the "phones" collection)
//         Fields: name (String), brand (String), ram (Number), price (Number)



// Step 4: Connect to MongoDB inside this function.
//         After connecting, print: Connected to MongoDB
export async function connectDB() {

}


// Return all the phones in the collection.
export async function getAllPhones() {

}


// brand comes from the "Search by brand" box on the page, for example "Zenix".
// Return the phones whose brand matches it.
export async function findPhonesByBrand(brand) {

}


// maxPrice is a number typed on the page, for example 13000.
// Return the phones whose price is less than or equal to maxPrice.
export async function findPhonesByMaxPrice(maxPrice) {

}


// Return the 3 cheapest phones, cheapest first.
export async function getThreeCheapestPhones() {

}


// phone comes from the "Add Phone" form, for example:
//   { name: "Zenix Max", brand: "Zenix", ram: 4, price: 9999 }
// Save it in the database and return the saved phone.
export async function addPhone(phone) {

}
