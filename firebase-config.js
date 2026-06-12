/* ============ ONLINE MULTIPLAYER — NASTAVENIE ============
   1) https://console.firebase.google.com → Add project (Analytics môžeš vypnúť)
   2) Build → Realtime Database → Create database → Start in TEST MODE
   3) Skopíruj URL databázy (https://...firebasedatabase.app) dole namiesto null
   4) Nahraj celý priečinok na hosting — hotovo.
   Ak necháš null, online režim sa vypne a hra funguje na jednom telefóne. */
window.KYSUCE_FIREBASE = {
  databaseURL: null  // napr. "https://kysuce167-default-rtdb.europe-west1.firebasedatabase.app"
};
