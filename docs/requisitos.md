---
sidebar_position: 3
---

# Gestión Inicial

### Guía de pasos para Emitir Documentos Electrónicos

<div style={{ fontSize: "18px", textAlign: "justify" }}>
Para comenzar con la emisión de documentos electrónicos, es fundamental cumplir con los siguientes pasos para la habilitación en el SIFEN. Al final de la lista se encuentra el link para acceder a los archivos PDF para realizar el paso a paso:


1. **Habilitación como Facturador Electrónico**  
Este paso incluye realizar la solicitud correspondiente para ser habilitado como emisor de documentos electrónicos.  
En cuanto a los datos que se requiere para el ambiente de pruebas el contribuyente deberá utilizar los siguientes datos como información del emisor: 

::::info INFO
- Timbrado: (reemplazar por el RUC sin dígito verificador) Ejemplo: `80011111`

:::note NOTA
Si el RUC es de persona física, completar con "0" a la izquierda para llegar a los 8 dígitos `ej. 04111111`
:::

- Fecha de inicio de vigencia: Debe corresponder a la fecha en la que se generó el formulario de Solicitud de Habilitación como Facturador Electrónico
- Establecimiento: `001`
- Puntos de Expedición: `001, 002 y 003`
- idcsc: `0001`
- csc: `ABCD0000000000000000000000000000`
- Tipos de Documentos Habilitados para Pruebas:
  - Factura Electrónica
  - Nota de Crédito Electrónica
  - Nota de Débito Electrónica
  - Autofactura Electrónica
  - Nota de Remisión Electrónica
::::



2. **Generar Timbrado de Facturador Electrónico**  
Una vez que el contribuyente culmine el ciclo de pruebas en ambiente de
TEST, deberá acceder aqui a fin de gestionar el timbrado a ser utilizado para la
expedición de comprobantes electrónicos en producción.

3. **Solicitud de Código de Seguridad del Contribuyente (CSC)**  
El código CSC normalmente ya se genera con la generación del timbrado, sin embargo, en caso de que no hayan recibido dicho código en su bandeja de entrada de marangatu, su correo, o bien tengan algun inconveniente con el csc actual, podran utilizar este método para generarlo devuelta.

4. **Certificado Digital**  
Es indispensable obtener un certificado digital cualificado para firmar los documentos electrónicos, este certificado debe adquirirse de un PSC (Prestadores de Servicios de Confianza), habilitados por el Ministerio de Industria y Comercio, el certificado a utilizar es del tipo F1, y este debe estar en el formato con extensión `ej. certificado.p12`, el PSC les indicara el método de conversión.
</div>

:::info INFO
- **Link de PSC habilitados por el MIC:**  
[https://www.acraiz.gov.py/html/Certif_1PrestaServ.html](https://www.acraiz.gov.py/html/Certif_1PrestaServ.html)
:::

<div style={{ fontSize: "18px", textAlign: "justify" }}>

5. **Acceso al Ambiente de Producción**  
Una vez aprobadas las pruebas en ambiente de test, el acceso al ambiente de producción es habilitado, permitiendo la emisión de documentos tributarios electrónicos válidos.


Este proceso garantiza el cumplimiento de los requisitos legales y técnicos para operar como facturador electrónico en Paraguay.
</div>

::::info INFO
- **Link para realizar las solicitudes:**  
  [https://www.dnit.gov.py/web/e-kuatia/guias](https://www.dnit.gov.py/web/e-kuatia/guias)

- **Link de mesa de ayuda para cualquier consulta al SIFEN:**  
  [https://servicios.set.gov.py/eset-publico/CorreoSifenService](https://servicios.set.gov.py/eset-publico/CorreoSifenService)

:::tip TIPS
En los siguientes días verifique  tanto la bandeja de entrada de Marangatu como el correo electrónico con el que se registró en la SET.
:::

- **Correos electrónicos:**  
sifenayuda@set.gov.py  
facturacionelectronica@set.gov.py

- **Teléfono soporte SIFEN:**  
(021) 417 - 7018
::::
