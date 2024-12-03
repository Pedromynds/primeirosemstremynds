zap = document.getElementById('zap')

zap.innerHTML = '<img id="sendMessageBtn" src="https://seeklogo.com/images/W/whatsapp-icon-logo-8CA4FB831E-seeklogo.com.png" alt="">';

document.getElementById("sendMessageBtn").addEventListener("click", () => SendMessage());

const SendMessage = () => {
    var phoneNumber = "12982722972";
    var message = "olá gostei muito do seu site";
    var whatsappUrl = "https://api.whatsapp.com/send?phone=";
    var apiUrl = whatsappUrl + phoneNumber + "&text=" + encodeURIComponent(message);
    window.open(apiUrl, "_blank")
}
