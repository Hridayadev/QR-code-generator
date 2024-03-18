const URL = "http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=100x100";
const inputHo = document.querySelector(".input");
const qrForm = document.getElementById("qrForm");
const qrImage = document.getElementById("qrImage");
const downloadBtn = document.querySelector(".download");

function generateQRCode() {
    let inputLa = inputHo.value;
    qrImage.src = `http://api.qrserver.com/v1/create-qr-code/?data=${inputLa}&size=200x200`;
    document.querySelector("p").innerText = `url:${inputLa}`;
    inputHo.value = "";

    // Check QR image src is empty
    if (qrImage.src === "") {
        downloadBtn.classList.replace("downolad", "laHaiita");
    } else {
        downloadBtn.classList.replace("laHaiita", "downolad"); // Restore the class if QR code image is generated
    }
}


qrForm.addEventListener("submit", (event) => {
    // Check if input has a value 
    if (inputHo.value !== "") {
        event.preventDefault(); 
        generateQRCode();
    } else {
        event.preventDefault(); 
        alert("Please enter a URL before generating QR code.");
    }
});

downloadBtn.addEventListener("click", () => {
    downloadQRCode();
});

function downloadQRCode() {
    const link = document.createElement('a');
    link.download = 'QRCode.png';
    link.href = qrImage.src;
    link.click();
}
