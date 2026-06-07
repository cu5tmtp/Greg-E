StartupEvents.registry('item', event => {
    event.create('strength_ring')
        .displayName('Ring Of Strength')
        .maxStackSize(1)
        .glow(true)
        .tooltip('§7When equipped, grants Strength II.')
        .tag("curios:ring") 
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { 
                    let entity = slotContext.entity()
                    if (entity.age % 200 === 0) {
                        entity.potionEffects.add('minecraft:strength', 220, 1, false, false)
                    }
                })
        );

    event.create('regen_ring')
        .displayName('Ring Of Regeneration')
        .maxStackSize(1)
        .glow(true)
        .tooltip('§7When equipped, grants Regeneration II.')
        .tag("curios:ring") 
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { 
                    let entity = slotContext.entity()
                    if (entity.age % 200 === 0) {
                        entity.potionEffects.add('minecraft:regeneration', 220, 1, false, false)
                    }
                })
        );

    event.create('resist_bracelet')
        .displayName('Bracelet Of Resistance')
        .maxStackSize(1)
        .glow(true)
        .tooltip('§7When equipped, grants Resistance II.')
        .tag("curios:bracelet") 
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { 
                    let entity = slotContext.entity()
                    if (entity.age % 200 === 0) {
                        entity.potionEffects.add('minecraft:resistance', 220, 1, false, false)
                    }
                })
    );

    event.create('recall_pendant')
        .displayName('Hearthstone')
        .maxStackSize(1)
        .glow(true)
        .tag('curios:necklace')
        .tooltip('§7Right click to teleport to your spawnpoint.');
})