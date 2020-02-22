
module.exports = (req, res, obj) => {
    let messageId = 0;
    const intervalId = setInterval(() => {
        res.write(`id: ${messageId}\n`);
        res.write(`data: ${JSON.stringify(obj)}\n\n`);
        messageId += 1;
    }, 1000);

    req.on('close', () => {
        clearInterval(intervalId);
    });
}