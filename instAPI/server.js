import chalk from "chalk";
import app from "./app.js";
import mongoose from "mongoose";
const PORT = process.env.PORT || 3001;
const DB_URL = "mongodb+srv://chernov:6fd54tyu@cluster0.odn9fxq.mongodb.net/node-test?retryWrites=true&w=majority";
mongoose.connect(DB_URL, (err) => {
    if (err) {
        throw err;
    }
app.listen(PORT, () => {
    console.log(chalk.cyan('--------------------------------------------'));
    console.log(chalk.magenta(`SERVER IS LISTENING ON http://localhost:${PORT}`));
    console.log(chalk.cyan('--------------------------------------------'));
    console.log(chalk.magenta(`SERVER IS CONNECTED TO DB`));
    console.log(chalk.cyan("--------------------------------------------"));
    } )

})

