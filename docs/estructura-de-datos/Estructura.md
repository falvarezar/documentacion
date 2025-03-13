---
sidebar_position: 2
hide_table_of_contents: true
---

# Estructura

<div style={{ fontSize: "18px", textAlign: "justify" }}>
En esta sección se detalla la estructura de datos requerida para la integración con DTEpy. Es importante que el personal técnico o el informático del emisor realice las adaptaciones necesarias en la estructura de su sistema (ERP) para cumplir con los requisitos exigidos por el SIFEN.

> La columna JSON especifica los nombres de los atributos que se utilizan para estructurar el archivo JSON en una petición POST hacia la API local, responsable de generar el KuDE para su impresión. Es importante destacar que, para una mejor comprensión de la estructura del JSON, si el atributo de la columna es "fecha", en el JSON deberá interpretarse como json.fecha. De manera similar, si el atributo es "facturas.fechaEnvio", se entenderá como json.facturas.fechaEnvio, siendo la columna JSON el nodo principal que organiza la estructura.

> La columna INTEGRADOR se refiere a los nombres de los campos necesarios en una vista, procedimiento almacenado, consulta API REST o consulta de una tabla DBF (VFP). Estos campos son requeridos por la aplicación (Integrador) para generar el archivo JSON y realizar el envío de documentos al SIFEN.

> Todos los campos incluidos en la tabla son obligatorios para la aplicación (integrador) y, por lo tanto, deben ser incorporados en las vistas y consultas. Sin embargo, la columna que indica "obligación" se refiere específicamente a si dichos campos deben enviarse con valores asignados.
</div>

--- 

<div style={{ overflowX: 'auto' }}>
  <table style={{ tableLayout: 'fixed', borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ textAlign: 'center', padding: '10px', fontSize: '1.0em' }} colspan="7">
          DATOS GENERALES
        </th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th style={{ whiteSpace: 'nowrap' }}>Json</th>
        <th style={{ whiteSpace: 'nowrap' }}>Integrador</th>
        <th style={{ whiteSpace: 'nowrap' }}>Tipo</th>
        <th style={{ whiteSpace: 'nowrap' }}>Docum</th>
        <th style={{ whiteSpace: 'nowrap' }}>Oblig</th>
        <th style={{ whiteSpace: 'nowrap' }}>Observación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>fecha</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>fecha</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>datetime</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>json: ej. <br /> 2025-01-01T10:11:00
         <br /> <br /> integrador: ej. <br /> 01/01/2025 07:00:00</td>
      </tr>
     <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>cliente</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>ej. <br /> GLOBE INFORMATICA <br /> **Obs.** la columa clientes en el <br /> integrador pasa a nombrarse <br /> comprador cuando el tipo de <br /> documento es autofactura.</td>
      </tr>
     <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>documento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>ej. 001-001-0000001</td>
      </tr>
     <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>vendedor</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>nombre del prestador <br /> de servicio</td>
      </tr>
     <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>estado_doc</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>PENDIENTE <br /> RECHAZADO <br /> APROBADO <br /> OBSERVACION <br /> CANCELADO <br /> INUTILIZADO <br /> ANULADO</td>
      </tr> 
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>condicion.tipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>condicion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>integrador: string <br /> CONTADO, CREDITO <br /> <br /> json: int <br /> 1 = CONTADO, 2 = CREDITO</td>
      </tr>        
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>moneda</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>moneda</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF, <br /> NC, ND</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>PYG, USD, EUR, <br /> BRL, ARS</td>
      </tr>     
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>cambio</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>cambio</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>numeric</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF, <br /> NC, ND</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>tasa de cambio cuando <br /> moneda es diferente a PYG</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>condicionTipoCambio</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>condiciontipocambio</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF, <br /> NC, ND</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>cuando moneda es <br /> diferente a PYG <br /> 1 = Global <br /> 2 = Por ítem</td>
      </tr>         
     <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>importe</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>numeric</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>importe de la operación <br /> de la autofactura</td>
      </tr>     
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>exentas</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>numeric</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, NC, ND</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>  
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>gravadas</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>numeric</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, NC, ND</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>  
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>descuento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>numeric</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF, <br /> NC, ND</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>  
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>total</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>numeric</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF, <br /> NC, ND</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>      
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>timbrado</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>        
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>cdc</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>cdc</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>Una vez que el CDC ha sido <br /> generado y transmitido al <br /> SIFEN, cualquier rechazo que <br /> requiera modificar la estructura <br /> del CDC hará que el documento <br /> no pueda ser reenviado. <br /> En este caso, será necesario <br /> proceder con la inutilización <br /> del documento. <br /> (si el cdc es null la API lo genera)</td>   
      </tr>      
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>envio_pend</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>envio_pend</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>valor 1 establece que el kuDE <br /> sera enviado por mail al <br /> aprobarse el documento desde <br /> la API de DTEpy</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>mail</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>booleano</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>indica que el mail fue enviado <br /> al cliente</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>tipoDocumento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>tipodocumento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = FACTURA <br /> 4 = AUTOFACTURA <br /> 5 = NOTA CREDITO <br /> 6 = NOTA DEBITO <br /> 7 = NOTA REMISION</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>codigoSeguridadAleatorio</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>codigoseguridadaleatorio</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>Debe ser un número positivo <br /> de 9 dígitos aleatorio</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>pin</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>pin</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>código aleatorio ej. GHW872 <br /> único por cliente</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>token</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>token</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>para autenticar los <br /> documentos de varias empresas</td>
      </tr>        
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>tipoTransaccion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>tipotransaccion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF, <br /> NC, ND</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = Venta de mercadería <br /> 2 = Prestación de servicios <br /> 3 = Mixto <br /> 4 = Venta de activo fijo <br /> 5 = Venta de divisas <br /> 6 = Compra de divisas <br /> 7 = Promoción o entrega <br /> de muestras <br /> 8 = Donación <br /> 9 = Anticipo <br /> 10 = Compra de productos <br /> 11 = Compra de servicios <br /> 12 = Venta de crédito fiscal <br /> 13 = Muestras médicas</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>tipoEmision</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>tipoemision</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = Normal <br /> 2 = Contingencia</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>tipoImpuesto</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>tipoimpuesto</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF, <br /> NC, ND</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = IVA <br /> 2 = ISC <br /> 3 = Renta <br /> 4 = Ninguno <br /> 5 = IVA - Renta</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>id</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>identificador</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>número secuencial <br />autoincremental único que <br /> identifica al documento <br /> (generado por el emisor)</td>
      </tr>     
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>idlote</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>número secuencial <br />autoincremental único que <br /> identifica a cada lote de <br /> documento/s enviado/s <br /> (generado por el emisor)</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>establecimiento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>establecimiento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>corresponde a la sucursal <br /> ej. 001</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>punto</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>punto</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>punto de expedición <br /> ej. 002</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>numero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>numero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>ej. 0001234</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>serie</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>serie</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>ej. AA si supera el limite <br /> de 9999999</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>condicion.credito.tipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>tipocredito</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = Plazo <br /> 2 = Cuota</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>condicion.credito.plazo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>diasvenci</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>si tipo de credito es plazo <br /> ej. 45</td>
      </tr>      
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>condicion.credito.cuotas</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>cantcuota</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>si tipo de credito es cuota <br /> ej. 12</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>mensaje_resp</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>mensaje de un documento <br /> mostrado en el integrador <br /> que corresponde a la respuesta <br /> de SIFEN</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>mensaje_400</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>mensaje de un documento <br /> mostrado en el integrador <br /> que corresponde a la respuesta <br /> de la API DTEpy</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>rucemisor</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>dato para que la API genere <br /> el CDC en caso de null</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>tipocontribuyenteemisor</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>dato para que la API genere <br /> el CDC en caso de null<br /> 1 = Persona Física <br /> 2 = Persona Jurídica</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>descuentoGlobal</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>descuentoglobal</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>numeric</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>un valor en descuento global <br /> realizara la proporcion de <br /> descuento por ítem.</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>condicionAnticipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>condicionanticipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>anticipoGlobal</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>anticipoglobal</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>numeric</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>si condicionAnticipo es 1, <br />  se realizara la proporción <br /> en los ítems</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>factura.presencia</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>presencia</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = Operación presencial <br /> 2 = Operación electrónica <br /> 3 = Operación telemarketing <br /> 4 = Venta a domicilio <br /> 5 = Operación bancaria <br /> 6 = Operación cíclica <br /> 9 = Otro</td>
      </tr>  
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>factura.fechaEnvio</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>fechaenvio</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>date</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>Fecha estimada para el traslado <br /> de la mercadería y emisión de <br /> la nota de remisión electrónica <br /> cuando corresponda.</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>notaCreditoDebito.motivo <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> remision.motivo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>motivo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NC,ND,NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>**Valores para los tipos NC Y ND** <br /> 1 = Devolución y Ajuste <br /> de precios <br /> 2 = Devolución <br /> 3 = Descuento <br /> 4 = Bonificación <br /> 5 = Crédito incobrable <br /> 6 = Recupero de costo <br /> 7 = Recupero de gasto <br /> 8 = Ajuste de precio <br /> <br /> **Valores para el tipo NR** <br /> 1 = Traslado por venta <br /> 2 = Traslado por consignación <br /> 3 = Exportación <br /> 4 = Traslado por compra <br /> 5 = Importación <br /> 6 = Traslado por devolución <br /> 7 = Traslado entre locales de <br /> la empresa <br /> 8 = Traslado de bienes por <br /> transformación <br /> 9 = Traslado de bienes por <br /> reparación <br /> 10 = Traslado por emisor móvil <br /> 11 = Exhibición o demostración <br /> 12 = Participación en ferias <br /> 13 = Traslado de encomienda <br /> 14 = Decomiso</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>idcliente</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>campo para relacionar con datos <br /> de clientes</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>idvendedor</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>campo para relacionar con datos <br /> de vendedor. <br /> (prestador de servicio)</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>idusuario</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>campo para relacionar con datos <br /> de usuario</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>idmovimiento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>campo para relacionar con datos <br /> de items, doc. asociado, <br /> forma de cobro</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="6" style={{ textAlign: 'center', padding: '10px', fontStyle: 'italic', fontSize: "18px" }}>
          Nota: Si utiliza el método de conexión VFP el nombre del cursor de retorno debe llamarse CABECERA. <br />
          Nota: Al usuario se envía el parámetro FECHA para filtrar los datos. 
        </td>
      </tr>
    </tfoot>    
  </table>
</div>

--- 
---

<div style={{ overflowX: 'auto' }}>
  <table style={{ tableLayout: 'fixed', borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ textAlign: 'center', padding: '10px', fontSize: '1.0em' }} colspan="7">
          DATOS DEL CLIENTE
        </th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th style={{ whiteSpace: 'nowrap' }}>Json.cliente</th>
        <th style={{ whiteSpace: 'nowrap' }}>Integrador</th>
        <th style={{ whiteSpace: 'nowrap' }}>Tipo</th>
        <th style={{ whiteSpace: 'nowrap' }}>Docum</th>
        <th style={{ whiteSpace: 'nowrap' }}>Oblig</th>
        <th style={{ whiteSpace: 'nowrap' }}>Observación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>contribuyente</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>contribyuente</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>booleano</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>true, false</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>ruc</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>ruc</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>agregar valor si <br /> contribuyente es true</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>tipoContribuyente</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>tipocontribyuente</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = Fisica <br /> 2 = Juridica</td>
      </tr> 
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>razonSocial</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>razonsocial</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>email</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>email</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>nombreFantasia</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>nombrefantasia</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>tipoOperacion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>tipooperacion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = B2B <br /> 2 = B2C <br /> 3 = B2G <br /> 4 = B2F</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>documentoTipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>documentotipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>agregar valor si <br /> contribuyente es false</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>documentoNumero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>documentonumero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>agregar valor si <br /> contribuyente es false</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>direccion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>direccion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>agregar valor cuando tipoDocumento <br /> es nota remisión o tipoOperacion es B2F</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>numeroCasa</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>numerocasa</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>agregar si se informa la dirección, <br /> de lo contrario puede tener valor 0</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>pais</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>pais</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>      
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>departamento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>departamento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>agregar valor si se informa la dirección <br /> y tipoOperacion es diferente a B2F</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>distrito</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>distrito</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>agregar valor si se informa la dirección <br /> y tipoOperacion es diferente a B2F</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>ciudad</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>ciudad</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>agregar valor si se informa la dirección <br /> y tipoOperacion es diferente a B2F</td>
      </tr>      
    </tbody>
    <tfoot>
      <tr>
        <td colspan="6" style={{ textAlign: 'center', padding: '10px', fontStyle: 'italic', fontSize: "18px" }}>
          Nota: Nombre de cursor retorno de vfp: SQCLIENTE. <br />
          Nota: Al usuario se envía el parámetro IDCLIENTE. 
        </td>
      </tr>
    </tfoot>      
  </table>
</div>

--- 
---

<div style={{ overflowX: 'auto' }}>
  <table style={{ tableLayout: 'fixed', borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ textAlign: 'center', padding: '10px', fontSize: '1.0em' }} colspan="7">
          DATOS DEL USUARIO
        </th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th style={{ whiteSpace: 'nowrap' }}>Json.usuario</th>
        <th style={{ whiteSpace: 'nowrap' }}>Integrador</th>
        <th style={{ whiteSpace: 'nowrap' }}>Tipo</th>
        <th style={{ whiteSpace: 'nowrap' }}>Docum</th>
        <th style={{ whiteSpace: 'nowrap' }}>Oblig</th>
        <th style={{ whiteSpace: 'nowrap' }}>Observación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>documentoTipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>documentotipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = Cédula paraguaya <br /> 2 = Pasaporte <br /> 3 = Cédula extranjera <br /> 4 = Carnet de residenca <br /> 9 = Otro</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>documentoNumero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>documentonumero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>nombre</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>nombre</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr> 
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>cargo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>cargo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="6" style={{ textAlign: 'center', padding: '10px', fontStyle: 'italic', fontSize: "18px" }}>
          Nota: Nombre de cursor retorno de vfp: SQUSUARIO. <br />
          Nota: Al usuario se envía el parámetro IDUSUARIO. 
        </td>
      </tr>
    </tfoot>      
  </table>
</div>

--- 
---

<div style={{ overflowX: 'auto' }}>
  <table style={{ tableLayout: 'fixed', borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ textAlign: 'center', padding: '10px', fontSize: '1.0em' }} colspan="7">
          DATOS DE LA FACTURA DNCP
        </th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th style={{ whiteSpace: 'nowrap' }}>Json.dncp</th>
        <th style={{ whiteSpace: 'nowrap' }}>Integrador</th>
        <th style={{ whiteSpace: 'nowrap' }}>Tipo</th>
        <th style={{ whiteSpace: 'nowrap' }}>Docum</th>
        <th style={{ whiteSpace: 'nowrap' }}>Oblig</th>
        <th style={{ whiteSpace: 'nowrap' }}>Observación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>modalidad</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>modalidad</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, NC, ND</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>entidad</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>endidad</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, NC, ND</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>año</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>anho</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, NC, ND</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr> 
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>secuencia</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>secuencia</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, NC, ND</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>fecha</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>fecha</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>date</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, NC, ND</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>json: ej. <br /> 2025-01-01 <br /> <br /> integrador: ej. <br /> 01/01/2025</td>
      </tr>      
    </tbody>
    <tfoot>
      <tr>
        <td colspan="6" style={{ textAlign: 'center', padding: '10px', fontStyle: 'italic', fontSize: "18px" }}>
          Nota: Nombre de cursor retorno de vfp: SQDNCP. <br />
          Nota: Al usuario se envía el parámetro IDMOVIMIENTO. 
        </td>
      </tr>
    </tfoot>      
  </table>
</div>

--- 
---

<div style={{ overflowX: 'auto' }}>
  <table style={{ tableLayout: 'fixed', borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ textAlign: 'center', padding: '10px', fontSize: '1.0em' }} colspan="7">
          DATOS DE LA OBLIGACIÓN
        </th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th style={{ whiteSpace: 'nowrap' }}>Json.obligaciones[]</th>
        <th style={{ whiteSpace: 'nowrap' }}>Integrador</th>
        <th style={{ whiteSpace: 'nowrap' }}>Tipo</th>
        <th style={{ whiteSpace: 'nowrap' }}>Docum</th>
        <th style={{ whiteSpace: 'nowrap' }}>Oblig</th>
        <th style={{ whiteSpace: 'nowrap' }}>Observación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>codigo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>codigo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, NC, ND</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>ej. 211</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>descripcion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>descripcion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, NC, ND</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>ej. Impuesto al Valor Agregado</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="6" style={{ textAlign: 'center', padding: '10px', fontStyle: 'italic', fontSize: "18px" }}>
          Nota: Nombre de cursor retorno de vfp: SQOBLIGACIONES. <br />
          Nota: No se envian parametros, la consulta debe traer todos los registros.
        </td>
      </tr>
    </tfoot>      
  </table>
</div>

---
---

<div style={{ overflowX: 'auto' }}>
  <table style={{ tableLayout: 'fixed', borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ textAlign: 'center', padding: '10px', fontSize: '1.0em' }} colspan="7">
          ÍTEMS DE LA OPERACIÓN
        </th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th style={{ whiteSpace: 'nowrap' }}>Json.items[]</th>
        <th style={{ whiteSpace: 'nowrap' }}>Integrador</th>
        <th style={{ whiteSpace: 'nowrap' }}>Tipo</th>
        <th style={{ whiteSpace: 'nowrap' }}>Docum</th>
        <th style={{ whiteSpace: 'nowrap' }}>Oblig</th>
        <th style={{ whiteSpace: 'nowrap' }}>Observación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>codigo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>codigo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>descripcion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>descripcion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>desunidadmedida</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr> 
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>iva</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>iva</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF, <br /> ND,NC</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>ej. 0, 5, 10</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>cantidad</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>cantidad</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>numeric</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>precioUnitario</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>preciounitario</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>numeric</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF, <br /> ND,NC</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>descuento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>descuento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>numeric</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF, <br /> ND,NC</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>anticipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>anticipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>numeric</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>total</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>numeric</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF, <br /> ND,NC</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>unidadMedida</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>unidadmedida</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>según XSD de unidades de medidas</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>ivaTipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>ivatipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF, <br /> ND,NC</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = Gravado IVA <br /> 2 = Exonerado <br /> 3 = Exento <br /> 4 = Gravado parcial (Grav-Exento)</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>ivaBase</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>ivabase</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF, <br /> ND,NC</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>proporción del iva que afecta a <br /> un ítem gravado ej. 100, 50, 30, 0</td>
      </tr>      
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>observacion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>observacion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="6" style={{ textAlign: 'center', padding: '10px', fontStyle: 'italic', fontSize: "18px" }}>
          Nota: Nombre de cursor retorno de vfp: SQITEMS. <br />
          Nota: Al usuario se envía el parámetro IDMOVIMIENTO. 
        </td>
      </tr>
    </tfoot>      
  </table>
</div>

--- 
---

<div style={{ overflowX: 'auto' }}>
  <table style={{ tableLayout: 'fixed', borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ textAlign: 'center', padding: '10px', fontSize: '1.0em' }} colspan="7">
          FORMAS DE COBRO (contado) <br /> (*cuando es crédito ya esta expresado en la tabla datos generales*)
        </th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th style={{ whiteSpace: 'nowrap' }}>Json.condicion</th>
        <th style={{ whiteSpace: 'nowrap' }}>Integrador</th>
        <th style={{ whiteSpace: 'nowrap' }}>Tipo</th>
        <th style={{ whiteSpace: 'nowrap' }}>Docum</th>
        <th style={{ whiteSpace: 'nowrap' }}>Oblig</th>
        <th style={{ whiteSpace: 'nowrap' }}>Observación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>entregas[].tipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>tipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = Efectivo <br /> 2 = Cheque <br /> 3 = Tarjeta de crédito <br /> 4 = Tarjeta de débito <br /> 5 = Transferencia <br /> 6 = Giro <br /> 7 = Billetera electrónica <br /> 8 = Tarjeta empresarial <br /> 9 = Vale <br /> 10 = Retención <br /> 11 = Pago por anticipo <br /> 12 = Valor fiscal <br /> 13 = Valor comercial <br /> 14 = Compensación <br /> 15 = Permuta <br /> 16 = Pago bancario <br /> 17=  Pago Móvil <br /> 18 = Donación <br /> 19 = Promoción <br /> 20 = Consumo Interno <br /> 21 = Pago Electrónico <br /> 99 = Otro</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>entregas[].tipo.descripcion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>descripcion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>informar si entregas[].tipo = 99</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>entregas[].moneda</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>moneda</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>PYG, ARS, USD, BRL, EUR</td>
      </tr> 
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>entregas[].cambio</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>cambio</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>numeric</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>informar si moneda <br /> es diferente a PYG</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>entregas[].monto</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>monto</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>numeric</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>entregas[].infoCheque.banco</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>banco</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>informar si entregas[].tipo = 2</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>entregas[].infoCheque.numeroCheque</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>numerocheque</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>informar si entregas[].tipo = 2</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>entregas[].infoTarjeta.tipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>tipotarjeta</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>informar si entregas[].tipo = 3 o 4 <br /> 1 = Visa <br /> 2 = Mastercard <br /> 3 = American Express <br /> 4 = Maestro <br /> 5 = Panal <br /> 6 = Cabal <br /> 99 = Otro</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>entregas[].infoTarjeta.tipodescripcion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>tipodescripcion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>informar si <br /> entregas[].infoTarjeta.tipo = 99 </td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>entregas[].infoTarjeta.numero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>numero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>informar si entregas[].tipo = 3 o 4</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>entregas[].infoTarjeta.medioPago</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>mediopago</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>informar si entregas[].tipo = 3 o 4 <br /> 1 = POS <br /> 2 = Pago Electrónico <br /> 9 = Otro</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="6" style={{ textAlign: 'center', padding: '10px', fontStyle: 'italic', fontSize: "18px" }}>
          Nota: Nombre de cursor retorno de vfp: SQFORMACOBRO. <br />
          Nota: Al usuario se envía el parámetro IDMOVIMIENTO. 
        </td>
      </tr>
    </tfoot>      
  </table>
</div>

--- 
---

<div style={{ overflowX: 'auto' }}>
  <table style={{ tableLayout: 'fixed', borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ textAlign: 'center', padding: '10px', fontSize: '1.0em' }} colspan="7">
          DATOS DE CUOTAS (*cuando es crédito*)
        </th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th style={{ whiteSpace: 'nowrap' }}>Json.condicion.credito</th>
        <th style={{ whiteSpace: 'nowrap' }}>Integrador</th>
        <th style={{ whiteSpace: 'nowrap' }}>Tipo</th>
        <th style={{ whiteSpace: 'nowrap' }}>Docum</th>
        <th style={{ whiteSpace: 'nowrap' }}>Oblig</th>
        <th style={{ whiteSpace: 'nowrap' }}>Observación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>infoCuotas[].moneda</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>moneda</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>infoCuotas[].monto</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>monto</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>numeric</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr> 
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>infoCuotas[].vencimiento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>vencimiento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>date</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>FE, AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="6" style={{ textAlign: 'center', padding: '10px', fontStyle: 'italic', fontSize: "18px" }}>
          Nota: Nombre de cursor retorno de vfp: SQCUOTAS. <br />
          Nota: Al usuario se envía el parámetro IDMOVIMIENTO. 
        </td>
      </tr>
    </tfoot>      
  </table>
</div>

---
---

<div style={{ overflowX: 'auto' }}>
  <table style={{ tableLayout: 'fixed', borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ textAlign: 'center', padding: '10px', fontSize: '1.0em' }} colspan="7">
          DATOS DEL DOCUMENTO ASOCIADO
        </th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th style={{ whiteSpace: 'nowrap' }}>Json.documentoAsociado[]</th>
        <th style={{ whiteSpace: 'nowrap' }}>Integrador</th>
        <th style={{ whiteSpace: 'nowrap' }}>Tipo</th>
        <th style={{ whiteSpace: 'nowrap' }}>Docum</th>
        <th style={{ whiteSpace: 'nowrap' }}>Oblig</th>
        <th style={{ whiteSpace: 'nowrap' }}>Observación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>formato</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>formato</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = Electrónico <br /> 2 = Impreso <br /> 3 = Constancia Electrónica</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>cdc</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>cdc</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>agregar valor si formato = 1</td>
      </tr>      
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>constanciaTipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>constanciatipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>agregar valor si formato = 3 <br /> 1 = Constancia de no ser contribuyente <br /> 2 = Constancia de microproductores</td>
      </tr> 
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>constanciaNumero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>constancianumero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>agregar valor si formato = 3 <br /> y constanciaTipo = 2</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>constanciaControl</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>constanciacontrol</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>agregar valor si formato = 3 <br /> y constanciaTipo = 2</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>tipoDocumentoImpreso</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>tipodocumentoimpreso</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>agregar valor si formato = 2 <br /> 1 = Factura <br /> 2 = Nota de crédito <br /> 3 = Nota de débito <br /> 4 = Nota de remisión <br /> 5 = Comprobante de retención</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>timbrado</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>timbrado</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>agregar valor si formato = 2</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>establecimiento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>establecimiento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>agregar valor si formato = 2</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>punto</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>punto</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>agregar valor si formato = 2</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>numero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>numero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>agregar valor si formato = 2</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>fecha</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>fecha</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>date</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>agregar valor si formato = 2</td>
      </tr>      
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>idmovimiento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>      
    </tbody>
    <tfoot>
      <tr>
        <td colspan="6" style={{ textAlign: 'center', padding: '10px', fontStyle: 'italic', fontSize: "18px" }}>
          Nota: Nombre de cursor retorno de vfp: SQDOCASO. <br />
          Nota: Al usuario se envía el parámetro IDMOVIMIENTO. 
        </td>
      </tr>
    </tfoot>      
  </table>
</div>

--- 
---

<div style={{ overflowX: 'auto' }}>
  <table style={{ tableLayout: 'fixed', borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ textAlign: 'center', padding: '10px', fontSize: '1.0em' }} colspan="7">
          DATOS DE LA AUTOFACTURA
        </th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th style={{ whiteSpace: 'nowrap' }}>Json.autoFactura</th>
        <th style={{ whiteSpace: 'nowrap' }}>Integrador</th>
        <th style={{ whiteSpace: 'nowrap' }}>Tipo</th>
        <th style={{ whiteSpace: 'nowrap' }}>Docum</th>
        <th style={{ whiteSpace: 'nowrap' }}>Oblig</th>
        <th style={{ whiteSpace: 'nowrap' }}>Observación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>tipoVendedor</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>tipovendedor</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = No contribuyente <br /> 2 = Extranjero</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>nombre</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>nombre</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>nombre del prestador de servicio</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>direccion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>direccion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr> 
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>numeroCasa</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>numerocasa</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>departamento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>departamento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>distrito</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>distrito</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>ciudad</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>ciudad</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>documentoTipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>documentotipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = Cédula paraguaya <br /> 2 = Pasaporte <br /> 3 = Cédula extranjera <br /> 4 = Carnet de residencia</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>documentoNumero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>documentonumero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>ubicacion.lugar</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>ubicacion_lugar</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>dirección del propio emisor que <br /> actúa como cliente en la autofactura</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>ubicacion.departamento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>ubicacion_departamento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>      
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>ubicacion.distrito</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>ubicacion_distrito</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>ubicacion.ciudad</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>ubicacion_ciudad</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>AF</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="6" style={{ textAlign: 'center', padding: '10px', fontStyle: 'italic', fontSize: "18px" }}>
          Nota: Nombre de cursor retorno de vfp: SQAUTOFACTURA. <br />
          Nota: Al usuario se envía el parámetro IDVENDEDOR. 
        </td>
      </tr>
    </tfoot>      
  </table>
</div>

--- 
---

<div style={{ overflowX: 'auto' }}>
  <table style={{ tableLayout: 'fixed', borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ textAlign: 'center', padding: '10px', fontSize: '1.0em' }} colspan="7">
          DATOS DE LA NOTA DE REMISIÓN
        </th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th style={{ whiteSpace: 'nowrap' }}>Json</th>
        <th style={{ whiteSpace: 'nowrap' }}>Integrador</th>
        <th style={{ whiteSpace: 'nowrap' }}>Tipo</th>
        <th style={{ whiteSpace: 'nowrap' }}>Docum</th>
        <th style={{ whiteSpace: 'nowrap' }}>Oblig</th>
        <th style={{ whiteSpace: 'nowrap' }}>Observación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>remision.<br />tipoResponsable</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>remision_tiporesp</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = Emisor de la factura <br /> 2 = Poseedor de la <br /> factura y bienes <br /> 3 = Empresa transportista <br /> 4 = Despachante de <br /> Aduanas <br /> 5 = Agente de transporte <br /> o intermediario</td>
      </tr>
     <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>remision.kms</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>remision_kms</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>numeric</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
     <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />tipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte_tipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = Propio <br /> 2 = Tercero</td>
      </tr>
     <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />modalidad</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte_modalidad</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = Terrestre <br /> 2 = Fluvial
        3 = Aéreo <br /> 4 = Multimodal</td>
      </tr>
     <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />tipoResponsable</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte_tiporesp</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = Emisor de la Factura <br /> Electrónica <br /> 2 = Receptor de la <br /> Factura Electrónica <br /> 3 = Tercero <br /> 4 = Agente intermediario <br /> del transporte <br /> 5 = Transporte propio</td>
      </tr> 
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />condicionNegociacion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte_condneg</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>CFR = Costo y flete <br /> CIF = Costo, seguro <br /> y flete <br /> CIP = Transporte y <br /> seguro pagados hasta <br /> CPT = Transporte pagado <br /> hasta <br /> DAP = Entregada en <br /> lugar convenido <br /> DAT = Entregada en <br /> terminal <br /> DDP = Entregada <br /> derechos pagados <br /> EXW = En fabrica <br /> FAS = Franco al costado <br /> del buque <br /> FCA = Franco transportista <br /> FOB = Franco a bordo</td>
      </tr>        
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />numeroManifiesto</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte_nummani</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>     
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />numeroDespachoImportacion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte_numdespimp</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />inicioEstimadoTranslado</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte_initrans</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>date</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>         
     <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />finEstimadoTranslado</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte_fintrans</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>date</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>     
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />paisDestino</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte_paisdestino</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>  
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />salida.direccion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>salida_direccion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>  
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />salida.numeroCasa</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>salida_numerocasa</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>si no tiene nro <br /> agregar 0</td>
      </tr>      
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />salida.pais</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>salida_pais</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>        
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />salida.departamento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>salida_departamento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>   
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />salida.distrito</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>salida_distrito</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />salida.ciudad</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>salida_ciudad</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />entrega.direccion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>entrega_direccion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />entrega.numeroCasa</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>entrega_numerocasa</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>si no tiene nro <br /> agregar 0</td>
      </tr>      
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />entrega.<br />complementoDireccion1</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>entrega_comple1</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />entrega.<br />complementoDireccion2</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>entrega_comple2</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />entrega.pais</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>entrega_pais</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />entrega.departamento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>entrega_departamento</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>     
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />entrega.distrito</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>entrega_distrito</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />entrega.ciudad</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>entrega_ciudad</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />entrega.telefonoContacto</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>entrega_telcontacto</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />vehiculo.tipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>vehiculo_tipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>CAMIONETA <br /> AUTOMOVIL
         <br /> MOTOCICLETA <br /> BARCAZA <br /> TREN <br /> AUTOBUS <br /> HELICOPTERO <br /> CAMION</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />vehiculo.marca</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>vehiculo_marca</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />vehiculo.documentoTipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>vehiculo_documentotipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = Número de identificación <br /> del 
        vehículo <br /> 2 = Número de matrícula <br /> del 
        vehículo</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />vehiculo.<br />documentoNumero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>vehiculo_documentonumero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>informar si <br /> vehiculo_<br />documentotipo = 1</td>
      </tr>      
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />vehiculo.numeroMatricula</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>vehiculo_numeromatricula</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>informar si <br /> vehiculo_<br />documentotipo = 2</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />vehiculo.numeroVuelo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>vehiculo_numerovuelo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>informar si <br /> modalidad = 3</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />transportista.contribuyente</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transportista_contribuyente</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>true, false</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />transportista.nombre</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transportista_nombre</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />transportista.ruc</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transportista_ruc</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>informar si transportista_<br />contribuyente = true</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />transportista.<br />documentoTipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transportista_documentotipo</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>1 = Cédula paraguaya <br /> 2 = Pasaporte <br /> 3 = Cédula extranjera <br /> 4 = Carnet de residencia</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />transportista.<br />documentoNumero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transportista_documentonumero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>informar si transportista <br /> es no contribuyente</td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />transportista.direccion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transportista_direccion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />transportista.pais</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transportista_pais</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disalbed />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>  
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />chofer.documentoNumero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>chofer_documentonumero</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />chofer.nombre</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>chofer_nombre</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>transporte.<br />chofer.direccion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>chofer_direccion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" disabled />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
    <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>cod_mov_aso</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center'  }}>string</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>NR</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}>seria el idmovimiento <br /> del documento asociado a <br /> la remision ej (una factura)</td>
      </tr>        
    </tbody>
    <tfoot>
      <tr>
        <td colspan="6" style={{ textAlign: 'center', padding: '10px', fontStyle: 'italic', fontSize: "18px" }}>
          Nota: Nombre de cursor retorno de vfp: SQREMISION. <br />
          Nota: Al usuario se envía el parámetro IDMOVIMIENTO. 
        </td>
      </tr>
    </tfoot>      
  </table>
</div>

---
---

<div style={{ overflowX: 'auto' }}>
  <table style={{ tableLayout: 'fixed', borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ textAlign: 'center', padding: '10px', fontSize: '1.0em' }} colspan="7">
          CONSULTA DE ID
        </th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th style={{ whiteSpace: 'nowrap' }}>Json</th>
        <th style={{ whiteSpace: 'nowrap' }}>Integrador</th>
        <th style={{ whiteSpace: 'nowrap' }}>Tipo</th>
        <th style={{ whiteSpace: 'nowrap' }}>Docum</th>
        <th style={{ whiteSpace: 'nowrap' }}>Oblig</th>
        <th style={{ whiteSpace: 'nowrap' }}>Observación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>identificador</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>idlote</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>idcancelacion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr> 
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>idinutilizacion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>idnominacion</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}></td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>id_datostrans</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>int</td>
        <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>todos</td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" checked />
        </td>
        <td style={{ whiteSpace: 'nowrap' }}></td>
      </tr>            
    </tbody>
    <tfoot>
      <tr>
        <td colspan="6" style={{ textAlign: 'center', padding: '10px', fontStyle: 'italic', fontSize: "18px" }}>
          Nota: Nombre de cursor retorno de vfp: SQIDCONSULTA. <br />
          Nota: No se envian parametros, la consulta debe traer tal cual.
        </td>
      </tr>
    </tfoot>      
  </table>
</div>

---

<div style={{ fontSize: "18px", textAlign: "justify" }}>
:::note NOTA
El informático tiene la opción de no generar el archivo JSON directamente. En su lugar, puede optar por exportar un archivo TXT que será procesado por el integrador para generar automáticamente el KuDE. En este caso, la aplicación del emisor solo necesita monitorear el directorio donde se genera el KuDE, permitiendo lanzar la impresión de manera automática tras la grabación de una operación.
:::
</div>