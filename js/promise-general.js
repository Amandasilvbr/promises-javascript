/* PROMISE SIMPLES

-Retorna um retorno de forma obrigatória:
  Resolve: solução
  Reject: erro

*/

// 1-Criação da promise, que já prevê uma resolução ou um erro

const myPromise = new Promise((resolve, reject) => {
    const peopleName = "Matheus"
    peopleName === "Matheus" ? resolve(`Usuário encontrado`) : reject(`Usuário não encontrado`)
})

// Usando o then, ele utiliza a resposta de retorno da promise
myPromise.then((result) => { console.log(result) })



// 2-Encadeamento de then´s
const myPormise2 = new Promise((resolve, reject) => {
    const peopleName = "Matheus"
    peopleName === "Matheus" ? resolve(`Usuário encontrado`) : reject(`Usuário não encontrado`)
})

// O segundo 2 usa o dado do then anterior para modificar os dados
myPormise2.then((result) => {
    return result.toLowerCase()
}).then((resultLowerCase) => {
    console.log(resultLowerCase)
})



// 3-Usando o catch
const myPromise3 = new Promise((resolve, reject) => {
    const peopleName = "João"
    peopleName === "Matheus" ? resolve(`Usuário encontrado`) : reject(`Usuário não encontrado`)
})

// A promise retorna reject, e envia ela para o catch, que processa o erro
myPromise3.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(`Aconteceu um erro: ` + err)
})



// 4-Resolvendo várias promessas com o all de forma assíncrona 

const p1 = new Promise((resolve, reject) => resolve(`P1 ok!`))

const p2 = new Promise((resolve, reject) => resolve(`P2 ok!`))

const p3 = new Promise((resolve, reject) => resolve(`P3 ok!`))

const resolveAll = Promise.all([p1, p2, p3]).then((result) => console.log(result))