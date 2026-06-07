GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('forge_smoke')
        .fluid()
        .color(0x7e8180)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('imitation_witherite')
        .ingot()
        .color(0x7e8180)
        .formula('We-')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    
    event.create('witherite_wire')
        .ingot()
        .color(0x7e8180)
        .formula('We')
        .cableProperties(GTValues.VA[GTValues.LV], 4, 2, false)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('abyssal_air')
        .fluid()
        .color(0x7f4191)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('abyssal_goo')
        .fluid()
        .color(0x7f4191)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('abyssal_wire')
        .ingot()
        .color(0x7f4191)
        .cableProperties(GTValues.VA[GTValues.MV], 8, 2, false)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

})