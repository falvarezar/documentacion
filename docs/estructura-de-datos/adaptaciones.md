---
sidebar_position: 1
---

# Adaptaciones

<div style={{ fontSize: "18px", textAlign: "justify" }}>

El propósito de estas adaptaciones es asegurar que los datos relacionados con los documentos electrónicos estén correctamente estructurados. Esto incluye la creación de nuevas tablas, registros y campos en el sistema del emisor, así como la adecuación de los procesos existentes para generar y gestionar documentos electrónicos. 

:::note NOTA
Los nombres de tablas y campos presentados aquí son ejemplos representativos y están diseñados para facilitar la comprensión del proceso de adaptación. No es obligatorio que los nombres coincidan con la estructura de su base de datos, ya que estos pueden variar según su estructura existente. Sin embargo, la referencia a estos nombres permite identificar claramente las adaptaciones necesarias. Por ejemplo, el campo TOKEN podría estar ubicado en una tabla de configuración o parámetros de su sistema; en este caso particular, lo hemos ejemplificado en la tabla empresas.
:::
</div>


<details>
<summary>CLIENTES</summary>

Tener en cuenta la adaptacion de los siguientes campos:

<div style={{ overflowX: 'auto' }}>
  <table style={{ tableLayout: 'auto', borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        <th style={{ whiteSpace: 'nowrap' }}>Dato</th>
        <th style={{ whiteSpace: 'nowrap' }}>Tipo</th>
        <th style={{ whiteSpace: 'nowrap' }}>Observación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>contribuyente</td>
        <td style={{ whiteSpace: 'nowrap' }}>booleano</td>
        <td>se utiliza el valor true, false</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>tipo contribuyente</td>
        <td style={{ whiteSpace: 'nowrap' }}>int</td>
        <td>valor 1 si es física, 2 para jurídica</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>proveedor del estado</td>
        <td style={{ whiteSpace: 'nowrap' }}>booleano</td>
        <td>con este campo podrá definir el dato **tipo operación** para el cliente como B2G</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>nombre fantasía</td>
        <td style={{ whiteSpace: 'nowrap' }}>string</td>
        <td>debe corresponder a lo declarado en el Ruc, pero no es obligatorio</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>email</td>
        <td style={{ whiteSpace: 'nowrap' }}>string</td>
        <td>será de utilidad para el envío del kuDE y XML al correo del cliente una vez aprobada la factura</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>tipo operacion</td>
        <td style={{ whiteSpace: 'nowrap' }}>int</td>
        <td style={{ textAlign: "justify" }}>los valores a utilizar son: 1=B2B, 2=B2C, 3=B2G, 4=B2F <br /> **Obs.:** Estos valores pueden ser utilizados como un campo fijo o definidos de forma dinámica según las características del cliente. Por ejemplo, para el caso de B2B, se debe verificar si el cliente es de tipo jurídico; para B2C, si el cliente es de tipo físico o no es contribuyente y solo cuenta con una cédula de identidad (C.I.); para B2F, si en el campo país se identifica como procedente de otra nacionalidad; y para B2G, si el cliente es proveedor del Estado.</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>documento tipo</td>
        <td style={{ whiteSpace: 'nowrap' }}>int</td>
        <td>los valores a utilizar son: <br /> 1 = Cédula paraguaya <br /> 2 = Pasaporte <br /> 3 = Cédula extranjera <br /> 4 = Carnet de residencia <br /> 5 = Innominado <br /> 6 = Tarjeta diplomática de exoneración fiscal <br /> 9 = Otro <br /> **Obs.:** informar solo si el cliente no es contribuyente.</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>numero casa</td>
        <td style={{ whiteSpace: 'nowrap' }}>int</td>
        <td>es obligatorio si se informa la dirección, de lo contrario puede informar valor 0</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>país</td>
        <td style={{ whiteSpace: 'nowrap' }}>string</td>
        <td>país de origen del cliente, codificación según XSD de paises. <br /> https://ekuatia.set.gov.py/sifen/xsd/Paises_v100.xsd </td>
      </tr>      
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>departamento</td>
        <td style={{ whiteSpace: 'nowrap' }}>int</td>
        <td>campo obligatorio si se informa dirección, sin embargo no informar si tipo de operación es B2F</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>distrito</td>
        <td style={{ whiteSpace: 'nowrap' }}>int</td>
        <td>asignar si se ha informado departamento.</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>ciudad</td>
        <td style={{ whiteSpace: 'nowrap' }}>int</td>
        <td style={{ textAlign: "justify" }}>campo obligarorio si se informa dirección, sin embargo no informar si tipo de operación es B2F. <br /> La codificación de departamentos, distritos y ciudades se encuentra en el siguiente link, archivo xlsx código de referencia geografica: <br /> https://www.dnit.gov.py/web/e-kuatia/tablas-y-codificaciones</td>
      </tr>                                                      
    </tbody>
  </table>
</div>

</details>

<details>
<summary>EMPRESAS</summary>

<div style={{ fontSize: "18px", textAlign: "justify" }}>
Como se explicó anteriormente, los campos mencionados pueden estar ubicados en tablas de configuración o parámetros según la estructura del sistema.  
</div>  

<div style={{ overflowX: 'auto' }}>
  <table style={{ tableLayout: 'auto', borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        <th style={{ whiteSpace: 'nowrap' }}>Dato</th>
        <th style={{ whiteSpace: 'nowrap' }}>Tipo</th>
        <th style={{ whiteSpace: 'nowrap' }}>Observación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>token</td>
        <td style={{ whiteSpace: 'nowrap' }}>string</td>
        <td style={{ textAlign: "justify" }}>para este ejemplo el campo TOKEN lo utilizo en la tabla de empresas, esto es conveniente cuando se maneja un esquema de multiempresas o holdings. donde el TOKEN puede ser enviado con cada documento para identificar la empresa correspondiente. <br /> **Obs.:**
        El campo TOKEN contiene el RUC del emisor, lo que permite identificar de manera única a la empresa emisora.</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>tipo contribuyente</td>
        <td style={{ whiteSpace: 'nowrap' }}>int</td>
        <td style={{ textAlign: "justify" }}>valor 1 si es física, 2 para jurídica <br /> **Obs.:** Este campo es opcional y no es necesario si el emisor genera el CDC desde su propio sistema, lo cual recomendamos. Sin embargo, en caso contrario, será requerido como dato para que nuestra API pueda generar el CDC.</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>síncrono</td>
        <td style={{ whiteSpace: 'nowrap' }}>booleano</td>
        <td style={{ textAlign: "justify" }}>valor true, false <br /> en este campo (opcional) puede especificar si la operacion realizada se procesara para el envio sÍncrono o asíncrono (lotes) desde su sistema ERP</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>ip servidor</td>
        <td style={{ whiteSpace: 'nowrap' }}>string</td>
        <td style={{ textAlign: "justify" }}>Campo (opcional) destinado a almacenar la dirección IP del servidor donde se ejecuta la API REST local de DTEpy, utilizada para generar el KuDE a través de llamadas desde el sistema de facturación. Ej. http://192.168.0.1:3001/kude, donde el valor de la IP será una variable definida por este campo.</td>
      </tr>      
    </tbody>
  </table>
</div>

</details>

<details>
<summary>TIMBRADO</summary>

<div style={{ overflowX: 'auto' }}>
  <table style={{ tableLayout: 'auto', borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        <th style={{ whiteSpace: 'nowrap' }}>Dato</th>
        <th style={{ whiteSpace: 'nowrap' }}>Observación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>timbrado</td>
        <td style={{ textAlign: "justify" }}>En lo que respecta al timbrado, su sistema informático actualmente registra los timbrados utilizados en facturas preimpresas o autoimpresas. Esta tabla debe ser adaptada para incluir los registros de timbrado correspondientes a los documentos electrónicos. Para los sistemas que no cuentan con una tabla específica para timbrados y utilizan un campo en alguna tabla de configuración o parámetros, será necesario crear un campo adicional para el timbrado electrónico, manteniéndolo separado de los timbrados anteriores. <br /> **Obs.:** El timbrado electrónico solo cuenta con un campo para la fecha de inicio de vigencia y no tiene fecha de caducidad, a diferencia de los timbrados tradicionales que incluían un campo para el fin de vigencia.</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>numero documento</td>
        <td style={{ textAlign: "justify" }}>Es importante aplicar el mismo criterio para la numeración de documentos, separando la secuencia, sucursal-puntoExpedicion-numero correspondiente a los documentos electrónicos de las utilizadas para las facturas preimpresas o autoimpresas.</td>
      </tr>
    </tbody>
  </table>
</div>
</details>

<details>
<summary>SERIE</summary>

<div style={{ fontSize: "18px", textAlign: "justify" }}>
Es necesario contar con una estructura que permita almacenar los registros de los puntos de expedición y su correspondiente serie. El uso del número de serie se activa una vez que la numeración del punto de expedición alcanza el límite de 9999999. En ese momento, la serie comienza con el valor AA. Posteriormente, cada vez que se agote la numeración, el orden de cambio en el código de la serie seguirá la secuencia alfabética: AA, AB, AC, ... AZ, BA, BB, ... BZ, ... ZA, ZB, ... ZZ.
</div>

</details>

<details>
<summary>VENTAS</summary>

<div style={{ overflowX: 'auto' }}>
  <table style={{ tableLayout: 'auto', borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        <th style={{ whiteSpace: 'nowrap' }}>Dato</th>
        <th style={{ whiteSpace: 'nowrap' }}>Tipo</th>
        <th style={{ whiteSpace: 'nowrap' }}>Observación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>tipo fact</td>
        <td style={{ whiteSpace: 'nowrap' }}>string</td>
        <td style={{ textAlign: "justify" }}>campo opcional para poder identificar el tipo de documento si es preimpresa, autoimpresor, doc. electrónico </td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>CDC</td>
        <td style={{ whiteSpace: 'nowrap' }}>string</td>
        <td style={{ textAlign: "justify" }}>es el código de control único que identifica a la factura, esto recomendamos que genere desde su sistema y lo almacene en el campo</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>nro serie</td>
        <td style={{ whiteSpace: 'nowrap' }}>string</td>
        <td style={{ textAlign: "justify" }}>campo correspondiente al número de serie Ej. AA cuando alcance el límite de 9999999</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>envio_pend</td>
        <td style={{ whiteSpace: 'nowrap' }}>booleano</td>
        <td style={{ textAlign: "justify" }}>Este campo es opcional y se utiliza para marcar la factura como pendiente de envío por correo electrónico. Si se establece en true, el servicio REST procesará el envío al correo del cliente una vez que la factura haya sido aprobada por el SIFEN.</td>
      </tr> 
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>anticipo</td>
        <td style={{ whiteSpace: 'nowrap' }}>numeric</td>
        <td style={{ textAlign: "justify" }}>Similar al campo de descuento, en el caso de un anticipo, se registra el valor aplicado de un documento asociado que fue emitido con el tipo de transacción **9 = Anticipo**, Obs.: Es importante considerar el valor del anticipo aplicado en el detalle cuando se trate de un anticipo por ítem.</td>
      </tr>   
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>condicion anticipo</td>
        <td style={{ whiteSpace: 'nowrap' }}>int</td>
        <td style={{ textAlign: "justify" }}>define si el anticipo es 1 = Global o 2 = Por Ítem</td>
      </tr>         
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>estado set</td>
        <td style={{ whiteSpace: 'nowrap' }}>string</td>
        <td style={{ textAlign: "justify" }}>campo para establecer el estado del documento segun la respuesta del SIFEN a: PENDIENTE, APRROBADO, RECHAZADO, INUTILIZDO, CANCELADO, ANULADO</td>
      </tr> 
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>id sifen</td>
        <td style={{ whiteSpace: 'nowrap' }}>int</td>
        <td style={{ textAlign: "justify" }}>Número secuencial autoincremental único que identifica cada documento emitido. Corresponde al ID autogenerado por el emisor, el cual puede extraerse de una tabla que almacene el identificador asociado a cada tipo de operación, como emisión de documentos o envío de eventos.</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>codigo aleatorio</td>
        <td style={{ whiteSpace: 'nowrap' }}>numeric</td>
        <td style={{ textAlign: "justify" }}>Código generado por el emisor de manera aleatoria, este código estara concatenado con el CDC para asegurar la confidencialidad del documento</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>numero lote</td>
        <td style={{ whiteSpace: 'nowrap' }}>string</td>
        <td style={{ textAlign: "justify" }}>si el envío es asíncrono (lote), el sifen genera un número de lote si es satisfactorio el envío. este número se recomienda guardar para tener un control del documento y su lote asociado.</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>tipo impuesto</td>
        <td style={{ whiteSpace: 'nowrap' }}>int</td>
        <td style={{ textAlign: "justify" }}>tipo impuesto afectado por el documento, estos valores pueden estar almacenados en una tabla. <br /> 1 = IVA <br /> 2 = ISC <br /> 3 = Renta <br /> 4 = Ninguno <br /> 5= IVA - Renta</td>
      </tr> 
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>tipo transacción</td>
        <td style={{ whiteSpace: 'nowrap' }}>int</td>
        <td style={{ textAlign: "justify" }}>valores que pueden ser almacenados en una tabla <br /> 1 = Venta de mercadería <br /> 2 = Prestación de servicios <br /> 3 = Mixto <br /> 4 = Venta de activo fijo <br /> 5 = Venta de divisas <br /> 6 = Compra de divisas <br /> 7 = Promoción o entrega de muestras <br /> 8 = Donación <br /> 9 = Anticipo <br /> 10 = Compra de productos <br /> 11 = Compra de servicios <br /> 12 = Venta de crédito fiscal <br /> 13 = Muestras médicas</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>presencia</td>
        <td style={{ whiteSpace: 'nowrap' }}>int</td>
        <td style={{ textAlign: "justify" }}>1 = Operación presencial <br /> 2 = Operación electrónica <br /> 3 = Operación telemarketing <br /> 4 = Venta a domicilio <br /> 5 = Operación bancaria <br /> 6 = Operación cíclica <br /> 9 = Otro</td>
      </tr>  
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>motivo nota</td>
        <td style={{ whiteSpace: 'nowrap' }}>int</td>
        <td style={{ textAlign: "justify" }}>motivo de la emision cuando los documentos son del tipo NC Y ND. lista de datos que pueden almacenarse en una tabla. <br /> 1 = Devolución y Ajuste de precios <br /> 2 = Devolución <br /> 3 = Descuento <br /> 4 = Bonificación <br /> 5 = Crédito incobrable <br /> 6 = Recupero de costo <br /> 7 = Recupero de gasto <br /> 8 = Ajuste de precio</td>
      </tr>             
    </tbody>
  </table>
</div>

</details>

<details>
<summary>PRODUCTOS / SERVICIOS</summary>

<div style={{ fontSize: "18px", textAlign: "justify" }}>
en caso de que los códigos de los productos sean demasiado largos, podría surgir un problema al mostrarlos en la columna correspondiente del KuDE. Para resolver esta situación, se recomienda adaptar un campo paralelo en la tabla de productos que actúe como un ID autoincremental. Este ID puede utilizarse como el código de producto para garantizar una representación más adecuada y legible en el KuDE.
</div>

</details>

<details>
<summary>LOTES</summary>

<div style={{ fontSize: "18px", textAlign: "justify" }}>
En caso de que se desee realizar consultas al integrador mediante procedimientos almacenados, especialmente para gestionar envíos por lotes al SIFEN, se puede crear una tabla para registrar los números de lote procesados con cada envío. Esta tabla podría incluir campos como un identificador único del lote (idlote), el número del lote, el estado actual, la respuesta del SIFEN y el tipo de documento asociado (por ejemplo, Factura Electrónica - FE, Nota de Crédito - NC, entre otros).
</div>

</details>

<details>
<summary>FORMAS DE COBRO</summary>

<div style={{ fontSize: "18px", textAlign: "justify" }}>
Para las operaciones al contado, la estructura del emisor debe incluir los datos necesarios para registrar la forma de cobro asociada a cada factura, utilizando los códigos definidos por el SIFEN, codigos que deben estar asociados a tablas y registros existentes en su sistema. 
</div>

<div style={{ overflowX: 'auto' }}>
  <table style={{ tableLayout: 'auto', borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        <th style={{ whiteSpace: 'nowrap' }}>Dato</th>
        <th style={{ whiteSpace: 'nowrap' }}>Tipo</th>
        <th style={{ whiteSpace: 'nowrap' }}>Observación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>tipo de pago</td>
        <td style={{ whiteSpace: 'nowrap' }}>int</td>
        <td style={{ textAlign: "justify" }}>1 = Efectivo <br /> 2 = Cheque <br /> 3 = Tarjeta de crédito <br /> 4 = Tarjeta de débito <br /> 5 = Transferencia <br /> 6 = Giro <br /> 7 = Billetera electrónica <br /> 8 = Tarjeta empresarial <br /> 9 = Vale <br /> 10 = Retención <br /> 11 = Pago por anticipo <br /> 12 = Valor fiscal <br /> 13 = Valor comercial <br /> 14 = Compensación <br /> 15 = Permuta <br /> 16 = Pago bancario <br /> 17=  Pago Móvil <br /> 18 = Donación <br /> 19 = Promoción <br /> 20 = Consumo Interno <br /> 21 = Pago Electrónico</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>tarjetas</td>
        <td style={{ whiteSpace: 'nowrap' }}>int</td>
        <td style={{ textAlign: "justify" }}>si la forma de cobro es en tarjeta: <br /> 1 = Visa <br /> 2 = Mastercard <br /> 3 = American Express <br /> 4 = Maestro <br /> 5 = Panal <br /> 6 = Cabal <br /> 99 = Otro</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>medio de pago</td>
        <td style={{ whiteSpace: 'nowrap' }}>int</td>
        <td style={{ textAlign: "justify" }}>medio de pago de la tarjeta: <br /> 1 = POS <br /> 2 = Pago electónico <br /> 9 = Otro</td>
      </tr>
    </tbody>
  </table>
</div>
</details>

<details>
<summary>USUARIOS</summary>

describe al responsable de la operacion del documento, Ej. Cajero, se deben tener en cuenta los siguientes datos: 

<div style={{ overflowX: 'auto' }}>
  <table style={{ tableLayout: 'auto', borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        <th style={{ whiteSpace: 'nowrap' }}>Dato</th>
        <th style={{ whiteSpace: 'nowrap' }}>Tipo</th>
        <th style={{ whiteSpace: 'nowrap' }}>Observación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>documento tipo</td>
        <td style={{ whiteSpace: 'nowrap' }}>int</td>
        <td style={{ textAlign: "justify" }}>1 = Cédula paraguaya <br /> 2 = Pasaporte <br /> 3 = Cédula extranjera <br /> 4 = Carnet de residenca <br /> 9 = Otro</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>documento numero</td>
        <td style={{ whiteSpace: 'nowrap' }}>string</td>
        <td style={{ textAlign: "justify" }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>nombre</td>
        <td style={{ whiteSpace: 'nowrap' }}>string</td>
        <td style={{ textAlign: "justify" }}></td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>cargo</td>
        <td style={{ whiteSpace: 'nowrap' }}>string</td>
        <td style={{ textAlign: "justify" }}>cadena de texto ejemplo: Cajero</td>
      </tr>      
    </tbody>
  </table>
</div>

</details>

<details>
<summary>MONEDAS</summary>

asociar los códigos de su sistema con los códigos de sifen segun el archivo XSD: <br /> - https://ekuatia.set.gov.py/sifen/xsd/Monedas_v100.xsd
</details>

<details>
<summary>UNIDADES DE MEDIDA</summary>

asociar los códigos de su sistema con los códigos de sifen segun el archivo XSD: <br />
- https://ekuatia.set.gov.py/sifen/xsd/Unidades_Medida_v141.xsd 
</details>

<details>
<summary>OBLIGACIONES</summary>

Se debe contar con una tabla destinada a registrar las obligaciones afectadas por la emisión del documento. Esta tabla debe incluir campos como código y descripción, permitiendo identificar claramente cada obligación. Por ejemplo: <br /> 211 - Impuesto al Valor Agregado - Gravadas y Exoneradas - Exportadores <br /> 715 - Impuesto a la Renta Personal - Servicios Personales

</details>

<details>
<summary>DEPARTAMENTOS / DISTRITOS / CIUDADES</summary>

asociar los códigos de su sistema con los códigos de sifen segun el archivo XLSX de (código de referencia geografica):

- https://www.dnit.gov.py/web/e-kuatia/tablas-y-codificaciones
</details>