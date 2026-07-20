GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("transformator")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPRESSOR);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("transformator", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("transformator")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle('DDD', 'AAA', 'AAA')
        .aisle('DCD', 'A#A', 'A#A')
        .aisle('DCD', 'A#A', 'A#A')
        .aisle('DED', 'AAA', 'BBB')
        .where("A", Predicates.blocks('kubejs:machine_casing_tiled_gray'))
        .where('B', Predicates.blocks('chisel_chipped_integration:technical_malfunction_fan'))   
        .where('C', Predicates.blocks('kubejs:heatingel'))   
        .where('D', Predicates.blocks('kubejs:machine_casing_tiled_orange')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where('E', Predicates.controller(Predicates.blocks(definition.get())))
        .where('#', Predicates.any())
    .build())
    .workableCasingModel(
      "kubejs:block/ctm/machine_casing_tiled_orange",
      "gtceu:block/multiblock/distillation_tower"
    );
});