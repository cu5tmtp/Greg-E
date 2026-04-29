GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("analyzator")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_RESEARCH_STATION_2, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.SCIENCE);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("analyzator", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("analyzator")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.BATCH_MODE])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle('BJJJJJB', 'BIIIIIB', 'BIIIIIB', 'BIIIIIB', 'BIIIIIB', 'BBBBBBB')
        .aisle('JAAAAAJ', 'I#####I', 'I#####I', 'I#####I', 'I#####I', 'BBBBBBB')
        .aisle('JAEEEAJ', 'I#####I', 'I#####I', 'I#####I', 'I#####I', 'BBBBBBB')
        .aisle('JAEEEAJ', 'I##F##I', 'I#####I', 'I##H##I', 'I##D##I', 'BBBBBBB')
        .aisle('JAEEEAJ', 'I#####I', 'I#####I', 'I#####I', 'I##D##I', 'BBBBBBB')
        .aisle('JAAAAAJ', 'I#D###I', 'I#D###I', 'I#D###I', 'I#DD##I', 'BBBBBBB')
        .aisle('BJJKJJB', 'BIBGBIB', 'BIBGBIB', 'BIBBBIB', 'BICCCIB', 'BBBBBBB')
        .where("A", Predicates.blocks('chisel_chipped_integration:factory_wireframe'))
        .where("B", Predicates.blocks('chisel_chipped_integration:laboratory_large_tiles'))
        .where("C", Predicates.blocks('chisel_chipped_integration:technical_malfunction_fan'))
        .where("D", Predicates.blocks('chisel_chipped_integration:technical_cables'))
        .where("E", Predicates.blocks('chisel_chipped_integration:technical_exhaust_plating'))
        .where("F", Predicates.blocks('minecraft:smithing_table'))
        .where("G", Predicates.blocks('minecraft:iron_door'))
        .where("H", Predicates.blocks('kubejs:researchlens'))
        .where("I", Predicates.blocks('connectedglass:clear_glass'))
        .where("J", Predicates.blocks('chisel_chipped_integration:factory_wireframe')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2))  
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where("K", Predicates.controller(Predicates.blocks(definition.get())))
        .where('#',Predicates.any())
    .build())
    .workableCasingModel(
      "kubejs:block/chisel/wireframe",
      "gtceu:block/multiblock/fusion_reactor"
    );
});