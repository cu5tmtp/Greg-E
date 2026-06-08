GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('forge_smoke')
        .fluid()
        .color(0x7e8180)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('imitation_witherite')
        .ingot()
        .color(0x7e8180)
        .formula('We-')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    
    event.create('witherite_wire')
        .ingot()
        .color(0x7e8180)
        .formula('We')
        .cableProperties(GTValues.VA[GTValues.LV], 4, 2, false)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('abyssal_air')
        .fluid()
        .color(0x7f4191)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('abyssal_goo')
        .fluid()
        .color(0x7f4191)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('abyssal_wire')
        .ingot()
        .color(0x7f4191)
        .cableProperties(GTValues.VA[GTValues.MV], 8, 2, false)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('ancient_metal_imitation')
        .ingot()
        .color(0xa29c10)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('impure_ancient_metal')
        .dust()
        .color(0x79801b)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('dirty_ancient_metal')
        .dust()
        .color(0x98981f)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('ancient_metal')
        .color(0xa29c10)
        .cableProperties(GTValues.VA[GTValues.HV], 12, 2, false)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('ignitium_imitation')
        .ingot()
        .color(0xd24a2d)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('ignitium_infused_lava')
        .fluid()
        .color(0xd78728)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('dirty_ignitium_lava')
        .fluid()
        .color(0xc58f3a)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('ignitium_wire')
        .color(0xd24a2d)
        .cableProperties(GTValues.VA[GTValues.EV], 16, 2, false)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('lava_battery_acid')
        .fluid()
        .color(0xd18b0f)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('enderium')
        .ingot()
        .color(0x387e67)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('enderium_imitation')
        .ingot()
        .color(0x43997d)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('enderium_air')
        .fluid()
        .color(0x77c3aa)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('dirty_enderium')
        .dust()
        .color(0x5ab698)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)


    

})