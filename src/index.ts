import express from "express";

import diaryRouter from "./routes/resumen"

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/ping", (_req, res) => {
    console.log("HOLIWIWEXXX");
    res.send("HOLIWIII");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} Date: ${new Date().toLocaleDateString()}`)
})

app.use("/api/diaries", diaryRouter);



