GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('aniline')
        .fluid()
        .formula('C6H5NH2')
        .color(0xd2e397)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('p_phenylenediamine')
        .fluid()
        .formula('C6H8N2')
        .color(0xe1e5e0)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('proto_p_xylene')
        .dust()
        .formula('C8H8')
        .color(0xe1e5e0)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('terephthalic_acid')
        .fluid()
        .formula('C8H6O4')
        .color(0xe1e5e0)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('phosgene')
        .fluid()
        .formula('COCl2')
        .color(0x237b69)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('terephthaloyl_chloride')
        .fluid()
        .formula('C6H4(COCl)2')
        .color(0xa6ad79)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('kevlar')
        .ingot()
        .formula('[-CO-C6H4-CO-NH-C6H4-NH-]n')
        .color(0xa6ad79)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_PLATE)

    //₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉

})