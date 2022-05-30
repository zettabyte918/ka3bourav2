function ServerStat(playerTracker) {
    this.playerTracker = playerTracker;
}

module.exports = ServerStat;

ServerStat.prototype.build = function (protocol) {
    var gameServer = this.playerTracker.gameServer;
    // Get server statistics
    var totalPlayers = 0;
    var alivePlayers = 0;
    var spectPlayers = 0;
	var robotPlayers = 0;
	var playerMinion = this.playerTracker.BotsNumber;
	var playerID = this.playerTracker.pID;
    for (var i = 0; i < gameServer.clients.length; i++) {
        var socket = gameServer.clients[i];
		if (socket.isConnected == null) {
            robotPlayers++;
        }
        if (socket == null || !socket.isConnected || socket.playerTracker.isMi)
            continue;
        totalPlayers++;
        if (socket.playerTracker.cells.length > 0)
            alivePlayers++;
        else
            spectPlayers++;
    }
    var obj = {
        'name': gameServer.config.serverName,
        'mode': gameServer.gameMode.name,
        'uptime': Math.round((gameServer.stepDateTime - gameServer.startTime) / 1000),
        'update': gameServer.updateTimeAvg.toFixed(3),
        'playersTotal': totalPlayers,
        'playersAlive': alivePlayers,
        'playersSpect': spectPlayers,
		'bots': robotPlayers,
		'minion': playerMinion,
		'playerID': playerID,
        'playersLimit': gameServer.config.serverMaxConnections
    };
    var json = JSON.stringify(obj);
    // Serialize
    var BinaryWriter = require("./BinaryWriter");
    var writer = new BinaryWriter();
    writer.writeUInt8(254);             // Message Id
    writer.writeStringZeroUtf8(json);   // JSON
    return writer.toBuffer();
	/*var writer = new BinaryWriter();
    writer.writeUInt8(255);             // Message Id
    writer.writeStringZeroUtf8(json);   // JSON
    return writer.toBuffer();*/
};
