// const contacts = require('./contacts'); //pakai variable, kena letak nama variable sebelum func
// //const {pertanyaan, saveContact} = require('./contacts'); // pakai direct nama func dari file, takperlu letak nama variable sebelum func

// const main = async() => {
//     // const nama = await pertanyaan1();
//     // const phoneNo = await pertanyaan2();
//     // const email = await pertanyaan3();
//     const nama = await contacts.pertanyaan('Masukkan Nama Anda :');
//     const email = await contacts.pertanyaan('Masukkan Email Anda :');
//     const phoneNo = await contacts.pertanyaan('Masukkan No Phone Anda :');

//     contacts.saveContact(nama, email, phoneNo );
    
// }

// main();


//mengambil agrument dari command line
const yargs = require("yargs");
console.log(yargs.argv);
//console.log(process.argv);