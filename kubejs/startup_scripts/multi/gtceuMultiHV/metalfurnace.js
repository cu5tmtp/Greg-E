GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("metalfurnace")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("metalfurnace", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("metalfurnace")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle('CCC', 'AAA', 'AAA')
        .aisle('CBC', 'A#A', 'AEA')
        .aisle('CDC', 'AAA', 'AAA')
        .where("A", Predicates.blocks('chisel_chipped_integration:factory_slighly_rusty_plate'))
        .where('B', Predicates.blocks('kubejs:heatingel'))   
        .where('C', Predicates.blocks(GTBlocks.FIREBOX_STEEL.get())
              .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
              .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))  
              .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
              .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))  
              .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(2).setPreviewCount(1))
              .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1)))  
        .where('D', Predicates.controller(Predicates.blocks(definition.get())))
        .where('E', Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1).setPreviewCount(1))
        .where('#', Predicates.any())
    .build())
    .workableCasingModel(
      "gtceu:block/casings/firebox/machine_casing_firebox_steel",
      "gtceu:block/multiblock/distillation_tower"
    );
});