---
sidebar_position: 2
---

# Diagrama y flujo del sistema

### Infraestructura del Servicio en la Nube de AWS

<div style={{ fontSize: "18px", textAlign: "justify" }}>
El diagrama representa la infraestructura de DTEpy, alojado en la nube de Amazon Web Services (AWS), diseñado para proporcionar alta disponibilidad, escalabilidad y confiabilidad en el procesamiento de documentos electrónicos.
</div>

---

![infraestructura](/img/infraestructura.png)

---

### Beneficios de esta Infraestructura

<div style={{ fontSize: "18px", textAlign: "justify" }}>
- **Alta disponibilidad:** El balanceador de carga y el autoescalado aseguran que el servicio permanezca activo incluso ante altas demandas de tráfico.
- **Escalabilidad:** La infraestructura puede crecer automáticamente en función de la necesidad, sin interrupciones.
- **Seguridad:** La conexión mediante HTTPS y la gestión de datos en AWS garantizan la protección de la información sensible.
- **Fiabilidad:** El uso de tecnologías avanzadas como RDS y EFS proporciona un almacenamiento seguro y accesible.
</div>

### Como funciona el proceso DTEpy - SIFEN

---

![sifen](/img/sifen.png)

---

<div style={{ fontSize: "18px", textAlign: "justify" }}>
El proceso comienza con el emisor, quien utiliza el servicio REST de DTEpy que estará activo 24/7 para recibir un archivo en formato JSON con los datos del documento. Este archivo es convertido a XML, el formato requerido por SIFEN que a su vez será firmado digitalmente. Luego, el archivo XML es transmitido al servicio SOAP del SIFEN, utilizando métodos síncronos para respuestas inmediatas o asíncronos para el envío en lotes.

Una vez recibido, SIFEN valida el documento para verificar que cumple con las normativas establecidas. Si la validación es exitosa, la respuesta es de aprobación y se genera un Documento Tributario Electrónico (DTE), que cuenta con validez legal. 

El receptor del documento electrónico recibe el kuDE (archivo PDF que representa el DTE) de forma impresa o por correo. Finalmente, el emisor puede consultar el estado, detalles del documento en la plataforma web y el receptor podrá hacerlo en la plataforma de EKUATIA utilizando el código CDC.

link de consulta cdc: [https://ekuatia.set.gov.py/consultas/](https://ekuatia.set.gov.py/consultas/)
</div>

---

![diagrama](/img/diagrama.png)

--- 
