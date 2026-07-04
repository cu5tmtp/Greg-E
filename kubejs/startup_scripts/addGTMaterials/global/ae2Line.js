GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('refined_fluix')
        .ingot()
        .color(0x9a3cc3)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FRAME)

    event.create('enhanced_fluix')
        .ingot()
        .color(0xb429d6)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FRAME)

    event.create('end_certus_quartz')
        .gem()
        .color(0xb429d6)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FRAME)

    event.create('end_certus_quartz2')
        .ingot()
        .color(0xb429d6)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('venus_certus_quartz')
        .gem()
        .color(0xb06b4f)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FRAME)

    event.create('venus_certus_quartz2')
        .ingot()
        .color(0xb06b4f)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('magical_certus_quartz')
        .gem()
        .color(0x16e9ba)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FRAME)

    event.create('magical_certus_quartz2')
        .ingot()
        .color(0x16e9ba)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)


    //₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉

})