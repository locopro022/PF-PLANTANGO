import React from "react";
import './dashboard.css'
import LineChart from "./LineChart";


export function DashboardAdmin() {
 



  return (
     <div>
        <div class="content">
        <div class="row">
          <div class="col-12">
            <div class="card card-chart">
              <div class="card-header ">
                <div class="row">
          <div class="col-lg-4">
           <div class="cardArriba ">
              <div class="card-header2">
                <h5 class="card-category">Total Ventas</h5>
                <h3 class="card-title"><i class="tim-icons icon-bell-55 text-primary"></i> $118,763</h3>
              </div>
            </div> 
          </div>
          <div class="col-lg-4">
            <div class="cardArriba ">
              <div class="card-header2">
                <h5 class="card-category">Venta del Dia</h5>
                <h3 class="card-title"><i class="tim-icons icon-delivery-fast text-info"></i> $3,500</h3>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="cardArriba">
              <div class="card-header2">
                <h5 class="card-category">Promedio de Carrito</h5>
                <h3 class="card-title"><i class="tim-icons icon-send text-success"></i> $1,450</h3>
              </div>
            </div>
          </div>
        </div>
                <div class="row">
                  <div class="col-sm-6 text-left">
                    <h2 class="card-title">DashBoard</h2>
                  </div>                  
                </div>
                <div class="card-body">
                <div class="graficoLinea">
                  <LineChart/>
                  <LineChart/>
                </div>
              </div>
              </div>
              
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="card card-tasks">
              <div class="card-header ">
                <h6 class="title d-inline">Tareas(1)</h6>
                <p class="card-category d-inline">Hoy</p>
              </div>
              <div class="card-body ">
                <div class="table-full-width table-responsive">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input class="form-check-input" type="checkbox" value=""/>
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <p class="title">Terminar graficos</p>
                          <p class="text-muted">Terminar componente de Dashboard donde van los graficos</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
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
                        {/* <th>
                          City
                        </th> */}
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
                       {/*  <td>
                          Oud-Turnhout
                        </td> */}
                        <td class="text-center">
                          $3,738
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
