const PUBLIC_VAPID_KEY = "BPl37OoL3xjQgghAAg7gWPFskse_cDvv7o69toToj-boib6D4lcLe4suB-7lX5tskxulbTQHgWKQ2eAkILq7xJY";

const subcription = async () => {
    await fetch('http://localhost:3001/noti/suscripcion', {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
            "Content-Type": "application/json"
        },
    })
    console.log("suscriptoOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
}

subcription()