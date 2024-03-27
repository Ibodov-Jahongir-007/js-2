function randomIdLetter() {
    let name = prompt('What is ur name?')
    let surname = prompt('Whats is ur surname')
    let from = prompt('where are u from')
    let randomID = Math.floor(Math.random() * 1001)

    alert(`
       id: ${randomID}
       name: ${name}
       surname: ${surname}
       live: ${from}
       identification: AWBSJK${randomID}RTFG
    `)
}

randomIdLetter()