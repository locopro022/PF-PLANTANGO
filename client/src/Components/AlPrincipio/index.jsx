const AlPrincipio = () => {
    const principio = () => {
        const destino = document.getElementById('ultimo')
        destino.scrollIntoView()
    }
    return (
        <div id='ultimo' ref={principio} style={{ position: 'absolute', top: '0' }}>hola</div>
    )
}

export default AlPrincipio;