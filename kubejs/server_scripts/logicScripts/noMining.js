//No mining ores !!!! >:(
BlockEvents.leftClicked(event => {

    const block = event.block
    if (block.hasTag('forge:ores/desh')){       
        return; 
    }

    if (block.hasTag('forge:ores')) {
        block.set('minecraft:air')
        event.player.tell({
            text: "The ancient skyblock gods say that ore mining is forbidden...",
            color: "gray",
            italic: true
        })
        event.cancel()
    }

})

