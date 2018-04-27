const express = require('express');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
const user = [`${client.user.tag}`];
console.warn('[READY', `Logged In As ${user}`)
});

client.on('message', async msg => {


});

client.on('debug', () => {
console.warn('[ERR]', `Found An Issue, Shutting Down And Rebooting`);
process.exit(1);
});
