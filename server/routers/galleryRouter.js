const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const bodyParser = require('body-parser');

console.log('in galleryRouter');

self.picturesArray = [
    {
        name: 'Quinton',
        photo: 'server/public/images/Quinton.jpg',
        likes: 0,
        imageText: 'Became a "Dad" on June 16th 2014'
    },
    {
        name: 'Maxwell',
        photo: 'server/public/images/Maxwell.jpg',
        likes: 0,
        imageText: 'Became a "Dad" again August 12th 2016'
    },
    {
        name: 'Our wedding',
        photo: 'server/public/images/OurWedding.jpg',
        likes: 0,
        imageText: 'April 4th 2015'
    },
    {
        name: 'Last MG',
        photo: 'server/public/images/MGLastDrive.jpg',
        likes: 0,
        imageText: 'Almost 4 years of work to get this on the road.'
    },
    {
        name: 'First Corvette',
        photo: 'server/public/images/FirstCorvette.jpg',
        likes: 0,
        imageText: '40 years later, I finally have one!'
    },
    {
        name: 'Casper & Igor',
        photo: 'server/public/images/Casper.jpg',
        likes: 0,
        imageText: 'Our dog could have played the part of Igor in Young Frankenstein.'
    }
];