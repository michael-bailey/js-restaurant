# Ingredient

This class describes an ingredient for an item on the menu

## Use

many of these are used in conjunction with the a Item object to show what Ingredients and Allergens are in the item

## Fields

| name         | description                             |
| ------------ | --------------------------------------- |
| name         | the name of the Ingredient              |
| isAllergen   | flags if it can cause allergic reations |

## Methods

| name                             | description                                                  |
| -------------------------------- | ------------------------------------------------------------ |
| static async getInstanceById(id) | This retrieves an instance, of the class; from the database if it exists. |
| constructor(data)                | This loads data into the class from the data object, if an id doesnt exist then a new objcet is created in the database and the id is assigned. Otherwise it returns the new object. This returns a promise. |

## Source Overview

``` JavaScript 
class Ingredient {
    id = -1
    name = ""
    isAllergen = false
    itemID = -1

    static async getInstanceById(id)
		constructor(data)
} 

```
