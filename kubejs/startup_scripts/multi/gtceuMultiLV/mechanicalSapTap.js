GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("mechanical_sap_tap")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.CUT);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("mechanical_sap_tap", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("mechanical_sap_tap")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("ACA", "###", "#F#", "###")
        .aisle("ABA", "#E#", "FEF", "#F#")
        .aisle("CDC", "###", "#F#", "###")
        .where("A", Predicates.blocks("chisel_chipped_integration:factory_dotted_rusty_plate"))
        .where("B", Predicates.blocks("minecraft:dirt"))
        .where("C", Predicates.blocks(GTBlocks.MACHINE_CASING_LV.get())
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1)))  
        .where("D", Predicates.controller(Predicates.blocks(definition.get())))
        .where("E", Predicates.blocks("minecraft:oak_log"))
        .where("F", Predicates.blocks("minecraft:oak_leaves"))
        .where("#", Predicates.any())
    .build())
    .workableCasingModel(
      'kubejs:block/chisel/dots',
      "gtceu:block/multiblock/implosion_compressor"
    );
});
