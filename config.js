/*
  CONFIGURACIÓN DE NEXA
  Mientras algún valor diga "PEGA_AQUI…", esa parte funciona en modo demostración.
*/
window.NEXA_CONFIG = {
  negocioId: "picasytevas",

  // 1) FIREBASE
  firebase: {
    apiKey: "AIzaSyClk2T26AqIxTODDwX-zdpZ6uuNEpk_D-4",
    authDomain: "nexa-b046d.firebaseapp.com",
    projectId: "nexa-b046d",
    storageBucket: "nexa-b046d.firebasestorage.app",
    messagingSenderId: "213791019311",
    appId: "1:213791019311:web:af61103d872473018ed1da",
  },

  // 2) CORREO DEL DUEÑO (el mismo de las reglas de Firestore)
  administradores: ["toaladouglas43@gmail.com"],

  // 3) GOOGLE MAPS (opcional, lo hacemos después)
  googleMapsApiKey: "PEGA_AQUI_TU_CLAVE_DE_GOOGLE",

  // 4) DATOS PARA PAGO POR TRANSFERENCIA (opcional, se llenan después)
