GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('fracturedsludge')
        .liquid()
        .color(0x545753)
        .formula('ꈋ')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('fracturedsludgedust')
        .dust()
        .liquid()
        .color(0xe5581a)
        .formula('ꈋ')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('fracturedfossilmaterial')
        .liquid()
        .ingot()
        .color(0xa4ab64)
        .formula('ꃼ')
        .cableProperties(GTValues.VA[GTValues.MV], 64, 1, false)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FRAME)

});