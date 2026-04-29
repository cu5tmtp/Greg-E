GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('liquid_synthetic_leather_base')
        .liquid()
        .formula("C₂H₃Cl")
        .color(0xE5E4D2)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('unfinished_artificial_leather')
        .ingot()
        .formula("C₂H₄O")
        .color(0xE5E4D2)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('artificial_leather')
        .ingot()
        .formula("C₂H₄O")
        .color(0xDCD7C9)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    //₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉

})