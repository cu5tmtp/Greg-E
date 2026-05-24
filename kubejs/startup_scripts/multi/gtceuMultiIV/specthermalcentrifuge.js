GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("specthermalcentrifuge")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.MIXER);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("specthermalcentrifuge", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("specthermalcentrifuge")
    .appearanceBlock(GCYMBlocks.CASING_VIBRATION_SAFE)
    .recipeModifiers(GTRecipeModifiers.OC_PERFECT)
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("hhhhh", "bcccb", "bcccb", "bcccb", "bcccb", "ddddd", "ddddd")
        .aisle("hccch", "cdddc", "cdedc", "cdddc", "cdedc", "ddddd", "ddddd")
        .aisle("hccch", "cdfdc", "cefec", "cdfdc", "cefec", "cdfdc", "dcccd")
        .aisle("hccch", "cdddc", "cdedc", "cdddc", "cdedc", "ddddd", "ddddd")
        .aisle("hhihh", "bcccb", "bcccb", "bcccb", "bcccb", "ddddd", "ddddd")
        .where("b", Predicates.blocks("gtceu:stainless_steel_frame"))
        .where("c", Predicates.blocks("gtceu:heatproof_machine_casing"))
        .where("d", Predicates.any())
        .where("e", Predicates.blocks("gtceu:invar_frame"))
        .where("f", Predicates.blocks("gtceu:steel_pipe_casing"))
        .where("h", Predicates.blocks("gtceu:solid_machine_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))
        .where("i", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      "gtceu:block/casings/solid/machine_casing_solid_steel",
      "gtceu:block/multiblock/distillation_tower"
    );
});