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
        
        const {name, main_dish, side_dish, drink_id, is_togo, pickup_id} = req.body;
        
        sequelize.query(`
            INSERT INTO orders(customer_name, main_dish, side_dish, drink_id, is_togo, pickup_id)
            VALUES('${name}', '${main_dish}', '${side_dish}', ${drink_id}, ${is_togo}, ${pickup_id});
        `).then (dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err));
                 
    },

    deleteOrder: (req, res) => {
        const {id} = req.params;
        const idx = orders.findIndex(orders => orders.id === +id);
        if (idx >= 0){
            orders.splice(idx, 1);
            res.status(200).send(orders);
        } else {
            res.sendStatus(404);
        }
    },

    getOrders: (req, res) => {
        res.status(200).send(orders);
    }
};
