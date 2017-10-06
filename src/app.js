import * as domain from './export/Exporter'


//Cara 1 untuk async operation menggunakan Promise
// let janji = new Promise((resolve,reject)=> {
//     if (true) {
//         resolve('Success')
//     }
//
//     reject('Error')
// }).then((success)=>{
//     console.log(success)
// }).catch((error)=>{
//     console.log(error)
// })

//Cara 2 untuk async operation menggunakan Promise
// let janji = new Promise((res,rej)=>{
//     if(false){
//         res('Resolved value')
//     }
//     rej('Rejected value')
// }).then((success)=>{
//     console.log(success)
// },(error)=>{
//     console.log(error)
// })

let callbackSuccess = (data)=>{
    console.log('Response ok : ' + data)
}

let callbackError = (data)=>{
    console.log(`Response error ${data}`)
}

let asyncHello = (succesCallback,errorCallback)=>{
    new Promise((res,rej)=>{
        if(true){
           res(JSON.stringify({
               nama:"arief",
               alamat:"Muara Enim",
               jurusan:"tekkom"
           }))
        }
        rej(JSON.stringify({
            code:500,
            message:"Error internal server"
        }))
    }).then((success)=>{
        succesCallback(success)
    },(error)=>{
        errorCallback(error)
    })
}


// cara 1 asyncHello dengan argumen function eksplisit
// asyncHello(callbackSuccess,callbackError)

//cara 2 asyncHello dengan argumen function implisit
// asyncHello((data)=>{
//  ....
// },(data)=>{
//  ....
//
// })

asyncHello((data)=>{
    console.log('Http Ok :' + data)
},(data)=>{
    console.log('Http 500 Error internal server : ' + data)
})

let hello = ()=>("hello World")

console.log(`${hello()} , ${domain.Person.nama}`)

let kucing = new domain.Pet('Kucing',2500000)

console.log(`${kucing.getTipe()} dengan harga : ${kucing.getHarga()}`)
