GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('moving_sand')
        .dust()
        .color(0xCBBD93)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

});