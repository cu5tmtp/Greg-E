GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("gasminer")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPRESSOR);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("gasminer", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("gasminer")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("hhhhh", "bcacb", "bcacb", "bcccb", "bcccb", "ccccc", "ccccc", "ccccc", "ccccc", "ccccc", "ccccc")
        .aisle("haaah", "ccccc", "ccccc", "ccacc", "ccacc", "cbcbc", "cbcbc", "ccccc", "ccccc", "ccccc", "ccccc")
        .aisle("hadah", "aceca", "aceca", "cafac", "cafac", "ccbcc", "ccbcc", "ccbcc", "ccbcc", "ccbcc", "ccbcc")
        .aisle("haaah", "ccccc", "ccccc", "ccacc", "ccacc", "cbcbc", "cbcbc", "ccccc", "ccccc", "ccccc", "ccccc")
        .aisle("hhghh", "bcacb", "bcacb", "bcccb", "bcccb", "ccccc", "ccccc", "ccccc", "ccccc", "ccccc", "ccccc")
        .where("a", Predicates.blocks("gtceu:clean_machine_casing"))
        .where("b", Predicates.blocks("gtceu:stainless_steel_frame"))
        .where("c", Predicates.any())
        .where("d", Predicates.blocks("gtceu:stainless_steel_gearbox"))
        .where("e", Predicates.blocks("minecraft:iron_bars"))
        .where("f", Predicates.blocks("gtceu:stainless_steel_block"))
        .where('g', Predicates.controller(Predicates.blocks(definition.get())))
        .where('h', Predicates.blocks("gtceu:stainless_steel_frame")
              .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
              .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))  
              .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1)) 
              .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1)) 
              .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1)))  
    .build())
    .workableCasingModel(
      'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
      "gtceu:block/multiblock/large_miner"
    );
});