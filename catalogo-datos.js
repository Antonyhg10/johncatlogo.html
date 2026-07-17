/* =========================================================================
   JOHN TECH — DATOS DEL CATÁLOGO
   =========================================================================
   Este archivo NO se edita a mano. Se edita desde "admin.html", que está
   en la misma carpeta que este archivo. Ábrelo desde el navegador,
   haz tus cambios (agregar/borrar celulares, cambiar precios, agregar
   series, agregar marcas) y descarga la versión actualizada de este
   archivo para reemplazarlo.

   Si de todas formas quieres editarlo a mano, la estructura es:
   - WA_NUMBER: número de WhatsApp (código de país + número, sin signos).
   - DEFAULT_SPECS: texto de garantía que aparece en cada equipo.
   - BRANDS: una lista de marcas. Cada marca tiene "items": una lista de
     [ "Nombre del modelo", "Capacidad", Precio ].
     Ej: ["15 Pro Max","256 GB",19990]
     Varias líneas con el MISMO nombre de modelo se agrupan solas en una
     sola tarjeta con varias capacidades.
   ========================================================================= */

window.CATALOGO_DATOS = {

  WA_NUMBER: "50497914995",

  DEFAULT_SPECS: "Equipo Semi Usado y Nuevo · Garantía de 30 - 60 días",

  BRANDS: [
    {brand:"iPhone", items:[
      ["12 Normal","64 GB",7490],["12 Normal","128 GB",7990],["12 Normal","256 GB",8790],
      ["12 Pro","256 GB",10990],["12 Pro Max","128 GB",11790],["12 Pro Max","512 GB",13790],
      ["13 Normal","128 GB",10490],["13 Normal","256 GB",11490],["13 Pro","128 GB",11990],
      ["13 Pro","256 GB",12990],["13 Pro Max","128 GB",14490],["13 Pro Max","256 GB",15490],
      ["14 Normal","128 GB",10990],["14 Normal","256 GB",11990],["14 Pro","128 GB",14490],
      ["14 Pro","256 GB",15490],["14 Plus","128 GB",12490],["14 Plus","256 GB",13490],
      ["14 Pro Max","128 GB",15990],["14 Pro Max","256 GB",16990],["14 Pro Max","512 GB",17990],
      ["15 Normal","128 GB",14490],["15 Plus","128 GB",15490],["15 Plus","256 GB",16490],
      ["15 Pro Max","256 GB",19990],["15 Pro Max","512 GB",20990],["15 Pro Max","1 TB",21990],
      ["16 Plus","128 GB",19490],["16 Plus","256 GB",20490],["16 Pro","128 GB",20490],
      ["17 Normal (Nuevo)","256 GB",26490],["17 Air (Nuevo)","256 GB",28490],
      ["17 Pro Max (Nuevo)","256 GB",40490],["17 Pro Max (Nuevo)","512 GB",45490],["17 Pro Max (Nuevo)","1 TB",51490]
    ]},
    {brand:"Samsung", items:[
      ["A16 (Nuevo)","128 GB",4950],["A36","128 GB",7500],
      ["S21 Plus","128 GB",7700],["S21 Ultra","128 GB",9700],
      ["S22 Plus","128 GB",8800],["S22 Plus","256 GB",9800],
      ["S22 Ultra","128 GB",12000],["S22 Ultra","256 GB",13000],["S22 Ultra","512 GB",14000],
      ["S23 FE","128 GB",9100],["S23 FE","256 GB",7700],
      ["S23 Ultra","256 GB",15500],["S23 Ultra","512 GB",16500],
      ["S24 Ultra","256 GB",19500],["S24 Ultra","512 GB",20500],["S24 Ultra","1 TB",21500],
      ["S25 Ultra","512 GB",25000],["S26 Ultra (Nuevo)","512 GB",34500]
    ]},
    {brand:"Pixel Pro", items:[
      ["6 Pro","128 GB",7950],["6 Pro","256 GB",8950],
      ["7 Pro","128 GB",9500],["7 Pro","256 GB",10500],
      ["8 Pro","128 GB",12950]
    ]}
  ]

};
