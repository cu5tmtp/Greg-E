GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('curiuum')
        .dust()
        .formula("Cm")
        .color(0xe1645f)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('lithiumsix')
        .dust()
        .formula("Li6")
        .color(0x949797)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    //₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉
});