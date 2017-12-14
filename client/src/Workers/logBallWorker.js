
module.exports = function worker (self) {
    self.addEventListener('message', (event) => {
        console.log(event.data);
        setTimeout(() => {self.postMessage(event.data)},4000);
    });
};