function (request, response, logger) {
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    let str = response.body.replace("${order_id}", Math.floor(getRandomArbitrary(800000000, 899999999)));
    response.body = str
}
