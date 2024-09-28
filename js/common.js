$(document).ready(function(){
    $('b.abstract').click(function() {
        console.log("Button clicked!"); // Kiểm tra xem sự kiện có được kích hoạt
        $(this).closest('.links').next('.abstract').slideToggle(); // Chỉ ẩn/hiện nội dung <p>
    });
});