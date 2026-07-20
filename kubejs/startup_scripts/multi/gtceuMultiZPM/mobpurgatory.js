GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("mobpurgatory")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(1, 1, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BOILER);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("mobpurgatory", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("mobpurgatory")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers(GTRecipeModifiers.OC_PERFECT)
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("aaaaa", "abbba", "abbba", "abbba", "abbba", "aaaaa")
        .aisle("accca", "bdddb", "beeeb", "beeeb", "beeeb", "accca")
        .aisle("accca", "bdddb", "beeeb", "beeeb", "beeeb", "accca")
        .aisle("accca", "bdddb", "beeeb", "beeeb", "beeeb", "accca")
        .aisle("aafaa", "abbba", "abbba", "abbba", "abbba", "aaaaa")
        .where("a", Predicates.blocks("kubejs:machine_casing_tiled_very_dark_gray")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))
        .where("b", Predicates.blocks("gtceu:laminated_glass"))
        .where("c", Predicates.blocks("kubejs:machine_casing_tiled_red"))
        .where("d", Predicates.blocks("mob_grinding_utils:spikes"))
        .where("e", Predicates.any())
        .where("f", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      "kubejs:block/ctm/machine_casing_tiled_very_dark_gray",
      "gtceu:block/multiblock/distillation_tower"
    );
});