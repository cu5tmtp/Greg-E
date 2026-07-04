GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('troll_tooth')
        .dust()
        .formula("Tg2Ca4P2O4")
        .color(0xE5E4D2)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('purified_troll_tooth')
        .dust()
        .formula("Tg2Ca2P")
        .color(0xE5E4D2)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('troglodyum')
        .ingot()
        .formula("Tg")
        .color(0x808080)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

})