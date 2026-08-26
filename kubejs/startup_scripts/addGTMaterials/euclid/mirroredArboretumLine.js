GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('stabilizedarboretum')
        .ingot()
        .color(0x349f4c)
        .formula('2rbA')
        .cableProperties(GTValues.VA[GTValues.MV], 64, 1, false)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FINE_WIRE)
    
    event.create('spacetime')
        .fluid()
        .color(0x7753ac)
        .formula('۞')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('atomicmesh')
        .dust()
        .color(0x629d9a)
        .formula('☄')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('bindingdust')
        .dust()
        .color(0xafdc23)
        .formula('☊')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('antidestabilizant')
        .dust()
        .color(0xafdc23)
        .formula('⍎')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

});