function printNama(nama){
    return `Hai nama saya ${nama}`;
}

const PI = 3.14;

const student = {
    nama : 'shamsurie',
    umur : 28,
    printStd () {
    return `Hello nama saya ${this.nama}, umur ${this.umur} tahun.`;
    }
}

// module.exports.printNama = printNama;
// module.exports.PI = PI;
// module.exports.student = student;

// module.exports = {
//     printNama : printNama,
//     PI : PI,
//     student : student
// }"

module.exports = {printNama, PI, student }