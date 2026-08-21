GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("auxillaryfiltrator")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COOLING);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("auxillaryfiltrator", "multiblock")
    .rotationState(RotationState.ALL)
    .recipeType('auxillaryfiltrator')
    .appearanceBlock(GTBlocks.CASING_INVAR_HEATPROOF)
    .recipeModifier(GTRecipeModifiers.OC_PERFECT)
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("bbbebbbebbb", "bbbebbbebbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb")
        .aisle("bbbgbbbgbbb", "bbbebbbebbb", "bbbebbbebbb", "bbbebbbebbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb")
        .aisle("beggbbbggeb", "beegbbbgeeb", "bbegbbbgebb", "bbegbbbgebb", "bbbgbbbgbbb", "bbbghhhgbbb", "bbbgihigbbb", "bbbiiiiibbb", "bbbicccibbb", "bbbiiiiibbb")
        .aisle("bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbhhhhhbbb", "bbbibbbibbb", "bbbibbbibbb", "bbbcbbbcbbb", "bbbicccibbb")
        .aisle("bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbfbbbbb", "bbbbbfbbbbb", "bbbbbfbbbbb", "bbbhhfhhbbb", "bbbhbfbhbbb", "bbbibfbibbb", "bbbcbbbcbbb", "bbbicccibbb")
        .aisle("bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbfbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbhhhhhbbb", "bbbibbbibbb", "bbbibbbibbb", "bbbcbbbcbbb", "bbbicccibbb")
        .aisle("beggbbbggeb", "beegbbbgeeb", "bbegbfbgebb", "bbegbbbgebb", "bbbgbbbgbbb", "bbbghhhgbbb", "bbbgihigbbb", "bbbiiiiibbb", "bbbicccibbb", "bbbiiiiibbb")
        .aisle("bbbgbbbgbbb", "bbbebbbebbb", "bbbebfbebbb", "bbbebbbebbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb")
        .aisle("bbbebbbebbb", "bbbebbbebbb", "bbbbbfbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb")
        .aisle("bbbbbbbbbbb", "bbbbbbbbbbb", "bfffffffffb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb")
        .aisle("aaabaaabaaa", "acabacabaca", "afabafabafa", "aaabaaabaaa", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb")
        .aisle("adabadabada", "cbcbcbcbcbc", "cbcbcbcbcbc", "adabadabada", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb")
        .aisle("aaabajabaaa", "acabacabaca", "acabacabaca", "aaabaaabaaa", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb")
        .where("a", Predicates.blocks("gtceu:heatproof_machine_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))
        .where("b", Predicates.any())
        .where("c", Predicates.blocks("gtceu:fusion_glass"))
        .where("d", Predicates.blocks("gregecore:vibration_engine_intake"))
        .where("e", Predicates.blocks("gtceu:stainless_steel_frame"))
        .where("f", Predicates.blocks("gtceu:ptfe_pipe_casing"))
        .where("g", Predicates.blocks("gtceu:nonconducting_casing"))
        .where("h", Predicates.blocks("kubejs:machine_casing_tiled_dark_gray"))
        .where("i", Predicates.blocks("gtceu:shock_proof_cutting_casing"))
        .where("j", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      'gtceu:block/casings/solid/machine_casing_heatproof',
      'gtceu:block/multiblock/distillation_tower'
    );
});
