function light(value) {
    var pic
    if (value == 1) {
        pic = "./on.jpg"
    } else {
        pic = "./offf.jpg"
    }
    document.querySelector(".img-responsive").src = pic

}
