//No mining ores !!!! >:(
BlockEvents.leftClicked(event => {

    const block = event.block
    const id = block.id.toString()

    if (id.startsWith('ad_astra:') || id.startsWith('ad_extendra:')) {
        return; 
    }

    if (id.startsWith('undergarden:')) {
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

//no ore drops for any mod apart from where it is needed >:(
LootJS.modifiers((event) => {
    let ignoredMods = ['undergarden', 'ad_astra', 'ad_extendra'];

    let ores = Ingredient.of('#forge:ores').itemIds;

    ores.forEach(id => {
        let modId = String(id).split(':')[0];

        if (!ignoredMods.includes(modId)) {
            event.addBlockLootModifier(id).removeLoot(Ingredient.all);
        }
    });
});

//no gt ore gen >:(
GTCEuServerEvents.oreVeins(event => {
    event.removeAll()
})