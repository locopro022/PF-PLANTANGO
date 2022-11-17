const { Category, Product, User, Billing, BillingDetail  } = require("../db");
const dbCategory = require("../dbCategory");
const dbProduct = require("../dbProduct");
const dbUser = require("../dbUser");
const dbBilling = require("../dbBilling");
const dbBillingDetail = require("../dbBillingDetail");

//LLENAR TEMPORALMENTE TABLAS: Billing, BillingDetail, 
const llenarCategory = async () => {
    const tabla = await Category.findAll();
    if (!tabla.length) {
      const dbC = dbCategory.map((dato) => {
        return {
          descripCategory: dato.descripCategory
        };
      });
      await Category.bulkCreate(dbC);
    }
  };

 const llenarProduct = async () => {
    const tabla = await Product.findAll();
    if (!tabla.length) {
      const dbP = dbProduct.map((dato) => {
        return {
          nameProd: dato.nameProd,
          descripProd: dato.descripProd,
          codCategory: dato.codCategory,
          starts: dato.starts,
          price: dato.price,
          actualStock: dato.actualStock, 
          minStock: dato.minStock,
          maxStock: dato.maxStock
        };
      });
      await Product.bulkCreate(dbP);
    }
  };

const llenarUser = async () => {
  const tabla = await User.findAll();
  if (!tabla.length) {
    const dbU = dbUser.map((usuario) => {
      return {
        idUser : usuario.idUser,
        username: usuario.username,
        email: usuario.email
      };
    });
    await User.bulkCreate(dbU);
  }
};

const llenarBilling = async () => {
    const tabla = await Billing.findAll();
    if (!tabla.length) {
      const dbB = dbBilling.map((bill) => {
        return {
            idUser : bill.idUser,
            dateBilling : bill.dateBilling,
            amountBilling : bill.amountBilling,
            taxBilling : bill.taxBilling,
        };
      });
      await Billing.bulkCreate(dbB);
    }
  };

  const llenarBillingDetail = async () => {
    const tabla = await BillingDetail.findAll();
    if (!tabla.length) {
      const dbBD = dbBillingDetail.map((billD) => {
        return {
            codBilling : billD.codBilling,
            codProd : billD.codProd,
            quantity : billD.quantity,
            price : billD.price,
            subtotal : billD.subtotal
        };
      });
      await BillingDetail.bulkCreate(dbBD);
    }
  };

module.exports = { llenarCategory, llenarProduct, llenarUser, llenarBilling, llenarBillingDetail };
