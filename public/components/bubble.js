const Bubble = props => {
    return `
    <p class="name">${props.name}</p>
    <p class="address">${props.address}</p>
    <p class="more">Veja Mais</p> 
    `
}

window.bubble = {
    Bubble,
}