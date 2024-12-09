const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path: "./config.env"});
const app = require("./app");

const DB = process.env.DATABASE.replace("<db_password>", process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(() => console.log("DB connection successful!"));

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`App running on port ${port}....`);
// });

const port = process.env.PORT || 8080;
console.log('PORT environment variable:', process.env.PORT);

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});