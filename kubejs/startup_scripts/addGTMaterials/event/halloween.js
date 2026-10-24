GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('starch')
        .dust()
        .color(0xa7adaa)
        .formula('(C6H10O5)n')
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('sucrose')
        .dust()
        .color(0xa7adaa)
        .formula('C12H22O11')
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('fructose')
        .dust()
        .color(0xa7adaa)
        .formula('C6H12O6')
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('lactose')
        .dust()
        .color(0xa7adaa)
        .formula('C12H22O11')
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('milk_powder')
        .dust()
        .color(0xa7adaa)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('watery_glucose_syrup')
        .fluid()
        .color(0x8d9491)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('glucose_syrup')
        .fluid()
        .color(0x8d9491)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('molasses')
        .fluid()
        .color(0x8e5d16)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('caramel')
        .fluid()
        .color(0xaf721b)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('chocolate_milk')
        .fluid()
        .color(0x927416)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('nougat')
        .fluid()
        .color(0xcda670)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('eggwhite')
        .fluid()
        .color(0xcbcccc)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('eggyolk')
        .fluid()
        .color(0xd5c22a)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

        
});