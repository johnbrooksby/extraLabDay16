require('dotenv').config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    addOrder: (req, res) => {
        
        const {name, main_dish, side_dish, drink_id, togo, pickup_id} = req.body;
        
        sequelize.query(`
            INSERT INTO orders(customer_name, main_dish, side_dish, drink_id, pickup_id, togo)
            VALUES('${name}', '${main_dish}', '${side_dish}', ${drink_id}, ${pickup_id}, '${togo}');
        `).then (dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err));
    },

    deleteOrder: (req, res) => {
        const {id} = req.params;

        // console.log(req.params)
        sequelize.query(`
            DELETE
            FROM orders
            WHERE id = ${id};
        `).then (dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err));
    },

    getOrders: (req, res) => {

        // console.log(req.body)
        sequelize.query(`
            SELECT orders.id AS order_number, customer_name, main_dish, side_dish, drink, pick_up, togo
            FROM orders
            JOIN drink
            ON drink.id = drink_id
            JOIN pickup
            ON pickup.id = pickup_id
            ORDER BY pick_up
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err));
    }
};
