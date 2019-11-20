
const Bubble = props => {
    return  `
    <img src="${props.img}" class="image">
    <p class="name">${props.name}</p>
    <p class="address">${props.address}</p>
    <p class="more"><a href="${props.link}" target="_blank">Saiba mais</p>
    `
}

window.bubble = { Bubble }