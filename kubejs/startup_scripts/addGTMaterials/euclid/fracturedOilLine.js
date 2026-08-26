GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('fracturedoil')
        .liquid()
        .color(0x222322)
        .formula('ꌇ')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('fracturedheavyoil')
        .liquid()
        .color(0x4d4f4c)
        .formula('ꐦ')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('fracturedlightoil')
        .liquid()
        .color(0x797d77)
        .formula('ꐠ')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    
    event.create('fracturednaphta')
        .liquid()
        .color(0x525c2a)
        .formula('ꐡ')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('purifiedfracturedheavyoil')
        .liquid()
        .color(0x584959)
        .formula('⌺')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('fracturedlubricantbase')
        .liquid()
        .color(0x6d356f)
        .formula('⌻')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('fracturedlubricant')
        .gas()
        .color(0x9e1c97)
        .formula('⌹')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

});