const Bubble = props => {
    return `
    <img src="${props.img}" class="image">
    <p class="name">${props.name}</p>
    <p class="address">${props.address}</p>
    <p class="more">Veja Mais</p>
    `
}

window.bubble = {
    Bubble,
}