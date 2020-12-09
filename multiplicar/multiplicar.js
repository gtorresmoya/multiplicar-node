// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor base introducido '${ base }' no es un numero`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor limite introducido '${ limite }' no es un numero`);
            return;
        }
        let data = '';
        console.log(`Tabla del ${ base }`.green);
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${( i * base )}\n`;
        }
        resolve(data);
    });
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido '${ base }' es un numero`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor limite introducido '${ limite }' no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${( i * base )}\n`;
        }
        fs.writeFile(`tablas/Tabla_${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`Tabla_${base}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};