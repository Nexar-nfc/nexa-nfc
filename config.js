/*
  CONFIGURACIÓN DE NEXA
  =====================
  Este es el ÚNICO archivo que necesitas editar para conectar NEXA con
  Firebase y Google. Mientras los valores digan "PEGA_AQUI…", la web
  funciona en MODO DEMOSTRACIÓN (todo se guarda en el navegador).

  En GitHub: abre este archivo, pulsa el lápiz (Edit), cambia los valores
  y pulsa "Commit changes". En 1–2 minutos la web usa la nueva configuración.

  Todo lo que va aquí es información pública (no son contraseñas): las
  claves de Firebase y de Google están pensadas para ir en una página web
  y se protegen con las reglas de seguridad y las restricciones de dominio.
*/
window.NEXA_CONFIG = {
  // Identificador del negocio en la base de datos (minúsculas, sin espacios).
  negocioId: "picasytevas",

  // 1) FIREBASE — Consola de Firebase › Configuración del proyecto › Tus apps › Web (</>)
  //    Copia aquí los valores del bloque "firebaseConfig".
  firebase: {
    apiKey: "PEGA_AQUI_TU_API_KEY",
    authDomain: "PEGA_AQUI.firebaseapp.com",
    projectId: "PEGA_AQUI_TU_PROJECT_ID",
    storageBucket: "PEGA_AQUI.appspot.com",
    messagingSenderId: "PEGA_AQUI",
    appId: "PEGA_AQUI",
  },

  // 2) CORREO(S) DEL DUEÑO — solo estas cuentas pueden entrar al panel.
  //    Debe ser el mismo correo que pongas en las reglas de Firestore.
  administradores: ["PEGA_AQUI_EL_CORREO_DEL_DUENO@gmail.com"],

  // 3) GOOGLE MAPS (opcional) — clave de "Places API (New)" para mostrar
  //    las estrellas reales del negocio. Restríngela a tu dominio github.io.
  googleMapsApiKey: "PEGA_AQUI_TU_CLAVE_DE_GOOGLE",

  // 4) DATOS PARA PAGAR LA SUSCRIPCIÓN POR TRANSFERENCIA
  //    Se muestran solo dentro del panel del negocio (Datos › Suscripción).
  transferencia: {
    banco: "PEGA_AQUI_EL_BANCO",
    tipoCuenta: "PEGA_AQUI (Ahorros / Corriente)",
    numeroCuenta: "PEGA_AQUI_EL_NUMERO",
    titular: "PEGA_AQUI_EL_TITULAR",
    identificacion: "PEGA_AQUI_CEDULA_O_RUC",
    whatsappComprobantes: "PEGA_AQUI_WHATSAPP_PARA_COMPROBANTES",
  },
};
