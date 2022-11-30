const AlPrincipio = () => {
    const principio = () => {
        const destino = document.getElementById('ultimo')
        destino.scrollIntoView({
            top: destino,
        })
    }
    return (
        <div id='ultimo' ref={principio} style={{ position: 'absolute', top: '0' }}></div>
    )
}

export default AlPrincipio;