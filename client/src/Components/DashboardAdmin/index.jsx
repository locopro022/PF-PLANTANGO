import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./dashboard.css";
import LineChart from "./LineChart";
import PolarChart from "./PolarChart";
import { getBill } from "../../redux/actions";

export function DashboardAdmin() {
  const dispatch = useDispatch();
  const allBill = useSelector((state) => state.bill);
  useEffect(() => {
    if (!allBill.length) {
      dispatch(getBill());
    }
  }, [allBill]);


  return (
    <div>
      <div class="content">
        <div class="rowSup">
          <div class="cardsSup">
            <div>
              <h5 class="card-category">Total Ventas</h5>
              <h3 class="card-title">
                {" "}
                ${Math.round(allBill[0]?.VentasTotales)}
              </h3>
            </div>
          </div>
          <div class="cardsSup">
            <div>
              <h5 class="card-category">Ventas del Dia</h5>
              <h3 class="card-title">{allBill[1]?.Facturas}</h3>
            </div>
          </div>
          <div class="cardsSup">
            <div>
              <h5 class="card-category">Promedio de Carrito</h5>
              <h3 class="card-title">
                ${Math.round(allBill[2]?.TicketPromedio)}
              </h3>
            </div>
          </div>
        </div>
        <div class="rowMid">
          <div class="card-body">
            <div class="graficoLinea">
              <LineChart
                props={allBill[3]?allBill[3].sort((a, b) => {
                  if (a.Fecha < b.Fecha) return -1;
                  if (a.Fecha > b.Fecha) return 1;
                  return 0;
                }):null}
              />
              <PolarChart/>
            </div>
          </div>
        </div>
        <div class="rowInf">
          <div class="col-lg-6 col-md-12">
            <div class="card ">
              <div class="card-header">
                <h4 class="card-title"> Facturas Emitidas</h4>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table tablesorter " id="">
                    <thead class=" text-primary">
                      <tr>
                        <th>Fecha</th>
                        <th>Fact Nº</th>
                        <th class="text-center">Monto de Factura</th>
                      </tr>
                    </thead>
                    {allBill[3]
                      ? allBill[3]
                          .sort((a, b) => {
                            if (a.Fecha < b.Fecha) return -1;
                            if (a.Fecha > b.Fecha) return 1;
                            return 0;
                          })
                          .map((e) => (
                            <tbody>
                              <tr>
                                <td>{e.Fecha}</td>
                                <td>{e.Facturas}</td>
                                <td class="text-center">${e.VentasDia}</td>
                              </tr>
                            </tbody>
                          ))
                      : null}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
