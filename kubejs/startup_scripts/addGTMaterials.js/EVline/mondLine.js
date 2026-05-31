GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('nickel_oxide')
        .gas()
        .color(0x7aabc9)
        .formula('NiO2')
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('dirty_nickelish')
        .dust()
        .color(0x6a8395)
        .formula('Ni+')
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('nickel_tetracarbonyl')
        .gas()
        .color(0x6a8395)
        .formula('Ni(CO)4')
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('pure_nickelish')
        .dust()
        .color(0x6a8395)
        .formula('Ni')
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

});