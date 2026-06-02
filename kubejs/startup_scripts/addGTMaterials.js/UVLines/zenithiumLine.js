GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('zenithium')
        .ore()
        .formula('Zt')
        .color(0x252726)
        .blastTemp(3700)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FOIL)

    event.create('zenithium_slurry')
        .dust()
        .gas()
        .formula('(ZtFe2P3)+(H2SO4)')
        .color(0x434644)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('niobium_zenithium')
        .gas()
        .formula('Nb2Zt')
        .color(0x676c69)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('niobium_coated')
        .formula('Zt+(Nb2Zt)')
        .color(0x252726)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FOIL)

})