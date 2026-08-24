GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('high_temp_redstone')
        .ingot()
        .blastTemp(3700)
        .color(0xc53a3a)
        .formula('Si(FeS2)5(CrAl2O3)Hg3')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('redrockium')
        .ingot()
        .blastTemp(3700)
        .color(0xd94126)
        .formula('Si(FeS)3(CrAl2O3)Hg1')
        .cableProperties(GTValues.VA[GTValues.MV], 64, 1, false)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('redsediment')
        .ingot()
        .liquid()
        .blastTemp(3700)
        .color(0xe8172c)
        .formula('Si(FeS3)4(Cr2Al2O4)Hg5')
        .fluidPipeProperties(125000, 60000, true, true, true, true)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

});