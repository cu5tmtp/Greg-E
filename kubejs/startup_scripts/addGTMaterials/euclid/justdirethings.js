GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('bio_welded_reinforced_delirium')
        .ingot()
        .color(0x0d371e)
        .formula('? + Dm2')
        .cableProperties(GTValues.VA[GTValues.MV], 64, 1, false)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('bio_welded_reinforced_kamenium')
        .ingot()
        .color(0x8d9729)
        .formula('? + Km+')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('bio_welded_supergrympl')
        .ingot()
        .color(0x3f4312)
        .formula('? + GRYMPL!')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FOIL)

    event.create('bio_welded_xynredar')
        .ingot()
        .color(0x061908)
        .formula('? + Xd3')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FINE_WIRE)

});