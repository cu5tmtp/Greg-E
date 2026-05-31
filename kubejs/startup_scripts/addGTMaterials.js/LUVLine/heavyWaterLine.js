GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('semi_heavy_water')
        .fluid()
        .formula('HDO')
        .color(0x3018ac)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('depleted_hydrogen_sulfide')
        .gas()
        .formula('H2S')
        .color(0xba8445)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('heavy_water')
        .fluid()
        .formula('D2O')
        .color(0x3018ac)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

})