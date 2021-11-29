const http = require('http');
const url = require('url');

const host = 'localhost'
const port = 8080;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");

    var q = url.parse(req.url, true);
    var qData = q.query;
    let a = parseInt(qData.a);
    let b = parseInt(qData.b);

    if(isNaN(a) || isNaN(b)) {
        res.writeHead(400);
        res.end("Invalid input parameters");
        return;
    }

    switch (q.pathname) {
        case '/add':
            res.writeHead(200);
            res.end((a + b).toString(), 'utf8');
            break;
        case '/sub':
            res.writeHead(200);
            res.end((a - b).toString(), 'utf8');
            break;
        case '/mul':
            res.writeHead(200);
            res.end((a * b).toString(), 'utf8');
            break;
        case '/div':
            if(b === 0) {
                res.writeHead(400);
                res.end("Division by zero");
                break;
            }

            res.writeHead(200);
            res.end((a / b).toString(), 'utf8');
            break;
        default:
            res.writeHead(404);
            res.end("Resource not found");
    }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});