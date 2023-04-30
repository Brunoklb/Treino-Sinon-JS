function isAlive(ping){
    const pingOneSucess = ping();
    const pingTwoSucess = ping();
    const pingThreeSucess =  ping();

    if(pingOneSucess && pingTwoSucess && pingThreeSucess){
        return true;
    }
    return false;
}

module.exports = isAlive;