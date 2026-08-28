GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('xynred')
        .liquid()
        .ore()
        .color(0x20df75)
        .formula('Xd')
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.NO_ORE_PROCESSING_TAB)

    event.create('xynred_lava')
        .liquid()
        .color(0x127c41)
        .formula('Xd')
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('xynred_mob')
        .liquid()
        .color(0x0b4f29)
        .formula('Xd')
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('xynred_water')
        .liquid()
        .color(0x19ae5b)
        .formula('Xd')
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('xynredder')
        .ingot()
        .color(0x76ebaa)
        .formula('Xd2')
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FINE_WIRE)

    event.create('xynredar')
        .ingot()
        .color(0x127e42)
        .formula('Xd3')
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)


});