📌 Digital Subscriptions System

Dobrodošli v repozitoriju Digital Subscriptions System – mikrostoritvenega sistema za upravljanje digitalnih naročnin na revije. Sistem omogoča registracijo uporabnikov, upravljanje revij in naročnin, pri čemer sledi arhitekturnim načelom čiste arhitekture (Clean Architecture).

📖 Opis projekta
Ta projekt je sestavljen iz treh mikrostoritev in spletne aplikacije, ki služi kot uporabniški vmesnik:

# Uporabniki (services/uporabniki)
Upravljanje registracije, prijave in uporabniških podatkov.
Avtentikacija in avtorizacija uporabnikov.

# Revije (services/revije)
Upravljanje digitalnih revij (dodajanje, urejanje, brisanje).
Prikaz podrobnosti o posamezni reviji.

# Naročnine (services/narocnine)
Uporabniki lahko kupijo naročnino na izbrano revijo.
Upravljanje naročnin (aktivacija, podaljšanje, preklic).

# Spletna aplikacija (frontend/)
Uporabniški vmesnik za dostop do sistema.
Omogoča registracijo in prijavo, ogled revij, naročanje in upravljanje naročnin.

# Dokumentacija (docs/)
Opis arhitekture in tehnologij.

## 🛠️ Arhitektura in tehnološki sklad
## 🔸 Arhitekturna načela:
✔ Čista arhitektura (Clean Architecture): ločitev poslovne logike od infrastrukture.

✔ Mikrostoritve: vsaka storitev je neodvisna in komunicira prek API-jev.

✔ Ohlapna sklopljenost: spremembe v eni storitvi ne vplivajo na druge.

## 🔸 Tehnologije, ki jih bomo uporabili:

Backend: Node.js
Frontend: ...
Podatkovna baza: MongoDB
Avtentikacija: ...
API komunikacija: gRPC
Vodenje različic: Git + GitHub