GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('retium')
        .ingot()
        .formula('Ri')
        .color(0xeb00ff)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_LONG_ROD)

    event.create('corelium')
        .ingot()
        .formula('Ci')
        .color(0x9f609a)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('syncrium')
        .ingot()
        .color(0x6ba659)
        .formula('Sync')
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_LONG_ROD)

    event.create('nectium')
        .ingot()
        .formula('Ne')
        .color(0x5ba47a)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

})