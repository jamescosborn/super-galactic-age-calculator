# Super Galactic Age Calculator

by James Osborn  

# Description

An app that will take your age in Earth years and return your age in Mercury, Venus, Mars, and Jupiter years. The app will also give your life expectency for all different planets, and notify you if you've passed the life expectency for that planet. Finally, the app will take a user's Earth birth year, determine how many years you've been alive, and return that value in seconds.

## Requirements
Node packet Manager (NPM)

A web browser that supports Javascript and HTML5.

## Installation
Clone to a working repository via Git Hub.

Download all dependencies by typing the following:

```
$ npm install
$ bower install
$ gulp build
```

Launch the website with `gulp serve`

## Known Bugs
* If you enter an age exceeding avg life expectency, then convert your age to seconds with the second form, the alerts for surpassing life expectency will appear twice.


# Specifications:

###### The program will ask what year the user was born.  
  `Example Input:` What Earth year were you born?  
  `Example Output:` 1985  

###### The program will subtract the user birth year from 2017.  
  `Example Input:` 1985  
  `Example Output:` 2017 - 1985 = 32  

###### The program will convert the years into seconds.  
  `Example Input:` 32  
  `Example Output:` 32 years in seconds.  

###### The program will return the age in Mercury years.  
  `Example Input:` 32  
  `Example Output:` 32 x .24 = ?  

###### The program will return the user age in Venus years.  
  `Example Input:` 32  
  `Example Output:` 32 x .62 = ?  

###### The program will return the user age in Mars years.  
  `Example Input:` 32  
  `Example Output:` 32 x 1.88 = ?  

###### The program will return the user age in Jupiter years.  
  `Example Input:`  
  `Example Output:`  

###### The program will return the user's remaining years of life expectancy on Earth.  
  `Example Input:` 32  
  `Example Output:` 79-32 = 47  

###### The program will return the user's remaining years of life expectancy for each Planet.  
  `Example Input:` 32  
  `Example Output:` Earth: 47, Mercury = ?, Venus = ?, Mars = ?, Jupiter = ?  

# Optional Specifications  

After displaying the information for 30 seconds, the program will initiate a self destruct, displaying a countdown for 30 seconds.  

At the end of the countdown, the program will display an ASCII photo of Walt Whitman.  

# License

This product uses the MIT license.
