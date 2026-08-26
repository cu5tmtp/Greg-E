GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('spacetime')
        .fluid()
        .color(0x7753ac)
        .formula('۞')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('')
        .dust()
        .color(0x7753ac)
        .formula('۞')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

});