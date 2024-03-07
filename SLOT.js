const prompt=require("prompt-sync")({sigint:true}); 

 fruits = ["🍒", "🍋", "🍇", "🍊", "🍉", "🍓"];
User = [];

function AddNewUser(id, nama, saldo) {
  let NewUser = {
    iduser: id,
    name: nama,
    Balance: saldo,
  };
  User.push(NewUser);
}

function getRandomFruit() {
    return fruits[Math.floor(Math.random() * fruits.length)];
}
function spin(id) {
    for(i = 0; i < User.length; i++){
        if(User[i].iduser == id){
            if (User[i].Balance < 1000) {
                console.log("Insufficient balance. Please top up.");
                return;
            }
            User[i].Balance = parseInt(User[i].Balance) - 1000;
            let display = [];
            let angka = [];
            let colom;
            let p = 0;
            do{
                colom = getRandomFruit();
                display.push(colom);
                p++;
            }while(p < 5)
            console.log(display)
            for(x of fruits){
                b = 0;
                for(j=0; j < display.length; j++){
                    if(x == display[j]){
                        b++;
                    }
                }
                angka.push(b)
            }
            if(Math.max(...angka) == 3){
                User[i].Balance = parseInt(User[i].Balance) + 2000
                console.log("Mendapatkan 3 Buah Sama")
                console.log("Saldo = " + User[i].Balance)
            }
            else if(Math.max(...angka) == 4){
                User[i].Balance = parseInt(User[i].Balance) + 3000
                console.log("Mendapatkan 4 Buah Sama")
                console.log("Saldo = " + User[i].Balance)
            }
            else if(Math.max(...angka) == 5){
                User[i].Balance = parseInt(User[i].Balance) + 10000
                console.log("Mendapatkan 5 Buah Sama")
                console.log("Saldo = " + User[i].Balance)
            } else {
                console.log("Tidak mendapatkan Buah Yang Sama")
                console.log("Saldo = " + User[i].Balance)
            }
        }
    }
}

function topup(id) {
    for(i = 0; i < User.length; i++){
        if(User[i].iduser == id){
            let amount = prompt("Top Up Berapa Bang =");
            amount = parseInt(amount);
            if (!isNaN(amount) && amount > 0) {
                User[i].Balance += amount;
                console.log("Berhasil.");
                console.log("Saldo = " + User[i].Balance)
            } else {
                console.log("Invalid amount. Please enter a valid amount to top up.");
            }
        }
    }
}

AddNewUser(1234, "Rizki", 1500);
AddNewUser(2345, "Rafi",  20000);
let no; 
let type = 0;
do{
    if(no == undefined){
        no = prompt("Masukkan Nomer Anda = ")
    }
    console.log("\n1. Top Up")
    console.log("2. Spin")
    console.log("3. Keluar")
    type = prompt("\nMasukkan apa yang diinginkan = ")
    switch(type) {
    case '1':
      topup(no);
      break;
    case '2':
      spin(no);
      break;
    } 
}
while (type != 3)