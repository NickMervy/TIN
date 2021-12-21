const express = require('express')
const router = express.Router()

var opcodes = {
    "add": 1,
    "sub": 2,
    "mul": 3,
    "div": 4
}

router.post('/', operandsProvided, function (req, res) {
    let num1 = parseInt(req.body.num1)
    let num2 = parseInt(req.body.num2)
    let opcode = req.body.opcode

    let result;
    switch (opcode) {
        case opcodes.add:
            result = num1 + num2;
            break;
        case opcodes.sub:
            result = num1 - num2;
            break;
        case opcodes.mul:
            result = num1 * num2;
            break;
        case opcodes.div:
            if (num2 == 0) {
                return res.status(400).end('Division by 0');
            }

            result = num1 / num2;
            break;

        default:
            return res.status(404).end('Unsupported operation');
    }

    return res.status(200).end(result.toString());
})

function operandsProvided(req, res, next) {
    if (!req.body.num1 || req.body.num1 === "") {
        return res.status(400).end('First operand is not provided');
    } else if (!req.body.num2 || req.body.num2 === "") {
        return res.status(400).end('Second operand is not provided');
    }

    next();
}

module.exports = router