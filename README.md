# NapicuIP
* Aplikace pro zjištění ip uživatele
* Nespouštět na localhostu
* Vytvořeno pomocí NodeJS
1. Naklonování repozitáře
    ```sh
    git clone ...
   ```
### Instalace 
1. Nainstalování balíčků 
   ```sh
   npm install
   ``` 
2. Nastavení portu v `index.js`
    ```js
    const PORT = 6969;
    ```
### Spuštění 
2. Spuštění aplikace
* Server
    ```sh
    npm run start
    ```
* Developer 
    ```sh
    npm run dev
    ```
# Použité balíčky
* ejs@3.1.6
* express@4.17.1
* nodemon@2.0.9