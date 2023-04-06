const express = require("express");
const cors = require("cors");

const contacrsRouter = require("./app/routes/contact.route");
const ApiError = require("./app/api-error");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application."});
});

app.use("/api/contacts", contacrsRouter);

//handle 404 response
app.use((req, res, next) => {
    //Middleware xử lý lỗi tập trung
    //Trong các đoạn code xử lý ở các route, gọi next(error)
    //  sẽ chuyển về middleware xử lý lỗi này
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});

module.exports = app;