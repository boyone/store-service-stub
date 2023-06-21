function (request, response, logger) {
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    response.body = JSON.parse(response.body);
    // item.order_id = Math.floor(getRandomArbitrary(800000000, 899999999));
    // response.body = item;
    response.body.order_id = Math.floor(getRandomArbitrary(800000000, 899999999));
}
