GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('vanilla_pod')
        .dust()
        .color(0x6E260E)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('impure_vanilla_extract')
        .fluid()
        .color(0x6E260E)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('vanilla_extract')
        .fluid()
        .color(0x6E260E)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

})