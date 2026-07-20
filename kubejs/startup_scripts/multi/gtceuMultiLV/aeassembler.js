GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {

  event
    .create("aeassembler")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 3, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("aeassembler", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("aeassembler")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifier(GTRecipeModifiers.OC_PERFECT)
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("aaaaa", "accca", "aaaaa")
        .aisle("accca", "cdddc", "accca")
        .aisle("aacaa", "aadaa", "aacaa")
        .aisle("baaab", "baEab", "baaab")
        .where("a", Predicates.blocks("kubejs:machine_casing_tiled_very_dark_gray")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
        .where("b", Predicates.any())
        .where("c", Predicates.blocks("kubejs:machine_casing_block_purple"))
        .where("d", Predicates.blocks("gtceu:steel_frame"))
        .where("E", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      'kubejs:block/ctm/machine_casing_tiled_very_dark_gray',
      "gtceu:block/machines/circuit_assembler"
    );

});
