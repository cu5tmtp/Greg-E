GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('delirium')
        .ore()
        .color(0x626361)
        .blastTemp(3700)
        .formula('Dm')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.NO_ORE_PROCESSING_TAB)

});