// core module
const fs = require('fs'); 

//console.log(fs);

// write string ke file (synchrounous)
// try{

//     fs.writeFileSync('test.txt', 'hello world secara syncrhronous!')
// }catch (e){
//     console.log(e);
// }

// write string ke file (asynchronous)
// fs.writeFile('data/test.txt', 'hello world secara Asynchronous!', (err) => {
//     console.log(err);
// })

// read file (synchrounous)
//  const data = fs.readFileSync('data/test.txt');
//  console.log(data.toString());
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// read file (Asynchronous)
// fs.readFile('data/test.txt', 'utf-8', (err, data) =>{
//     if(err) throw err;
    
//     console.log(data);
// })

//Readlines
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('masukkan nama anda : ', (nama) => {
    rl.question('masukan email : ', (email) => {
        const contact = {nama, email };
        const file =  fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);
        console.log(contacts);

        //masukkan ke dalam file
        contacts.push(contact); // dapatkan semua list + baru keyin
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

        console.log(`terima kasih ${nama}, email ${email}`);
        rl.close();
    })
})