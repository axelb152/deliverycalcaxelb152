
# Delivery Calculator Challenge - Axel Bagenal 

This is my attempt at a frontend challenge in Typescript and React that I was given, the details were as follows:

'Your task is to write a delivery fee calculator. This code is needed when a customer is ready with their shopping cart and to show them how much the delivery will cost. The delivery price depends on the cart value, the number of items in the cart, the time of the order, and the delivery distance.'

## Specification

Rules for calculating a delivery fee
* If the cart value is less than 10€, a small order surcharge is added to the delivery price. The surcharge is the difference between the cart value and 10€. For example if the cart value is 8.90€, the surcharge will be 1.10€.
* A delivery fee for the first 1000 meters (=1km) is 2€. If the delivery distance is longer than that, 1€ is added for every additional 500 meters that the courier needs to travel before reaching the destination. Even if the distance would be shorter than 500 meters, the minimum fee is always 1€.
  * Example 1: If the delivery distance is 1499 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m => 3€
  * Example 2: If the delivery distance is 1500 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m => 3€
  * Example 3: If the delivery distance is 1501 meters, the delivery fee is: 2€ base fee + 1€ for the first 500 m + 1€ for the second 500 m => 4€
* If the number of items is five or more, an additional 50 cent surcharge is added for each item above and including the fifth item. An extra "bulk" fee applies for more than 12 items of 1,20€
  * Example 1: If the number of items is 4, no extra surcharge
  * Example 2: If the number of items is 5, 50 cents surcharge is added
  * Example 3: If the number of items is 10, 3€ surcharge (6 x 50 cents) is added
  * Example 4: If the number of items is 13, 5,70€ surcharge is added ((9 * 50 cents) + 1,20€)
* The delivery fee can __never__ be more than 15€, including possible surcharges.
* The delivery is free (0€) when the cart value is equal or more than 100€. 
* During the Friday rush (3 - 7 PM UTC), the delivery fee (the total fee including possible surcharges) will be multiplied by 1.2x. However, the fee still cannot be more than the max (15€).

## Authors

- [@axelb152](https://github.com/axelb152)

I am a fullstack developer who recently graduated from Le Wagon, who's techstack includes: React, Ruby on Rails, Redis, Postgres and more. 

More about me:

https://linktr.ee/axelbagenal

## Screenshot

![App Screenshot](https://drive.google.com/uc?export=view&id=1mbhd1OkwuMzZcWpCubEfiKANz_Gy6ym7)


## Installation

Install the project with yarn and install :

```bash
  yarn add deliverycalcaxelb152
  cd deliverycalcaxelb152
  yarn 
```
    
The library "antd" should already be included as a dependency in the project package when running the first line of the above code. However, if you cannot see the dependency inside the package.json file then run the following:

```bash
yarn add antd
```

To start the local host, run:

```bash
  yarn start
  ```
## How I would optimize the project

If I had more time to improve on the project, I would do the following:

-Create a more responsive UI, particularly for tablet and smartphone sized viewports

-Update design a bit more, change the margins on the 'Delivery Fee' card and fix spacing on the delivery form. 

-Update the datepicker

-Create logic where delivery fee result is hidden, and when a button 'calculate delivery fee' was implemented, the Delivery Result would show on click. 

-Fix the calculation logic so that the delivery fee can only be rounded to 2 decimal 'cents' if/when the Friday Surcharge is implemented. 

-I have not used ANTD design library prior to this project, I would definitely like to delve more into the documentation and have some more practice with it. 


