// 01 What is a database? Explain with an example on why should we need a database.
// ans  : A database is a systematically organized and structured collection of data which is designed to be easily 
//accessed , managed and updated. It serves as a central repository for storing and organizing imformation in a way 
//that allows for efficient retrieval, modification , and management of data. Database play a crucial role in 
//various application providing a structured and systematic approach to handling large volumes of imformation.
//They are commonly used in business,science, education, and numerous other fields to store organize, and retrieve 
//data in a structured and efficient manner.

// 02 Write a short note on file based storage system. Explain the major challenges of a file based storage
//system

// ans - A file-based storage system is a method of organizing and storing data in individual files on a computer
//or storage device. In this system , data is typically stored in hierarchical structure, where directories 
//contains files and files man contain data or information. Each file is a discrete unit that holds specific 
//information , and organization is often based on the user or application's needs.
// The major challenge of a based storage system is 
// * Managing large volumes of files can become slow and complicated  as the number of files and folders grows.
//   Searching and  retrieving specific data can also become slow.


// 03 What is DBMS? What was the need for DBMS
// ans - Database Management systems (DBMS). can be broadly classified into two main categories. Relational Database 
//Management systems (RDBMS) and Non-Relational Database Management systems. Each category has different characteristics , structure, and use cases.
// the need of DBMS was 
// * 


// 04 Explain 5 challenges of file-based storage system which was tackled by DBMS?
// ans - 

// * Managing large volumes of files can become slow and complicated  as the number of files and folders grows.
//   Searching and  retrieving specific data can also become slow.
// *  File system don't permanent link data between files, making comples analysis and extracting insights from 
// large datasets challenging.
// * sharing files can expose sensitive information to unathorized access if proper security measures are not
 //implemented.
// * Maninging multiple versions of the same file can be difficult.
// * sharing and collaboration on files within a tean can be slow and complicated and require additional tools or plateform.

// 05 List Out the different types of classification in DBMS and explain?
// ans - // ans - Database Management systems (DBMS). can be broadly classified into two main categories. Relational Database 
//Management systems (RDBMS) and Non-Relational Database Management systems (Non-RDBMS or NoSQL databses). Each category has different characteristics , structure, and use cases.

//RDMS - 
// * Data is organized into tables with rows and columns
// * Utilizes SQL for defining, querying, and manipulating data
// * Emphasizes ACID properties (Atomicity, Consistency, Isolation, Durability) to ensure data
// * integrity and transactional reliability
// * Requires a predefined schema that defines the structure of the data, including tables, fields, and
//relationships

//Non-RDBMS - 
// Supports various data models, including document-oriented, key-value pairs, column-
//family, and graph databasesL
// * Allows for schema-less or dynamic schema structures, providing flexibility to handle
//evolving data requirements
// * Generally designed to scale horizontally, distributing data across multiple servers or
//nodes.
// *Emphasizes performance and scalability over strict consistency in certain scenarios.

// 06 What is the significance of Data Modelling and explain the types of Data Modelling

// ans  An introduction to data models in databases involves understanding the fundamental structures and
//representations used to organize and store data. A data model serves as a conceptual framework that defines
//how data is structured, related, and manipulated within a database system. It provides a blueprint for
//designing and implementing databases and guiding the creation of tables, relationships, and constraints.

//  Entities: Objects or concepts in the real world (e.g., customers, products))

// Attributes: Characteristics or properties of entities (e.g., customer name, product price))

//  Primary Key: A unique identifier for a record in a table)
// Foreign Key: A field in one table that refers to the primary key in another table, establishing a relationship).


//07  Explain 3 schema architecture along with its advantages ?
 // ans -  Tables: A schema defines the tables within the database. Each table represents a specific entity (e.g.,
//"Customers" or "Products") and contains rows and columns to store data
// Fields or Columns: Fields represent the individual data elements within a table. Each column in a table
//corresponds to a specific attribute or property of the data (e.g., "Name" or "Age")
// Data Types: The schema specifies the data type of each field, indicating the kind of data that can be stored
//in a particular column (e.g., text, numeric, date).

//  Relationships: Schema defines relationships between different tables. For example, a "Customers" table
//might have a relationship with an "Orders" table, linking customer information to specific orders)

// Constraints: Constraints enforce rules or conditions on the data to maintain data integrity. Common
//constraints include primary keys, foreign keys, unique constraints, and check constraints)

// Indexes: The schema may include the definition of indexes, which improves the speed of data retrieval
//operations by providing a quick lookup mechanism)