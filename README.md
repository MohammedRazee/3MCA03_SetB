# CA Lab Exam - Section 3MCA03 - Set B

**Mobile Shop Catalogue**

## Your task

The web page and the Express server are ready. The database part is missing. Complete it using Mongoose.

- Edit only **database.js**. The comments in it tell you what to write.
- Do not change any other file.

## Steps

1. Open this project folder in VS Code and open a terminal in it.
2. Install the packages:

   ```
   npm install
   npm install mongoose
   ```

3. Make sure MongoDB is running, then add the sample data (see below).
4. Complete **database.js**.
5. Start the server:

   ```
   node index.js
   ```

6. Open **http://localhost:3000** in your browser.

After every change to database.js, stop the server with Ctrl + C and start it again.

## Database details

- **Database:** mobileshop
- **Collection:** phones
- **Fields:** name (text), brand (text), ram (number), price (number)

## Sample data

Open mongosh, paste these commands and press Enter. Paste them only once.

```
use mobileshop
db.phones.insertMany([
  { name: "Nova X1", brand: "Nova", ram: 4, price: 12999 },
  { name: "Zenix Pro", brand: "Zenix", ram: 8, price: 24999 },
  { name: "Orion Lite", brand: "Orion", ram: 3, price: 8999 },
  { name: "Nova X2", brand: "Nova", ram: 6, price: 16999 },
  { name: "Zenix Go", brand: "Zenix", ram: 4, price: 10499 },
  { name: "Orion Max", brand: "Orion", ram: 12, price: 32999 },
  { name: "Nova Mini", brand: "Nova", ram: 2, price: 6999 },
  { name: "Zenix Air", brand: "Zenix", ram: 6, price: 18499 },
  { name: "Orion Plus", brand: "Orion", ram: 8, price: 21999 },
  { name: "Nova Ultra", brand: "Nova", ram: 12, price: 39999 },
  { name: "Zenix Neo", brand: "Zenix", ram: 3, price: 7999 },
  { name: "Orion Star", brand: "Orion", ram: 4, price: 13499 }
])
```

## Show this output to the examiner

1. **Terminal.** Run node index.js.  
   Expected: Connected to MongoDB, then Server running at http://localhost:3000
2. **Show all.** Click "Show All Phones".  
   Expected: 12 phones.
3. **Search.** Choose Zenix and click Search.  
   Expected: 4 phones: Zenix Pro, Zenix Go, Zenix Air, Zenix Neo.
4. **Filter.** Type 13000 in "Price at most" and click Filter.  
   Expected: 5 phones: Nova X1, Orion Lite, Zenix Go, Nova Mini, Zenix Neo.
5. **3 Cheapest Phones.** Click "3 Cheapest Phones".  
   Expected: Nova Mini (6999), Zenix Neo (7999), Orion Lite (8999), in this order.
6. **Add Phone.** Fill the form with Name: Nova Lite, Brand: Nova, RAM (GB): 4, Price: 9999. Click "Add Phone".  
   Expected: The message "Phone saved" appears and the list shows 13 phones, including Nova Lite.
