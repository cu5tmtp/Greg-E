GTCEuStartupEvents.registry('gtceu:material', event => {

    GTMaterials.Copper.addFlags(GTMaterialFlags.GENERATE_SMALL_GEAR)
    GTMaterials.Naquadria.addFlags(GTMaterialFlags.GENERATE_SMALL_GEAR)

    event.create('sintercoke')
        .ingot()
        .formula("Ca₂Fe₂O₄")
        .color(0x818589).iconSet(GTMaterialIconSet.ROUGH)
        
});