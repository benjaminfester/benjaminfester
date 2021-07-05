"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
if (process.env.NODE_ENV !== 'production') {
    app.use(cors_1.default());
}
app.get('/', (req, res) => {
    res.send('ok');
});
app.post('/api/register', (req, res) => {
    console.log(req.body);
    res.json({ status: 'ok' });
});
app.post('/api/login', (req, res) => {
});
app.listen(1337);
