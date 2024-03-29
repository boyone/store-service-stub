function (request, response, logger) {
    function pad(val, len) {
        val = String(val);
        len = len || 2;
        while (val.length < len) {
          val = '0' + val;
        }
        return val;
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    const item = JSON.parse(request.body);
    response.body.notify_message = response.body.notify_message.replace('8004359105', item.order_id);

    response.body.tracking_id = Math.floor(getRandomArbitrary(1000000000, 1999999999)).toString();

    var d = new Date();
    var dateString = d.getUTCDate() + "/" + (d.getUTCMonth()+1) + "/"+ d.getUTCFullYear() + " " +  pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
    // response.body.payment_date = dateString;
}
