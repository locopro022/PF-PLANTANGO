const mercadopago = require("mercadopago");

//Harcodeo el Acces Token
mercadopago.configure({
  access_token:
    "TEST-3694592683815251-111902-69b1919a20810744e6f7b1405dd75c44-1242690632",
});

const premiumController =
  ("/",
  (req, res) => {
    const {items} = req.body;
    console.log(items);
    let preference = {
      // items: [
      //   {
      //     id: 123,
      //     title: "Mi producto",
      //     unit_price: 100,
      //     quantity: 1,
      //     currency_id: "ARS",
      //   },
      // ],

      items: items.map((i) => ({
        id: i.id,
        title: i.title,
        unit_price: parseInt(i.unit_price),
        quantity: i.quantity,
        currency_id: "ARS",
      })),

      //notification_url: "https://misitio/api", //redirige despues de la compra
      back_urls: {
        failure: "http://localhost:3001/PaymentFail",
        pending: "http://localhost:3001/PaymentFail",
        success: "https://localhost:3001/PaymentOk",
      },
      auto_return: "approved",
    };

    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso

        // console.log('AAAAAA', response.body.init_point);
        res.json({url: response.body.init_point});
      })

      .catch(function (error) {
        console.log(error);
      });
  });

module.exports = { premiumController };