GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('twilight_air')
        .fluid()
        .color(0xBF40BF)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('magic_gas')
        .gas()
        .color(0xCF9FFF)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('mana_mist')
        .gas()
        .color(0xE6E6FA)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('crystal_shards')
        .ore()
        .color(0xD8BFD8)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.NO_ORE_PROCESSING_TAB)

    event.create('energized_crystal_shards')
        .ore()
        .color(0xBDB5D5)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.NO_ORE_PROCESSING_TAB)

    event.create('pixie_grits')
        .dust()
        .color(0xDA70D6)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('pixie_dust')
        .dust()
        .color(0xBF40BF)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('pixie_fluid')
        .fluid()
        .color(0xBF40BF)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    

    //₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉

})