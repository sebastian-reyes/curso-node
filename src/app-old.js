import chalk from 'chalk';
import http from 'http';
/*
terminal> node app (no es necesario agregar .js ya que node lo sobreentiende)
*/
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.forEach((n) => console.log(n * 2));

/*
Sistema de versionados = semantic versioning
MAJOR.MINOR.PATH
ejm: 4.5.2
*/

//Instalando librería chalk

console.log(chalk.bgGreen('texto con fondo verde'));

//creando primer servidor con http
const server = http.createServer((req,res) =>{
    console.log('Un cliente se ha conectado');
    res.write('La conexión fue exitosa');
    res.end();
})

server.listen(3000, ()=>{
    console.log('Servidor a la espera de conexiones');
})