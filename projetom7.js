import readline from "readline";
const rl = readline.createInterface(process.stdin, process.stdout);

const result = []

const obtendo = () => {
     rl.question('Digite sua lista de propriedades CSS \n Para Sair digite SAIR \n', (resp) => {
          if (resp == "sair" || resp == "SAIR" || resp == "Sair") {
               console.log('Sua lista de propriedade CSS: \n ' + result.sort().join('\n'));
               return rl.close()
          } else {

               result.push(resp);
          }
          obtendo()

     })
}

obtendo()