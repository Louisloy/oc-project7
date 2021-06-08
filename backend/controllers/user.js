const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require("../models/user");

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(
      (hash) => {
        const user = new User({
          fullname : req.body.fullname,
          email: req.body.email,
          password: hash
        });
        user.save().then(
          () => {
            res.status(201).json({
              message: 'User added successfully!'
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              message: error
              //error: error
            });
          }
        );
      }
    );
  };

  exports.login = (req, res, next) => {
    User.findOne({where: { email: req.body.email }}).then(

      (user) => {
        if (!user) {
          return res.status(401).json({
            error: new Error('User not found!')
          });
        }
        bcrypt.compare(req.body.password, user.password).then(
          (valid) => {
            if (!valid) {
              return res.status(401).json({
                error: new Error('Incorrect password!')
              });
            }
            const token = jwt.sign(
              { userId: user.id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' });
            res.status(200).json({
              userId: user.id,
              token: token,
              user: user
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
    );
  }
  exports.deleteUser = (req, res, next) => {
    User.findOne({where: { id: req.params.id }}).then(

      (user) => {
        
          user.destroy().then(
            () => {
              res.status(200).json({
                message: 'Deleted!'
              });
            }
          ).catch(
            (error) => {
              res.status(400).json({
                error: error
              });
            }
          );
        
      }
    );
  };