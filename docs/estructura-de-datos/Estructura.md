---
sidebar_position: 2
---

# Estructura

<div style={{ fontSize: "18px", textAlign: "justify" }}>
En esta sección se detalla la estructura de datos requerida para la integración con DTEpy. Es importante que el personal técnico o el informático del emisor realice las adaptaciones necesarias en la estructura de su sistema (ERP) para cumplir con los requisitos exigidos por el SIFEN.

> La columna JSON indica los nombres de los atributos utilizados para estructurar el archivo JSON en una petición POST hacia la API local, encargada de generar el KuDE para su impresión.

> La columna INTEGRADOR se refiere a los nombres de los campos necesarios en una vista, procedimiento almacenado, consulta API REST o consulta de una tabla DBF (VFP). Estos campos son requeridos por la aplicación (Integrador) para generar el archivo JSON y realizar el envío de documentos al SIFEN.

:::note NOTA
El informático tiene la opción de no generar el archivo JSON directamente. En su lugar, puede optar por exportar un archivo TXT que será procesado por el integrador para generar automáticamente el KuDE. En este caso, la aplicación del emisor solo necesita monitorear el directorio donde se genera el KuDE, permitiendo lanzar la impresión de manera automática tras la grabación de una operación.
:::
</div>

--- 

<div style={{ overflowX: 'auto' }}>
  <table style={{ tableLayout: 'auto', borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ textAlign: 'center', padding: '10px', backgroundColor: '#f5f5f5', fontSize: '1.0em' }} colspan="7">
          DATOS GENERALES
        </th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th style={{ whiteSpace: 'nowrap' }}>Json</th>
        <th style={{ whiteSpace: 'nowrap' }}>Integrador</th>
        <th style={{ whiteSpace: 'nowrap' }}>Tipo</th>
        <th style={{ whiteSpace: 'nowrap' }}>Documento</th>
        <th style={{ whiteSpace: 'nowrap' }}>Observación</th>
        <th style={{ whiteSpace: 'nowrap' }}>Valores</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>Dato 1</td>
        <td style={{ whiteSpace: 'nowrap' }}>Dato 2</td>
        <td style={{ whiteSpace: 'nowrap' }}>Dato 3</td>
        <td style={{ whiteSpace: 'nowrap' }}>Dato 5</td>
        <td style={{ whiteSpace: 'nowrap' }}>Dato 6</td>
        <td style={{ whiteSpace: 'nowrap' }}>Dato 7</td>
      </tr>
      <tr>
        <td style={{ whiteSpace: 'nowrap' }}>Otro dato 1</td>
        <td style={{ whiteSpace: 'nowrap' }}>Otro dato 2</td>
        <td style={{ whiteSpace: 'nowrap' }}>Otro dato 3</td>
        <td style={{ whiteSpace: 'nowrap' }}>Otro dato 5</td>
        <td style={{ whiteSpace: 'nowrap' }}>Otro dato 6</td>
        <td style={{ whiteSpace: 'nowrap' }}>Otro dato 7</td>
      </tr>
    </tbody>
  </table>
</div>