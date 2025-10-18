// Budget API

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const budgetModel = require('./models/budgetSchema.js')
const app = express();
const port = 3000;

let url = 'mongodb://localhost:27017/personal_budget';

app.use(cors());
app.use('/', express.static('public'))
app.use(express.json())


mongoose.connect(url)
  .then(() => {
    console.log('Successfully connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });


app.get("/budget", async (req, res) => {
async function find() {
    try {
        const budgetData = await budgetModel.find({}, {title: 1, budget: 1, color: 1, _id: 0})
        res.json({ myBudget: budgetData });
    } catch (err) {
        console.log("Error getting data");
        console.log(err);
        res.status(500).json({ error: "Failed to retrieve budget data" });
    }
}

find();
});

 app.post("/budget", async (req, res) =>{
    console.log("Request Body Received:", req.body);

     try {
        newItemData = req.body; 
        const newBudgetItem = new budgetModel(newItemData);
        const savedItem = await newBudgetItem.save()

        console.log("Successfully added:", savedItem);
        res.status(201).json(savedItem);
     } catch (err) {
        console.log("Error adding db entry", err)
        res.status(500).json({ error: "Failed to add budget item due to server error" });
     }
 });

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});


process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed due to app termination');
  process.exit(0);
});