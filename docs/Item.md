# Item

this class describes an item on the menu

## Use

This is created to be added a Menu. it represents a dish on the menu. It also contains many ingredients that are added it it after instantiation

## Fields 

| name   | description                                           |
| ------ | ----------------------------------------------------- |
| id     | This is the unique id of the Item                     |
| name   | This is the name of the item as it appers on the menu |
| price  | This is the price of the item                         |
| menuID | This is the menu which this item belongs to           |

## Methods

| name                             | description                                                  |
| -------------------------------- | ------------------------------------------------------------ |
| static async getInstanceById(id) | this retrieves an instance of an item by its id from the database |
| constructor(data)                | This loads data from the data object passed into it. If the id doesn't exist it creates a new entry in the database |

## Source Overview

``` JavaScript 
class Item {
    id = -1
    name = ""
    price = 0.00
    menuID = -1

		static async getInstanceById(id)

		constructor(data)
}
```
