function Calcular() {
    const txtv = window.document.querySelector("input#txtvel")
    const res = window.document.querySelector("#res")
    const vel = Number(txtv.value)

    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong> Km/h</p>`
    if (vel > 60) {
        res.innerHTML += `<p> você ultrapassou o limite de velocidade!</p>`

    } else {
        res.innerHTML += `<p>Velocidade controlada!</p>`
    }

    res.innerHTML += `<p>Dirija com responsabilidade</p>`
}
