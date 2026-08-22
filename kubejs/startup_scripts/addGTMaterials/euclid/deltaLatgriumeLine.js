GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('delta_latgrium')
        .ore()
        .liquid()
        .color(0xe01fdf)
        .formula('Δ - Lg')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.NO_ORE_PROCESSING_TAB)

    event.create('particle_nu')
        .dust()
        .color(0x8428d7)
        .formula('v')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('element_356')
        .ingot()
        .blastTemp(3700)
        .color(0x9156a9)
        .formula('?356')
        .cableProperties(GTValues.VA[GTValues.UIV], 64, 0, true)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('latgrium_oxide')
        .gas()
        .color(0xc08b3f)
        .formula('LgO')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('latgrium')
        .ingot()
        .fluid()
        .color(0x83ba45)
        .formula('Lg')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

});