class Player{
    constructor(){
        this.index = null
        this.distance=0
        this.name= null
    }
    update(){
        var playerIndex = "Players/Player" + this.index
        database.ref(playerIndex).set({
            Name:this.name,
            Distance:this.distance
        })
    }
    updateCount(Count){
        database.ref('/').update({
            playerCount:Count
        })
    }
    getCount(){
      var countRef = database.ref("playerCount");  
      countRef.on("value", (data)=>{
        pCount = data.val();
      })
      console.log(pCount)

    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('Players');
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        })
        console.log(allPlayers);
    }
}