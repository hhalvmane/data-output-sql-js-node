CREATE DATABASE shop1;

CREATE TABLE tovary
{   id_tovara: int;
    name: VARCHAR[255];
    property1: int;
    property2: smallint;
    price real
}

CREATE TABLE zakazy
{   id_zakaza: int;
    id_klienta: int;
    id_tov1: int;
    count_tov1: int;
    id_tov2: int;
    count_tov2: int;
}
