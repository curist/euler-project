The Euler Project
========================

This is a small nodejs script that holds answers for the [Euler Project](http://projecteuler.net/)

Simply run

    nodemon euler_ans.js

Will open port 4000 for incoming connections, and give the answer for given question number.

All problem solve scripts are named as: ['euler' + ProblemNumer + '.js']  
They are exported as nodejs module, and should have a method called 'answer'.

Inatallation
========================

    sudo apt-get install libgmp3-dev
    npm install -g nodemon underscore underscore.string bigint
