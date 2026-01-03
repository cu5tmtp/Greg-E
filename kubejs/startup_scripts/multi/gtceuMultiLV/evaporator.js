GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {

  event
    .create("evaporator")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_CRACKING, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BOILER);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("evaporator", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("evaporator")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("CCC", "BBB", "BBB", "AAA")
        .aisle("CAC", "B#B", "B#B", "AAA")
        .aisle("CEC", "BBB", "BBB", "AAA")
        .where("A", Predicates.blocks("chisel_chipped_integration:technical_exhaust_plating"))
        .where("B", Predicates.blocks("minecraft:glass"))
        .where("C", Predicates.blocks("chisel_chipped_integration:technical_exhaust_plating")
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1)))  
        .where("E", Predicates.controller(Predicates.blocks(definition.get())))
        .where("#", Predicates.any())
    .build())
    .workableCasingModel(
      'kubejs:block/chisel/exhaustplating',
      "gtceu:block/multiblock/large_chemical_reactor"
    );

});
