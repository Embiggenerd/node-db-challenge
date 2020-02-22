module.exports = (req, res, obj) => {
    let messageId = 0; // When connection is interrupted, browser uses this to check something
    const intervalId = setInterval(() => {
        res.write(`id: ${messageId}\n`); // In case Last-Event-ID HTTP header is used
        res.write(`data: ${JSON.stringify(obj)}\n\n`); // The data must be sent in this format, double new line is message delimiter
        messageId += 1;
    }, 1000); // Arbitrary timeout

    req.on('close', () => {
        clearInterval(intervalId); // Cleanup, trigged by onUnload function in main.js
    });
}