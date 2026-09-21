GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("twilightenergyconcentrator")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(2, 1, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BOILER);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("twilightenergyconcentrator", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("twilightenergyconcentrator")
    .appearanceBlock(() => new Block.getBlock("kubejs:machine_casing_tiled_dark_gray"))
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("aabbbaa", "accccca", "accccca", "accccca", "accccca", "accccca", "aabbbaa")
        .aisle("accccca", "cccbccc", "ccccccc", "ccccccc", "ccccccc", "cccbccc", "accccca")
        .aisle("bcccccb", "ccccccc", "cccdccc", "ccdedcc", "cccdccc", "ccccccc", "bcccccb")
        .aisle("bcccccb", "cbcccbc", "ccdedcc", "ccececc", "ccdedcc", "cbcccbc", "bcccccb")
        .aisle("bcccccb", "ccccccc", "cccfccc", "ccdedcc", "cccdccc", "ccccccc", "bcccccb")
        .aisle("accccca", "cccbccc", "ccccccc", "ccccccc", "ccccccc", "cccbccc", "accccca")
        .aisle("aabbbaa", "accccca", "accccca", "accccca", "accccca", "accccca", "aabbbaa")
        .where("a", Predicates.blocks("kubejs:machine_casing_tiled_very_dark_gray"))
        .where("b", Predicates.blocks("gtceu:steel_frame"))
        .where("c", Predicates.blocks("minecraft:air"))
        .where("d", Predicates.blocks("kubejs:machine_casing_block_green")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where("e", Predicates.blocks("gregecore:solid_engine_intake"))
        .where("f", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      "kubejs:block/ctm/machine_casing_block_green",
      "gtceu:block/multiblock/distillation_tower"
    );
});