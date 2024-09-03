require('dotenv').config();

const fs = require('fs');
const Crypto = require('crypto');
const mqtt = require('mqtt');
const plantData = require('../models/plantData');
const box = require('../models/box');
const image = require('../models/image');
const plant = require('../models/plant');

const clientOptions = {
    host: process.env.MQTT_HOST,
    port: process.env.MQTT_PORT,
    username: process.env.MQTT_USERNAME,
    password: process.env.MQTT_PASSWORD,
    clientId: 'server' + Crypto.randomInt(1, 1001)
}

const imageFolder = './public-images';

var client = mqtt.connect(clientOptions);;

client.on('connect', function(connack) {

    subscribe('esp1/stateOfPlant');
    subscribe('esp1/lastCommand');
    subscribe('esp1/requestCurrentTime');
    subscribe('esp1/image');

});

function subscribe(topic) {
    client.subscribe(topic, function(error) {
        if (error) {
            console.log(error);
        }
    });
}

client.on('message', function(topic, payload, packet) {
    switch (topic) {
        case 'esp1/stateOfPlant':
            receiveStateOfPlant(payload);
            break;
        case 'esp1/lastCommand':
            receiveLastCommand(payload);
            break;
        case 'esp1/requestCurrentTime':
            receiveCurrentTime(payload)
            break;
        case 'esp1/image':
            receiveImage(payload)
            break;
        default:
            break;
    };
});

function receiveStateOfPlant(payload) {
    let values = payload.toString().split(' ');
    let newData = new plantData({
        date: getDateAndTime(),
        tempAir: values[0],
        tempWater: values[1],
        humidity: values[2],
        light: values[3],
        tds: values[4]
    });
    box.findOne({}, function(err, foundBox) {
        if (err) {
            console.log(err);
        } else {
            plant.findByIdAndUpdate({ _id: foundBox.plant }, { $push: { data: newData } }, function(err, succ) {
                if (err) {
                    console.log(err);
                } else {
                    newData.save().catch(function(err) {
                        console.log("Error while receiving state of plant. Possibly malformed MQTT payload. Ignoring.");
                    });
                }
            });
        }
    });
}

function receiveLastCommand(payload) {
    let command = payload.toString();
    box.findOneAndUpdate({}, { lastCommand: command }, function(err, succ) {
        if (err) {
            console.log(err);
        }
    });
}

function receiveCurrentTime(payload) {
    sendUpdateTime();
}

function receiveImage(payload) {
    if (!fs.existsSync(imageFolder)) {
        fs.mkdirSync(imageFolder);
    }
    fileName = Crypto.randomUUID();
    fs.writeFile(imageFolder + '/' + fileName + '.jpg', payload, { flag: 'w+' }, function(err) {
        if (err) {
            console.log(err);
        } else {
            let newImage = new image({
                date: getDateAndTime(),
                name: fileName,
                note: ''
            });
            box.findOneAndUpdate({}, { $push: { images: newImage } }, function(err, succ) {
                if (err) {
                    console.log(err);
                } else {
                    newImage.save().catch(function(err) {
                        console.log("Error while receiving image. Possibly malformed MQTT payload. Ignoring.");
                    });
                }
            });
        }
    });
}

function send(topic, message) {
    client.publish(topic, message, function(error) {
        if (error) {
            console.log(error);
        }
    });
}

function sendPlantProfile(plantProfile) {
    send('esp1/plantProfile', plantProfile.name + ' ' + plantProfile.minWaterTemp + ' ' + plantProfile.maxWaterTemp + ' ' + plantProfile.minAirTemp + ' ' + plantProfile.maxAirTemp + ' ' + plantProfile.minHumidity + ' ' + plantProfile.maxHumidity + ' ' + plantProfile.lightNeededPerDay + ' ' + plantProfile.minTdsWert + ' ' + plantProfile.maxTdsWert);
}

function sendUpdateTime() {
    send('esp1/updateTime', getDateAndTime());
}

function getDateAndTime() {
    return new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' });
}

module.exports = { sendPlantProfile };
