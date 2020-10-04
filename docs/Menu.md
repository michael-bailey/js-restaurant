# Menu

This class represents a menu in a restaurant.

## Use

This is to be instanciated with a title. after which items are to be added to it. when items are added then it is to be added to a restaurant.

## Fields

| name         | description                                         |
| ------------ | --------------------------------------------------- |
| id           | This is the unique id of the menu.                  |
| name         | The name of the menu                                |
| restaurantID | The id of the restaurant that this menu belongs to. |

## Methods

| name                             | description                                                  |
| -------------------------------- | ------------------------------------------------------------ |
| static async getInstanceById(id) | This retrieves an instance, of the class; from the database if it exists. |
| constructor(data)                | This laods data from the data object passed into the object. If an id doesnt exist. then the new object is added to the database, and an id is retrieved. |

## Class Overview

``` javascript
class Menu {
    id = -1
    name = ""
    restaurantID = -1

    static async getInstanceById(id)

    constructor(data) {
}
```

