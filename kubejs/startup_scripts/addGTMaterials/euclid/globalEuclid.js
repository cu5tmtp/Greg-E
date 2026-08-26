GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('carcosa')
        .dust()
        .color(0x1657a0)
        .formula('C2 + ?')
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

});