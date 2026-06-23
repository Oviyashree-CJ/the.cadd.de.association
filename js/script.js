document.getElementById("contactForm").addEventListener("submit",function(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value.trim();
    let whatsappNumber = "919943026224";
    let text =`Name: ${name}
Phone: ${phone}
Message: ${message}`;
    let url =`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(text)}`;
    window.open(url,"_blank");
});