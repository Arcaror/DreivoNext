class Cache {
    

    cacheWinnersNextTime = false
    cacheRankingNextTime = false
    cachePredictionNextTime = false
    
    prediction = {}
    winners = {}
    ranking = {}
    
    Cache(){

        console.log('Cache is constructed')
    }

    
}
const objCache = new Cache()

module.exports = objCache