// alert("Halo saya batch 43")
// console.log("Hello World")
// document.write("Hallo Batch 43")
// document.writeln("Hallo Batch 43")

// variable
// var, let, const.

// data yang bisa di ubah
// var gelas = "susu"
// var gelas = "air putih"
// let piring = "nasi putih"
// piring = "nasi goreng"

// isi data yang tetap
// constant 
// const nama = "dandi"
// nama = "wahyu"

// type data
// data primitif dan non primitif
// type data primitif -> satu nilai (
    //  -> string ="apapun yang ada didalam ini adalah string"
    //  -> int = 1,2,3,4,5 
    // -> floating-point -= 0.1, 0.2 
    //  -> boolean = (true dan false)
    //  -> undifined = belum di deklarasikan
    //  -> null = tidak ada datanya

// type data non-primitif -> lebih dari satu
    //  -> object
    //  -> array 

    // let dataDiri = {
    //     nama: "Dandi",
    //     alamat: "Tangerang"
    // }

    // dua suku kata
    // let darahMuda = "o"
    // let darah_muda = "o"
    // let darah-muda = "o" -> error

    // menggunakan bahasa inggris
    // const increment

// operator
// operator arimatika
// let angkaAwal = 10**3
// let angkaTambah = 20
// let hasil = angkaAwal

// let myName = "Dandi Saputra"
// let myJob = "Selai Kacang"
// let myIntro = "nama saya " + myName + " Pekerjaan saya menjadi " + myJob -> cara 1
// let myIntro = `nama saya ${myName} pekerjaan saya menjadi ${myJob}` -> cara 2


// pengkondisian
// if else
// let umur = 17

// if(umur === "17") {
//     console.log("Mas dandi umurnya dibawah 17 thn")
// } else {
//     console.log("umur mas dandi diatas 17thn")
// }

//  ==, !=, ===
// function
// function biasa
// function increment(){
//     let kota = "jakarta"
//     return kota
// } 

// increment()

// const decrement = function() {
//     console.log("Jakarta")
// }

// decrement()

// const hasil = () => {
//     console.log("halo")
// }

// hasil()

// parameter
// function sayHallo(nilaiAwal, nilaiAkhir) {
//     return nilaiAwal + nilaiAkhir
// }

// // argument
// console.log(sayHallo(10, 15))

function getData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phoneNumber = document.getElementById("telp").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    if(name == ""){
        return alert("Nama tidak boleh kosong")
    } else if(email == "") {
        return alert("email tidak boleh kosong")
    } else if(phoneNumber == "") {
        return alert("telpon tidak boleh kosong")
    } else if(subject == "") {
        return alert("subject tidak boleh kosong")
    } else if(message == "") {
        return alert("pesan tidak boleh kosong")
    }

    let emailReceiver = "hi.dandi9@gmail.com"

    let mailTo = document.createElement('a')
    mailTo.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo nama saya ${name}, ${message}, nomor telpon saya ${phoneNumber}`
    mailTo.click()

    let users = {
        myName: name,
        myEmail: email,
        myPhone: phoneNumber,
        mySubject: subject,
        myMessage: message
    }

    console.log(users)

}