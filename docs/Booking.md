# Booking

This class represents a single booking for a table.

## Use

This is created and added to a Table instance. the constructor creates a new instance and saves it to the data base. other methods can access instances from the database.

## Fields

| name          | description                                    |
| ------------- | ---------------------------------------------- |
| id            | A unique identifier for the booking.           |
| groupName     | A name for the booking.                        |
| contactNumber | A number that the group can be contacted with. |
| time          | The time at which the booking is set for.      |
| tableID       | The id of the table this booking belongs to.   |

## Methods

| name                                     | description                                                  |
| ---------------------------------------- | ------------------------------------------------------------ |
| static async getBookingsByTable(tableID) | This gets all instnces fromt he database based on the tableID provided |
| static async getInstanceById(id)         | This gets a single instance of a Booking from the database based on the |
| constructor(data)                        | This Accepts an object containing all the fields that the new object needs to be created. If there is not id then a new instance is created in a database first before returning. This returns a promise. |

## Source Overview

``` javascript
class Booking {
    id = -1
    groupName = ""
    contactNumber = ""
    time = Date.now()
    tableID = -1

		static async getBookingsByTable(tableID)
		static async getInstanceById(id)

		constructor(data)
}
```
