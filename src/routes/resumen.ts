import express from "express";

const router = express.Router();

router.get("/", (_,res) => {
    res.send("Fetching all entry diaries");
})

router.post("/", (_req, res) => {
    res.send("Saving diary");
})

export default router;