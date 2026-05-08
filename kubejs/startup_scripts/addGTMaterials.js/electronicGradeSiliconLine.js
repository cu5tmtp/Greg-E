GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('metallurgical_grade_silicon')
        .ingot()
        .formula('MG-Si')
        .color(0xA9A9A9)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('trichlorosilane')
        .fluid()
        .formula('HCl₃Si')
        .color(0x808080)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('distilled_trichlorosilane')
        .gas()
        .formula('HCl₃Si')
        .color(0x808080)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('polycrystalline_silicon')
        .dust()
        .gas()
        .formula('HCl₃Si')
        .color(0xD3D3D3)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('electronic_grade_silicon')
        .ingot()
        .formula('EG-Si')
        .color(0xA9A9A9)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_PLATE)

    event.create('shiny_electronic_grade_silicon')
        .formula('EG-Si')
        .color(0xD3D3D3)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_PLATE)

    //₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉

})