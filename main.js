var canvas = document.getElementById("movingrover_canvas");
var ctx = canvas.getContext("2d");
var rover_width = 100;
var rover_height = 90;
var rover_xposition = 10;
var rover_yposition = 10;
var backgorund_image = "mars.jpg";
var rover_image = "rover.png";

function add() {
    backgorund_image_tag = new Image();
    backgorund_image_tag.onload = upload_backgorund;
    backgorund_image_tag.src = backgorund_image;
    rover_image_tag_NOTBACKGORUND = new Image();
    rover_image_tag_NOTBACKGORUND.onload = upload_ROVERIMAGENOTBACKGORUND;
    rover_image_tag_NOTBACKGORUND.src = rover_image;
}
function upload_backgorund() {
    ctx.drawImage(backgorund_image_tag, 0, canvas.width, canvas.height);
}
function upload_ROVERIMAGENOTBACKGORUND() {
    ctx.drawImage(rover_image_tag_NOTBACKGORUND, rover_xposition, rover_yposition, rover_width, rover_height);
}
