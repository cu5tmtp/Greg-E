GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('demonic_air')
        .gas()
        .color(0x341D22)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('demonic_gas')
        .gas()
        .color(0x3A1717)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('dirty_demonite')
        .dust()
        .formula('DmFe₃S₂')
        .color(0x35E0E9)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('pure_demonite')
        .ingot()
        .formula('Dm')
        .color(0x81DDFD)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('coated_demonite')
        .ingot()
        .formula('Dm+')
        .color(0x73B9F7)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FINE_WIRE)


    //₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉
});