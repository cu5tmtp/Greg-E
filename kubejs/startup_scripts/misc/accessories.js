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

    event.create('damage_belt')
        .displayName('Belt of Striking')
        .maxStackSize(1)
        .glow(true)
        .tooltip('§7When equipped, grants +10 Attack Damage.')
        .tag("curios:belt")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute('minecraft:generic.attack_damage', 'belt_damage_bonus', 10.0, 'addition')
        );

    event.create('earring1')
        .displayName('Golden Earring')
        .maxStackSize(1)
        .tag("curios:earring")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute('minecraft:generic.max_health', 'earring_health_bonus', 5.0, 'addition')
        );

    event.create('earring2')
        .displayName('Feather Earring')
        .maxStackSize(1)
        .tag("curios:earring")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute('minecraft:generic.max_health', 'earring_health_bonus', 5.0, 'addition')
        );

    event.create('trinket1')
        .displayName('Plushie Bear of Reach')
        .maxStackSize(1)
        .tag("curios:trinket")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute('forge:reach_distance', 'reach_bonus', 1.0, 'addition')
        );

    event.create('trinket2')
        .displayName('Tesseract')
        .maxStackSize(1)
        .glow(true)
        .tag("curios:trinket")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute('minecraft:generic.armor', 'armor_percent_bonus', 0.25, 'multiply_total')
                .addAttribute('minecraft:generic.max_health', 'health_percent_bonus', 0.25, 'multiply_total')
        );

    event.create('recall_pendant')
        .displayName('Hearthstone')
        .maxStackSize(1)
        .glow(true)
        .tag('curios:necklace')
        .tooltip('§7Right click to teleport to your spawnpoint.');
})