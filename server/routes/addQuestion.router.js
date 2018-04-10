var express = require('express');
var router = require('express').Router();
var pool = require('../modules/pool');

router.get('/', function (req, res) {
    if (req.isAuthenticated()) {
        pool.connect(function (errorConnectingToDatabase, client, done) {
            if (errorConnectingToDatabase) {
                console.log('Error connecting to Database', errorConnectingToDatabase);
                res.sendStatus(500);
            } else {
                client.query('SELECT * FROM dogs WHERE user_id = $1', [req.user.id], function (errorMakingQuery, result) {
                    if (errorMakingQuery) {
                        console.log('Error Making Query', errorMakingQuery);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                }); //end of query
            } //end of else
        }); //end of pool
    } else {
        res.sendStatus(403);
    }
}); //end of get

router.post('/', function (req, res) {
    console.log('dog post was hit!');
    // Add an INSERT query
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            // when connecting to database failed
            console.log('Error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            // when connecting to database worked!
            client.query(`WITH new_dog_temp_table AS (INSERT INTO dogs (dog_name, breed, user_id) VALUES ($1, $2, $3)
            returning id)          
            
            INSERT INTO dogs_commands (dog_id, commands_id)
            VALUES 
            ((SELECT id FROM new_dog_temp_table), '1'),
            ((SELECT id FROM new_dog_temp_table), '2'),
            ((SELECT id FROM new_dog_temp_table), '3'),
            ((SELECT id FROM new_dog_temp_table), '4'),
            ((SELECT id FROM new_dog_temp_table), '5'),
            ((SELECT id FROM new_dog_temp_table), '6'),
            ((SELECT id FROM new_dog_temp_table), '7'),
            ((SELECT id FROM new_dog_temp_table), '8'
            );
            `,
                [req.body.dog_name, req.body.breed, req.user.id], function (errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        console.log('Error making database query', errorMakingQuery);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(201);
                    }
                });
        }
    });
});

router.get('/details', function (req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('Error connecting to Database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(`SELECT * FROM dogs 
            JOIN dogs_commands ON dogs.id = dogs_commands.dog_id
            JOIN commands ON commands.id = dogs_commands.commands_id
            WHERE dogs.id = $1;`, [req.query.id], function (errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        console.log('Error Making Query', errorMakingQuery);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                });
        }
    });
});


// router.put('/details', function (req, res) {
//     console.log(' put route was hit!');
//     console.log('req.query.body is: ', req.body);
//     //Add an INSERT query
//     pool.connect(function (errorConnectingToDatabase, client, done) {
//         if (errorConnectingToDatabase) {
//             // when connecting to database failed
//             console.log('Error connecting to database', errorConnectingToDatabase);
//             res.sendStatus(500);
//         } else {
//             // when connecting to database worked!
//             // query like this: UPDATE messages SET message='Have a really terrific day!' WHERE id=1;
//             client.query('UPDATE dogs_commands SET day1=$1, day2=$2, day3=$3, day4=$4, day5=$5, day6=$6, day7=$7 WHERE dog_id=$8 and commands_id=$9;',
//                 [req.body.day1, req.body.day2, req.body.day3, req.body.day4, req.body.day5, req.body.day6, req.body.day7, req.body.dog_id, req.body.commands_id], function (errorMakingQuery, result) {
//                     done();
//                     if (errorMakingQuery) {
//                         console.log('Error making database query', errorMakingQuery);
//                         res.sendStatus(500);
//                     } else {
//                         res.sendStatus(200);
//                     }
//                 });
//         }
//     });
// });

// router.delete('/:id', function (req, res) {
//     var dogId = req.params.id;
//     console.log('dog delete was hit!');
//     // Add an INSERT query
//     pool.connect(function (errorConnectingToDatabase, client, done) {
//         if (errorConnectingToDatabase) {
//             // when connecting to database failed
//             console.log('Error connecting to database', errorConnectingToDatabase);
//             res.sendStatus(500);
//         } else {
//             client.query('DELETE FROM dogs_commands WHERE dog_id=$1;', [dogId],
//                 function (errorMakingQuery, result) {
//                     done();
//                     if (errorMakingQuery) {
//                         console.log('Error making database query', errorMakingQuery);
//                         res.sendStatus(500);
//                     } else {
//                         //res.sendStatus(200);
//                         client.query('DELETE FROM dogs WHERE id=$1;', [dogId],
//                             function (errorMakingQuery, result) {
//                                 done();
//                                 if (errorMakingQuery) {
//                                     console.log('Error making database query', errorMakingQuery);
//                                     res.sendStatus(500);
//                                 } else {
//                                     res.sendStatus(200);
//                                 }
//                             }
//                         );

//                     }
//                 });
//         }
//     });
// });

module.exports = router;