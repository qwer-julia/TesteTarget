import express from "express";
import FibonacciController from "../controllers/fibonacciController.js";
import LetterAController from "../controllers/letterAController.js";

const fibonacciController = new FibonacciController();
const letterAController = new LetterAController();

const router = express.Router();

router.post("/fibonacci", (req, res, next) => {
    try {
        const num = req.body.numero
        const isFibonacci = fibonacciController.checkFibonacci(num)
        if(isFibonacci){
            res.status(200).send(`O valor ${num} pertence a sequencia Fibonacci!`);
        }else{
            res.status(200).send(`O valor ${num} não pertence a sequencia Fibonacci!`);
        }
    } catch (error) {
        next(error);
    }
});

router.post("/counta", (req, res, next) => {
    try {
        const text = req.body.texto
        res.status(200).send(letterAController.countA(text));
    } catch (error) {
        next(error);
    }
});

export default router;