GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('kamenium')
        .gem()
        .color(0x1aa3e5)
        .formula('Km')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('reinforced_kamenium')
        .ingot()
        .color(0xe2e31c)
        .blastTemp(3700)
        .formula('Km+')
        .cableProperties(GTValues.VA[GTValues.UIV], 64, 0, false)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_PLATE)

});