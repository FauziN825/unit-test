  
require('./db/connections')
const express = require('express')
const userRouter = require('./routers/user.routers')
const taskRouter = require('./routers/task.routers')
const app = express();
app.use(express.json())
app.use(userRouter);
app.use(taskRouter);

module.exports = app