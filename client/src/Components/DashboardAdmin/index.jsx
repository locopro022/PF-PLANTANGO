import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import './dashboard.css'
import LineChart from "./LineChart";
import PolarChart from "./PolarChart";
import { getBill } from "../../redux/actions";


export function DashboardAdmin() {

  const dispatch = useDispatch();
  const allBill = useSelector(state => state.bill)
  useEffect(() => {
    if (!allBill.length) {
      dispatch(getBill())
    };
  }, [allBill])


  console.log(allBill, "allBill");

  return (
    <div>
      <div class="content">
        <div class="rowSup">
          <div class="cardsSup">
            <div>
              <h5 class="card-category">Total Ventas</h5>
              <h3 class="card-title"> ${Math.round(allBill[0]?.VentasTotales)}</h3>
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
              <h3 class="card-title">${Math.round(allBill[2]?.TicketPromedio)}</h3>
            </div>
          </div>
        </div>
        <div class="rowMid">
          <div class="card-body">
            <div class="graficoLinea">
              <LineChart />
              <PolarChart />
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
                        <th>
                          Cliente
                        </th>
                        <th>
                          Fact Nº
                        </th>
                        <th class="text-center">
                          Monto de Factura
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Juan Rolon
                        </td>
                        <td>
                          0001
                        </td>
                        <td class="text-center">
                          $580
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>
                          Agustin Millan
                        </td>
                        <td>
                          0002
                        </td>
                        <td class="text-center">
                          $650
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>
                          Agustin Blanco
                        </td>
                        <td>
                          0003
                        </td>
                        <td class="text-center">
                          $450
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>
                          Leandro Florentin
                        </td>
                        <td>
                          0004
                        </td>
                        <td class="text-center">
                          $790
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>
                          Exequiel Martino
                        </td>
                        <td>
                          0005
                        </td>
                        <td class="text-center">
                          $350
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>
                          Armando Paredes
                        </td>
                        <td>
                          0006
                        </td>
                        <td class="text-center">
                          $400
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>
                          Akiles Bailo
                        </td>
                        <td>
                          0007
                        </td>
                        <td class="text-center">
                          $200
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>
                          Mariano Zegarra
                        </td>
                        <td>
                          0008
                        </td>
                        <td class="text-center">
                          $830
                        </td>
                      </tr>
                    </tbody>
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