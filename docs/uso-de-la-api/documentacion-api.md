---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Documentación de la API

### Introducción

<div style={{ fontSize: "18px", textAlign: "justify" }}>

A través de esta documentación, se busca garantizar que los integradores comprendan claramente el formato requerido para los archivos JSON y las rutas necesarias para interactuar con la API, asegurando una implementación eficiente y conforme a los requerimientos del sistema.

Esta sección cubre:

1. **Emisión de Documentos Electrónicos**  
Explicación detallada de la estructura JSON requerida para emitir documentos de forma síncrona o en lote (asíncrona).

2. **Consulta de Lotes y Documentos**  
Procedimientos para consultar el estado de un lote o un documento utilizando su CDC (Código de Control).

3. **Consulta de RUC**  
Proceso para validar datos de contribuyentes mediante la consulta de su RUC.

4. **Envío de Eventos**  
Instrucciones para gestionar eventos específicos como cancelación, inutilización, nominación, o modificación de datos relacionados al transporte.

</div>

### Autenticación

<div style={{ fontSize: "18px", textAlign: "justify" }}>

La API de DTEpy utiliza un sistema de autenticación basado en tokens para garantizar la seguridad y el control de acceso. A continuación, se describe cómo obtener y utilizar el token:

1. **Obtención del Token**  
Para obtener un token de acceso, es necesario que el usuario esté registrado en la plataforma web de DTEpy. Una vez registrado y autenticado en el sistema, se puede acceder al token desde la pestaña "Tokens" dentro del menú de Configuraciones. Este proceso se detalla en el apartado "Crear una cuenta" de este manual, donde se explican los pasos necesarios para registrarse y gestionar el token.

2. **Uso del Token en las Peticiones**  
El token debe incluirse como parte de las solicitudes enviadas a los endpoints de la API para garantizar la autenticación. Hay dos formas de pasar el token:

    **1.** En los Headers de la Petición:
        - El token debe enviarse utilizando la clave x-access-token en los encabezados de la solicitud.

        - Ejemplo de encabezado:
                ```bash title="shell"
                curl -X 'POST' \
                'https://test.globeinformatica.com.py/documentoset' \
                -H 'Content-Type: application/json' \
                # highlight-next-line
                -H 'x-access-token: eyJhbGciOiJIUzI1NiIs'
                ```
    **2.** En el Cuerpo (Body) de la Petición:
        - Como alternativa, el token también puede incluirse dentro del atributo token en el cuerpo de la solicitud (body).
    
        - Ejemplo de uso en el body:
                ```json title="json"
                {
                "token": "eyJhbGciOiJIUzI1NiIs",
                "otros-datos": "valor"
                }

                ```
**Consideraciones Importantes**
- Es obligatorio autenticar cada solicitud antes de interactuar con los endpoints de la API. Si no se incluye un token válido, la solicitud será rechazada con un error de autorización.
- Se recomienda utilizar siempre el método del header x-access-token, ya que es más seguro y sigue las mejores prácticas de autenticación.

</div>

### Ambientes de Uso
---
<Tabs>  
  <TabItem value="tab1" label="Desarrollo">
      https://test.globeinformatica.com.py
  </TabItem>

  <TabItem value="tab2" label="Producción">
      https://dte.globeinformatica.com.py
  </TabItem>
</Tabs>
---
### Endpoints Principales:

<details>
<summary>POST **/documentoset** *(url para trasmitir documentos síncrono)*</summary>

<div style={{ fontSize: "18px", textAlign: "justify" }}>
Para la emisión de un documento electrónico, es necesario estructurar el JSON según el formato especificado para cada tipo de documento que se desea enviar. Este formato puede ser utilizado tanto para envíos individuales (sincrónicos) como para envíos por lote, envolviendo cada JSON como un elemento dentro de un arreglo. A continuación, se detalla el formato base y su utilización en el endpoint correspondiente.
</div>

---

<Tabs className="unique-tabs">
  <TabItem value="Factura">
    ```json title="json"
    {
        "tipoDocumento": 1,
        "codigoSeguridadAleatorio": 123456789,
        "token": null,
        "pin": "EBA762",
        "tipoEmision": 1,
        "establecimiento": "001",
        "punto": "001",
        "numero": "0000001",
        "serie": "",
        "fecha": "2022-08-14T10:11:00",
        "tipoTransaccion": 1,
        "tipoImpuesto": 1,
        "moneda": "PYG",
        "cambio": 6270,
        "envio_pend": 1,
        "cdc": "12345678901234567890123456789012345678901234",
        "id": 10,
        "obligaciones": [
            {
                "codigo": 211,
                "descripcion": "IMPUESTO AL VALOR AGREGADO"
            },
            {
                "codigo": 700,
                "descripcion": "IRE GENERAL"
            }
        ],
        "dncp": {
            "modalidad": "AB",
            "entidad": 1,
            "año": 25,
            "secuencia": 1234567,
            "fecha": "2025-01-01"
        },
        "factura": {
            "presencia": 1
        },
        "cliente": {
            "razonSocial": "JUAN PEREZ",
            "nombreFantasia": "EMPRESA S.A.",
            "email": "juanperez@hotmail.com",
            "contribuyente": true,
            "tipoContribuyente": 1,
            "tipoOperacion": 2,
            "ruc": "1111111-6",
            "documentoTipo": 1,
            "documentoNumero": "1111111",
            "direccion": "AVDA. MCAL. LOPEZ",
            "numeroCasa": 1250,
            "pais": "PRY",
            "departamento": 1,
            "distrito": 1,
            "ciudad": 1
        },
        "usuario": {
            "nombre": "JUAN GONZALEZ",
            "cargo": "CAJERO",
            "documentoTipo": 1,
            "documentoNumero": "1111111"
        },
        "condicion": {
            "tipo": 1,
            "entregas": [
                {
                    "tipo": 1,
                    "monto": 150000,
                    "moneda": "PYG",
                    "cambio": 6270
                },
                {
                    "tipo": 2,
                    "monto": 150000,
                    "moneda": "PYG",
                    "cambio": 6270,
                    "infoTarjeta": {
                        "tipo": 1,
                        "tipoDescripcion": "VISA",
                        "numero": 1234,
                        "medioPago": 1
                    }
                },
                {
                    "tipo": 3,
                    "monto": 150000,
                    "moneda": "PYG",
                    "cambio": 6270,
                    "infoCheque": {
                        "numeroCheque": 12345678,
                        "banco": "VISION BANCO"
                    }
                }
            ],
            "credito": {
                "tipo": 1,
                "plazo": "30 dias",
                "cuotas": 2,
                "montoEntrega": 150000,
                "infocuotas": [
                    {
                        "moneda": "PYG",
                        "monto": 150000,
                        "vencimiento": "2021-10-30"
                    },
                    {
                        "moneda": "PYG",
                        "monto": 150000,
                        "vencimiento": "2021-11-30"
                    }
                ]
            }
        },
        "items": [
            {
                "codigo": "A-001",
                "descripcion": "PRODUCTO Y/O SERVICIO 001",
                "observacion": "",
                "unidadMedida": 77,
                "cantidad": 2,
                "precioUnitario": 150000,
                "descuento": 10000,
                "ivaTipo": 1,
                "ivaBase": 100,
                "iva": 10
            },
            {
                "codigo": "A-001",
                "descripcion": "PRODUCTO Y/O SERVICIO 002",
                "observacion": "",
                "unidadMedida": 77,
                "cantidad": 2,
                "precioUnitario": 150000,
                "descuento": 0,
                "ivaTipo": 1,
                "ivaBase": 100,
                "iva": 10
            }
        ],
        "documentoAsociado": null
    }
    ```
  </TabItem>

  <TabItem value="AutoFactura">
    ```json title="json"
    {
        "tipoDocumento": 4,
        "codigoSeguridadAleatorio": 123456789,
        "token": null,
        "pin": "EBA762",        
        "tipoEmision": 1,
        "establecimiento": "001",
        "punto": "001",
        "numero": "0000001",
        "serie": "",
        "fecha": "2022-08-14T10:11:00",
        "tipoTransaccion": 1,
        "moneda": "PYG",
        "cambio": 6270,
        "cdc": "12345678901234567890123456789012345678901234",
        "id": 10,
        "autoFactura": {
            "tipoVendedor": 1,
            "documentoTipo": 1,
            "documentoNumero": "1111111",
            "nombre": "JUAN PEREZ",
            "direccion": "AVDA. MCAL. LOPEZ",
            "numeroCasa": 1250,
            "departamento": 1,
            "distrito": 1,
            "ciudad": 1,
            "ubicacion": {
            "lugar": "DIRECCION 1",
            "departamento": 1,
            "distrito": 1,
            "ciudad": 1
            }
        },
        "cliente": {
            "razonSocial": "JUAN PEREZ",
            "nombreFantasia": "EMPRESA S.A.",
            "email": "juanperez@hotmail.com",
            "contribuyente": true,
            "tipoContribuyente": 1,
            "tipoOperacion": 2,
            "ruc": "1111111-6",
            "documentoTipo": 1,
            "documentoNumero": "1111111",
            "direccion": "AVDA. MCAL. LOPEZ",
            "numeroCasa": 1250,
            "pais": "PRY",
            "departamento": 1,
            "distrito": 1,
            "ciudad": 1
        },
        "usuario": {
            "nombre": "JUAN GONZALEZ",
            "cargo": "CAJERO",
            "documentoTipo": 1,
            "documentoNumero": "1111111"
        },
        "condicion": {
            "tipo": 1,
            "entregas": [
            {
                "tipo": 1,
                "monto": 150000,
                "moneda": "PYG",
                "cambio": 6270
            },
            {
                "tipo": 2,
                "monto": 150000,
                "moneda": "PYG",
                "cambio": 6270,
                "infoTarjeta": {
                "tipo": 1,
                "tipoDescripcion": "VISA",
                "numero": 1234,
                "medioPago": 1
                }
            },
            {
                "tipo": 3,
                "monto": 150000,
                "moneda": "PYG",
                "cambio": 6270,
                "infoCheque": {
                "numeroCheque": 12345678,
                "banco": "VISION BANCO"
                }
            }
            ],
            "credito": {
            "tipo": 1,
            "plazo": "30 dias",
            "cuotas": 2,
            "montoEntrega": 150000,
            "infocuotas": [
                {
                "moneda": "PYG",
                "monto": 150000,
                "vencimiento": "2021-10-30"
                },
                {
                "moneda": "PYG",
                "monto": 150000,
                "vencimiento": "2021-11-30"
                }
            ]
            }
        },
        "items": [
            {
            "codigo": "A-001",
            "descripcion": "PRODUCTO Y/O SERVICIO 001",
            "observacion": "",
            "unidadMedida": 77,
            "cantidad": 2,
            "precioUnitario": 150000,
            "descuento": 10000
            },
            {
            "codigo": "A-001",
            "descripcion": "PRODUCTO Y/O SERVICIO 002",
            "observacion": "",
            "unidadMedida": 77,
            "cantidad": 2,
            "precioUnitario": 150000,
            "descuento": 0
            }
        ],
        "documentoAsociado": [
            {
                "formato": 3,
                "fecha": "2023-08-10",
                "constanciaTipo": 1,
                "constanciaNumero": 32323,
                "constanciaControl": 33232323
            }
        ]
    }    
    ```
  </TabItem>

  <TabItem value="Nota de Cre/Deb">
    ```json title="json"
    {
        "tipoDocumento": 5 o 6,
        "codigoSeguridadAleatorio": 123456789,
        "token": null,
        "pin": "EBA762",
        "tipoEmision": 1,
        "establecimiento": "001",
        "punto": "001",
        "numero": "0000001",
        "serie": "",
        "fecha": "2022-08-14T10:11:00",
        "tipoTransaccion": 1,
        "tipoImpuesto": 1,
        "moneda": "PYG",
        "cambio": 6270,
        "cdc": "12345678901234567890123456789012345678901234",
        "id": 10,
        "obligaciones": [
            {
                "codigo": 211,
                "descripcion": "IMPUESTO AL VALOR AGREGADO"
            },
            {
                "codigo": 700,
                "descripcion": "IRE GENERAL"
            }
        ],
        "dncp": {
            "modalidad": "AB",
            "entidad": 1,
            "año": 25,
            "secuencia": 1234567,
            "fecha": "2025-01-01"
        },
        "notaCreditoDebito": {
            "motivo": 1
        },
        "cliente": {
            "razonSocial": "JUAN PEREZ",
            "nombreFantasia": "EMPRESA S.A.",
            "email": "juanperez@hotmail.com",
            "contribuyente": true,
            "tipoContribuyente": 1,
            "tipoOperacion": 2,
            "ruc": "1111111-6",
            "documentoTipo": 1,
            "documentoNumero": "1111111",
            "direccion": "AVDA. MCAL. LOPEZ",
            "numeroCasa": 1250,
            "pais": "PRY",
            "departamento": 1,
            "distrito": 1,
            "ciudad": 1
        },
        "usuario": {
            "nombre": "JUAN GONZALEZ",
            "cargo": "CAJERO",
            "documentoTipo": 1,
            "documentoNumero": "1111111"
        },
        "items": [
            {
                "codigo": "A-001",
                "descripcion": "DEVOLUCION Y AJUSTE DE PRECIO",
                "observacion": "",
                "unidadMedida": 77,
                "cantidad": 2,
                "precioUnitario": 150000,
                "descuento": 0,
                "ivaTipo": 1,
                "ivaBase": 100,
                "iva": 10
            }
        ],
        "documentoAsociado": [
            {
                "formato": 2,
                "cdc": "12345678901234567890123456789012345678901234",
                "tipoDocumentoImpreso": 1,
                "timbrado": 1234567890,
                "establecimiento": "001",
                "punto": "001",
                "numero": "0000001",
                "fecha": "2023-08-10"
            }
        ]
    }
    ```
  </TabItem>
  
  <TabItem value="Nota de Remisión">
    ```json title="json"
    {
        "tipoDocumento": 7,
        "codigoSeguridadAleatorio": 123456789,
        "token": null,
        "pin": "EBA762",
        "tipoEmision": 1,
        "establecimiento": "001",
        "punto": "001",
        "numero": "0000001",
        "serie": "",
        "fecha": "2022-08-14T10:11:00",
        "cdc": "12345678901234567890123456789012345678901234",
        "id": 10,
        "remision": {
            "motivo": 1,
            "tipoResponsable": 3,
            "kms": 150
        },
        "cliente": {
            "razonSocial": "JUAN PEREZ",
            "nombreFantasia": "EMPRESA S.A.",
            "email": "juanperez@hotmail.com",
            "contribuyente": true,
            "tipoContribuyente": 1,
            "tipoOperacion": 2,
            "ruc": "1111111-6",
            "documentoTipo": 1,
            "documentoNumero": "1111111",
            "direccion": "AVDA. MCAL. LOPEZ",
            "numeroCasa": 1250,
            "pais": "PRY",
            "departamento": 1,
            "distrito": 1,
            "ciudad": 1
        },
        "usuario": {
            "nombre": "JUAN GONZALEZ",
            "cargo": "CAJERO",
            "documentoTipo": 1,
            "documentoNumero": "1111111"
        },
        "items": [
            {
                "codigo": "A-001",
                "descripcion": "PRODUCTO Y/O SERVICIO 001",
                "observacion": "",
                "unidadMedida": 77,
                "cantidad": 2
            },
            {
                "codigo": "A-001",
                "descripcion": "PRODUCTO Y/O SERVICIO 002",
                "observacion": "",
                "unidadMedida": 77,
                "cantidad": 2
            }
        ],
        "documentoAsociado": [
            {
                "formato": 2,
                "cdc": "12345678901234567890123456789012345678901234",
                "tipoDocumentoImpreso": 1,
                "timbrado": 1234567890,
                "establecimiento": "001",
                "punto": "001",
                "numero": "0000001",
                "fecha": "2023-08-10"
            }
        ],
        "transporte": {
            "tipo": 2,
            "modalidad": 1,
            "tipoResponsable": 1,
            "condicionNegociacion": "CIF",
            "numeroManifiesto": "AF-2541",
            "numeroDespachoImportacion": "153223232332",
            "inicioEstimadoTranslado": "2021-11-01",
            "finEstimadoTranslado": "2021-11-02",
            "paisDestino": "PRY",
            "salida": {
                "direccion": "CALLE 1",
                "numeroCasa": 1250,
                "pais": "PRY",
                "departamento": 1,
                "distrito": 1,
                "ciudad": 1
            },
            "entrega": {
                "direccion": "CALLE 1",
                "numeroCasa": 1250,
                "complementoDireccion1": "CALLE 1",
                "complementoDireccion2": "ENTRE CALLE 2",
                "pais": "PRY",
                "departamento": 1,
                "distrito": 1,
                "ciudad": 1,
                "telefonoContacto": "0992 111-111"
            },
            "vehiculo": {
                "tipo": "CAMION",
                "marca": "SCANIA",
                "documentoTipo": 2,
                "documentoNumero": "232323-1",
                "numeroMatricula": "ARA474",
                "numeroVuelo": "143"
            },
            "transportista": {
                "contribuyente": true,
                "nombre": "JUAN GONZALEZ",
                "ruc": "1111111-1",
                "documentoTipo": 1,
                "documentoNumero": "111111",
                "direccion": "CALLE 1",
                "pais": "PRY",
                "chofer": {
                    "nombre": "JUAN GONZALEZ",
                    "documentoNumero": "111111",
                    "direccion": "CALLE 1"
                }
            }
        }
    }
    ```
  </TabItem>
</Tabs>


**Respuestas**

<div style={{ fontSize: "18px", textAlign: "justify" }}>
Las respuestas de 'Aprobado' y 'Rechazado' son mensajes proporcionados directamente por la API de SIFEN. Sin embargo, como se muestra en el tercer apartado, puede recibir el formato de mensaje de error identificado por la API de DTEpy, que le brindara detalles sobre posibles inconvenientes en la estructura del JSON.
</div>

---

<Tabs className="unique-tabs">
  <TabItem value="Aprobado">
    ```json title="json Status: 200"
    {
        "ns2:rRetEnviDe": {
            "$": {
                "xmlns:ns2": "http://ekuatia.set.gov.py/sifen/xsd"
            },
            "ns2:rProtDe": {
                "ns2:Id": "12345678901234567890123456789012345678901234",
                "ns2:dFecProc": "2023-07-29T08:39:44-04:00",
                "ns2:dDigVal": "d2h1V3hPYWZTV01leUlVNEpIMFZqRFMrRjVpQkM2RSt5UG9rVTkzajhzaz0=",
                "ns2:dEstRes": "Aprobado",
                "ns2:dProtAut": "39837276",
                "ns2:gResProc": {
                    "ns2:dCodRes": "0260",
                    "ns2:dMsgRes": "Autorización del DE satisfactoria"
                }
            }
        },
        "id": 1
    }  
    ```
  </TabItem>

  <TabItem value="Rechazado">
    ```json title="json Status: 200"
    {
        "ns2:rRetEnviDe": {
            "$": {
                "xmlns:ns2": "http://ekuatia.set.gov.py/sifen/xsd"
            },
            "ns2:rProtDe": {
                "ns2:dFecProc": "2023-07-29T08:39:44-04:00",
                "ns2:dEstRes": "Rechazado",
                "ns2:gResProc": {
                    "ns2:dCodRes": "0160",
                    "ns2:dMsgRes": "XML mal formado"
                }
            }
        },
        "id": 2
    }   
    ```
  </TabItem>

  <TabItem value="DTEpy">
    ```json title="json Status: 400"
    {
        "mensaje": "string del error que se produjo"
    }  
    ```
  </TabItem>

</Tabs>
---

</details>

<details>
<summary>POST **/documentoset/lotes** *(url para trasmitir documentos asíncrono - lotes)*</summary>

<div style={{ fontSize: "18px", textAlign: "justify" }}>
El envío asincrónico (lote) permite agrupar hasta 50 documentos JSON en un arreglo, conforme al lo estructurado en el endpoint /documentoset, para transmitirlos en un único proceso. Al enviar el lote, se recibe un número de lote como confirmación, pero el procesamiento de los documentos es posterior. La API de DTEpy realiza automáticamente la consulta de cada lote emitido y actualiza la información del estado en la base de datos en la nube.
</div>
---
**Cuerpo de la solicitud**

```json title="json"
{
  "tipoDocumento": 1,
  "id": 1,
  "detalle": [
    {
      "JSON DEL DOCUMENTO": "EJ. 001-001-0000001"
    },
    {
      "JSON DEL DOCUMENTO": "EJ. 001-001-0000002"
    },
    {
      "JSON DEL DOCUMENTO": "... HASTA 50 DOCUMENTOS"
    }
  ]
}
```

**Respuestas**

---

<Tabs className="unique-tabs">
  <TabItem value="Aprobado">
    ```json title="json Status: 200"
    {
        "ns2:rResEnviLoteDe": {
            "$": {
                "xmlns:ns2": "http://ekuatia.set.gov.py/sifen/xsd"
            },
            "ns2:dFecProc": "2019-06-03T12:00:00",
            "ns2:dCodRes": "0300",
            "ns2:dMsgRes": "Lote recibido con éxito",
            "ns2:dProtConsLote": "123456789012345678",
            "ns2:dTpoProces": "32"
        }
    } 
    ```
  </TabItem>

  <TabItem value="Rechazado">
    ```json title="json Status: 200"
    {
        "ns2:rResEnviLoteDe": {
            "$": {
                "xmlns:ns2": "http://ekuatia.set.gov.py/sifen/xsd"
            },
            "ns2:dFecProc": "2019-06-03T12:00:00",
            "ns2:dCodRes": "0301",
            "ns2:dMsgRes": "Lote no encolado para procesamiento",
            "ns2:dTpoProces": "32"
        }
    }  
    ```
  </TabItem>

  <TabItem value="DTEpy">
    ```json title="json Status: 400"
    {
        "mensaje": "string del error que se produjo"
    }  
    ```
  </TabItem>
</Tabs>

</details>

<details>
<summary>POST **/documentoset/consulta** *(url para consultar documentos por CDC)*</summary>

<div style={{ fontSize: "18px", textAlign: "justify" }}>
Permite consultar el estado de un documento electrónico enviado al SIFEN utilizando su Código de Control (CDC). Este proceso es útil para verificar la aprobación o el rechazo del documento directamente en el sistema del SIFEN. A continuación, se muestra un ejemplo de la estructura del JSON necesario para realizar la consulta.
</div>
---
**Cuerpo de la solicitud**

```json title="json"
{
    "id": 1,
    "cdc": "12345678901234567890123456789012345678901234",
    "tipoDocumento": 1
}
```

**Respuestas**

---

<Tabs className="unique-tabs">
  <TabItem value="Aprobado">
    ```json title="json Status: 200"
    {
        "ns2:rEnviConsDeResponse": {
            "$": {
                "xmlns:ns2": "http://ekuatia.set.gov.py/sifen/xsd"
            },
            "ns2:dFecProc": "2023-08-10T15:14:26-04:00",
            "ns2:dCodRes": "0422",
            "ns2:dMsgRes": "CDC encontrado",
            "ns2:xContenDE": "<?xml aqui devuelve la cadena completa del xml del DE enviado y la cadena de eventos de cancelacion o inutilizacion si los hubiere >"
        },
        "id": 44
    }
    ```
  </TabItem>

  <TabItem value="Rechazado">
    ```json title="json Status: 200"
    {
        "ns2:rEnviConsDeResponse": {
            "$": {
                "xmlns:ns2": "http://ekuatia.set.gov.py/sifen/xsd"
            },
            "ns2:dFecProc": "2023-08-12T09:48:58-04:00",
            "ns2:dCodRes": "0420",
            "ns2:dMsgRes": "No existe DTE consultado"
        },
        "id": 38
    }
    ```
  </TabItem>

  <TabItem value="DTEpy">
    ```json title="json Status: 400"
    {
        "mensaje": "string del error que se produjo"
    }  
    ```
  </TabItem>
</Tabs>

</details>

<details>
<summary>POST **/documentoset/consultalote** *(para consultar documentos por número de lote)*</summary>

<div style={{ fontSize: "18px", textAlign: "justify" }}>
Se utiliza para consultar el estado de un lote enviado. Este lote puede contener uno o varios documentos electrónicos, y la respuesta incluirá el estado individual de cada documento contenido en el lote. Esto permite verificar el procesamiento completo del lote y obtener detalles sobre la aprobación o el rechazo de cada documento.
</div>
---
**Cuerpo de la solicitud**

```json title="json"
{
    "id": 1,
    "numlote": "123456789012345678",
    "tipoDocumento": 1
}
```

**Respuestas**

---

<Tabs className="unique-tabs">
  <TabItem value="Aprobado">
    ```json title="json Status: 200"
    {
        "ns2:rResEnviConsLoteDe": {
            "$": {
                "xmlns:ns2": "http://ekuatia.set.gov.py/sifen/xsd"
            },
            "ns2:dFecProc": "2019-06-03T12:00:00",
            "ns2:dCodResLot": "0362",
            "ns2:dMsgResLot": "Procesamiento de lote {159204793632399660} concluido",
            "ns2:gResProcLote": [
                {
                    "ns2:id": "12345678901234567890123456789012345678901234",
                    "ns2:dEstRes": "Aprobado",
                    "ns2:dProtAut": "12345678",
                    "ns2:gResProc": {
                        "ns2:dCodRes": "0422",
                        "ns2:dMsgRes": "CDC encontrado"
                    }
                },
                {
                    "ns2:id": "11111111112222222222333333333344444444445555",
                    "ns2:dEstRes": "Rechazado",
                    "ns2:gResProc": {
                        "ns2:dCodRes": "0160",
                        "ns2:dMsgRes": "aqui va el motivo del error por rechazo"
                    }
                }
            ]
        },
        "id": 10
    }
    ```
    ---
    
    ```json
    {
        "ns2:rResEnviConsLoteDe": {
            "$": {
                "xmlns:ns2": "http://ekuatia.set.gov.py/sifen/xsd"
            },
            "ns2:dFecProc": "2019-06-03T12:00:00",
            "ns2:dCodResLot": "0362",
            "ns2:dMsgResLot": "Procesamiento de lote {159204793632399660} concluido",
            "ns2:gResProcLote": {
                "ns2:id": "12345678901234567890123456789012345678901234",
                "ns2:dEstRes": "Aprobado",
                "ns2:dProtAut": "12345678",
                "ns2:gResProc": {
                    "ns2:dCodRes": "0422",
                    "ns2:dMsgRes": "CDC encontrado"
                }
            }
        },
        "id": 10
    }
    ```
    
  </TabItem>

  <TabItem value="Rechazado">
    ```json title="json Status: 200"
    {
        "ns2:rResEnviConsLoteDe": {
            "$": {
                "xmlns:ns2": "http://ekuatia.set.gov.py/sifen/xsd"
            },
            "ns2:dFecProc": "2025-02-06T14:03:07-03:00",
            "ns2:dCodResLot": "0360",
            "ns2:dMsgResLot": "TEST - Número de Lote inexistente"
        },
        "id": 2414
    }
    ```
  </TabItem>

  <TabItem value="DTEpy">
    ```json title="json Status: 400"
    {
        "mensaje": "string del error que se produjo"
    }  
    ```
  </TabItem>
</Tabs>

</details>

<details>
<summary>POST **/documentoset/consultarucdnit** *(url para consultar RUC de clientes)*</summary>

<div style={{ fontSize: "18px", textAlign: "justify" }}>
 permite consultar los datos de un cliente utilizando su RUC (sin el dígito verificador). Esta consulta determina si el cliente es contribuyente, devolviendo información relevante directamente desde el SIFEN. Además, con los datos de la respuesta json el usuario podra insertar automáticamente los datos del cliente como un nuevo registro en su base de datos, en caso de que este no se encuentre previamente registrado en su sistema ERP. Esto agiliza el proceso de gestión de clientes y asegura que los datos estén actualizados y sincronizados.
</div>
---
**Cuerpo de la solicitud**

```json title="json"
{
    "ruc": "4001413"
}
```

**Respuestas**

---

<Tabs className="unique-tabs">
  <TabItem value="Aprobado">
    ```json title="json Status: 200"
    [
        {
            "ruc": "4001413",
            "nombre": "ALVAREZ, ARNALDO FABIAN",
            "dv": "4",
            "ruc_ant": "AAAR840300D",
            "estado": "ACTIVO"
        }
    ]
    ```
    
  </TabItem>

  <TabItem value="Rechazado">
    ```json title="json Status: 200"
    []
    ```
  </TabItem>

  <TabItem value="DTEpy">
    ```json title="json Status: 400"
    {
        "mensaje": "string del error que se produjo"
    }  
    ```
  </TabItem>
</Tabs>

</details>  

<details>
<summary>POST **/documentoset/cancelacion** *(url para cancelar un DTE)*</summary>

<div style={{ fontSize: "18px", textAlign: "justify" }}>
Este es un evento solicitado por el emisor, ocurre cuando el comprobante es emitido sin errores y transmitido y aprobado por el SIFEN se convierte en un DTE, sin embargo, por algún motivo no se concreta la transacción.
El emisor electrónico puede
</div>

:::caution PRECAUCIÓN
No podra cancelar un DTE pasada las 48hs despues de su aprobación.
:::

---
**Cuerpo de la solicitud**

```json title="json"
{
  "id": 1,
  "cdc": "12345678901234567890123456789012345678901234",
  "motivo": "SE ANULA POR ALGUN ERROR",
  "tipoDocumento": 1
}
```
**Respuestas**

---

<Tabs className="unique-tabs">
  <TabItem value="Aprobado">
    ```json title="json Status: 200"
    {
        "ns2:rRetEnviEventoDe": {
            "$": {
                "xmlns:ns2": "http://ekuatia.set.gov.py/sifen/xsd"
            },
            "ns2:dFecProc": "2019-06-03T12:00:00",
            "ns2:gResProcEVe": {
                "ns2:dEstRes": "Aprobado",
                "ns2:dProtAut": "935252",
                "ns2:id": "32",
                "ns2:gResProc": {
                    "ns2:dCodRes": "0600",
                    "ns2:dMsgRes": "Evento registrado correctamente"
                }
            }
        },
        "id": 3
    }
    ```
  </TabItem>

  <TabItem value="Rechazado">
    ```json title="json Status: 200"
    {
        "ns2:rRetEnviEventoDe": {
            "$": {
                "xmlns:ns2": "http://ekuatia.set.gov.py/sifen/xsd"
            },
            "ns2:dFecProc": "2025-01-17T19:23:12-03:00",
            "ns2:gResProcEVe": {
                "ns2:dEstRes": "Rechazado",
                "ns2:id": "1",
                "ns2:gResProc": {
                    "ns2:dCodRes": "4003",
                    "ns2:dMsgRes": "TEST - CDC ya se encuentra con el mismo evento solicitado"
                }
            }
        },
        "id": 19
    } 
    ```
  </TabItem>

  <TabItem value="DTEpy">
    ```json title="json Status: 400"
    {
        "mensaje": "string del error que se produjo"
    }  
    ```
  </TabItem>
</Tabs>

</details>

<details>
<summary>POST **/documentoset/inutilizacion** *(url para inutilizar un DE o rango de números)*</summary>

aqui va el contenido
</details>

<details>
<summary>POST **/documentoset/nominacion** *(url para nominar un documento cliente innominado)*</summary>

aqui va el contenido
</details>

<details>
<summary>POST **/documentoset/datostransporte** *(url para actualizar datos de una remisión)*</summary>

aqui va el contenido
</details>

### Otros Endpoints:

<details>
<summary>POST **/documentoset/consultadocs** </summary>

aqui va el contenido
</details>

<details>
<summary>POST **/documentoset/ultimosdocs** </summary>

aqui va el contenido
</details>

<details>
<summary>GET **/documentoset/getexpiration** </summary>

aqui va el contenido
</details>
