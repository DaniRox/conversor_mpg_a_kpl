function conversor (mpg) {
    var milla = 1.609344;
    var galon = 4.54609188;
    var kilometros = milla * mpg;
    var kpl = kilometros / galon;
    console.log(kpl.toFixed(2));
}