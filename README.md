# data-output-sql-js-node (ua|en)

Програма призначена для виводу даних з таблиць бази PostgreSQL на веб-сторінку у форматі JSON. 
У  README надані короткі вказівки щодо запуску та використання програми.

The program is designed to output data from PostgreSQL database tables to a web page in JSON. 
The README provides brief instructions on how to run and use the program. (Author is working on translating code components into English)

Для запуску програми:               To launch the program:

    1. має бути встановлена PostgreSQL база даних, в ній має міститися база "shop1" з таблицями:
    1. you have to install PostrgreSQL and create database "shop1" with tables:
            (файл database.sql - це приклад коду, яким можна створити базу даних в консолі PostgreSQL)
            (file database.sql - is an example of code on how to create database in console PostgreSQL)
                                            zakazy
            tovary                         {  id_zakaza: int,
            {  id_tovara: int,                id_klienta: int,
               name: VARCHAR[255],            id_tov1: int,
               property1: int,                count_tov1: int,
               property2: smallint,           id_tov2: int,
              price real                      count_tov2: int,
            }                              }
                                            
    2. для запуску серверу в терміналі потрібно прописати "npm test" (виведуться відповідні повідомлення в консоль)
    2. to launch the server you have to write "npm test" in terminal (if succeed - messages will show in terminal)
    3. відкрити браузер та вставити: "http://localhost:3000"
    3. open browser and insert: "http://localhost:3000"
        а. для виведення інформації про товари дописати: "/data"
        a. to display data about products(1st table) add: "/data"
        б. для виведення інформації про замовлення дописати: "/orders"
        b. to display data about orders(2nd table) add: "/orders"
    4. щоб зупинити сервер натиснути "Ctrl+C" в терміналі, після чого написати "у"
    4. to stop the server - press "Ctrl+C" in terminal and write "y"

дякую за увагу!
thank you for your time!
