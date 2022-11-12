import * as mqtt from "mqtt"
const clientId = 'mqttjs_' + Math.random().toString(8).substr(2, 4)
// const client = mqtt.connect("mqtt://127.0.0.1:1883", { clientId: clientId, clean: false });
const client = mqtt.connect("mqtt://3.68.185.142:1883", { clientId: clientId, clean: false });

export const StartMQTT = () => {

    client.on("connect", function (connack) {

        client.subscribe("agri/#", (err, granted) => {
            if (err) {
                console.log(err, 'err');
            }
        })

        client.on('message', (topic, message, packet) => {
            // console.log(packet, packet.payload.toString());
            console.log("Recived Message: " + JSON.parse(message));
            console.log("Topic: " + topic);
            const deviceId = topic.split('/')[1]
            console.log("Device ID: " + deviceId)
        })
    })

    client.on("error", function (err) {
        console.log("Error: " + err)
        if (err.code == "ENOTFOUND") {
            console.log("Network error, make sure you have an active internet connection")
        }
    })

    client.on("close", function () {
        console.log("Connection closed by client")
    })

    client.on("reconnect", function () {
        console.log("Client trying a reconnection")
    })

    client.on("offline", function () {
        console.log("Client is currently offline")
    })

}

export const PublishMessage = (gameId, playerId, message) => {
    client.publish(`game/com/${gameId}`, JSON.stringify({ message, playerId }), { qos: 0 }, (PacketCallback, err) => {
        if (err) {
            console.log(err, 'MQTT publish packet')
        }
    })
}