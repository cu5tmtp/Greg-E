LootJS.modifiers(event => {
    event
        .addLootTableModifier("minecraft:chests/end_city_treasure")
        .addLoot(LootEntry.of("gtceu:end_certus_quartz_gem"))

    event
        .addLootTypeModifier(LootType.ENTITY)
        .randomChance(0.00001)
        .addLoot("kubejs:mirrorofkalandra")
})
