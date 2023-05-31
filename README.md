# data-output-sql-js-node

Для запуску програми:
    1. має бути встановлена PostgreSQL база даних, в ній має міститися база "shop1" з таблицями:
                                            zakazy
            tovary                         {  id_zakaza: int,
            {  id_tovara: int,                id_klienta: int,
               name: VARCHAR[255],            id_tov1: int,
               property1: int,                count_tov1: int,
               property2: tinyint,            id_tov2: int,
              price DECIMAL(6,2)              count_tov2: int,
            }                              }
                                            
    2. для запуску серверу в терміналі потрібно прописати "npm test" (виведуться відповідні повідомлення в консоль)
    3. відкрити браузер та вставити: "http://localhost:3000"
        а. для виведення інформації про товари дописати: "/data"
        б. для виведення інформації про замовлення дописати: "/orders"
    4. щоб зупинити сервер необхідно навести курсор на термінал та натиснути "Ctrl+C", після чого написати "у"
