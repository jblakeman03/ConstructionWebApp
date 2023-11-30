create database BlakemanBrothers
drop table Customers;
drop table Quotes;
drop table Projects;

create table Customers(
    CustomerID int not null identity (1,1) primary key, 
    FirstName varchar(20) not null,
    LastName varchar(20) not null, 
    Email varchar(50) not null,
    Password varchar(20) not null,
    Street1 varchar(50) not null,
    Street2 varchar(50),
    City varchar(20) not null,
    State char(2) not null,
    Zipcode int not null,
    constraint Zipcode check(len(Zipcode) = 5) 
)


create table Quotes(
    QuoteID int not null primary key identity(1,1), 
    CustomerID int foreign key references Customers(CustomerID) not null,
    LaborEstimate money, 
    MaterialsEstimate money,
    TotalEstimate money,
    TimeEstimate int,
    QuoteDate date, 
    Street1 varchar(50) not null,
    Street2 varchar(50),
    City varchar(20) not null,
    Zip int not null,
    constraint Zip check(len(Zip) = 5) 

)


create table Projects(
    ProjectID int not null primary key identity(1,1), 
    QuoteID int not null foreign key references Quotes(QuoteID),
    CustomerID int not null foreign key references Customers(CustomerID)
)