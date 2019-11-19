function onHashChange() {
    switch (window.location.hash) {
        case '#about':
        main.innerHTML = About();
        break;
        case '#monuments':
        main.innerHTML = Monuments();
        break;
        case '#home':
        main.innerHTML = Home();
        break;
        default:
        main.innerHTML = Home();
        break;
    }
}