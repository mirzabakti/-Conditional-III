// Buatlah program menggunakan "switch case" untuk memindahkan channel televisi menggunakan remote

/**
 * LIST CHANNEL
 * 1  TVRI
 * 2  MNCTV
 * 3  INDONESIA
 * 4  ANTV
 * 5  RCTI
 * 6  SCTV
 * 7  TRANS7
 */

// Jika menenukan channel tampilkan "Input remote rusak adalah channel ke-[inputRemote] dan hasilnya adalah channel [channelTV]"
// Jika tidak menenuka channel tampilkan "Error, sepertinya harus ganti remote nih"

let inputRemote; // Number (Random dari 1 - 26)
let channelTV;

// your code here

inputRemote = Math.floor(Math.random() * 26) + 1;

switch (inputRemote) {
    case 1:
        channelTV = "TVRI";
        break;
    case 2:
        channelTV = "MNCTV";
        break;
    case 3:
        channelTV = "INDONESIA";
        break;
    case 4:
        channelTV = "ANTV";
        break;
    case 5:
        channelTV = "RCTI";
        break;
    case 6:
        channelTV = "SCTV";
        break;
    case 7:
        channelTV = "TRANS7";
        break;
    default:
        console.log("Error, sepertinya harus ganti remote nih");
        break;
}

console.log(`Input remote rusak adalah channel ke-${inputRemote} dan hasilnya adalah channel ${channelTV}`);