let a = 2;
const b = 3.14;

console.log(a*b);

// ini array
let ganjil = [1,3,5,7,9,11,13];

console.log(ganjil[3]);

// ini object
const mobil = {
    "aki" : "abc",
    "release" : 2004
}

let daihatsu = mobil.release;

console.log(daihatsu);

// ini class
class Mahasiswa {
    constructor(nama, tahun) {
        this.nama = nama;
        this.tahun = tahun;
    }
    
    cekLulus() {
        const waktu = new Date();
        const tahun = waktu.getFullYear();
        if(tahun-this.tahun>=4){
            return true;
        } else return false;
    }

    lulus() {
        if (this.cekLulus()){
            return "telah lulus";
        } return "belum lulus";
    }

    getstatus() {
        if (this.cekLulus()){
            return this.nama + " " + this.lulus();
        } return this.nama + " " + this.lulus();
    }
}


const lama = new Mahasiswa("hwang", 2016);
console.log(lama.getstatus());


console.log(typeof(Mahasiswa));

document.getElementById("judul").innerHTML = "Halo semuanya!!";