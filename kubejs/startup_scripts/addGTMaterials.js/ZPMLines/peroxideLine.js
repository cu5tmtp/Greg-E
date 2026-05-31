GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('anthraquinone')
        .gas()
        .color(0x8b8974)
        .formula('C14H8O2')
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('anthracene')
        .gas()
        .color(0x807f80)
        .formula('C14H10')
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('anthrahydroquinone')
        .gas()
        .color(0x8b7479)
        .formula('C14H10O2')
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('crude_hydrogen_peroxide')
        .gas()
        .color(0x4a5db5)
        .formula('H2O2')
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('waste_water')
        .liquid()
        .color(0x649b7b)
        .formula('H2OP')
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

});