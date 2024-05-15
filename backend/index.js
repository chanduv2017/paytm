const express = require("express");
const cors=require("cors");

const app=express();
app.use(cors());
app.use(express.json())

//middlewares we use should actually be above the actual route
const rootRouter=require("./routes/index")



app.use("/api/v1",rootRouter);  

// /api/v1/user/signup
// /api/v1/user/signup
// /api/v1/user/changePassword ....

// /api/v1/account/transferMoney
// /api/v1/account/balance

app.listen(3000);

