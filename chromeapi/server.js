const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require('fs');

// Load config from Cloud Run mounted volume
const cloudRunConfigPath = '/v1/wes';
if (!fs.existsSync(cloudRunConfigPath)) {
    throw new Error('Cloud Run config volume not found at /v1/wes');
}

console.log('Loading configuration from Cloud Run mounted volume');
dotenv.config({ path: cloudRunConfigPath });

const app = require("./app");

const DB = process.env.DATABASE.replace("<db_password>", process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 8080;
console.log('PORT environment variable:', process.env.PORT);

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});