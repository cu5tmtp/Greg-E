GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("giantreactionchamber")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.MIXER);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("giantreactionchamber", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("giantreactionchamber")
    .appearanceBlock(GCYMBlocks.CASING_VIBRATION_SAFE)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
          .aisle("aaaaaaaaa", "abbbbbbba", "abccbccba", "abcdddcba", "abcdcdcba", "aecdddcea", "aecccccea", "aeeeeeeea", "aaaaaaaaa")
          .aisle("aeeeeeeea", "bfffffffb", "bfffffffb", "bfffffffb", "bfffffffb", "efffffffe", "efffffffe", "efffffffe", "accebecca")
          .aisle("aebbbbbea", "bfffffffb", "cfffffffc", "cfffffffc", "cfffffffc", "cfffffffc", "cfffffffc", "efffffffe", "accebecca")
          .aisle("aebeeebea", "bffgggffb", "cffgggffc", "dffgggffd", "dffgggffd", "dffgggffd", "cffgggffc", "effgggffe", "aeeebeeea")
          .aisle("aebebebea", "bffghgffb", "bffghgffb", "dffghgffd", "cffghgffc", "dffghgffd", "cffghgffc", "effghgffe", "abbbebbba")
          .aisle("aebeeebea", "bffgggffb", "cffgggffc", "dffgggffd", "dffgggffd", "dffgggffd", "cffgggffc", "effgggffe", "aeeebeeea")
          .aisle("aebbbbbea", "bfffffffb", "cfffffffc", "cfffffffc", "cfffffffc", "cfffffffc", "cfffffffc", "efffffffe", "accebecca")
          .aisle("aeeeeeeea", "bfffffffb", "bfffffffb", "bfffffffb", "bfffffffb", "efffffffe", "efffffffe", "efffffffe", "accebecca")
          .aisle("aaaaiaaaa", "abbbbbbba", "abccbccba", "abcdddcba", "abcdcdcba", "aecdddcea", "aecccccea", "aeeeeeeea", "aaaaaaaaa")
          .where("a", Predicates.blocks("kubejs:machine_casing_tiled_dark_gray")
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))
          .where("b", Predicates.blocks("kubejs:machine_casing_tiled_light_gray"))
          .where("c", Predicates.blocks("gtceu:laminated_glass"))
          .where("d", Predicates.blocks("kubejs:machine_casing_block_magenta"))
          .where("e", Predicates.blocks("kubejs:machine_casing_block_purple"))
          .where("f", Predicates.any())
          .where("g", Predicates.blocks("gtceu:tempered_glass"))
          .where("h", Predicates.blocks("kubejs:machine_casing_tiled_gray"))
          .where("i", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      "kubejs:block/ctm/machine_casing_tiled_dark_gray",
      "gtceu:block/multiblock/distillation_tower"
    );
});