// core module
const fs = require('fs'); 
//Readlines
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//membuat folder data
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

//buat file json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// rl.question('masukkan nama anda : ', (nama) => {
//     rl.question('masukan email : ', (email) => {
//         const contact = {nama, email };
//         const file =  fs.readFileSync('data/contacts.json', 'utf-8');
//         const contacts = JSON.parse(file);
//         console.log(contacts);

//         //masukkan ke dalam file
//         contacts.push(contact); // dapatkan semua list + baru keyin
//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

//         console.log(`terima kasih ${nama}, email ${email}`);
//         rl.close();
//     })
// })

//CARA 1 PER 1
// const pertanyaan1 = () => {
// return new Promise((resolve, reject) => {
//     rl.question('masukkan nama anda : ', (nama) =>{
//         resolve(nama);
//     })
//     });
// };

// const pertanyaan2 = () => {
// return new Promise((resolve, reject) => {
//     rl.question('masukkan phone no anda : ', (phoneNO) =>{
//         resolve(phoneNO);
//     })
//     });
// };
// const pertanyaan3 = () => {
// return new Promise((resolve, reject) => {
//     rl.question('masukkan email anda : ', (email) =>{
//         resolve(email);
//     })
//     });
// };

// guna parameter
const pertanyaan = (question) => {
return new Promise((resolve, reject) => {
    rl.question(question, (answer) =>{
        resolve(answer);
    })
    });
};

const saveContact = (nama, email, phoneNo) => {
            const contact = {nama, email, phoneNo };
            const file =  fs.readFileSync('data/contacts.json', 'utf-8');
            const contacts = JSON.parse(file);
            console.log(contacts);
    
            //masukkan ke dalam file
            contacts.push(contact); // dapatkan semua list + baru keyin
            fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    
            console.log(`terima kasih telah memasukan data`);
            rl.close();
};

module.exports = {pertanyaan, saveContact}