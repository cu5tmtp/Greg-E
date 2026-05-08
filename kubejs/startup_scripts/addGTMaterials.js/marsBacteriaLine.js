GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('crushed_mars_stone')
        .dust()
        .formula("(FeO₂) + (ClO₄)")
        .color(0xE97451)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)


    event.create('culture_medium')
        .fluid()
        .formula("C₉H₅O₄N₂")
        .color(0xFAD5A5)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('extreme_medium')
        .fluid()
        .formula("C₁₀H₂₀O₁₀N₂P")
        .color(0xFAD5A5)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('mars_air')
        .fluid()
        .formula("CO₂N₂Ar")
        .color(0xF2D2BD)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('mars_bacteria')
        .fluid()
        .formula("CH₁.₈O₀.₅N₀.₂Fe₀.₀₁")
        .color(0xF89880)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    //₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉
});